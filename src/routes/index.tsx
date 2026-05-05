import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { FeaturedProperties } from "@/components/site/FeaturedProperties";
import { Urgency } from "@/components/site/Urgency";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Agents } from "@/components/site/Agents";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Newsletter } from "@/components/site/Newsletter";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evans Property LTD — Premium Real Estate in Nigeria" },
      { name: "description", content: "Buy, sell and rent verified luxury properties across Nigeria with Evans Property LTD — Nigeria's most trusted real estate agency." },
      { property: "og:title", content: "Evans Property LTD — Premium Real Estate in Nigeria" },
      { property: "og:description", content: "Find your dream home in Nigeria with verified listings, expert agents and nationwide coverage." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <FeaturedProperties />
      <Urgency />
      <About />
      <Services />
      <Agents />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}
