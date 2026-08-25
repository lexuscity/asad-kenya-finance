import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const siteOrigin = "https://asad-kenya-finance.netlify.app";

const route =
  window.location.pathname
    .replace(/^\/asad-kenya-finance/, "")
    .replace(/\/+$/, "") || "/";

const canonicalUrl =
  route === "/"
    ? `${siteOrigin}/`
    : `${siteOrigin}${route}`;

let canonical = document.querySelector<HTMLLinkElement>(
  'link[rel="canonical"]',
);

if (!canonical) {
  canonical = document.createElement("link");
  canonical.rel = "canonical";
  document.head.appendChild(canonical);
}

canonical.href = canonicalUrl;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
