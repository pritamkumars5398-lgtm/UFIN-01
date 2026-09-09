import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Rocket, Megaphone, MapPin, Cpu, Wrench, HandCoins, LifeBuoy,
  Check, ChevronRight, Send,
} from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";
import PageHero from "../components/PageHero";
import handshakeImg from "../assets/handshake.jpg";
import worldMap from "../assets/world-map-grey.png";

const opportunities = [
  { Icon: Rocket, title: "Building a business", desc: "You are launching or expanding a transport-monitoring venture and need a proven platform instead of building one from scratch." },
  { Icon: Megaphone, title: "Need marketing muscle", desc: "You have the customers and the field team, but want advertising, marketing materials and technical backing behind you." },
  { Icon: MapPin, title: "Regional coverage", desc: "You operate in an area where we have no presence yet and want to be the local face of the service." },
  { Icon: Cpu, title: "Equipment manufacturer", desc: "You produce trackers, sensors or recorders and are looking for a distribution and integration channel." },
];

const becomeSteps = [
  {
    who: "For companies",
    items: [
      "Submit a company profile with banking details",
      "Specify your tax registration form",
      "Upload your service price list",
    ],
  },
  {
    who: "For individuals",
    items: [
      "Provide full name and payment details",
      "Upload your pricing for installation and support",
      "Complete the mandatory training and accept the work conditions",
    ],
  },
];

const requirements = [
  "Technical education background",
  "A verified portfolio of completed installations",
  "Documented experience with satellite control systems, fuel sensors, temperature sensors and tachographs",
];

const benefits = [
  {
    Icon: HandCoins,
    title: "Commercial support",
    items: ["Business setup guidance", "Equipment discounts", "Modular pricing you control", "Client billing systems"],
  },
  {
    Icon: Megaphone,
    title: "Marketing support",
    items: ["Joint promotional campaigns", "Ready marketing materials", "Customer case studies"],
  },
  {
    Icon: LifeBuoy,
    title: "Technical support",
    items: ["Custom feature development", "Equipment selection consultation", "24/7 technical assistance"],
  },
];

export default function Partners() {
  const [form, setForm] = useState({ name: "", phone: "", consent: false });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="To partners"
        subtitle="A single team of navigation-service professionals, our own cloud technology, and room for you in it."
        image={handshakeImg}
        crumbs={[{ label: "Company", to: "/company" }, { label: "To partners" }]}
      />

      {/* ── Intro ── */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-[#0B1F33] mb-4">
            We would be glad to see you among our partners
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            For more than eight years we have been developing proprietary cloud technology for
            transport and staff monitoring. Partners get the platform, the brand and the support —
            and keep the client relationship.
          </p>
        </div>
      </section>

      {/* ── Opportunities ── */}
      <section className="py-16 px-6 lg:px-8 bg-[#f7f8f9]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-[#0B1F33] mb-10 text-center">
            Who partnership works for
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-[#4E8F89]/10 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[#4E8F89]" />
                </div>
                <h3 className="font-bold text-[#0B1F33] mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contractor network ── */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div
            className="rounded-3xl min-h-[300px] bg-cover bg-center border border-slate-100"
            style={{ backgroundImage: `url('${worldMap}')`, backgroundColor: "#EAF5F3" }}
          />
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/15 flex items-center justify-center mb-5">
              <Wrench size={22} className="text-[#d97706]" />
            </div>
            <h2 className="text-2xl font-black text-[#0B1F33] mb-4">Contractor network</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We recruit installers and support engineers across the country for device installation,
              calibration and maintenance. The network operates 24/7, and jobs are dispatched to the
              nearest available contractor.
            </p>
            <p className="text-slate-700 font-semibold text-sm mb-3">To join you need:</p>
            <ul className="space-y-2">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-slate-600">
                  <Check size={16} className="text-[#4E8F89] shrink-0 mt-0.5" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── How to register ── */}
      <section className="py-16 px-6 lg:px-8 bg-[#f7f8f9]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-[#0B1F33] mb-10 text-center">
            How to become a partner
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {becomeSteps.map(({ who, items }) => (
              <div key={who} className="bg-white rounded-2xl p-8 border border-slate-100">
                <h3 className="font-bold text-[#0B1F33] mb-5">{who}</h3>
                <ol className="space-y-4">
                  {items.map((it, i) => (
                    <li key={it} className="flex gap-4">
                      <span className="w-7 h-7 rounded-full bg-[#4E8F89] text-white text-xs font-black flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-sm text-slate-600 leading-relaxed">{it}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-[#0B1F33] mb-10 text-center">What partners get</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map(({ Icon, title, items }) => (
              <div key={title} className="bg-[#f7f8f9] rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 shadow-sm">
                  <Icon size={22} className="text-[#4E8F89]" />
                </div>
                <h3 className="font-bold text-[#0B1F33] mb-4">{title}</h3>
                <ul className="space-y-2.5">
                  {items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <Check size={15} className="text-[#4E8F89] shrink-0 mt-0.5" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact + form ── */}
      <section className="py-16 px-6 lg:px-8 bg-[#0B1F33]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="text-[#4E8F89] text-xs font-bold uppercase tracking-widest">
              Partnership desk
            </span>
            <h2 className="text-3xl font-black mt-3 mb-4">Let's talk terms</h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Sergey Chulsky, Technical Director, handles partner onboarding personally. Leave a
              request and he will get back to you during business hours — with a 10% discount on the
              first installation batch.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:88004440481" className="block text-white font-semibold hover:text-[#4E8F89] transition">
                8 (800) 444-04-81
              </a>
              <a href="mailto:partners@tekonikasystems.online" className="block text-white/70 hover:text-white transition">
                partners@tekonikasystems.online
              </a>
              <a
                href="https://t.me/tekonika_systems"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 bg-[#229ED9] hover:bg-[#1a8bc4] text-white text-sm font-bold rounded-full transition"
              >
                <FaTelegramPlane size={14} /> Telegram chat
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full bg-[#EAF5F3] flex items-center justify-center mx-auto mb-4">
                  <Send className="w-5 h-5 text-[#4E8F89]" />
                </div>
                <p className="font-black text-[#0B1F33] text-lg">Request sent</p>
                <p className="text-slate-400 text-sm mt-1">We will contact you during the business day.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <h3 className="font-black text-[#0B1F33] text-lg">Become a partner</h3>
                <input
                  required
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4E8F89]"
                />
                <div className="flex border border-slate-200 rounded-xl overflow-hidden focus-within:border-[#4E8F89]">
                  <span className="px-3 py-3 bg-slate-50 text-slate-400 text-sm border-r border-slate-200">+7</span>
                  <input
                    required
                    type="tel"
                    placeholder="(999) 999-99-99"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="flex-1 px-4 py-3 text-sm focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#f59e0b] hover:bg-[#ffae00] text-black font-black py-3.5 rounded-xl transition text-sm"
                >
                  Send request
                </button>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={form.consent}
                    onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                    className="mt-0.5 accent-[#4E8F89]"
                  />
                  <span className="text-slate-400 text-xs leading-relaxed">
                    I agree to the{" "}
                    <Link to="/privacy-policy" className="text-[#4E8F89] hover:underline">
                      processing of personal data
                    </Link>
                  </span>
                </label>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#4E8F89] py-14 px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-4">
            Ready to run monitoring in your region?
          </h2>
          <Link
            to="/consultation"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-extrabold rounded-xl transition text-sm"
          >
            Start the conversation <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
