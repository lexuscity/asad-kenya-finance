import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

const SITE_NAME = "ASAD Kenya Finance";

function SEO({
  title,
  description,
}: SEOProps) {
  useEffect(() => {
    const fullTitle =
      title === SITE_NAME
        ? SITE_NAME
        : `${title} | ${SITE_NAME}`;

    document.title = fullTitle;

    const setMeta = (
      attribute: "name" | "property",
      key: string,
      content: string,
    ) => {
      let element = document.head.querySelector(
        `meta[${attribute}="${key}"]`,
      ) as HTMLMetaElement | null;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    setMeta(
      "name",
      "description",
      description,
    );

    setMeta(
      "name",
      "robots",
      "index, follow",
    );

    setMeta(
      "property",
      "og:type",
      "website",
    );

    setMeta(
      "property",
      "og:title",
      fullTitle,
    );

    setMeta(
      "property",
      "og:description",
      description,
    );

    setMeta(
      "property",
      "og:site_name",
      SITE_NAME,
    );

    setMeta(
      "name",
      "twitter:card",
      "summary",
    );

    setMeta(
      "name",
      "twitter:title",
      fullTitle,
    );

    setMeta(
      "name",
      "twitter:description",
      description,
    );
  }, [title, description]);

  return null;
}

export default SEO;