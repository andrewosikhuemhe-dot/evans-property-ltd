import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <div className="bg-gradient-gold rounded-3xl p-10 lg:p-14 text-center shadow-gold">
          <Mail className="mx-auto text-navy" size={40} />
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-navy">Stay Updated on New Listings</h2>
          <p className="mt-3 text-navy/80 max-w-xl mx-auto">
            Be the first to know about exclusive properties and price drops in your area.
          </p>
          <form className="mt-7 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-lg bg-white/95 outline-none text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-navy"
            />
            <Button variant="navy" size="lg" type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
