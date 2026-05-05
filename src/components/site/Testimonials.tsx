import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Mrs. Ifeoma Eze", role: "Homeowner, Lagos", text: "Evans Property made buying our family home in Lekki effortless. The team handled everything — from inspection to title verification. Truly professional!" },
  { name: "Mr. Babatunde Williams", role: "Investor, Abuja", text: "I've worked with several agencies, but Evans is in a different league. Honest pricing, verified listings, and excellent follow-up. Highly recommended." },
  { name: "Chiamaka Obi", role: "Tenant, Port Harcourt", text: "Found my apartment within a week. The agent was patient, knowledgeable and gave me options that perfectly matched my budget. Five stars!" },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-navy">What Our Clients Say</h2>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-7">
          {reviews.map((r) => (
            <div key={r.name} className="relative bg-card p-8 rounded-2xl shadow-card hover:shadow-luxury transition-smooth">
              <Quote className="absolute top-6 right-6 text-gold/20" size={48} />
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="mt-4 text-foreground leading-relaxed italic">"{r.text}"</p>
              <div className="mt-6 pt-5 border-t border-border">
                <div className="font-display font-bold text-navy">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
