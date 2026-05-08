import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold">Let's Find Your Perfect Property</h2>
          <p className="mt-4 text-white/75">
            Reach out for inquiries, viewings or expert advice. Our team responds within hours.
          </p>

          <div className="mt-10 space-y-6">
            {[
              { icon: Phone, label: "Phone", value: "+234 800 EVANS NG" },
              { icon: Mail, label: "Email", value: "hello@evansproperty.ng" },
              { icon: MapPin, label: "Office", value: "12 Admiralty Way, Lekki Phase 1, Lagos, Nigeria" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-gold/15 border border-gold/30 text-gold shrink-0">
                  <c.icon size={20} />
                </div>
                <div>
                  <div className="text-sm text-gold uppercase tracking-wider">{c.label}</div>
                  <div className="font-medium">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="bg-white text-foreground rounded-2xl p-8 shadow-luxury space-y-5"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>Don't fill this out: <input name="bot-field" /></label>
          </p>
          <h3 className="font-display text-2xl font-bold text-navy">Send Us a Message</h3>
          <div>
            <label htmlFor="contact-name" className="text-sm font-medium text-foreground">Full Name</label>
            <input id="contact-name" name="name" required maxLength={100} type="text"
              className="mt-1 w-full px-4 py-3 rounded-lg bg-secondary outline-none focus:ring-2 focus:ring-gold" />
          </div>
          <div>
            <label htmlFor="contact-email" className="text-sm font-medium text-foreground">Email</label>
            <input id="contact-email" name="email" required maxLength={255} type="email"
              className="mt-1 w-full px-4 py-3 rounded-lg bg-secondary outline-none focus:ring-2 focus:ring-gold" />
          </div>
          <div>
            <label htmlFor="contact-phone" className="text-sm font-medium text-foreground">Phone</label>
            <input id="contact-phone" name="phone" required maxLength={30} type="tel"
              className="mt-1 w-full px-4 py-3 rounded-lg bg-secondary outline-none focus:ring-2 focus:ring-gold" />
          </div>
          <div>
            <label htmlFor="contact-message" className="text-sm font-medium text-foreground">Message</label>
            <textarea id="contact-message" name="message" required maxLength={1000} rows={4}
              className="mt-1 w-full px-4 py-3 rounded-lg bg-secondary outline-none focus:ring-2 focus:ring-gold resize-none" />
          </div>
          <Button variant="navy" size="lg" className="w-full" type="submit">Contact Us Today</Button>
        </form>
      </div>
    </section>
  );
}
