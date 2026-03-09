import { CheckCircle } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import heroImg from "@/assets/hero-roofing.jpg";

const values = [
  "Premium quality raw materials",
  "State-of-the-art manufacturing",
  "On-time delivery across India",
  "Custom profiles & specifications",
  "Competitive pricing",
  "After-sales support & guidance",
];

const About = () => (
  <>
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollFadeIn>
            <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
              About Perfect Roofing Solutions
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Based in Maharashtra, India, Perfect Roofing Solutions is a trusted manufacturer and supplier of premium roofing materials. With over 15 years of industry expertise, we deliver durable, high-performance roofing solutions for industrial, commercial, and residential projects across the country.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our commitment to quality, innovation, and customer satisfaction sets us apart. We use only the finest raw materials and cutting-edge manufacturing processes to ensure every sheet we produce meets the highest standards.
            </p>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((v) => (
                <li key={v} className="flex items-center gap-2 text-sm">
                  <CheckCircle size={18} className="text-accent shrink-0" />
                  {v}
                </li>
              ))}
            </ul>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={heroImg} alt="Our manufacturing facility" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container text-center max-w-2xl">
        <ScrollFadeIn>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Our Mission</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            To provide durable, cost-effective, and sustainable roofing solutions that protect structures and people - while maintaining the highest standards of quality and service excellence.
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  </>
);

export default About;
