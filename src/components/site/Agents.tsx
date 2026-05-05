import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import a1 from "@/assets/agent-1.jpg";
import a2 from "@/assets/agent-2.jpg";
import a3 from "@/assets/agent-3.jpg";

const agents = [
  { img: a1, name: "Chinedu Okafor", role: "Senior Sales Consultant", phone: "+234 803 000 1234", email: "chinedu@evansproperty.ng" },
  { img: a2, name: "Adaeze Nwosu", role: "Lettings Manager", phone: "+234 802 000 5678", email: "adaeze@evansproperty.ng" },
  { img: a3, name: "Tunde Adebayo", role: "Investment Advisor", phone: "+234 805 000 9999", email: "tunde@evansproperty.ng" },
];

export function Agents() {
  return (
    <section id="agents" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Our Team</span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-navy">Meet Our Expert Agents</h2>
          <p className="mt-4 text-muted-foreground">
            Friendly, professional and ready to guide you through every step.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-7">
          {agents.map((a) => (
            <div key={a.name} className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-luxury transition-smooth hover:-translate-y-1">
              <div className="overflow-hidden h-80">
                <img src={a.img} alt={a.name} loading="lazy" width={768} height={896}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-xl font-bold text-navy">{a.name}</h3>
                <p className="text-gold font-semibold text-sm mt-1">{a.role}</p>
                <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                  <p className="flex items-center justify-center gap-2"><Phone size={14} /> {a.phone}</p>
                  <p className="flex items-center justify-center gap-2"><Mail size={14} /> {a.email}</p>
                </div>
                <Button variant="navy" className="mt-5 w-full">Contact Agent</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
