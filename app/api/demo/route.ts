import { NextResponse } from "next/server";

/**
 * Demo / contact requests.
 * Set DEMO_WEBHOOK_URL (e.g. a Slack incoming webhook, Zapier, or your CRM
 * endpoint) to forward submissions. Without it, requests are logged server-side
 * and still acknowledged so the form never dead-ends for a visitor.
 */
export async function POST(req: Request) {
  let body: Record<string, string>;
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
  // demo requests need an email; call requests can be reached by phone alone
  const isCall = product === "Call request";
  if (!name?.trim() || (isCall ? !validPhone && !validEmail : !validEmail)) {
    return NextResponse.json({ ok: false, error: "Name and a way to reach you are required." }, { status: 422 });
  }

  const payload = {
    source: "vivra.ai",
    receivedAt: new Date().toISOString(),
    name: name.trim(),
    email: email?.trim() ?? "",
    organization: organization?.trim() ?? "",
    phone: phone?.trim() ?? "",
    product: product ?? "General Vivra Inquiry",
    message: message?.trim() ?? "",
  };

  const webhook = process.env.DEMO_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(webhook.includes("hooks.slack.com") ? { text: formatSlack(payload) } : payload),
    });
    if (!res.ok) return NextResponse.json({ ok: false }, { status: 502 });
  } else {
    console.log("[demo-request]", JSON.stringify(payload));
  }
  return NextResponse.json({ ok: true });
}

function formatSlack(p: Record<string, string>) {
  return [
    `*New demo request — ${p.product}*`,
    `Name: ${p.name}`,
    `Email: ${p.email}`,
    p.organization && `Organization: ${p.organization}`,
    p.phone && `Phone: ${p.phone}`,
    p.message && `Message: ${p.message}`,
  ]
    .filter(Boolean)
    .join("\n");
}
