import { MessageCircle, ChevronUp } from "lucide-react";

const WhatsAppButton = () => (
  <>
    <a
      href="#top"
      className="fixed bottom-20 right-6 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
      aria-label="Back to top"
    >
      <ChevronUp size={24} />
    </a>
    <a
      href="https://wa.me/918879793777"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-primary-foreground shadow-lg transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  </>
);

export default WhatsAppButton;
