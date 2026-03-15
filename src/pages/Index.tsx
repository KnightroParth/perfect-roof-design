import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, Award, Clock, Wrench, ArrowRight, Building2, HardHat, RefreshCw, Layers, Star } from "lucide-react";
import heroImg    from "@/assets/hero-roofing.jpg";
import polyImg    from "@/assets/polycarbonate-sheet.jpg";
import colourImg  from "@/assets/colour-coated-sheet.jpg";
import galvImg    from "@/assets/galvanized-sheet.jpg";
import profileImg from "@/assets/profile-sheet.jpg";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const products = [
  { name: "Polycarbonate Sheets",   img: polyImg,    tag: "Multiwall & UV-Protected" },
  { name: "Colour Coated Sheets",   img: colourImg,  tag: "JSW / AMNS Approved"      },
  { name: "Galvanized Sheets",      img: galvImg,    tag: "Hot-Dip Z275 Grade"        },
  { name: "Profile Roofing Sheets", img: profileImg, tag: "Hi-Rib & Tile Profile"     },
];

const services = [
  {
    icon: Layers,
    title: "Roofing Sheet Supply",
    desc: "JSW, AMNS & premium-grade colour coated, galvanized, polycarbonate and profile sheets in standard & custom specs.",
  },
  {
    icon: HardHat,
    title: "Installation Services",
    desc: "End-to-end roofing installation for industrial, commercial and residential projects across Maharashtra.",
  },
  {
    icon: Building2,
    title: "Steel Structures & PEB",
    desc: "Prefabricated industrial sheds, Z purlins, arch roofing frames and custom structural steel fabrication.",
  },
  {
    icon: RefreshCw,
    title: "Roof Renovation",
    desc: "Roof replacement, recoating, waterproofing and leak-proofing services for existing structures.",
  },
];

const reasons = [
  { icon: Shield, title: "Premium Quality",     desc: "JSW, AMNS & Tata approved raw materials tested for Indian climate extremes." },
  { icon: Award,  title: "15+ Years Expertise", desc: "Established 2010 — serving industries across Maharashtra with proven results." },
  { icon: Clock,  title: "On-Time Delivery",    desc: "Reliable supply chain and on-site execution. Your timeline is our commitment." },
  { icon: Wrench, title: "Custom Solutions",    desc: "Tailored profiles, spans and specifications to match your exact structural needs." },
];

