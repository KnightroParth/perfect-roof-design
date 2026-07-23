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

  const inputClass =
    "w-full px-4 py-2.5 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/45 text-sm focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent/50 backdrop-blur-sm transition-all";

  const labelClass = "block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5";

  return (
    <section id="contact" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <ScrollFadeIn>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-center">Contact Us</h1>
          <p className="mt-4 text-white/55 text-center max-w-xl mx-auto">
            Get in touch for a free consultation and quote on your roofing requirements.
          </p>
        </ScrollFadeIn>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* ── Left: Glass Form ── */}
          <ScrollFadeIn>
            {submitted ? (
              <div className="flex items-center justify-center min-h-[420px] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-12 text-center shadow-xl">
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent mb-4 border border-accent/30">
                    <Send size={28} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">Thank You!</h3>
                  <p className="mt-2 text-white/60">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-8 space-y-5 shadow-xl shadow-black/20"
              >
                {/* Full Name */}
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>

                {/* Email + Phone side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                      placeholder="+91 9999999999"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={labelClass}>Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-accent/25"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </ScrollFadeIn>

          {/* ── Right: Contact Info + Map ── */}
          <ScrollFadeIn>
            <div className="space-y-6">

              {/* Contact info grid: Phone + Email | WhatsApp + Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Phone */}
                <div className="flex items-start gap-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-5 py-4 shadow-md shadow-black/10">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-accent/20 text-accent shrink-0 border border-accent/25 mt-0.5">
                    <Phone size={17} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/55">Phone</div>
                    <a href="tel:+918879793777" className="text-sm font-semibold text-white hover:text-accent transition-colors break-words">
                      +91 88797 93777
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-5 py-4 shadow-md shadow-black/10">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-accent/20 text-accent shrink-0 border border-accent/25 mt-0.5">
                    <Mail size={17} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/55">Email</div>
                    <a href="mailto:info@perfectroofing.in" className="text-sm font-semibold text-white hover:text-accent transition-colors break-all">
                      info@perfectroofing.in
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-5 py-4 shadow-md shadow-black/10">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[hsl(142,70%,45%)]/20 text-[hsl(142,70%,50%)] shrink-0 border border-[hsl(142,70%,45%)]/30 mt-0.5">
                    <MessageCircle size={17} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/55">WhatsApp</div>
                    <a
                      href="https://wa.me/918879793777"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-[hsl(142,70%,50%)] transition-colors"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-5 py-4 shadow-md shadow-black/10">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-accent/20 text-accent shrink-0 border border-accent/25 mt-0.5">
                    <MapPin size={17} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/55">Address</div>
                    <div className="text-sm font-semibold text-white leading-snug">
                      104, Telange Estate,<br />
                      K.B. Road, Chikhloli<br />
                      Ambernath W, Thane-421501
                    </div>
                  </div>
                </div>
              </div>

              {/* Map with glass border */}
              <div className="rounded-2xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm shadow-xl shadow-black/20 h-64 md:h-72 p-1">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps?q=104,+Telange+Estate,+Opposite+Vir+Rubber+Company,+K.B.+Road,+Near+Forest+Naka,+Chikhloli+Ambernath+W,+Thane-421501,+Maharashtra&output=embed"
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

            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
