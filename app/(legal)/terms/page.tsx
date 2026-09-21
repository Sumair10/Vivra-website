import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/Legal";
import { SITE } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that apply to using the vivra.ai website and how they relate to Vivra's live translation services.",
  alternates: { canonical: "/terms" },
};

const mail = <a href={`mailto:${SITE.email}`}>{SITE.email}</a>;

export default function TermsPage() {
  return (
    <LegalPage
      label="Terms"
      title="Terms of Use"
      intro="These terms apply when you use the vivra.ai website. Using the site means you accept them. If you do not agree, please do not use it."
    >
      <LegalSection n={1} title="About these terms">
        <p>
          This website is operated by {SITE.legalName}, {SITE.location} (&quot;Vivra&quot;, &quot;we&quot;, &quot;us&quot;). These terms cover the website only. Use of
          Vivra, Vivra Events or Vivra Mosque as a live translation service is governed by a separate agreement or order with us. If there is a
          conflict, that agreement takes priority.
        </p>
      </LegalSection>

      <LegalSection n={2} title="Using the website">
        <p>You agree to use the website lawfully and not to:</p>
        <ul>
          <li>attempt to gain unauthorised access to the site, our systems or other users&apos; data;</li>
          <li>interfere with, overload or disrupt the site;</li>
          <li>copy, scrape or resell the content except as these terms allow;</li>
          <li>submit false, misleading or harmful information through our forms.</li>
        </ul>
      </LegalSection>

      <LegalSection n={3} title="Information on this site">
        <p>
          The content here is for general information about our products. We work to keep it accurate, but figures such as supported languages,
          translation delay and audience size describe typical use and may vary with the venue, network and audio conditions. Nothing on this site is
          a binding offer. Specifications and pricing are confirmed in writing.
        </p>
      </LegalSection>

      <LegalSection n={4} title="AI translation">
        <p>
          Vivra uses artificial intelligence to translate speech in real time. Automated translation can contain errors, may not capture every
          nuance, name or technical term, and depends on the quality of the audio. It is designed to help people follow what is being said. It is
          not a substitute for certified, legal or medical interpretation, and should not be relied on where an error could cause serious harm or
          where a professional interpreter is required.
        </p>
      </LegalSection>

      <LegalSection n={5} title="Intellectual property">
        <p>
          The Vivra name, logos, design, text, images and software are owned by or licensed to {SITE.legalName} and protected by intellectual
          property laws. You may view the site and share links to it. You may not use our names, logos or content for other purposes without our
          written permission.
        </p>
      </LegalSection>

      <LegalSection n={6} title="Enquiries you send us">
        <p>
          When you contact us through the site, you agree that the information you provide is accurate and that we may use it to respond to you, as
          described in our <a href="/privacy">Privacy Policy</a>.
        </p>
      </LegalSection>

      <LegalSection n={7} title="Links to other sites">
        <p>The site may link to third party websites. We do not control them and are not responsible for their content or practices.</p>
      </LegalSection>

      <LegalSection n={8} title="Availability and disclaimer">
        <p>
          We aim to keep the website available, but we do not guarantee it will be uninterrupted or error free. To the fullest extent permitted by
          law, the website is provided &quot;as is&quot; without warranties of any kind.
        </p>
      </LegalSection>

      <LegalSection n={9} title="Limit of liability">
        <p>
          To the fullest extent permitted by law, Vivra is not liable for any indirect or consequential loss, or for loss of profits, data or
          business, arising from your use of the website. Nothing in these terms limits liability that cannot lawfully be limited.
        </p>
      </LegalSection>

      <LegalSection n={10} title="Changes to these terms">
        <p>We may update these terms from time to time. The date at the top shows the latest version. Continuing to use the site after a change means you accept it.</p>
      </LegalSection>

      <LegalSection n={11} title="Governing law">
        <p>
          These terms are governed by the laws of the United Arab Emirates as applied in the Emirate of Dubai, and the courts of Dubai have
          jurisdiction over any dispute, unless a separate agreement with us says otherwise.
        </p>
      </LegalSection>

      <LegalSection n={12} title="Contact">
        <p>
          Questions about these terms: {mail}, or <a href={SITE.phoneHref}>{SITE.phone}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
