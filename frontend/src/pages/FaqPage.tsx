import { useEffect, useState } from "react";

import SiteLayout from "../components/layout/SiteLayout";
import SEO from "../components/SEO";
import { faqService } from "../services/faq.service";
import type { FaqItem } from "../types/site.types";

function FaqPage() {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const loadFaqs = async () => {
      try {
        const data = await faqService.getAll();

        if (mounted) {
          setFaqs(data);
        }
      } catch (requestError) {
        if (mounted) {
          setError(
            requestError instanceof Error
              ? requestError.message
              : "Unable to load frequently asked questions.",
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    void loadFaqs();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <SiteLayout>
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to common questions about ASAD Kenya Finance, our financial solutions, eligibility and how to contact us."
      />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">
            HELP & INFORMATION
          </p>

          <h1>Frequently Asked Questions</h1>

          <p>
            Find answers to common questions about
            ASAD Kenya Finance and our financial
            solutions.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container narrow-content">
          {loading && (
            <p className="loading-state">
              Loading frequently asked questions...
            </p>
          )}

          {error && (
            <div className="form-error">{error}</div>
          )}

          {!loading &&
            !error &&
            faqs.length === 0 && (
              <p>
                There are currently no frequently
                asked questions available.
              </p>
            )}

          {!loading &&
            !error &&
            faqs.length > 0 && (
              <div className="faq-list">
                {faqs.map((faq) => (
                  <details
                    className="faq-item"
                    key={faq.id}
                  >
                    <summary>
                      {faq.question}
                    </summary>

                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            )}
        </div>
      </section>
    </SiteLayout>
  );
}

export default FaqPage;