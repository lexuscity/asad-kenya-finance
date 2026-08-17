import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SiteLayout from "../components/layout/SiteLayout";
import { siteContentService } from "../services/site-content.service";
import type { SiteIdentity } from "../types/site.types";

function HomePage() {
  const [identity, setIdentity] =
    useState<SiteIdentity | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    let mounted = true;

    const loadIdentity = async () => {
      try {
        const data =
          await siteContentService.getIdentity();

        if (mounted) {
          setIdentity(data);
        }
      } catch (requestError) {
        if (mounted) {
          setError(
            requestError instanceof Error
              ? requestError.message
              : "Unable to load website information.",
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    void loadIdentity();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <SiteLayout>
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-copy">
            <p className="eyebrow">
              {identity?.legalName ||
                "ASAD Kenya Finance"}
            </p>

            <h1>
              {identity?.tagline ||
                "TOGETHER WE GROW"}
            </h1>

            <p className="hero-description">
              {identity?.description ||
                "Accessible financial solutions designed to support individuals and communities."}
            </p>

            <div className="hero-actions">
              <Link
                to="/loan-products"
                className="button button-primary"
              >
                Explore Loan Products
              </Link>

              <Link
                to="/about"
                className="button button-secondary"
              >
                Learn About Us
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <span>ASAD</span>

              <strong>KENYA</strong>

              <small>
                TOGETHER WE GROW
              </small>
            </div>
          </div>
        </div>
      </section>


      <section className="community-image-section">
        <img
          src="/images/asad-community.jpg"
          alt="ASAD Kenya community"
        />
      </section>

    

      {error && (
        <section className="content-section">
          <div className="container">
            <div className="form-error">
              {error}
            </div>
          </div>
        </section>
      )}

      <section className="intro-section">
        <div className="container narrow-content">
          <p className="eyebrow">
            WELCOME TO ASAD KENYA
          </p>

          <h2>
            Financial solutions with a
            community focus
          </h2>

          <p>
            {identity?.description ||
              "ASAD Kenya Finance is focused on providing accessible financial solutions and supporting communities to grow together."}
          </p>

          {!loading && (
            <Link
              to="/about"
              className="text-link"
            >
              Discover our story →
            </Link>
          )}
        </div>
      </section>

      <section className="feature-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">
              WHY ASAD KENYA
            </p>

            <h2>
              Built around people and
              communities
            </h2>

            <p>
              Our approach is centered on
              accessibility, responsibility and
              sustainable community growth.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-number">
                01
              </div>

              <h3>
                Accessible
              </h3>

              <p>
                We aim to make financial solutions
                easier to understand and accessible
                to the communities we serve.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-number">
                02
              </div>

              <h3>
                Community Focused
              </h3>

              <p>
                We believe stronger communities
                create opportunities for people to
                grow together.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-number">
                03
              </div>

              <h3>
                Responsible
              </h3>

              <p>
                We promote clear information,
                responsible financial practices and
                transparent communication.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <div>
            <p className="eyebrow">
              GET STARTED
            </p>

            <h2>
              Find the right solution for you
            </h2>

            <p>
              Explore our available financial
              solutions or speak with ASAD Kenya
              Finance for more information.
            </p>
          </div>

          <div className="hero-actions">
            <Link
              to="/loan-products"
              className="button button-light"
            >
              View Products
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

export default HomePage;