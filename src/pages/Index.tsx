import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, Award, Clock, Wrench, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-roofing.jpg";
import polyImg from "@/assets/polycarbonate-sheet.jpg";
import colourImg from "@/assets/colour-coated-sheet.jpg";
import galvImg from "@/assets/galvanized-sheet.jpg";
import profileImg from "@/assets/profile-sheet.jpg";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import ContactSection from "@/components/ContactSection";

const products = [
  { name: "Polycarbonate Sheets", img: polyImg },
  { name: "Colour Coated Sheets", img: colourImg },
  { name: "Galvanized Sheets", img: galvImg },
  { name: "Profile Sheets", img: profileImg },
];

const reasons = [
  { icon: Shield, title: "Premium Quality", desc: "Built with the finest raw materials for lasting performance." },
  { icon: Award, title: "Industry Expertise", desc: "Years of experience manufacturing roofing solutions." },
  { icon: Clock, title: "Timely Delivery", desc: "Reliable supply chain ensuring on-time project completion." },
  { icon: Wrench, title: "Custom Solutions", desc: "Tailored roofing profiles to meet your exact specifications." },
];

const Index = () => {
  const { hash } = useLocation();

  // scroll to contact section when hash is present
  useEffect(() => {
    if (hash === "#contact") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Industrial roofing installation" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="container relative z-10 text-primary-foreground">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold max-w-3xl leading-tight animate-fade-up">
            Durable Roofing Solutions Built to Last
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-xl opacity-90 animate-fade-up-delay-1">
            Premium polycarbonate, colour coated & galvanized roofing sheets - manufactured in Maharashtra, India.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up-delay-2">
            <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-accent-foreground font-semibold transition-transform hover:scale-105">
              View Products <ArrowRight size={18} />
            </Link>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-primary-foreground/30 text-primary-foreground font-semibold transition-colors hover:bg-primary-foreground/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 md:py-28">
        <div className="container">
          <ScrollFadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">Our Products</h2>
            <p className="mt-3 text-muted-foreground text-center max-w-lg mx-auto">
              Explore our range of high-quality roofing sheets designed for every application.
            </p>
          </ScrollFadeIn>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <ScrollFadeIn key={p.name} className={`delay-${i}`}>
                <Link to="/products" className="group block rounded-lg overflow-hidden bg-card shadow-sm border border-border hover:shadow-md transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-lg">{p.name}</h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-sm text-accent font-medium">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <ScrollFadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">Why Choose Us</h2>
          </ScrollFadeIn>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((r) => (
              <ScrollFadeIn key={r.title}>
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-4">
                    <r.icon size={28} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Stats */}
      <section className="py-20 md:py-28">
        <div className="container">
          <ScrollFadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "15+", label: "Years Experience" },
                { value: "200+", label: "Happy Clients" },
                { value: "100%", label: "Quality Assured" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-heading text-3xl md:text-4xl font-bold text-accent">{s.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container text-center">
          <ScrollFadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Ready to Start Your Project?</h2>
            <p className="mt-4 text-lg opacity-80 max-w-lg mx-auto">
              Get in touch with us for a free consultation and quote on your roofing requirements.
            </p>
            <Link to="/#contact" className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-accent text-accent-foreground font-semibold transition-transform hover:scale-105">
              Request a Quote <ArrowRight size={18} />
            </Link>
          </ScrollFadeIn>
        </div>
      </section>

      {/* contact section */}
      <ContactSection />
    </>
  );
};

export default Index;
