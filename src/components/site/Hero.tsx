import heroImg from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Home, DollarSign, ShieldCheck, BadgeCheck, Star, Phone, Clock, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Luxury Nigerian property at golden hour"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 w-full">
        <div className="max-w-3xl text-white animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-widest">
            <BadgeCheck size={14} /> Nigeria's Trusted Real Estate Partner
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Find Your Dream <span className="text-gold">Property</span> in Nigeria
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl">
            From luxury homes in Lekki to premium apartments in Abuja — discover verified
            properties with Nigeria's most trusted real estate agency.
          </p>

          {/* Social proof row */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/85">
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
              <a href="#properties">Browse Properties</a>
            </Button>
            <Button asChild variant="navy" size="xl" className="bg-white text-navy hover:bg-white/90">
              <a href="#contact">Book Free Consultation</a>
            </Button>
          </div>

          {/* Quick contact strip */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
            <a href="tel:+2348000000000" className="inline-flex items-center gap-2 text-white/90 hover:text-gold transition-smooth">
              <Phone size={16} className="text-gold" /> <span>Call: +234 800 000 0000</span>
            </a>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="inline-flex items-center gap-2 text-white/80">
              <TrendingUp size={16} className="text-gold" /> 28 properties sold this month
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-12 lg:mt-16 bg-white rounded-2xl shadow-luxury p-5 lg:p-6 animate-fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary">
              <MapPin className="text-gold shrink-0" size={20} />
              <input
                type="text"
                placeholder="Location (e.g. Lekki)"
                className="bg-transparent w-full outline-none text-sm text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary">
              <Home className="text-gold shrink-0" size={20} />
              <select className="bg-transparent w-full outline-none text-sm text-foreground">
                <option>For Sale</option>
                <option>For Rent</option>
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
            <Button variant="navy" size="lg" className="h-full min-h-12">
              <Search size={18} /> Search Properties
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
