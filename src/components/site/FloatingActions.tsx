import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/2347044131476"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-luxury hover:scale-110 transition-smooth"
      >
        <MessageCircle size={26} />
      </a>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="grid place-items-center w-12 h-12 rounded-full bg-navy text-gold border border-gold/40 shadow-luxury hover:bg-gold hover:text-navy transition-smooth animate-fade-in"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
