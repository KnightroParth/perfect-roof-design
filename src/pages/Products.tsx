import { Link } from "react-router-dom";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { usePageSEO } from "@/hooks/usePageSEO";
import { ArrowRight, Wind, Ruler, Building2, Package, Settings, Lock, Home, Droplets, Layers, RefreshCw } from "lucide-react";
import polyImg    from "@/assets/polycarbonate-sheet.jpg";
import colourImg  from "@/assets/colour-coated-sheet.jpg";
import galvImg    from "@/assets/galvanized-sheet.jpg";
import profileImg from "@/assets/profile-sheet.jpg";
import clipLockImg from "@/assets/prod-clip-lock.png";
import curvedImg from "@/assets/prod-curved-roofing.jpg";
import deckingImg from "@/assets/prod-decking.jpg";
import upvcImg from "@/assets/prod-upvc.jpg";
import ventilatorImg from "@/assets/prod-ventilator.jpeg";
import zPurlinImg from "@/assets/prod-z-purlin.jpg";
import epsPanelImg from "@/assets/prod-eps-panel.jpg";
import accessoriesImg from "@/assets/prod-accessories.jpg";
import structuralShedImg from "@/assets/prod-structural-shed.jpg";
import terraceShadeImg from "@/assets/prod-terrace-shade.jpg";

const featured = [
  {
    name: "Polycarbonate Roofing Sheets",
    img: polyImg,
    tag: "Multiwall & Single Layer",
    desc: "Lightweight, impact-resistant and UV-protected sheets ideal for skylights, canopies, and sunroofing applications.",
    specs: ["UV-stabilised coating", "Impact resistant", "Multiwall available"],
  },
  {
    name: "Colour Coated Roofing Sheets",
    img: colourImg,
    tag: "JSW / AMNS Approved",
    desc: "Pre-painted galvanized steel sheets (JSW, AMNS, Tata) in a wide range of RAL colours with superior corrosion resistance.",
    specs: ["0.40 – 0.60 mm thickness", "Full RAL colour range", "High-tensile steel"],
  },
  {
    name: "Galvanized Roofing Sheets",
    img: galvImg,
    tag: "Hot-Dip Galvanized",
    desc: "Hot-dip galvanized steel sheets offering superior rust protection and long service life for heavy industrial roofing.",
    specs: ["Z120 – Z275 coating", "Anti-corrosion treated", "Industrial grade"],
  },
  {
    name: "Profile Roofing Sheets",
    img: profileImg,
    tag: "Trapezoidal & Corrugated",
    desc: "Hi-Rib, Tile Profile and Trapezoidal corrugated profiles engineered for maximum strength, drainage and weather resistance.",
    specs: ["Multiple profile types", "High load-bearing", "Easy installation"],
  },
];

const extended = [
  { icon: Lock,      img: clipLockImg,      name: "Clip Lock Roofing Sheets",     desc: "Standing seam clip-lock system for concealed-fastener, watertight roofing." },
  { icon: RefreshCw, img: curvedImg,        name: "Curved / Arch Roofing Sheets", desc: "Pre-curved colour coated sheets for barrel vault and arch-style structures." },
  { icon: Layers,    img: deckingImg,       name: "Decking Sheets",               desc: "Structural steel deck profiles for composite floor slab construction." },
  { icon: Droplets,  img: upvcImg,          name: "UPVC Roofing Sheets",          desc: "UPVC multilayer sheets for corrosive and chemical-resistant environments." },
  { icon: Wind,      img: ventilatorImg,    name: "SS Turbo Air Ventilators",     desc: "Wind-driven stainless steel ridge ventilators — no electricity required." },
  { icon: Ruler,     img: zPurlinImg,       name: "Z Purlins",                    desc: "Cold-formed Z purlin sections for structural secondary roofing framework." },
  { icon: Package,   img: epsPanelImg,      name: "EPS Sandwich Panels",          desc: "Insulated metal sandwich panels for temperature-controlled buildings." },
  { icon: Settings,  img: accessoriesImg,   name: "Roofing Screws & Accessories", desc: "J-bolts, self-drilling screws, flashings, ridge caps and all ancillaries." },
  { icon: Building2, img: structuralShedImg,name: "Structural Industrial Sheds",  desc: "PEB and conventional structural steel sheds — designed and erected on site." },
  { icon: Home,      img: terraceShadeImg,  name: "Terrace Roofing Shade",        desc: "Lightweight GI and polycarbonate shade structures for residential terraces." },
];

const Products = () => {
  usePageSEO({
    title: "Roofing Sheet Products | Perfect Roofing Solutions Maharashtra",
    description: "Buy polycarbonate, colour coated, galvanized, profile, clip-lock and UPVC roofing sheets. Also Z purlins, EPS panels, ventilators & structural sheds. JSW & AMNS approved.",
    canonical: "https://perfectroofingsolutions.vercel.app/products",
    ogTitle: "Roofing Sheet Products | Perfect Roofing Solutions",
    ogDescription: "Complete range of roofing sheets and structural products — manufactured and supplied across Maharashtra.",
    ogUrl: "https://perfectroofingsolutions.vercel.app/products",
  });

  return (
  <>
    {/* Page hero */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container text-center">
        <ScrollFadeIn>
          <p className="text-accent text-sm md:text-base font-bold uppercase tracking-widest mb-3">What We Supply</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Our Products</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            High-quality roofing sheets and structural products — JSW, AMNS &amp; Tata approved, manufactured to international standards.
          </p>
        </ScrollFadeIn>
      </div>
    </section>

    {/* Featured */}
    <section className="py-20 md:py-28">
      <div className="container">
        <ScrollFadeIn>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-10">Featured Products</h2>
        </ScrollFadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((p) => (
            <ScrollFadeIn key={p.name}>
              <div className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[16/7] overflow-hidden relative">
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
                  <h2 className="font-heading text-xl font-semibold">{p.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.specs.map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">{s}</span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent text-white text-sm font-semibold hover:bg-accent/90 transition-all hover:scale-105"
                  >
                    Request Quote <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Extended range */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <ScrollFadeIn>
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">More Products</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-10">Extended Product Range</h2>
        </ScrollFadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {extended.map((p) => (
            <ScrollFadeIn key={p.name}>
              <div className="group bg-card rounded-xl overflow-hidden border border-border hover:border-accent hover:shadow-md transition-all duration-300">
                <div className="aspect-[16/8] overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="inline-flex items-center gap-2 text-accent mb-2">
                    <p.icon size={16} />
                    <h3 className="font-heading font-semibold">{p.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <Link
                    to="/contact"
                    className="mt-3 inline-flex items-center gap-1 text-xs text-accent font-semibold hover:gap-2 transition-all"
                  >
                    Request Quote <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  </>
  );
};

export default Products;
