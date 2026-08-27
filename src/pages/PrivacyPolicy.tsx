import { Seo } from "@/components/Seo";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Seo
        title="Privacy Policy | SpiceFitKitchen"
        description="How SpiceFitKitchen collects, uses, and protects your information, including our use of cookies and third-party advertising such as Google AdSense."
        path="/privacy-policy"
      />

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="font-heading">Privacy Policy</h1>
        <p>Last updated: August 2026</p>

        <p>
          At SpiceFitKitchen ("we", "us", or "our"), accessible from
          https://spicefitkitchen.com, your privacy is important to us. This
          Privacy Policy explains what information we collect, how we use it, and
          the choices you have. By using our website, you agree to the practices
          described here.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          <strong>Information you provide:</strong> When you subscribe to our
          newsletter or contact us, we may collect your name and email address.
        </p>
        <p>
          <strong>Information collected automatically:</strong> Like most
          websites, we automatically collect certain information when you visit,
          including your IP address, browser type, device information, pages
          visited, and the time and date of your visit. This is collected through
          cookies and similar technologies.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect to send newsletters you have
          requested, respond to your inquiries, understand how visitors use the
          site, improve our content and services, and display relevant
          advertising. We do not sell your personal information to third parties.
        </p>

        <h2>3. Cookies</h2>
        <p>
          Cookies are small text files stored on your device. We use cookies to
          remember your preferences, understand site usage, and serve relevant
          ads. You can disable cookies through your browser settings, though some
          parts of the site may not function properly as a result.
        </p>

        <h2>4. Advertising and Google AdSense</h2>
        <p>
          We may display advertising served by third-party advertising networks,
          including Google AdSense.
        </p>
        <ul>
          <li>
            Third-party vendors, including Google, use cookies to serve ads based
            on your prior visits to our website and other websites.
          </li>
          <li>
            Google's use of advertising cookies enables it and its partners to
            serve ads to you based on your visit to our site and/or other sites on
            the internet.
          </li>
          <li>
            You may opt out of personalized advertising by visiting{" "}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
              Google Ads Settings
            </a>
            . You can also opt out of third-party vendors' use of cookies for
            personalized advertising at{" "}
            <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
              www.aboutads.info
            </a>
            .
          </li>
        </ul>

        <h2>5. Analytics</h2>
        <p>
          We may use analytics services such as Google Analytics to understand how
          visitors interact with our website. These services may collect
          information such as pages visited and time spent on the site, in an
          aggregated and anonymized form, to help us improve.
        </p>

        <h2>6. Third-Party Links</h2>
        <p>
          Our website may contain links to other sites. We are not responsible for
          the privacy practices or content of those third-party websites, and we
          encourage you to read their privacy policies.
        </p>

        <h2>7. Children's Privacy</h2>
        <p>
          Our website is not directed to children under the age of 13, and we do
          not knowingly collect personal information from children. If you believe
          a child has provided us with personal information, please contact us and
          we will remove it.
        </p>

        <h2>8. Your Rights</h2>
        <p>
          Depending on your location, you may have the right to access, correct,
          or request deletion of your personal information, and to opt out of
          marketing communications. To exercise these rights, please contact us
          using the details below.
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be
          posted on this page with an updated "Last updated" date.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:admin@spicefitkitchen.com">admin@spicefitkitchen.com</a>.
        </p>
      </div>
    </div>
  );
}
