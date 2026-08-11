import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SiteLayout from "../components/layout/SiteLayout";
import { siteContentService } from "../services/site-content.service";
import type { LoanProduct } from "../types/site.types";

function LoanProductsPage() {
  const [products, setProducts] =
    useState<LoanProduct[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    let mounted = true;

    const loadProducts = async () => {
      try {
        const data =
          await siteContentService.getLoanProducts();

        if (mounted) {
          setProducts(data);
        }
      } catch (requestError) {
        if (mounted) {
          setError(
            requestError instanceof Error
              ? requestError.message
              : "Unable to load loan products.",
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    void loadProducts();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <SiteLayout>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">
            LOAN PRODUCTS
          </p>

          <h1>
            Financial solutions for your needs
          </h1>

          <p>
            Explore the financial solutions offered
            by ASAD Kenya Finance.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">
              OUR PRODUCTS
            </p>

            <h2>
              Explore our financial solutions
            </h2>

            <p>
              Product availability, eligibility,
              terms and conditions are subject to
              ASAD Kenya Finance requirements.
            </p>
          </div>

          {loading && (
            <p>Loading loan products...</p>
          )}

          {error && (
            <div className="form-error">
              {error}
            </div>
          )}

          {!loading &&
            !error &&
            products.length === 0 && (
              <p>
                No loan products are currently
                available.
              </p>
            )}

          {!loading &&
            !error &&
            products.length > 0 && (
              <div className="loan-product-grid">
                {products.map((product) => (
                  <article
                    className="loan-product-card"
                    key={product.id}
                  >
                    <span className="card-label">
                      ASAD KENYA
                    </span>

                    <h3>
                      {product.name}
                    </h3>

                    <p>
                      {product.description}
                    </p>

                    <h4>
                      Features
                    </h4>

                    <ul>
                      {product.features.map(
                        (feature) => (
                          <li key={feature}>
                            {feature}
                          </li>
                        ),
                      )}
                    </ul>

                    <h4>
                      Eligibility
                    </h4>

                    <ul>
                      {product.eligibility.map(
                        (requirement) => (
                          <li
                            key={requirement}
                          >
                            {requirement}
                          </li>
                        ),
                      )}
                    </ul>

                    <Link
                      to="/contact"
                      className="text-link"
                    >
                      {product.callToAction ||
                        "Make an enquiry"}{" "}
                      →
                    </Link>
                  </article>
                ))}
              </div>
            )}
        </div>
      </section>

      <section className="information-section">
        <div className="container information-box">
          <div>
            <p className="eyebrow">
              IMPORTANT INFORMATION
            </p>

            <h2>
              Need more information?
            </h2>
          </div>

          <div>
            <p>
              Product eligibility, terms and
              conditions may apply. Contact ASAD
              Kenya Finance for the latest official
              information.
            </p>

            <Link
              to="/contact"
              className="button button-primary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default LoanProductsPage;