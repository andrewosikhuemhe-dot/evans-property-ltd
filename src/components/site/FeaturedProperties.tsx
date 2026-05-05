import { Bed, Bath, MapPin, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";

const properties = [
  { img: p1, title: "Modern 5-Bedroom Duplex", location: "Lekki Phase 1, Lagos", price: "₦185,000,000", tag: "For Sale", beds: 5, baths: 6, sqft: "650 sqm" },
  { img: p2, title: "Luxury Skyline Apartment", location: "Victoria Island, Lagos", price: "₦8,500,000/yr", tag: "For Rent", beds: 3, baths: 3, sqft: "220 sqm" },
  { img: p3, title: "Stone-Finish Terrace Home", location: "Maitama, Abuja", price: "₦220,000,000", tag: "For Sale", beds: 4, baths: 5, sqft: "480 sqm" },
  { img: p4, title: "Penthouse with City View", location: "Ikoyi, Lagos", price: "₦25,000,000/yr", tag: "For Rent", beds: 4, baths: 4, sqft: "380 sqm" },
  { img: p5, title: "Bungalow with Pool", location: "Bodija, Ibadan", price: "₦95,000,000", tag: "For Sale", beds: 4, baths: 4, sqft: "550 sqm" },
  { img: p6, title: "Contemporary Studio Block", location: "GRA, Port Harcourt", price: "₦2,800,000/yr", tag: "For Rent", beds: 1, baths: 1, sqft: "85 sqm" },
];

export function FeaturedProperties() {
  return (
    <section id="properties" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Featured Listings</span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-navy">Handpicked Premium Properties</h2>
          <p className="mt-4 text-muted-foreground">
            Explore our curated selection of verified homes available across Nigeria.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {properties.map((p) => (
            <article
              key={p.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-luxury transition-smooth hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-60">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${
                    p.tag === "For Sale" ? "bg-gold text-navy" : "bg-navy text-white"
                  }`}
                >
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="text-2xl font-bold text-navy font-display">{p.price}</div>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin size={14} className="text-gold" /> {p.location}
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4">
                  <span className="flex items-center gap-1"><Bed size={16} className="text-gold" /> {p.beds}</span>
                  <span className="flex items-center gap-1"><Bath size={16} className="text-gold" /> {p.baths}</span>
                  <span className="flex items-center gap-1"><Square size={16} className="text-gold" /> {p.sqft}</span>
                </div>
                <Button variant="navy" className="w-full mt-5">View Details</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
