import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <ScrollFadeIn>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-center">Contact Us</h1>
          <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">
            Get in touch for a free consultation and quote on your roofing requirements.
          </p>
        </ScrollFadeIn>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <ScrollFadeIn>
            {submitted ? (
              <div className="flex items-center justify-center h-full bg-card rounded-lg border border-border p-12 text-center max-w-lg mx-auto">
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                    <Send size={32} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold">Thank You!</h3>
                  <p className="mt-2 text-muted-foreground">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-lg border border-border p-8 space-y-5 max-w-lg mx-auto">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="+91 88797 93777"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-md bg-accent text-accent-foreground font-semibold transition-transform hover:scale-[1.02]"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </ScrollFadeIn>

          {/* Info + Map */}
          <ScrollFadeIn>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <a href="tel:+918879793777" className="font-medium">+91 88797 93777</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <a href="mailto:info@perfectroofing.in" className="font-medium">info@perfectroofing.in</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[hsl(142,70%,45%)]/10 text-[hsl(142,70%,45%)]">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">WhatsApp</div>
                    <a href="https://wa.me/918879793777" target="_blank" rel="noopener noreferrer" className="font-medium">Chat with us</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Address</div>
                    <div className="font-medium">104, Telange Estate, Opposite Vir Rubber Company,<br />K.B. Road, Near Forest Naka, Chikhloli Ambernath W,<br />Ambernath, Thane‑421501, Maharashtra</div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border border-border h-64 md:h-80">
                <iframe
                  src="https://www.google.com/maps?q=104,+Telange+Estate,+Opposite+Vir+Rubber+Company,+K.B.+Road,+Near+Forest+Naka,+Chikhloli+Ambernath+W,+Ambernath,+Thane-421501,+Maharashtra&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
