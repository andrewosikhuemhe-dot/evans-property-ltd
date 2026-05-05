import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How do I verify a property is legitimate?", a: "Every Evans Property listing is physically inspected and legally vetted by our in-house legal team. We provide title documents, survey plans and Governor's consent verification before any transaction." },
  { q: "Can I pay rent in installments?", a: "Yes. We offer flexible payment plans on select properties — including 6-month, quarterly and monthly options for qualifying tenants. Speak to an agent to learn what's available." },
  { q: "How do I book a property viewing?", a: "Simply click 'View Details' on any listing or contact us via WhatsApp/phone. Our agents will schedule a guided tour at a time that works for you, including evenings and weekends." },
  { q: "Do you handle properties outside Lagos?", a: "Absolutely. We operate nationwide with active listings in Abuja, Port Harcourt, Ibadan, Enugu, Kano and beyond." },
  { q: "What fees should I expect?", a: "Our agency fee is transparent and disclosed upfront — typically 10% for rentals and 5% for sales. There are no hidden charges." },
];

export function FAQ() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <div className="text-center">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">FAQ</span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold text-navy">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-secondary rounded-xl border-none px-6">
              <AccordionTrigger className="text-left font-semibold text-navy hover:text-gold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
