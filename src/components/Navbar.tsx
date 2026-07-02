import { MouseEvent, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About Us", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));
  const [heroNav, setHeroNav] = useState(false);
  const location = useLocation();
  const logoSrc = "/perfect-roof-design/logo.png";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const updateNavbarState = () => {
      if (location.pathname !== "/") {
        setHeroNav(false);
        return;
      }

      const trustedSection = document.getElementById("trusted-strip");
      const triggerPoint = trustedSection ? trustedSection.offsetTop - 96 : window.innerHeight * 0.75;
      setHeroNav(window.scrollY < Math.max(triggerPoint, 0));
    };

    updateNavbarState();
    window.addEventListener("scroll", updateNavbarState, { passive: true });
    window.addEventListener("resize", updateNavbarState);

    return () => {
      window.removeEventListener("scroll", updateNavbarState);
      window.removeEventListener("resize", updateNavbarState);
    };
  }, [location.pathname, isDark]);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (location.pathname === path) {
      e.preventDefault();
    }
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 overflow-hidden border-b border-white/35 dark:border-white/10 bg-white/[0.42] dark:bg-slate-900/[0.40] backdrop-blur-2xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_8px_24px_rgba(15,23,42,0.10)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-500"
    >
      {heroNav && (
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-1/3 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 dark:via-white/16 to-transparent blur-md [animation:glassSheen_7s_ease-in-out_infinite]" />
        </div>
      )}
      <div className="container flex items-center h-20 md:h-24">

        {/* Brand */}
        <Link to="/" onClick={(e) => handleNavClick(e, "/")} className="flex items-center gap-3 shrink-0" aria-label="Perfect Roofing Solutions">
          <span className="shrink-0 rounded-xl border border-amber-300/35 bg-slate-900/95 px-2 py-1.5 shadow-[0_4px_14px_rgba(15,23,42,0.3)]">
            <img
              src={logoSrc}
              alt="Perfect Roofing Solutions logo"
              className="h-11 md:h-14 w-auto object-contain brightness-110 saturate-125 contrast-125 drop-shadow-[0_0_8px_rgba(251,191,36,0.25)]"
              loading="eager"
            />
          </span>
          <span
            className={`hidden lg:inline font-heading text-lg font-bold tracking-tight whitespace-nowrap ${
                heroNav ? "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]" : "text-foreground dark:text-accent"
            }`}
          >
            Perfect Roofing Solutions
          </span>
        </Link>

        {/* Desktop nav — centred */}
        <ul className="hidden md:flex items-center gap-8 mx-auto">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-accent"
                    : heroNav
                      ? "text-white/90 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
                      : "text-foreground hover:text-accent"
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
            to="/contact"
            onClick={(e) => handleNavClick(e, "/contact")}
            className="inline-flex items-center px-5 py-2.5 rounded-md bg-accent text-accent-foreground text-base font-semibold transition-transform hover:scale-105 whitespace-nowrap"
          >
            Get a Quote
          </Link>
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full transition-colors ${
              heroNav ? "text-white hover:bg-white/20" : "text-foreground hover:bg-secondary/60"
            }`}
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile — theme + hamburger */}
        <div className="flex md:hidden items-center gap-2 ml-auto">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full transition-colors ${
              heroNav ? "text-white hover:bg-white/20" : "text-foreground hover:bg-secondary/60"
            }`}
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className={`p-2 ${heroNav ? "text-white" : "text-foreground"}`}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-b border-white/35 dark:border-white/10 bg-white/[0.52] dark:bg-slate-900/[0.62] backdrop-blur-2xl backdrop-saturate-150 animate-fade-up"
        >
          <ul className="container py-5 space-y-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`block text-base font-medium py-2 ${
                    location.pathname === item.path
                      ? "text-accent"
                      : heroNav
                        ? "text-white/90"
                        : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={(e) => handleNavClick(e, "/contact")}
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
