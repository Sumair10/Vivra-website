import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/Legal";
import { SITE } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Vivra collects, uses and protects personal information on vivra.ai and in its live translation services.",
  alternates: { canonical: "/privacy" },
};

const mail = (
  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
);

export default function PrivacyPage() {
  return (
    <LegalPage
      label="Privacy"
      title="Privacy Policy"
      intro="This policy explains what personal information Vivra collects through this website and our live translation services, why we collect it, and the choices you have. We have tried to keep it short and plain."
    >
      <LegalSection n={1} title="Who we are">
        <p>
          This website and the Vivra, Vivra Events and Vivra Mosque services are operated by {SITE.legalName}, based in {SITE.location} (&quot;Vivra&quot;,
          &quot;we&quot;, &quot;us&quot;). For any privacy question, write to {mail}.
        </p>
      </LegalSection>

      <LegalSection n={2} title="Information we collect">
        <p>
          <strong>Information you give us.</strong> When you submit a demo request, a call request or an email, we receive the details you enter:
          your name, email address, phone number, organisation, the product you are interested in and any message you write.
        </p>
        <p>
          <strong>Technical information.</strong> Like most websites, our hosting provider records standard server data when a page is requested,
          such as IP address, browser type, device type, pages visited and time. We use this to keep the site running and secure.
        </p>
        <p>
          <strong>Your theme choice.</strong> If you switch between light and dark mode, your browser stores that preference on your device so the
          site remembers it. It is not used to track you.
        </p>
        <p>
          We do not currently use advertising cookies or third party analytics on this website. If that changes, we will update this policy and
          ask for consent where the law requires it.
        </p>
      </LegalSection>

      <LegalSection n={3} title="Live translation sessions">
        <p>
          When an organiser runs a live translation session with Vivra, speech from the event is processed in real time so it can be translated and
          delivered to listeners. The organiser decides who joins and which languages are open.
        </p>
        <ul>
          <li>Audio and translations are used to deliver the session as it happens.</li>
          <li>Sessions are not kept as recordings by default. A transcript is kept only if the organiser chooses to keep one.</li>
          <li>Where speaker recognition is used, speakers provide a short voice sample so the system can tell who is speaking. The details are
            agreed with the organiser in the service agreement.</li>
        </ul>
        <p>
          If you attend an event that uses Vivra, the organiser is responsible for telling attendees how the session is used. Questions about a
          specific event should go to that organiser first.
        </p>
      </LegalSection>

      <LegalSection n={4} title="How we use information">
        <ul>
          <li>To reply to your enquiry, arrange demos and calls, and follow up on what you asked for.</li>
          <li>To provide, secure and improve the website and our services.</li>
          <li>To meet legal obligations and to protect our rights.</li>
        </ul>
        <p>We do not sell personal information.</p>
      </LegalSection>

      <LegalSection n={5} title="Who we share it with">
        <p>We share information only with service providers who help us run the website and the business, and only as needed for that purpose:</p>
        <ul>
          <li>Email and messaging providers, which deliver form submissions to our team.</li>
          <li>Website hosting and infrastructure providers.</li>
          <li>Technology providers that support the live translation service, under the terms of our agreements with them.</li>
          <li>Professional advisers, authorities or courts, where we are legally required to.</li>
        </ul>
        <p>Some of these providers operate outside the United Arab Emirates. Where information is transferred abroad, we take steps to protect it.</p>
      </LegalSection>

      <LegalSection n={6} title="How long we keep it">
        <p>
          We keep enquiry details for as long as we need them to handle your request and any follow up, and for a reasonable period afterwards. We
          then delete or anonymise them. Where the law requires us to keep records for longer, we keep them for that period.
        </p>
      </LegalSection>

      <LegalSection n={7} title="Security">
        <p>
          We use reasonable technical and organisational measures to protect personal information, including encrypted connections to this website
          and restricted access to enquiry emails. No online service can be guaranteed completely secure, so please avoid sending sensitive
          information through the contact forms.
        </p>
      </LegalSection>

      <LegalSection n={8} title="Your choices and rights">
        <p>Depending on where you live, you may have the right to:</p>
        <ul>
          <li>ask what personal information we hold about you and receive a copy;</li>
          <li>ask us to correct or delete it;</li>
          <li>object to, or ask us to limit, how we use it;</li>
          <li>withdraw consent where we rely on it.</li>
        </ul>
        <p>To use any of these rights, email {mail}. We may need to confirm your identity first, and we will reply within a reasonable time.</p>
      </LegalSection>

      <LegalSection n={9} title="Children">
        <p>This website is intended for organisations and adults. We do not knowingly collect personal information from children.</p>
      </LegalSection>

      <LegalSection n={10} title="Changes to this policy">
        <p>
          We may update this policy from time to time. The date at the top shows when it was last changed. If we make a significant change, we
          will say so on this website.
        </p>
      </LegalSection>

      <LegalSection n={11} title="Contact">
        <p>
          {SITE.legalName}, {SITE.location}. Email {mail} or call <a href={SITE.phoneHref}>{SITE.phone}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
