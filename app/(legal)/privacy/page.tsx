import type { Metadata } from "next";
import { SITE } from "@/lib/constants/site";

export const metadata: Metadata = { title: "Privacy", alternates: { canonical: "/privacy" }, robots: { index: false } };

export default function PrivacyPage() {
  return (
    <>
      <h1 className="font-display t-title">Privacy</h1>
      <p className="t-lead mt-6">
        This page will hold Vivra&apos;s full privacy policy. Until it is published, questions about how we handle personal data — including
        demo requests submitted through this website — can be sent to{" "}
        <a href={`mailto:${SITE.email}`} className="text-primary underline underline-offset-4">
          {SITE.email}
        </a>
        .
      </p>
      <p className="t-body mt-6">
        Demo requests are used only to respond to your enquiry. Live translation sessions are not recorded unless the organiser chooses to keep a
        transcript.
      </p>
    </>
  );
}
