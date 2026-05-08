import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const links = ["Home", "Properties", "About", "Services", "Agents", "Contact"];

export function Footer() {
  return (
    <footer className="bg-[oklch(0.15_0.05_260)] text-white/75 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-white">
            <span className="grid place-items-center w-9 h-9 rounded-md bg-gradient-gold text-navy font-bold">E</span>
            <span className="font-display text-lg font-semibold">Evans Property <span className="text-gold">LTD</span></span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed">
            Nigeria's trusted real estate partner. Helping you buy, sell and rent
            premium properties across all 36 states with confidence.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#"
                className="grid place-items-center w-10 h-10 rounded-full border border-white/15 hover:bg-gold hover:text-navy hover:border-gold transition-smooth">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 font-display">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-gold transition-smooth">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 font-display">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>070-441-31476</li>
            <li>andrewosikhuemhe@gmail.com</li>
            <li>12 Admiralty Way, Lekki, Lagos</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 mt-12 pt-6 border-t border-white/10 text-sm text-center text-white/50">
        © {new Date().getFullYear()} Evans Property LTD. All rights reserved.
      </div>
    </footer>
  );
}
