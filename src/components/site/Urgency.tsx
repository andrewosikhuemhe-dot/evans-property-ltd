import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

export function Urgency() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy text-white p-10 lg:p-16 shadow-luxury">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gold/15 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-widest">
                <Flame size={14} /> Hot Deals
              </div>
              <h2 className="mt-4 text-3xl lg:text-5xl font-bold leading-tight">
                Limited Listings <span className="text-gold">Selling Fast</span>
              </h2>
              <p className="mt-4 text-white/80 max-w-lg">
                Exclusive properties at unbeatable prices. These deals won't last — secure your
                dream home before they're gone.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Button asChild variant="gold" size="xl">
                <a href="#contact">Grab This Deal Now</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
