import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Payload = Record<string, string>;

/**
 * Demo and call-request submissions.
 *  1. Emailed to MAIL_TO over SMTP (Hostinger Titan) when SMTP_* are set.
 *  2. Optionally forwarded to DEMO_WEBHOOK_URL.
 *  3. With neither configured, logged on the server so nothing is silently dropped in development.
 * The visitor sees success if at least one delivery route worked.
 */
export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // honeypot filled → silently accept
  if (body.company_website) return NextResponse.json({ ok: true });

  const { name, email, organization, phone, product, message } = body;
  const validEmail = !!email?.trim() && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  const validPhone = !!phone?.trim() && phone.replace(/\D/g, "").length >= 6;
  const isCall = product === "Call request";
  if (!name?.trim() || (isCall ? !validPhone && !validEmail : !validEmail)) {
    return NextResponse.json({ ok: false, error: "Name and a way to reach you are required." }, { status: 422 });
  }

  const payload = {
    source: "vivra.ai",
    receivedAt: new Date().toISOString(),
    name: name.trim().slice(0, 200),
    email: email?.trim().slice(0, 200) ?? "",
    organization: organization?.trim().slice(0, 200) ?? "",
    phone: phone?.trim().slice(0, 60) ?? "",
    product: (product ?? "General Vivra Inquiry").slice(0, 80),
    message: message?.trim().slice(0, 4000) ?? "",
  };

  let delivered = false;
  let attempted = false;

  // 1 — email
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;
  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    attempted = true;
    try {
      const port = Number(SMTP_PORT ?? 465);
      const transporter = nodemailer.createTransport({ host: SMTP_HOST, port, secure: port === 465, auth: { user: SMTP_USER, pass: SMTP_PASS } });
      const label = isCall ? "Call request" : `Demo request — ${payload.product}`;
      await transporter.sendMail({
        from: `"Vivra website" <${SMTP_USER}>`,
        to: MAIL_TO || SMTP_USER,
        replyTo: payload.email || undefined,
        subject: `[Vivra] ${label} from ${payload.name}`,
        text: toText(payload, label),
        html: toHtml(payload, label),
      });
      delivered = true;
    } catch (err) {
      console.error("[demo-request] email failed:", err instanceof Error ? err.message : err);
    }
  }

  // 2 — webhook
  const webhook = process.env.DEMO_WEBHOOK_URL;
  if (webhook) {
    attempted = true;
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(webhook.includes("hooks.slack.com") ? { text: toText(payload, `New request — ${payload.product}`) } : payload),
      });
      if (res.ok) delivered = true;
    } catch (err) {
      console.error("[demo-request] webhook failed:", err instanceof Error ? err.message : err);
    }
  }

  // 3 — nothing configured (development)
  if (!attempted) {
    console.log("[demo-request] (no SMTP/webhook configured)", JSON.stringify(payload));
    return NextResponse.json({ ok: true });
  }

  if (!delivered) {
    console.error("[demo-request] NOT DELIVERED", JSON.stringify(payload));
    return NextResponse.json({ ok: false }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}

function toText(p: Record<string, string>, title: string) {
  return [
    title,
    "",
    `Name: ${p.name}`,
    p.email && `Email: ${p.email}`,
    p.phone && `Phone: ${p.phone}`,
    p.organization && `Organization: ${p.organization}`,
    `Product: ${p.product}`,
    p.message && `\nMessage:\n${p.message}`,
    `\nReceived: ${p.receivedAt}`,
  ]
    .filter(Boolean)
    .join("\n");
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function toHtml(p: Record<string, string>, title: string) {
  const row = (k: string, v: string) => (v ? `<tr><td style="padding:6px 16px 6px 0;color:#666">${k}</td><td style="padding:6px 0"><b>${esc(v)}</b></td></tr>` : "");
  return `<div style="font-family:Arial,sans-serif;font-size:15px;color:#111">
<h2 style="margin:0 0 12px">${esc(title)}</h2>
<table style="border-collapse:collapse">${row("Name", p.name)}${row("Email", p.email)}${row("Phone", p.phone)}${row("Organization", p.organization)}${row("Product", p.product)}</table>
${p.message ? `<p style="margin:16px 0 4px;color:#666">Message</p><p style="margin:0;white-space:pre-wrap">${esc(p.message)}</p>` : ""}
<p style="margin-top:20px;color:#999;font-size:12px">Received ${esc(p.receivedAt)} via vivra.ai</p></div>`;
}
