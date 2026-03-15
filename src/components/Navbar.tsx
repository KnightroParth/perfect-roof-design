import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About Us", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));
  const location = useLocation();
  const logoSrc = "/logo.png";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center h-20 md:h-24">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Perfect Roofing Solutions">
          <span className="shrink-0 rounded-xl border border-amber-300/35 bg-slate-900/95 px-2 py-1.5 shadow-[0_4px_14px_rgba(15,23,42,0.3)]">
            <img
              src={logoSrc}
              alt="Perfect Roofing Solutions logo"
              className="h-11 md:h-14 w-auto object-contain brightness-110 saturate-125 contrast-125 drop-shadow-[0_0_8px_rgba(251,191,36,0.25)]"
              loading="eager"
            />
          </span>
          <span className="hidden lg:inline font-heading text-lg font-bold text-foreground dark:text-accent tracking-tight whitespace-nowrap">
            Perfect Roofing Solutions
          </span>
        </Link>

        {/* Desktop nav — centred */}
        <ul className="hidden md:flex items-center gap-8 mx-auto">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === item.path ||
                  (item.path === "/#contact" && location.pathname === "/" && location.hash === "#contact")
                    ? "text-accent"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4 shrink-0 ml-auto md:ml-0">
          <Link
            to="/#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-md bg-accent text-accent-foreground text-sm font-semibold transition-transform hover:scale-105 whitespace-nowrap"
          >
            Get a Quote
          </Link>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full text-foreground hover:bg-secondary/60 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile — theme + hamburger */}
        <div className="flex md:hidden items-center gap-2 ml-auto">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full text-foreground hover:bg-secondary/60 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border animate-fade-up">
          <ul className="container py-5 space-y-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`block text-base font-medium py-2 ${
                    location.pathname === item.path ? "text-accent" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center px-6 py-3 rounded-md bg-accent text-accent-foreground text-base font-semibold"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
