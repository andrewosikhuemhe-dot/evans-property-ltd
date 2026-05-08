import heroImg from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Home, DollarSign, ShieldCheck, BadgeCheck, Star, Phone, Clock, TrendingUp, FileCheck2, KeyRound, Handshake, MessageCircle } from "lucide-react";

const conversionPromises = [
  { icon: FileCheck2, title: "Verified before you pay", text: "Every listing is checked for ownership, location, pricing and documents." },
  { icon: KeyRound, title: "Move in with confidence", text: "We guide inspection, negotiation, paperwork and secure closing." },
  { icon: Handshake, title: "Free buyer consultation", text: "Tell us your budget and we shortlist strong options within 24 hours." },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-14 bg-gradient-hero text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold text-navy text-xs font-semibold uppercase tracking-widest shadow-gold">
              <BadgeCheck size={14} /> Nigeria's Trusted Real Estate Partner
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Buy, Rent or Invest in <span className="text-gold">Verified Nigerian Properties</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/90 max-w-2xl">
              Evans Property LTD helps serious buyers, renters and investors find safe,
              high-value homes across Nigeria without stress, hidden risks or wasted time.
            </p>

            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {conversionPromises.map((item) => (
                <div key={item.title} className="rounded-xl bg-navy p-4 border border-gold/30 shadow-luxury">
                  <item.icon className="text-gold" size={22} />
                  <h3 className="mt-3 font-semibold text-sm text-white">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/75">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span><strong className="text-white">4.9/5</strong> from 1,000+ clients</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-gold" />
                <span>100% Verified Listings</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-gold" />
                <span>24/7 Client Support</span>
              </div>
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

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              <a href="tel:+2348000000000" className="inline-flex items-center gap-2 rounded-md bg-navy px-4 py-3 text-white shadow-luxury hover:bg-gold hover:text-navy transition-smooth">
                <Phone size={16} /> <span>Call: +234 800 000 0000</span>
              </a>
              <span className="inline-flex items-center gap-2 rounded-md bg-gold px-4 py-3 text-navy font-semibold shadow-gold">
                <TrendingUp size={16} /> 28 properties sold this month
              </span>
            </div>
          </div>

          <div className="animate-fade-up">
            <div className="rounded-2xl bg-navy border border-gold/35 p-4 shadow-luxury">
              <img
                src={heroImg}
                alt="Premium Nigerian home listed by Evans Property LTD"
                className="w-full aspect-[4/3] object-cover rounded-xl"
                width={1920}
                height={1080}
              />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg bg-gold p-3 text-navy shadow-gold">
                  <div className="font-display text-2xl font-bold">500+</div>
                  <div className="text-xs font-semibold">Listings</div>
                </div>
                <div className="rounded-lg bg-background p-3 text-foreground shadow-card">
                  <div className="font-display text-2xl font-bold">36</div>
                  <div className="text-xs font-semibold">States</div>
                </div>
                <div className="rounded-lg bg-gold p-3 text-navy shadow-gold">
                  <div className="font-display text-2xl font-bold">24h</div>
                  <div className="text-xs font-semibold">Shortlist</div>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-background p-5 text-foreground shadow-card">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-gold shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold">Avoid fake agents and risky payments.</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Work with a trusted team that confirms documents, schedules inspections and protects your interest.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-10 bg-navy rounded-2xl border border-gold/35 shadow-luxury p-5 lg:p-6 animate-fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-background shadow-card">
              <MapPin className="text-gold shrink-0" size={20} />
              <input
                type="text"
                placeholder="Location (e.g. Lekki)"
                className="bg-background w-full outline-none text-sm text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-background shadow-card">
              <Home className="text-gold shrink-0" size={20} />
              <select className="bg-background w-full outline-none text-sm text-foreground">
                <option>For Sale</option>
                <option>For Rent</option>
              </select>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-background shadow-card">
              <DollarSign className="text-gold shrink-0" size={20} />
              <select className="bg-background w-full outline-none text-sm text-foreground">
                <option>Any Price</option>
                <option>₦5M – ₦20M</option>
                <option>₦20M – ₦50M</option>
                <option>₦50M – ₦150M</option>
                <option>₦150M+</option>
              </select>
            </div>
            <Button variant="navy" size="lg" className="h-full min-h-12">
              <Search size={18} /> Search Properties
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