const testimonials = [
  {
    name: "Asjadahmad",
    location: "Thane, Maharashtra",
    date: "04-April-21",
    product: "JSW Metal Roofing Sheet",
    rating: 5,
    note: "good",
  },
  {
    name: "Nadeen",
    location: "Thane, Maharashtra",
    date: "06-March-21",
    product: "Colour Coated Roofing Sheet",
    rating: 5,
  },
  {
    name: "Subham",
    location: "Mumbai, Maharashtra",
    date: "04-September-25",
    product: "Colour Coated Roofing Sheet",
    rating: 5,
  },
  {
    name: "Anil",
    location: "Palghar, Maharashtra",
    date: "21-February-21",
    rating: 5,
  },
  {
    name: "Mithil Shah",
    location: "Mumbai, Maharashtra",
    date: "02-October-18",
    product: "Roofing Material",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+",  label: "Years Experience"   },
  { value: "200+", label: "Happy Clients"       },
  { value: "100%", label: "Quality Assured"     },
];

const Index = () => {
  const { hash } = useLocation();

  const handleCardTilt = (e: React.MouseEvent<HTMLElement>) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 10;
    const rotateX = (0.5 - py) * 8;

    card.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
    card.style.setProperty("--glare-x", `${(px * 100).toFixed(1)}%`);
    card.style.setProperty("--glare-y", `${(py * 100).toFixed(1)}%`);
  };

  const resetCardTilt = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
    card.style.setProperty("--glare-x", "50%");
    card.style.setProperty("--glare-y", "50%");
  };

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
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] -mt-20 md:-mt-24 pt-20 md:pt-24 flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Industrial roofing installation"
            className="w-full h-full object-cover animate-ken-burns"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/65 to-slate-900/20" />
        </div>

        {/* Hero copy */}
        <div className="container relative z-10 pb-16 pt-40">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest mb-6 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Maharashtra&rsquo;s Trusted Roofing Partner &middot; Est. 2010
          </div>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-3xl leading-tight animate-fade-up-delay-1">
            Durable Roofing<br />
            <span className="text-accent">Solutions</span> Built to Last
          </h1>
          <p className="mt-6 text-base md:text-xl max-w-xl text-white/75 animate-fade-up-delay-2">
            Premium polycarbonate, colour coated &amp; galvanized roofing sheets &mdash; manufactured and installed across Maharashtra.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up-delay-2">
            <Link
              to="/products"
              className="hero-btn-sheen inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-accent text-white font-semibold hover:bg-accent/90 transition-all hover:scale-105 shadow-lg shadow-accent/30"
            >
              Explore Products <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="hero-btn-sheen hero-btn-sheen-muted inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-white/25 text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 bg-white/5 border-t border-white/10 backdrop-blur-sm">
          <div className="container grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.label} className="py-5 text-center">
                <div className="font-heading text-2xl md:text-3xl font-bold text-accent">{s.value}</div>
                <div className="text-xs text-white/60 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section id="trusted-strip" className="py-10 bg-secondary border-y border-border">
        <div className="container">
          <p className="text-center text-sm md:text-base uppercase tracking-widest text-muted-foreground font-semibold">Trusted by / Projects delivered for</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {[
              { src: "/coca-cola-logo.svg", alt: "Coca-Cola" },
              { src: "/ceat-logo.svg", alt: "CEAT Tyres" },
            ].map((logo) => (
              <div
                key={logo.alt}
                className="tilt-card px-6 py-4 rounded-lg border border-border bg-card"
                onMouseMove={handleCardTilt}
                onMouseLeave={resetCardTilt}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 md:h-16 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Strip ───────────────────────────────── */}
      <section id="services" className="bg-slate-900 text-white py-20 md:py-28">
        <div className="container">
          <ScrollFadeIn>
            <p className="text-accent text-sm md:text-base font-bold uppercase tracking-widest text-center mb-2">What We Do</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">End-to-End Roofing Services</h2>
          </ScrollFadeIn>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <ScrollFadeIn key={s.title}>
                <div
                  className="tilt-card group relative p-7 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/40 transition-all duration-300 h-full"
                  onMouseMove={handleCardTilt}
                  onMouseLeave={resetCardTilt}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <s.icon size={22} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Grid ────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <ScrollFadeIn>
            <p className="text-accent text-sm md:text-base font-bold uppercase tracking-widest text-center mb-2">What We Supply</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">Our Product Range</h2>
            <p className="mt-3 text-muted-foreground text-center max-w-lg mx-auto">
              JSW, AMNS &amp; Tata approved sheets &mdash; available in standard and custom specifications.
            </p>
          </ScrollFadeIn>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <ScrollFadeIn key={p.name}>
                <Link
                  to="/products"
                  className="tilt-card group block rounded-xl overflow-hidden bg-card shadow-sm border border-border transition-all duration-300"
                  onMouseMove={handleCardTilt}
                  onMouseLeave={resetCardTilt}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-sm text-xs text-white font-medium">{p.tag}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-lg">{p.name}</h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-sm text-accent font-medium group-hover:gap-2 transition-all">
                      View details <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="hero-btn-sheen inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground font-semibold hover:border-accent hover:text-accent transition-all hover:scale-105"
            >
              See Full Product Catalogue <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <ScrollFadeIn>
            <p className="text-accent text-xs font-bold uppercase tracking-widest text-center mb-2">Why Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">Why Choose "Perfect Roofing Solutions"</h2>
          </ScrollFadeIn>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <ScrollFadeIn key={r.title}>
                <div
                  className="tilt-card group bg-card rounded-xl p-6 border-l-4 border-border hover:border-l-accent shadow-sm transition-all duration-300"
                  onMouseMove={handleCardTilt}
                  onMouseLeave={resetCardTilt}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <r.icon size={22} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <ScrollFadeIn>
            <p className="text-accent text-xs font-bold uppercase tracking-widest text-center mb-2">Reviews</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">What Our Clients Say</h2>
            <div className="mt-4 flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
                <span className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-accent text-accent" />)}
                </span>
                4.6 / 5 on IndiaMART &middot; TrustSEAL Verified
              </span>
            </div>
          </ScrollFadeIn>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <ScrollFadeIn key={t.name}>
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <p className="font-heading font-semibold text-base">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.location}</p>
                  </div>
                  <div className="flex gap-0.5 mt-2 mb-3">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} className="fill-accent text-accent" />)}
                  </div>
                  <p className="text-sm text-muted-foreground">{t.date}</p>
                  {t.product && <p className="text-sm text-muted-foreground mt-1">Product Name: {t.product}</p>}
                  {t.note && <p className="text-sm mt-3">{t.note}</p>}
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden bg-primary">
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="container relative z-10 text-center text-primary-foreground">
          <ScrollFadeIn>
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Get Started</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold">
              Ready to Start<br className="hidden sm:block" /> Your Project?
            </h2>
            <p className="mt-5 text-lg opacity-70 max-w-md mx-auto">
              Free site consultation, quotation &amp; material guidance &mdash; anywhere in Maharashtra.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="hero-btn-sheen inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-accent text-white font-semibold hover:bg-accent/90 transition-all hover:scale-105 shadow-lg shadow-accent/30"
              >
                Request a Free Quote <ArrowRight size={18} />
              </Link>
              <Link
                to="/projects"
                className="hero-btn-sheen hero-btn-sheen-muted inline-flex items-center gap-2 px-8 py-3.5 rounded-md border border-white/25 text-white font-semibold hover:bg-white/10 transition-all hover:scale-105"
              >
                View Our Work
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

    </>
  );
};

export default Index;
