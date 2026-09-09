import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart, Settings, MapPin, Quote, ChevronDown, Star, ArrowRight,
} from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import CompanyCTA from "../components/CompanyCTA";
import { peopleLanding } from "../data/peopleContent";
import { peopleSolutions, peoplePets } from "../data/peopleContent";

const stepIcons = [ShoppingCart, Settings, MapPin];

export default function People() {
  const [openFaq, setOpenFaq] = useState(null);
  const { hero, proof, steps, audience, testimonials, faqs } = peopleLanding;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const labelFor = (key) =>
    peopleSolutions[key]?.title || peoplePets[key]?.title || key;

  return (
    <div className="bg-white min-h-screen">
      {/* ── HERO ── */}
      <section
        className="relative min-h-[80vh] flex items-center pt-28 pb-20 px-6"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(11,31,51,0.92), rgba(11,31,51,0.55)), url('${hero.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <span className="inline-block bg-[#4E8F89]/20 text-[#4E8F89] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            For people
          </span>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight max-w-3xl mb-5">
            {hero.title}
          </h1>
          <p className="text-white/80 text-lg lg:text-xl max-w-xl mb-10">{hero.tagline}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/consultation"
              className="px-8 py-4 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-extrabold rounded-xl transition text-base shadow-lg"
            >
              {hero.cta}
            </Link>
            <Link
              to="/people/tariffs"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold hover:bg-white/10 rounded-xl transition text-base backdrop-blur-sm"
            >
              See tariffs
            </Link>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="bg-[#0B1F33] py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="text-[#4E8F89] mx-auto mb-5" size={36} />
          <p className="text-white text-xl lg:text-2xl font-medium leading-snug mb-4">
            "{proof.quote}"
          </p>
          <p className="text-white/50 text-sm">— {proof.author}</p>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-[#0B1F33] mb-14 text-center">
            Getting started takes minutes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => {
              const Icon = stepIcons[i];
              return (
                <div key={s.title} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#EAF5F3] flex items-center justify-center mx-auto mb-5">
                    <Icon size={26} className="text-[#4E8F89]" />
                  </div>
                  <div className="text-xs font-black text-[#4E8F89] mb-2">STEP {i + 1}</div>
                  <h3 className="font-bold text-[#0B1F33] text-lg mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-4 mt-12">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B1F33] text-white text-sm font-semibold rounded-xl">
              <FaApple size={16} /> App Store
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B1F33] text-white text-sm font-semibold rounded-xl">
              <FaGooglePlay size={15} /> Google Play
            </span>
          </div>
        </div>
      </section>

      {/* ── WHAT CAN YOU TRACK ── */}
      <section className="py-20 px-6 bg-[#f7f8f9]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-[#0B1F33] mb-3 text-center">
            What can you keep track of?
          </h2>
          <p className="text-slate-400 text-sm text-center mb-12">
            Pick a category to see devices, features and pricing
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {audience.map(({ key }) => (
              <Link
                key={key}
                to={`/people/${key}`}
                className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-[#4E8F89] hover:shadow-md transition text-center"
              >
                <MapPin size={20} className="text-[#4E8F89] mx-auto mb-3" />
                <span className="text-sm font-semibold text-[#0B1F33] group-hover:text-[#4E8F89] transition">
                  {labelFor(key)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-[#0B1F33] mb-12 text-center">
            What families tell us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#f7f8f9] rounded-2xl p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <p className="font-bold text-[#0B1F33] text-sm">{t.name}</p>
                <p className="text-slate-400 text-xs">{t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 px-6 bg-[#f7f8f9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#0B1F33] mb-10 text-center">
            Questions and answers
          </h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-bold text-[#0B1F33] hover:text-[#4E8F89] transition"
                >
                  {f.q}
                  <ChevronDown
                    size={16}
                    className={`text-slate-400 transition-transform shrink-0 ml-4 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-4">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/people/tariffs"
              className="inline-flex items-center gap-1 text-sm font-bold text-[#4E8F89] hover:underline"
            >
              Compare all tariffs <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <CompanyCTA
        heading="Not sure which device you need?"
        subtitle="Tell us who or what you want to keep safe and we'll recommend the right tracker and plan."
      />
    </div>
  );
}
