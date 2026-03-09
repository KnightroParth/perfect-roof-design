import { Link } from "react-router-dom";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import polyImg from "@/assets/polycarbonate-sheet.jpg";
import colourImg from "@/assets/colour-coated-sheet.jpg";
import galvImg from "@/assets/galvanized-sheet.jpg";
import profileImg from "@/assets/profile-sheet.jpg";

const products = [
  {
    name: "Polycarbonate Roofing Sheets",
    img: polyImg,
    desc: "Lightweight, impact-resistant and UV-protected sheets ideal for skylights, canopies, and sunroofing applications.",
  },
  {
    name: "Colour Coated Roofing Sheets",
    img: colourImg,
    desc: "Pre-painted galvanized sheets available in a wide range of colours. Corrosion-resistant with excellent aesthetics.",
  },
  {
    name: "Galvanized Roofing Sheets",
    img: galvImg,
    desc: "Hot-dip galvanized steel sheets offering superior rust protection and long service life for industrial roofing.",
  },
  {
    name: "Profile Roofing Sheets",
    img: profileImg,
    desc: "Trapezoidal and corrugated profiles engineered for maximum strength, drainage and weather resistance.",
  },
];

const Products = () => (
  <>
    <section className="py-20 md:py-28">
      <div className="container">
        <ScrollFadeIn>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-center">Our Products</h1>
          <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">
            High-quality roofing sheets manufactured to meet the highest industry standards.
          </p>
        </ScrollFadeIn>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((p) => (
            <ScrollFadeIn key={p.name}>
              <div className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-xl font-semibold">{p.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center px-5 py-2.5 rounded-md bg-accent text-accent-foreground text-sm font-semibold transition-transform hover:scale-105"
                  >
                    Request Quote
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

export default Products;
