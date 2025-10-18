import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/membership", label: "Membership" },
  { to: "/events", label: "Events" },
  { to: "/sponsors", label: "Sponsors & Partners" },
  { to: "/impact", label: "Impact" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center gap-3 group">
            <Heart className="h-8 w-8 text-accent transition-transform group-hover:scale-110" fill="currentColor" />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-primary">TI&A</span>
              <span className="text-xs text-muted-foreground">Tanda Ikatan Asih</span>
            </div>
          </NavLink>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button variant="default" size="sm" asChild>
              <a href="https://wa.me/62XXXXXXXXX" target="_blank" rel="noopener noreferrer">
                Join TI&A
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 text-base font-medium transition-colors ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button variant="default" className="w-full" asChild>
              <a href="https://wa.me/62XXXXXXXXX" target="_blank" rel="noopener noreferrer">
                Join TI&A
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
