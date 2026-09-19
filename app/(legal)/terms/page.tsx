import type { Metadata } from "next";
import { SITE } from "@/lib/constants/site";

export const metadata: Metadata = { title: "Terms", alternates: { canonical: "/terms" }, robots: { index: false } };

export default function TermsPage() {
  return (
    <>
      <h1 className="font-display t-title">Terms</h1>
      <p className="t-lead mt-6">
        This page will hold Vivra&apos;s terms of service. Until it is published, contractual questions can be sent to{" "}
        <a href={`mailto:${SITE.email}`} className="text-primary underline underline-offset-4">
          {SITE.email}
        </a>
        .
      </p>
      <p className="t-body mt-6">{SITE.legalName}, {SITE.location}.</p>
    </>
  );
}
