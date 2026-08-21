import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SiteLayout from "../components/layout/SiteLayout";
import SEO from "../components/SEO";
import { siteContentService } from "../services/site-content.service";
import type { SiteAbout } from "../types/site.types";

function AboutPage() {
  const [about, setAbout] = useState<SiteAbout | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const loadAbout = async () => {
      try {
        const data = await siteContentService.getAbout();

        if (mounted) {
          setAbout(data);
        }
      } catch (requestError) {
        if (mounted) {
          setError(
            requestError instanceof Error
              ? requestError.message
              : "Unable to load information.",
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    void loadAbout();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <SiteLayout>
      <SEO
        title="About ASAD Kenya Finance"
        description="Learn about ASAD Kenya Finance, our history, mission, vision and commitment to supporting individuals and communities through accessible financial solutions."
       
       />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">ABOUT US</p>

          <h1>
            {about?.title ||
              "Growing together through community"}
          </h1>

          <p>
            {about?.introduction ||
              "Learn more about ASAD Kenya Finance, our history, purpose and vision."}
          </p>
        </div>
      </section>

      {loading && (
        <section className="content-section">
          <div className="container">
            <p>Loading information...</p>
          </div>
        </section>
      )}

      {error && (
        <section className="content-section">
          <div className="container">
            <div className="form-error">{error}</div>
          </div>
        </section>
      )}

      {about && !loading && !error && (
        <>
          <section className="content-section">
            <div className="container content-grid">
              <div>
                <p className="eyebrow">OUR STORY</p>

                <h2>
                  A community-focused financial
                  organization
                </h2>
              </div>

              <div className="content-copy">
                <p>{about.history}</p>
              </div>
            </div>
          </section>

          <section className="mission-section">
            <div className="container mission-grid">
              <article className="mission-card">
                <span className="card-label">
                  OUR MISSION
                </span>

                <h2>{about.mission}</h2>
              </article>

              <article className="mission-card">
                <span className="card-label">
                  OUR VISION
                </span>

                <h2>{about.vision}</h2>
              </article>
            </div>
          </section>

          <section className="values-section">
            <div className="container">
              <div className="section-heading">
                <p className="eyebrow">OUR VALUES</p>

                <h2>What guides us</h2>
              </div>

              <div className="values-grid">
                {about.coreValues.map((value) => (
                  <article
                    className="value-card"
                    key={value}
                  >
                    <h3>{value}</h3>

                    <p>
                      A commitment to responsible
                      and community-focused growth.
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <section className="cta-section">
        <div className="container cta-content">
          <div>
            <p className="eyebrow">ASAD KENYA</p>

            <h2>Together We Grow</h2>

            <p>
              Explore our financial solutions or
              get in touch with our team.
            </p>
          </div>

          <div className="hero-actions">
            <Link
              to="/loan-products"
              className="button button-light"
            >
              Loan Products
            </Link>

            <Link
              to="/contact"
              className="button button-outline-light"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default AboutPage;