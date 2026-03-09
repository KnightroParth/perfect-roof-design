import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About Us", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-heading text-lg md:text-xl font-bold text-primary tracking-tight">
          Perfect Roofing Solutions
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  // highlight when pathname matches, or for contact hash
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

        <Link
          to="/#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-md bg-accent text-accent-foreground text-sm font-semibold transition-transform hover:scale-105"
        >
          Get a Quote
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border animate-fade-up">
          <ul className="container py-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`block text-sm font-medium py-2 ${
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
                className="inline-flex items-center px-5 py-2.5 rounded-md bg-accent text-accent-foreground text-sm font-semibold"
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
