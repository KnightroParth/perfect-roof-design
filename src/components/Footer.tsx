import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="Perfect Roofing Solutions logo"
          className="h-16 md:h-20 w-auto object-contain mb-4"
          loading="lazy"
        />
        <p className="text-sm opacity-80 leading-relaxed">
          Manufacturer & supplier of premium roofing materials, offers installation services, and products include industrial turbines. Built on quality, driven by durability.
        </p>
      </div>
      <div className="text-center md:text-left">
        <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
        <ul className="flex flex-wrap gap-4 text-sm opacity-80">
          {[
            { label: "Home", path: "/" },
            { label: "Products", path: "/products" },
            { label: "About Us", path: "/about" },
            { label: "Projects", path: "/projects" },
            { label: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="hover:opacity-100 transition-opacity">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container py-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Perfect Roofing Solutions. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
