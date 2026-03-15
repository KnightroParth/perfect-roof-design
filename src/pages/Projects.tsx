import ScrollFadeIn from "@/components/ScrollFadeIn";
import anandnagarAfter  from "@/assets/proj-anandnagar-after.jpeg";
import anandnagarBefore from "@/assets/proj-anandnagar-before.jpeg";
import badlapur         from "@/assets/proj-badlapur.jpeg";
import ceatTyres        from "@/assets/proj-ceat-tyres.jpeg";
import chikhloli        from "@/assets/proj-chikhloli.jpeg";
import cocaCola         from "@/assets/proj-coca-cola.jpeg";
import dehuroad1        from "@/assets/proj-dehuroad-1.jpeg";
import dehuroad2        from "@/assets/proj-dehuroad-2.jpeg";
import kudal1           from "@/assets/proj-kudal-1.jpeg";
import kudal2           from "@/assets/proj-kudal-2.jpeg";
import majiwada1        from "@/assets/proj-majiwada-1.jpeg";
import majiwada2        from "@/assets/proj-majiwada-2.jpeg";
import pale1            from "@/assets/proj-pale-1.jpeg";
import pale2            from "@/assets/proj-pale-2.jpeg";
import pimpleJagtap     from "@/assets/proj-pimple-jagtap.jpeg";
import shirur           from "@/assets/proj-shirur.jpeg";
import turbhe           from "@/assets/proj-turbhe.jpeg";

const projects = [
  { imgs: [anandnagarAfter, anandnagarBefore], title: "Anandnagar MIDC, Ambernath",  category: "Arch Roofing" },
  { imgs: [chikhloli],                          title: "Chikhloli MIDC, Ambernath",   category: "Steel Structure" },
  { imgs: [pale1, pale2],                       title: "PALE MIDC, Ambernath",        category: "Steel Structure" },
  { imgs: [pimpleJagtap],                       title: "Pimple Jagtap, Maharashtra",  category: "Steel Structure" },
  { imgs: [shirur],                             title: "Shirur, Maharashtra",          category: "Steel Structure" },
  { imgs: [majiwada1, majiwada2],               title: "Majiwada FOB, Thane",          category: "Steel Structure" },
  { imgs: [cocaCola],                           title: "Coca Cola, Wada",              category: "Colour Coated Roofing" },
  { imgs: [ceatTyres],                          title: "Ceat Tyres, Mumbai",           category: "Roof Replacement" },
  { imgs: [badlapur],                           title: "Badlapur MIDC",                category: "Galvanized Roofing" },
  { imgs: [turbhe],                             title: "Turbhe, Navi Mumbai",          category: "Profile Roofing" },
  { imgs: [kudal1, kudal2],                     title: "Kudal, Maharashtra",           category: "Profile Roofing" },
  { imgs: [dehuroad1, dehuroad2],               title: "Dehu Road, Pune",              category: "Industrial Roofing" },
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
              {/* Image area */}
              <div className="aspect-[4/3] relative overflow-hidden">
                {/* First image: fades out on hover only when a second image exists */}
                <img
                  src={p.imgs[0]}
                  alt={p.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out scale-100 ${
                    p.imgs[1]
                      ? "opacity-100 group-hover:opacity-0 group-hover:scale-105"
                      : "group-hover:scale-105"
                  }`}
                  loading="lazy"
                />
                {/* Second image (if present): hidden by default, fades in on hover */}
                {p.imgs[1] && (
                  <img
                    src={p.imgs[1]}
                    alt={`${p.title} — view 2`}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100"
                    loading="lazy"
                  />
                )}
                {/* Dot indicators for multi-image cards */}
                {p.imgs[1] && (
                  <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    <span className="block w-1.5 h-1.5 rounded-full bg-white shadow transition-opacity duration-700 group-hover:opacity-40" />
                    <span className="block w-1.5 h-1.5 rounded-full bg-white shadow transition-opacity duration-700 opacity-40 group-hover:opacity-100" />
                  </div>
                )}
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
