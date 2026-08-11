import SiteLayout from "../components/layout/SiteLayout";

function CookiesPage() {
  return (
    <SiteLayout>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">
            COOKIES
          </p>

          <h1>
            Cookie Notice
          </h1>

          <p>
            Information about cookies and similar
            technologies used by this website.
          </p>
        </div>
      </section>

      <section className="legal-section">
        <div className="container legal-content">
          <h2>
            What are cookies?
          </h2>

          <p>
            Cookies are small pieces of information
            that websites may store on a visitor's
            device to support functionality and
            improve the browsing experience.
          </p>

          <h2>
            How this website may use cookies
          </h2>

          <p>
            This website may use cookies or similar
            technologies where they are necessary
            for website functionality, security or
            user experience.
          </p>

          <h2>
            Your choices
          </h2>

          <p>
            Depending on your browser and applicable
            settings, you may be able to manage or
            restrict cookies through your browser
            controls.
          </p>

          <p className="legal-note">
            This page is general website information
            and does not replace a formally approved
            cookie policy or legal advice.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

export default CookiesPage;