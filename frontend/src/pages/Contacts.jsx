import React, { useState } from "react";
import { TrendingUp, Wifi, Share2, Headphones, Send } from "lucide-react";
import contactsHeroImg from "../assets/contacts_hero_phone.png";
import CompanyCTA from "../components/CompanyCTA";
import telegramIcon from "../assets/logos_telegram.svg";
import rutubeIcon from "../assets/icon_rutube_dark_color_circle.svg";

const departments = [
  {
    Icon: TrendingUp,
    title: "Business Development Department",
    desc: "Cooperation with partners and suppliers",
    email: "a@ufin.online",
  },
  {
    Icon: Wifi,
    title: "For connection questions",
    desc: "Sales, connection of new objects and the client's own trackers",
    email: "a@ufin.online",
  },
  {
    Icon: Share2,
    title: "Media Center",
    desc: "Communicating with clients on new products, advertising, and partnerships",
    email: "osa@ufin.online",
  },
  {
    Icon: Headphones,
    title: "24/7 technical support",
    desc: "Technical issues with clients and suppliers",
    email: "support@ufin.online",
  },
];

export default function Contacts() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="font-sans">

      {/* ─────────────────────────────────────────────
          SECTION 1 — Hero
          Dark background image, white text bottom-left
      ───────────────────────────────────────────── */}
      <section className="relative h-[380px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${contactsHeroImg}')` }}
        />
        {/* Dark gradient: strong dark left, semi-dark right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(20,30,40,0.82) 0%, rgba(20,30,40,0.60) 45%, rgba(20,30,40,0.35) 100%)",
          }}
        />
        <div className="relative z-10 w-full max-w-[1380px] mx-auto px-10 pb-16">
          <h1 className="text-[46px] font-bold text-white leading-tight mb-3">
            Contacts
          </h1>
          <p className="text-white/80 text-[17px]">
            Where we are and how to get to us
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 2 — Department Cards
          White bg, 4 equal border cards, gray border
      ───────────────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="max-w-[1380px] mx-auto px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {departments.map(({ Icon, title, desc, email }, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl p-7 flex flex-col hover:shadow-md transition-shadow duration-200"
              >
                <Icon size={40} strokeWidth={1.5} className="text-[#177f73] mb-5" />
                <h3 className="font-bold text-[#1a2332] text-[15px] leading-snug mb-2">
                  {title}
                </h3>
                <p className="text-gray-400 text-[13px] leading-relaxed flex-grow mb-5">
                  {desc}
                </p>
                <a
                  href={`mailto:${email}`}
                  className="text-[#177f73] text-[13px] font-medium hover:underline"
                >
                  {email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 3 — Map + Contact Info
          Light mint bg, full-width:
          Left (58%) = Yandex map  |  Right (42%) = info
      ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#e5f2ef" }}>
        <div
          className="grid"
          style={{ gridTemplateColumns: "58fr 42fr", minHeight: "420px" }}
        >
          {/* Map — full height */}
          <div className="relative min-h-[420px]">
            <iframe
              title="UFIN Control Office Map"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A&source=constructor&ll=37.688534%2C55.840721&z=15&pt=37.688534,55.840721,pm2rdm"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Info panel */}
          <div className="px-12 py-12 flex flex-col gap-7">
            {/* Telephone */}
            <div>
              <p className="text-[11px] text-gray-400 mb-1 tracking-wide">Telephone</p>
              <a
                href="tel:88004440481"
                className="text-[#1a2332] text-[22px] font-bold hover:text-[#177f73] transition"
              >
                8 (800) 444-04-81
              </a>
            </div>

            {/* Address */}
            <div>
              <p className="text-[11px] text-gray-400 mb-1 tracking-wide">Address</p>
              <p className="text-[#1a2332] text-[15px] font-semibold leading-relaxed">
                Moscow, 129344, Letchika Babushkina St.,<br />
                Building 1, Block 3, Floor 7, Office 17
              </p>
            </div>

            {/* Social networks */}
            <div>
              <p className="text-[11px] text-gray-400 mb-3 tracking-wide">
                We are on social networks
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://t.me/UfinSupportEc"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-80 transition"
                >
                  <img src={telegramIcon} alt="Telegram" className="w-9 h-9" />
                </a>
                <a
                  href="https://rutube.ru/channel/48036433/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-80 transition"
                >
                  <img src={rutubeIcon} alt="Rutube" className="w-9 h-9" />
                </a>
              </div>
            </div>

            {/* Yandex 4.9 rating badge */}
            <div className="inline-flex items-center gap-3 bg-white rounded-xl px-4 py-3 w-fit shadow-sm border border-gray-100">
              <span className="text-[#e84444] text-lg">📍</span>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[#1a2332] text-[15px]">4.9</span>
                  <div className="flex gap-[2px]">
                    {[1, 2, 3, 4].map((i) => (
                      <svg key={i} className="w-3.5 h-3.5 fill-[#FFC700]" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    {/* 4.5 star - partial */}
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20">
                      <defs>
                        <linearGradient id="starHalf">
                          <stop offset="75%" stopColor="#FFC700" />
                          <stop offset="75%" stopColor="#D1D5DB" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#starHalf)"
                        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 mt-0.5">Партнер организации Яндекса</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 4 — Our Branches + Contact Form
          White bg, heading + 2 addresses, then
          Left: Yandex map  |  Right: form (centered)
      ───────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-[1380px] mx-auto px-10">
          {/* Branch heading & addresses */}
          <h2 className="text-[40px] font-bold text-[#1a2332] mb-5">
            Our branches
          </h2>
          <div className="space-y-1.5 mb-12 text-[#1a2332] text-[14px] leading-relaxed">
            <p>
              Podolsk, Selkhoztekhnika settlement, Domodedovskoye shosse, 20I, Podolsk service station (near Avto-M)
            </p>
            <p>
              Balashikha, Bypass Highway, Building 10a, Balashikha Service Station
            </p>
          </div>

          {/* Map + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Yandex map */}
            <div className="rounded-xl overflow-hidden" style={{ height: "420px" }}>
              <iframe
                title="UFIN Branches"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A&source=constructor&ll=37.688534%2C55.840721&z=13&pt=37.688534,55.840721,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
              />
            </div>

            {/* Contact form */}
            <div>
              <div className="text-center mb-7">
                <h3 className="text-[22px] font-bold text-[#1a2332] mb-2">
                  Contact us
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed max-w-[280px] mx-auto">
                  Leave your contact information and our specialist will contact you as soon as possible.
                </p>
              </div>

              {sent ? (
                <div className="text-center py-14 border border-gray-100 rounded-xl bg-gray-50">
                  <div className="w-14 h-14 rounded-full bg-[#edf5f3] flex items-center justify-center mx-auto mb-4">
                    <Send className="w-5 h-5 text-[#177f73]" />
                  </div>
                  <p className="font-bold text-[#1a2332] text-lg">Request sent!</p>
                  <p className="text-gray-400 text-sm mt-1">We will contact you during the business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 max-w-[380px] mx-auto">
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full h-12 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#177f73] text-[14px] text-[#1a2332] placeholder-gray-400 bg-white"
                  />
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[14px] select-none">+7</span>
                    <input
                      type="tel"
                      required
                      placeholder="(999) 999-9999*"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full h-12 pl-10 pr-4 border border-gray-200 rounded-lg outline-none focus:border-[#177f73] text-[14px] text-[#1a2332] placeholder-gray-400 bg-white"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Mail"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full h-12 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#177f73] text-[14px] text-[#1a2332] placeholder-gray-400 bg-white"
                  />
                  <button
                    type="submit"
                    className="w-full h-12 rounded-lg bg-[#177f73] hover:bg-[#136860] text-white font-semibold text-[15px] transition"
                  >
                    Send
                  </button>
                  <label className="flex gap-2.5 text-[12px] text-gray-500 items-start cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      required
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 accent-[#177f73] shrink-0"
                    />
                    <span>
                      I agree to{" "}
                      <a href="/privacy-policy" className="text-[#177f73] underline">
                        processing of personal data
                      </a>
                    </span>
                  </label>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SECTION 5 — Call to Action Banner
      ───────────────────────────────────────────── */}
      <CompanyCTA
        heading="Ready to get started?"
        subtitle="Leave an online request now! We will contact you during business hours and give you a 10% discount on the initial equipment installation."
        buttonLabel="Submit Request"
        to="/consultation"
      />

    </div>
  );
}
