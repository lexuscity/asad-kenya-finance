import { useState } from "react";
import type {
  ChangeEvent,
  FormEvent,
} from "react";

import SiteLayout from "../components/layout/SiteLayout";
import SEO from "../components/SEO";
import { API_BASE_URL } from "../config/api";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialForm: ContactForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function ContactPage() {
  const [form, setForm] =
    useState<ContactForm>(initialForm);

  const [submitting, setSubmitting] =
    useState(false);

  const [successMessage, setSuccessMessage] =
    useState("");

  const [errorMessage, setErrorMessage] =
    useState("");

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(
        `${API_BASE_URL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        setErrorMessage(
          result.message ||
            "We could not send your enquiry. Please try again.",
        );

        return;
      }

      setSuccessMessage(
        result.message ||
          "Your enquiry has been received.",
      );

      setForm(initialForm);
    } catch {
      setErrorMessage(
        "Unable to connect to ASAD Kenya Finance. Please try again later.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      <SEO
        title="Contact ASAD Kenya Finance"
        description="Contact ASAD Kenya Finance for enquiries about our financial solutions, loan products and other information. Reach us by email, phone or through our online enquiry form."
       
      />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">CONTACT US</p>

          <h1>We'd love to hear from you</h1>

          <p>
            Have a question about ASAD Kenya Finance?
            Send us an enquiry and our team can
            assist.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-information">
            <p className="eyebrow">GET IN TOUCH</p>

            <h2>
              Contact ASAD Kenya Finance
            </h2>

            <p>
              Use the enquiry form or the official
              contact details provided by ASAD Kenya
              Finance.
            </p>

            <div className="contact-detail">
              <span>Email</span>

              <strong>
                asadkenyafinance@gmail.com
              </strong>
            </div>

            <div className="contact-detail">
              <span>Phone</span>

              <strong>
                +254 740720460
              </strong>
            </div>

            <div className="contact-detail">
              <span>Location</span>

              <strong>Kenya</strong>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <label>
                  Name

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    maxLength={100}
                    autoComplete="name"
                  />
                </label>

                <label>
                  Email

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    maxLength={254}
                    autoComplete="email"
                  />
                </label>
              </div>

              <label>
                Phone

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  maxLength={30}
                  autoComplete="tel"
                />
              </label>

              <label>
                Subject

                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  minLength={3}
                  maxLength={150}
                />
              </label>

              <label>
                Message

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={7}
                />
              </label>

              {successMessage && (
                <div
                  className="form-success"
                  role="status"
                >
                  {successMessage}
                </div>
              )}

              {errorMessage && (
                <div
                  className="form-error"
                  role="alert"
                >
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                className="button button-primary"
                disabled={submitting}
              >
                {submitting
                  ? "Sending..."
                  : "Send Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default ContactPage;