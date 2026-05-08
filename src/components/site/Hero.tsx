import heroImg from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import {
  Search, MapPin, Home, DollarSign, ShieldCheck, BadgeCheck, Star,
  Phone, Clock, TrendingUp, FileCheck2, KeyRound, Handshake, MessageCircle,
} from "lucide-react";

const promises = [
  { icon: FileCheck2, title: "Verified before you pay", text: "Every listing checked for ownership, location and documents." },
  { icon: KeyRound, title: "Move in with confidence", text: "We guide inspection, negotiation and secure closing." },
  { icon: Handshake, title: "Free buyer consultation", text: "Tell us your budget — we shortlist options in 24 hours." },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 overflow-hidden">
      {/* Background image + dark overlay for guaranteed contrast */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-navy/70" />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 text-white">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold text-navy text-xs font-semibold uppercase tracking-widest shadow-gold">
            <BadgeCheck size={14} /> Nigeria's Trusted Real Estate Partner
          </span>

          <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Find Your Perfect Home in <span className="text-gold">Nigeria</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/90 max-w-2xl">
            Buy, rent or invest in 100% verified properties across all 36 states.
            Skip the stress, scams and wasted time — work with Evans Property LTD.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span><strong>4.9/5</strong> from 1,000+ clients</span>
            </div>
            <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-gold" /> 100% Verified</div>
            <div className="flex items-center gap-2"><Clock size={16} className="text-gold" /> 24/7 Support</div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="gold" size="xl">
              <a href="#properties">Browse Verified Properties</a>
            </Button>
            <Button asChild size="xl" className="bg-whatsapp text-white shadow-luxury hover:bg-whatsapp/90">
              <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} /> Chat With an Agent
              </a>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <a href="tel:+2348000000000" className="inline-flex items-center gap-2 rounded-md bg-navy px-4 py-3 text-white border border-gold/40 shadow-luxury hover:bg-gold hover:text-navy transition-smooth">
              <Phone size={16} /> Call: +234 800 000 0000
            </a>
            <span className="inline-flex items-center gap-2 rounded-md bg-gold px-4 py-3 text-navy font-semibold shadow-gold">
              <TrendingUp size={16} /> 28 properties sold this month
            </span>
          </div>
        </div>

        {/* Conversion promises */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4 animate-fade-up">
          {promises.map((p) => (
            <div key={p.title} className="rounded-xl bg-background p-5 shadow-card">
              <p.icon className="text-gold" size={26} />
              <h3 className="mt-3 font-semibold text-foreground">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>

        {/* Search bar */}
        <div className="mt-8 bg-background rounded-2xl border border-gold/30 shadow-luxury p-5 lg:p-6 animate-fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary">
              <MapPin className="text-gold shrink-0" size={20} />
              <input type="text" placeholder="Location (e.g. Lekki)"
                className="bg-transparent w-full outline-none text-sm text-foreground placeholder:text-muted-foreground" />
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary">
              <Home className="text-gold shrink-0" size={20} />
              <select className="bg-transparent w-full outline-none text-sm text-foreground">
                <option>For Sale</option><option>For Rent</option>
              </select>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary">
              <DollarSign className="text-gold shrink-0" size={20} />
              <select className="bg-transparent w-full outline-none text-sm text-foreground">
                <option>Any Price</option>
                <option>₦5M – ₦20M</option>
                <option>₦20M – ₦50M</option>
                <option>₦50M – ₦150M</option>
                <option>₦150M+</option>
              </select>
            </div>
            <Button variant="gold" size="lg" className="h-full min-h-12">
              <Search size={18} /> Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
