import type { Metadata } from "next";
import { ContactForm } from "../_components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Elite Diesel Service · Cheyenne, WY",
  description: "Elite Diesel Service. 104 Robert Ave, Cheyenne, WY 82007. Call (307) 400-5090. Open Monday to Friday, 8am to 5pm.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-sm bg-[#0a0a0a] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 80% 40%, rgba(200,16,46,0.4) 0%, transparent 60%)",
          }}
        />
        <div className="container relative">
          <div className="badge mb-4" style={{ background: "rgba(200,16,46,0.15)", color: "#ff9fac", borderColor: "rgba(200,16,46,0.4)" }}>Find Us</div>
          <h1 className="font-display uppercase text-5xl md:text-7xl font-bold text-white mt-4 mb-5 tracking-tight leading-[0.95]">
            Get In <span className="text-ember">Touch.</span>
          </h1>
          <p className="text-[#cbd5e1] text-lg max-w-2xl leading-relaxed">
            Call the shop, stop by, or send a message. We&apos;ll tell you straight what your truck needs. 104 Robert Ave, Cheyenne, Wyoming.
          </p>
        </div>
      </section>

      <section className="section bg-[#f9f7f4]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-10">
              <div>
                <div className="badge mb-5">Contact Details</div>
                <div className="flex flex-col gap-6 mt-4">
                  {[
                    {
                      label: "Phone",
                      content: (
                        <a href="tel:3074005090" className="font-display text-3xl font-bold text-[#1a1a1a] hover:text-[#c8102e] transition-colors tracking-tight">
                          (307) 400-5090
                        </a>
                      ),
                    },
                    {
                      label: "Address",
                      content: (
                        <a href="https://maps.google.com/?q=104+Robert+Ave+Cheyenne+WY+82007" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#1a1a1a] hover:text-[#c8102e] transition-colors leading-snug">
                          104 Robert Ave<br />Cheyenne, WY 82007
                        </a>
                      ),
                    },
                    {
                      label: "Hours",
                      content: (
                        <div>
                          <div className="text-base font-semibold text-[#1a1a1a]">Monday to Friday</div>
                          <div className="font-display text-[#c8102e] font-bold text-xl tracking-tight">8:00 AM to 5:00 PM</div>
                          <div className="text-[#888] text-sm mt-1">Closed daily 12pm to 1pm</div>
                          <div className="text-[#888] text-sm">Saturday &amp; Sunday closed</div>
                        </div>
                      ),
                    },
                    {
                      label: "Rates",
                      content: (
                        <div className="flex flex-col gap-1">
                          <div><span className="font-display text-[#c8102e] font-bold text-lg">$175/hr</span> <span className="text-[#666] text-sm">Trucks &amp; Equipment</span></div>
                          <div><span className="font-display text-[#c8102e] font-bold text-lg">$250/hr</span> <span className="text-[#666] text-sm">Motorhomes</span></div>
                        </div>
                      ),
                    },
                    {
                      label: "Area",
                      content: (
                        <div className="text-sm text-[#444] leading-relaxed">
                          Serving Wyoming, Colorado, Nebraska, Montana and the greater Rocky Mountain region. Trucks regularly drive 500+ miles to our bay.
                        </div>
                      ),
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-5 items-start">
                      <div className="text-[#888] text-xs font-semibold uppercase tracking-wider w-14 pt-1 shrink-0">{item.label}</div>
                      <div>{item.content}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="badge mb-4">Follow Us</div>
                <a href="https://www.facebook.com/elitediesel307/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#e8e2da] bg-white text-sm font-semibold text-[#444] hover:border-[#d97706] hover:text-[#d97706] transition-all shadow-sm">
                  Facebook @elitediesel307
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="flex flex-col gap-4">
              <div className="badge mb-1">Location</div>
              <div className="rounded-2xl overflow-hidden border border-[#e8e2da] shadow-sm aspect-[4/3] bg-[#f0ece5]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.123!2d-104.8202!3d41.1399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876938d70987b5f1%3A0x1adead9ed13de632!2s104%20Robert%20Ave%2C%20Cheyenne%2C%20WY%2082007!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Elite Diesel Service location"
                />
              </div>
              <a href="https://maps.google.com/?q=104+Robert+Ave+Cheyenne+WY+82007" target="_blank" rel="noopener noreferrer" className="btn-outline justify-center">
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Before You Come In — prep checklist */}
      <section className="section bg-white border-t border-[#e8e2da]">
        <div className="container max-w-4xl reveal">
          <div className="text-center mb-10">
            <div className="badge mb-3">Save Time</div>
            <h2 className="font-display uppercase text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-3 mb-3 tracking-tight">Before You Come In</h2>
            <p className="text-[#666] leading-relaxed max-w-xl mx-auto">
              Have this ready and we&apos;ll be halfway to a diagnosis before you park.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-5">
            {[
              {
                head: "Year, make, model, engine.",
                body: "Mileage if you’ve got it.",
              },
              {
                head: "Any active codes.",
                body: "Take a picture of the dash if you can.",
              },
              {
                head: "What the truck is doing.",
                body: "“Won’t start” is less useful than “cranks, no fuel.”",
              },
              {
                head: "What’s already been replaced.",
                body: "So we don’t sell you the same part twice.",
              },
            ].map((item) => (
              <li key={item.head} className="flex gap-4 items-start bg-[#f9f7f4] border border-[#e8e2da] rounded-2xl p-5">
                <span className="font-display text-2xl font-bold text-[#c8102e] leading-none shrink-0">→</span>
                <div>
                  <div className="font-display font-bold text-[#1a1a1a] uppercase text-sm tracking-wide mb-1">{item.head}</div>
                  <div className="text-sm text-[#555] leading-relaxed">{item.body}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section bg-[#f9f7f4] border-t border-[#e8e2da]">
        <div className="container max-w-3xl reveal">
          <div className="text-center mb-10">
            <div className="badge mb-3">Send a Message</div>
            <h2 className="font-display uppercase text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-3 mb-3 tracking-tight">Rather Write Than Call?</h2>
            <p className="text-[#666] leading-relaxed max-w-xl mx-auto">
              Drop the details of what your truck is doing (or not doing) and a tech will get back to you. For emergencies, always call. The phone is faster.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="section-sm bg-[#0a0a0a] text-white border-t border-[#1f2937]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display uppercase font-bold text-2xl text-white mb-1 tracking-tight">Ready to bring your truck in?</div>
            <div className="text-[#94a3b8] text-sm">Give us a call. We&apos;ll get you squared away.</div>
          </div>
          <a href="tel:3074005090" className="btn-primary text-base py-3.5 px-8 shrink-0">
            ☎ Call (307) 400-5090
          </a>
        </div>
      </section>
    </>
  );
}
