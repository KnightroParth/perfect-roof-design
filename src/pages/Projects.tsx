import ScrollFadeIn from "@/components/ScrollFadeIn";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const projects = [
  { img: p1, title: "Industrial Warehouse - Pune", category: "Galvanized Roofing" },
  { img: p2, title: "Factory Complex - Nashik", category: "Profile Roofing" },
  { img: p3, title: "Commercial Building - Mumbai", category: "Polycarbonate Sunroof" },
  { img: p4, title: "Residential Project - Nagpur", category: "Colour Coated Roofing" },
  { img: p5, title: "Sports Arena - Aurangabad", category: "Profile Roofing" },
  { img: p6, title: "Agricultural Shed - Kolhapur", category: "Galvanized Roofing" },
];

const Projects = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <ScrollFadeIn>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-center">Our Projects</h1>
        <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">
          A showcase of our roofing installations across Maharashtra and beyond.
        </p>
      </ScrollFadeIn>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ScrollFadeIn key={p.title}>
            <div className="group rounded-lg overflow-hidden bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">{p.category}</span>
                <h3 className="font-heading font-semibold mt-1">{p.title}</h3>
              </div>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
