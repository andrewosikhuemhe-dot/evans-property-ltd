import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#properties", label: "Properties" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#agents", label: "Agents" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-navy shadow-luxury"
          : "bg-navy/90 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-18 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <span className="grid place-items-center w-9 h-9 rounded-md bg-gradient-gold text-navy font-bold">E</span>
          <span className="font-display text-lg font-semibold tracking-wide">
            Evans Property <span className="text-gold">LTD</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-smooth hover:text-gold ${
                  active === l.href.slice(1) ? "text-gold" : "text-white/85"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild variant="gold" size="lg">
            <a href="#properties">View Properties</a>
          </Button>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-navy border-t border-white/10 animate-fade-in">
          <ul className="px-5 py-4 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-white/90 hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild variant="gold" className="w-full">
                <a href="#properties" onClick={() => setOpen(false)}>View Properties</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
