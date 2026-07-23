import { ChevronUp } from "lucide-react";

const WhatsAppButton = () => (
  <>
    {/* Scroll to top button */}
    <a
      href="#top"
      className="fixed bottom-20 right-6 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-primary/90 text-primary-foreground border border-white/20 shadow-lg backdrop-blur-sm transition-all hover:scale-110 active:scale-95"
      aria-label="Back to top"
    >
      <ChevronUp size={22} />
    </a>

    {/* Floating WhatsApp Action Pill */}
    <a
      href="https://wa.me/918879793777"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 active:scale-95 group border border-white/20"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="/whatsapp.svg"
        alt="WhatsApp"
        className="w-7 h-7 md:w-8 md:h-8 object-contain shrink-0 filter drop-shadow"
      />
      <span className="text-xs md:text-sm font-bold tracking-wide whitespace-nowrap pr-1 text-white">
        Chat with us
      </span>
    </a>
  </>
);

export default WhatsAppButton;
