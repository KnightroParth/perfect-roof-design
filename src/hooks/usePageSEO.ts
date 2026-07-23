import { useEffect } from "react";

interface PageSEOOptions {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
}

const BASE_OG_IMAGE = "https://perfectroofingsolutions.vercel.app/logo.png";

export function usePageSEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage = BASE_OG_IMAGE,
}: PageSEOOptions) {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = description;
    }

    // Canonical
    let linkCanonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      if (linkCanonical) {
        linkCanonical.href = canonical;
      } else {
        linkCanonical = document.createElement("link");
        linkCanonical.rel = "canonical";
        linkCanonical.href = canonical;
        document.head.appendChild(linkCanonical);
      }
    }

    // OG Title
    let ogTitleEl = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitleEl) ogTitleEl.content = ogTitle ?? title;

    // OG Description
    let ogDescEl = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDescEl) ogDescEl.content = ogDescription ?? description;

    // OG URL
    let ogUrlEl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (ogUrl) {
      if (ogUrlEl) {
        ogUrlEl.content = ogUrl;
      } else {
        ogUrlEl = document.createElement("meta");
        ogUrlEl.setAttribute("property", "og:url");
        ogUrlEl.content = ogUrl;
        document.head.appendChild(ogUrlEl);
      }
    }

    // OG Image
    let ogImgEl = document.querySelector<HTMLMetaElement>('meta[property="og:image"]');
    if (ogImgEl) {
      ogImgEl.content = ogImage;
    } else {
      ogImgEl = document.createElement("meta");
      ogImgEl.setAttribute("property", "og:image");
      ogImgEl.content = ogImage;
      document.head.appendChild(ogImgEl);
    }
  }, [title, description, canonical, ogTitle, ogDescription, ogUrl, ogImage]);
}
