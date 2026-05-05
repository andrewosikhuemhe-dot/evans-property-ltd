import { Home, Key, FileSearch, Briefcase, ShieldCheck, Users, MapPinned, Lock } from "lucide-react";

const services = [
  { icon: Home, title: "Property Sales", desc: "Buy verified homes, lands and commercial spaces with full legal documentation." },
  { icon: Key, title: "Property Rentals", desc: "Find short-let, yearly rentals and serviced apartments tailored to your budget." },
  { icon: FileSearch, title: "Property Valuation", desc: "Accurate market valuation by certified surveyors for smart investment decisions." },
  { icon: Briefcase, title: "Real Estate Consulting", desc: "Strategic advice on portfolio building, investment and property development." },
];

const why = [
  { icon: ShieldCheck, title: "Verified Listings", desc: "Every property is physically inspected and legally verified." },
  { icon: Users, title: "Expert Agents", desc: "Licensed local agents with deep knowledge of Nigerian markets." },
  { icon: MapPinned, title: "Nationwide Coverage", desc: "Operating in all 36 states with strong presence in major cities." },
  { icon: Lock, title: "Secure Transactions", desc: "Escrow services and transparent contracts protect every client." },
];

export function Services() {
  return (
    <>
      <section id="services" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">What We Do</span>
            <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-navy">Our Premium Services</h2>
            <p className="mt-4 text-muted-foreground">
              Comprehensive real estate solutions for buyers, renters and investors.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group p-7 rounded-2xl border border-border hover:border-gold bg-card shadow-card hover:shadow-luxury transition-smooth hover:-translate-y-1">
                <div className="grid place-items-center w-14 h-14 rounded-xl bg-gradient-gold text-navy group-hover:scale-110 transition-smooth">
                  <s.icon size={26} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">Why Choose Us</span>
            <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-navy">Built on Trust & Excellence</h2>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {why.map((w) => (
              <div key={w.title} className="bg-navy text-white p-7 rounded-2xl shadow-card hover:shadow-luxury transition-smooth hover:-translate-y-1">
                <w.icon className="text-gold" size={32} />
                <h3 className="mt-4 text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
