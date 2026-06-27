import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

export default function Contacts() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const departments = [
    {
      title: "Business Development",
      desc: "Cooperation with partners and suppliers",
      email: "a@tekonikasystems.online",
    },
    {
      title: "Connection Questions",
      desc: "Sales, connecting new objects and client's own trackers",
      email: "a@tekonikasystems.online",
    },
    {
      title: "Media Center",
      desc: "Communicating with clients regarding new products, advertising, and partnership",
      email: "osa@tekonikasystems.online",
    },
    {
      title: "Tech Support 24/7",
      desc: "Technical questions with clients and suppliers",
      email: "support@tekonikasystems.online",
    },
  ];

  return (
    <div className="font-sans">
      {/* ─── Hero Banner ─── */}
      <section className="relative min-h-[380px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#0b1f33]/75" />

        <div className="relative max-w-7xl mx-auto px-6 pb-20 pt-40 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/50 text-sm mb-5">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Contacts</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Contacts
          </h1>
          <p className="text-white/65 text-lg max-w-xl">
            Where we are and how to reach us. Providing monitoring systems for people and transport with competitive prices and fast installation.
          </p>
        </div>
      </section>

      {/* ─── Departments ─── */}
      <section className="bg-[#f7f7f7] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dep, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded hover:shadow-lg hover:-translate-y-1 transition duration-300 border-t-4 border-[#177f73]"
              >
                <h3 className="text-lg font-bold text-[#0b1f33] mb-3">
                  {dep.title}
                </h3>
                <p className="text-sm text-slate-500 mb-6 h-12">
                  {dep.desc}
                </p>
                <a
                  href={`mailto:${dep.email}`}
                  className="text-[#177f73] font-semibold hover:text-[#0b1f33] transition flex items-center gap-2"
                >
                  <Mail size={16} />
                  {dep.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Info & Form Section ─── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-start">
            
            {/* Left: General Info & Branches */}
            <div>
              <h2 className="text-4xl font-bold text-[#132133] mb-12">
                Get in touch
              </h2>

              <div className="grid sm:grid-cols-2 gap-10 mb-12">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-[#177f73] uppercase tracking-widest mb-3">
                    <Phone size={18} /> Phone
                  </h3>
                  <a
                    href="tel:88004440481"
                    className="text-2xl text-[#102133] font-bold hover:text-[#177f73] transition"
                  >
                    8 (800) 444-04-81
                  </a>
                  <p className="text-sm text-slate-500 mt-1">Free across Russia</p>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-[#177f73] uppercase tracking-widest mb-3">
                    <Clock size={18} /> Business Hours
                  </h3>
                  <p className="text-[#102133] leading-7">
                    Mon - Fri: 9:00 - 18:00<br />
                    Sat - Sun: Weekend
                  </p>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-[#177f73] uppercase tracking-widest mb-3">
                    <MapPin size={18} /> Head Office
                  </h3>
                  <p className="text-[#102133] leading-7">
                    Letchika Babushkina St, 1/3, 7th floor, office 17<br />
                    Moscow, 129344
                  </p>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-[#177f73] uppercase tracking-widest mb-3">
                    <MessageCircle size={18} /> Chat Online
                  </h3>
                  <a
                    href="https://t.me/tekonika_systems"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center h-10 px-6 rounded bg-[#229ED9] text-white font-medium hover:bg-[#1a8bc0] transition"
                  >
                    Telegram Chat
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-10">
                <h3 className="text-2xl font-bold text-[#132133] mb-6">Our Branches</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-600">
                    <MapPin className="text-[#177f73] shrink-0 mt-0.5" size={20} />
                    <span>Podolsk, Selkhoztekhnika, Domodedovskoe highway, 20I, STO "Podolsk"</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <MapPin className="text-[#177f73] shrink-0 mt-0.5" size={20} />
                    <span>Balashikha, Obyezdnoe highway, 10a, STO "Balashikha"</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right: Contact Form */}
            <div className="bg-[#f8faf9] p-8 rounded-lg shadow-sm border border-gray-100">
              
              <div className="bg-[#fff4e5] border border-[#ffe0b2] rounded p-4 mb-8">
                <h4 className="text-[#e65100] font-bold mb-1 flex items-center gap-2">
                  <span className="text-xl">🔥</span> PROMO!
                </h4>
                <p className="text-[#e65100] text-sm leading-relaxed">
                  Submit a request online now! We will contact you during business hours and give you a <strong>10% discount</strong>!
                </p>
              </div>

              <h3 className="text-2xl font-bold text-[#132133] mb-2">
                Leave a Request
              </h3>
              <p className="text-sm text-slate-500 mb-8">
                Fill out the form — we will contact you shortly
              </p>

              {/* CEO Contact */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300"
                  alt="Alexey Osipov"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-[#132133]">Alexey Osipov</h4>
                  <p className="text-sm text-slate-500">CEO</p>
                </div>
              </div>

              {sent ? (
                <div className="text-center py-10 bg-white rounded border border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-[#edf5f3] flex items-center justify-center mx-auto mb-4">
                    <Send className="w-6 h-6 text-[#177f73]" />
                  </div>
                  <p className="font-bold text-[#132133] text-lg">Request sent!</p>
                  <p className="text-slate-500 text-sm mt-1">We will contact you during the business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full h-12 px-4 border border-slate-200 rounded outline-none focus:border-[#177f73] transition bg-white"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="(999) 999-9999 *"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full h-12 px-4 border border-slate-200 rounded outline-none focus:border-[#177f73] transition bg-white"
                  />
                  <textarea
                    placeholder="Briefly describe your task or question..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded outline-none focus:border-[#177f73] transition resize-none bg-white"
                  />
                  <button
                    type="submit"
                    className="w-full h-12 rounded bg-[#ff8c00] text-white font-bold hover:bg-[#e67e00] transition flex justify-center items-center gap-2"
                  >
                    Send Request <Send size={18} />
                  </button>
                  <label className="flex gap-2 text-xs text-slate-500 items-start cursor-pointer mt-2">
                    <input
                      type="checkbox"
                      required
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 accent-[#ff8c00]"
                    />
                    I consent to the processing of personal data
                  </label>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ─── Map ─── */}
      <section className="bg-[#f7f7f7] pb-0">
        <div className="w-full h-[500px] relative">
          <iframe
            title="Tekonika Systems Office Moscow"
            src="https://maps.google.com/maps?q=55.835832,37.680819&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-500"
          />
        </div>
      </section>
    </div>
  );
}
