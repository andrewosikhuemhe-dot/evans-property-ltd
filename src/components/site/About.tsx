import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import img from "@/assets/property-1.jpg";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={img} alt="Evans Property office" loading="lazy" width={1024} height={768}
            className="rounded-2xl shadow-luxury w-full h-[480px] object-cover" />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-gold text-navy p-6 rounded-xl shadow-gold">
            <div className="font-display text-4xl font-bold">10+</div>
            <div className="text-sm font-semibold uppercase tracking-wider">Years Trusted</div>
          </div>
        </div>
        <div>
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">About Us</span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-navy">
            Nigeria's Most Trusted Real Estate Partner
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Evans Property LTD has helped over 1,000 Nigerian families and businesses buy, sell, and
            rent properties nationwide. With offices across Lagos, Abuja, Port Harcourt and Ibadan,
            we combine local expertise with world-class service to deliver real estate experiences
            you can trust.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "100% verified property listings — no scams",
              "Licensed and certified real estate professionals",
              "End-to-end support from viewing to documentation",
              "Transparent pricing with zero hidden fees",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-foreground">
                <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={20} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <Button asChild variant="navy" size="lg" className="mt-8">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
