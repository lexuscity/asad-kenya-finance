import SiteLayout from "../components/layout/SiteLayout";

function PrivacyPage() {
  return (
    <SiteLayout>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">
            PRIVACY
          </p>

          <h1>
            Privacy Notice
          </h1>

          <p>
            Information about how ASAD Kenya Finance
            approaches privacy on this website.
          </p>
        </div>
      </section>

      <section className="legal-section">
        <div className="container legal-content">
          <h2>
            Our commitment to privacy
          </h2>

          <p>
            ASAD Kenya Finance respects your privacy
            and is committed to protecting personal
            information provided through this website.
          </p>

          <h2>
            Information submitted through this website
          </h2>

          <p>
            When you voluntarily contact us through
            the website, information you provide may
            be used to respond to your enquiry and
            provide appropriate assistance.
          </p>

          <h2>
            Responsible handling
          </h2>

          <p>
            Information should only be accessed and
            handled for legitimate business purposes
            and in accordance with applicable
            requirements.
          </p>

          <h2>
            Questions
          </h2>

          <p>
            If you have questions regarding privacy,
            please contact ASAD Kenya Finance using
            the official contact information provided
            on this website.
          </p>

          <p className="legal-note">
            This page is general website information
            and does not replace a formally approved
            privacy policy or legal advice.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

export default PrivacyPage;