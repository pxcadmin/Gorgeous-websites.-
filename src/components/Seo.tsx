import { useEffect } from "react";
import { siteUrl } from "../data/site";
export function Seo({
  title,
  description,
  schema,
}: {
  title: string;
  description: string;
  schema?: object;
}) {
  useEffect(() => {
    document.title = title;
    const meta = (key: string, value: string, property = false) => {
      let node = document.querySelector(
        `meta[${property ? "property" : "name"}="${key}"]`,
      ) as HTMLMetaElement | null;
      if (!node) {
        node = document.createElement("meta");
        node.setAttribute(property ? "property" : "name", key);
        document.head.appendChild(node);
      }
      node.content = value;
    };
    meta("description", description);
    meta("og:title", title, true);
    meta("og:description", description, true);
    meta("og:type", "website", true);
    meta("og:url", `${siteUrl}${window.location.pathname}`, true);
    meta("twitter:card", "summary_large_image");
    let canonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${siteUrl}${window.location.pathname}`;
    document.getElementById("pxc-jsonld")?.remove();
    const script = document.createElement("script");
    script.id = "pxc-jsonld";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(
      schema || {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
      },
    );
    document.head.appendChild(script);
    return () => document.getElementById("pxc-jsonld")?.remove();
  }, [title, description, schema]);
  return null;
}
