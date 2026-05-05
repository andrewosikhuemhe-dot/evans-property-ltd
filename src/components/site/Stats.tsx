import { Building2, Users, Award, MapPinned } from "lucide-react";

const stats = [
  { icon: Building2, value: "500+", label: "Properties Listed" },
  { icon: Users, value: "1,000+", label: "Happy Clients" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: MapPinned, value: "36", label: "States Covered" },
];

export function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="text-center p-6 rounded-xl border border-white/10 hover:border-gold/50 transition-smooth"
          >
            <s.icon className="mx-auto text-gold" size={36} />
            <div className="mt-3 font-display text-3xl lg:text-4xl font-bold text-gold">{s.value}</div>
            <div className="mt-1 text-sm text-white/70 uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
