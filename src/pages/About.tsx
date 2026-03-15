import { CheckCircle, MapPin, Users, Calendar, Award } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import heroImg from "@/assets/hero-roofing.jpg";

const values = [
  "JSW, AMNS & Tata approved raw materials",
  "State-of-the-art manufacturing processes",
  "On-time delivery across Maharashtra",
  "Custom profiles & specifications",
  "Competitive & transparent pricing",
  "After-sales support & site guidance",
];

const milestones = [
  { icon: Calendar, value: "Est. 2010",   label: "15+ Years in Business" },
  { icon: Users,    value: "26 – 50",     label: "Expert Team Members"  },
  { icon: Award,    value: "4.6 / 5",     label: "IndiaMART Rating"     },
  { icon: MapPin,   value: "Maharashtra", label: "Pan-State Coverage"   },
];

const About = () => (
  <>
    {/* Intro */}
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollFadeIn>
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">About Us</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
              Perfect Roofing Solutions
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Incorporated in 2010 and headquartered in Ambernath, Thane, Perfect Roofing Solutions is a TrustSEAL
              verified manufacturer and supplier of premium roofing materials and structural steel solutions.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We supply JSW, AMNS and Tata-grade roofing sheets and deliver end-to-end installation, PEB fabrication
              and roof renovation services across Maharashtra. Our qualified team ensures every project meets the
              highest quality standards.
            </p>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((v) => (
                <li key={v} className="flex items-center gap-2 text-sm">
                  <CheckCircle size={16} className="text-accent shrink-0" />
                  {v}
                </li>
              ))}
            </ul>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="rounded-xl overflow-hidden shadow-xl ring-1 ring-border">
              <img src={heroImg} alt="Perfect Roofing Solutions facility" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>

    {/* Milestones */}
    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {milestones.map((m) => (
            <ScrollFadeIn key={m.label}>
              <div className="group bg-card rounded-xl p-6 text-center border border-border hover:border-accent hover:shadow-md transition-all duration-300">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent mb-3 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <m.icon size={18} />
                </div>
                <div className="font-heading text-xl font-bold">{m.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="relative py-24 overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="container relative z-10 max-w-3xl text-center">
        <ScrollFadeIn>
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Our Mission</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">You Envision, We Build</h2>
          <p className="mt-6 text-primary-foreground/70 leading-relaxed text-lg">
            To provide durable, cost-effective and sustainable roofing solutions that protect structures and people —
            while maintaining the highest standards of quality and service excellence across every project we undertake.
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  </>
);

export default About;
