import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "THAI MINH LONG SEAFOOD COMPANY LIMITED",
  description = "With nearly 20 years of experience, Thai Minh Long Seafood Company Limited specializes in exporting crabs, tuna, and tropical fruits, meeting international standards and gaining global trust.",
  keywords = "seafood export, tropical fruits, crab export, tuna export, Vietnam export, dragon fruit, mango, banana, durian, international standards",
  ogImage = "/assets/images/tml-logo.png",
  url = "https://tmlseafood.com",
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (
      name: string,
      content: string,
      isProperty = false
    ) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(
        `meta[${attribute}="${name}"]`
      ) as HTMLMetaElement;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Primary Meta Tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag(
      "robots",
      "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
    );

    // Open Graph
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag(
      "og:site_name",
      "Thai Minh Long Seafood Company Limited",
      true
    );
    updateMetaTag("og:locale", "vi_VN", true);

    // Twitter
    updateMetaTag("twitter:card", "summary_large_image", true);
    updateMetaTag("twitter:url", url, true);
    updateMetaTag("twitter:title", title, true);
    updateMetaTag("twitter:description", description, true);
    updateMetaTag("twitter:image", ogImage, true);

    // Additional SEO
    updateMetaTag("author", "Thai Minh Long Seafood Company Limited");
    updateMetaTag("language", "English, Vietnamese");
    updateMetaTag("theme-color", "#0066CC");

    // Update canonical link
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, keywords, ogImage, url]);

  return null;
};
