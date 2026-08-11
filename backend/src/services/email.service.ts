import nodemailer from "nodemailer";

import { env } from "../config/env.js";
import { logger } from "../utils/logger.js";

class EmailService {
  private readonly transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: env.SMTP_SECURE,
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASSWORD,
      },
    });
  }

  async sendContactEnquiry(input: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<void> {
    await this.transporter.sendMail({
      from: `"ASAD Kenya Website" <${env.SMTP_USER}>`,
      to: env.CONTACT_EMAIL,
      replyTo: input.email,
      subject: `Website Enquiry: ${input.subject}`,
      text: [
        `New enquiry received from the ASAD Kenya website.`,
        ``,
        `Name: ${input.name}`,
        `Email: ${input.email}`,
        `Subject: ${input.subject}`,
        ``,
        `Message:`,
        input.message,
      ].join("\n"),
      html: `
        <h2>New ASAD Kenya Website Enquiry</h2>

        <p>
          <strong>Name:</strong>
          ${this.escapeHtml(input.name)}
        </p>

        <p>
          <strong>Email:</strong>
          ${this.escapeHtml(input.email)}
        </p>

        <p>
          <strong>Subject:</strong>
          ${this.escapeHtml(input.subject)}
        </p>

        <hr />

        <p>
          <strong>Message:</strong>
        </p>

        <p>
          ${this.escapeHtml(input.message).replace(
            /\n/g,
            "<br />",
          )}
        </p>
      `,
    });

    logger.info(
      "Website contact enquiry email sent successfully.",
      {
        subject: input.subject,
      },
    );
  }

  private escapeHtml(value: string): string {
    return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

export const emailService = new EmailService();