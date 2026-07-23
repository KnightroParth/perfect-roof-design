import ContactSection from "@/components/ContactSection";
import { usePageSEO } from "@/hooks/usePageSEO";

const Contact = () => {
  usePageSEO({
    title: "Contact Perfect Roofing Solutions | Get a Free Quote",
    description: "Contact Perfect Roofing Solutions for a free consultation and quote. Call +91 88797 93777 or visit us at Ambernath, Thane. Serving all of Maharashtra.",
    canonical: "https://perfectroofingsolutions.vercel.app/contact",
    ogTitle: "Contact Perfect Roofing Solutions",
    ogDescription: "Get a free roofing quote. Call +91 88797 93777 or reach us at Ambernath, Thane, Maharashtra.",
    ogUrl: "https://perfectroofingsolutions.vercel.app/contact",
  });

  return <ContactSection />;
};

export default Contact;
