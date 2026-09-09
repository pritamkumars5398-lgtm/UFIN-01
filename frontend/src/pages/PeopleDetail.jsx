import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ChevronRight, Check, ChevronDown, ChevronUp, ShieldCheck, Cpu, MessageCircle,
} from "lucide-react";
import CompanyCTA from "../components/CompanyCTA";
import { peopleAll } from "../data/peopleContent";

const kindLabel = { service: "Service", solution: "Solution", pet: "Pets" };

export default function PeopleDetail() {
  const { slug } = useParams();
  const data = peopleAll[slug];
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) return <Navigate to="/people" replace />;

  return (
    <div className="bg-white min-h-screen">
      {/* ── HERO ── */}
      <section
        className="relative min-h-[60vh] flex items-center pt-28 pb-16 px-6"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(11,31,51,0.93), rgba(11,31,51,0.6)), url('${data.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight size={14} />
            <Link to="/people" className="hover:text-white transition">For people</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">{data.title}</span>
          </div>
          <span className="inline-block bg-[#4E8F89] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            {kindLabel[data.kind] || "For people"}
          </span>
          <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            {data.title}
          </h1>
          <p className="text-xl text-white/85 font-medium mb-4 max-w-2xl">{data.tagline}</p>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl">{data.intro}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/consultation"
              className="px-8 py-4 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-extrabold rounded-xl transition text-base shadow-lg"
            >
              Order a tracker
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

      {/* ── PRICE STRIP ── */}
      <section className="bg-[#0B1F33] py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:divide-x divide-white/10">
          <div>
            <div className="text-3xl font-black text-[#4E8F89] mb-1">{data.priceEquip}</div>
            <div className="text-white/60 text-sm">Equipment &amp; installation</div>
          </div>
          <div>
            <div className="text-3xl font-black text-[#4E8F89] mb-1">{data.priceSub}</div>
            <div className="text-white/60 text-sm">Subscription per object</div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* ── MAIN ── */}
          <div className="lg:col-span-2 space-y-16">
            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-black text-[#0B1F33] mb-8">What you get</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#f7f8f9] p-5 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-[#4E8F89]/10 flex items-center justify-center shrink-0">
                      <Check size={16} className="text-[#4E8F89]" />
                    </div>
                    <span className="text-slate-700 text-sm font-medium leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            {data.features?.length > 0 && (
              <div>
                <h2 className="text-2xl font-black text-[#0B1F33] mb-8">How it works</h2>
                <div className="space-y-4">
                  {data.features.map((f, i) => (
                    <div key={i} className="border border-slate-200 rounded-2xl p-6">
                      <h3 className="font-bold text-[#0B1F33] mb-2">{f.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Scenarios */}
            {data.scenarios?.length > 0 && (
              <div>
                <h2 className="text-2xl font-black text-[#0B1F33] mb-8">Example setups</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {data.scenarios.map((s, i) => (
                    <div key={i} className="bg-[#EAF5F3] rounded-2xl p-6 border border-[#4E8F89]/15">
                      <h3 className="font-bold text-[#0B1F33] mb-1">{s.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                      <p className="text-[#4E8F89] font-black text-sm">{s.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ */}
            {data.faqs?.length > 0 && (
              <div>
                <h2 className="text-2xl font-black text-[#0B1F33] mb-8">Questions and answers</h2>
                <div className="space-y-3">
                  {data.faqs.map((f, i) => (
                    <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left bg-slate-50/50 hover:bg-slate-50 transition"
                      >
                        <span className="font-bold text-[#0B1F33] text-sm pr-4">{f.q}</span>
                        {openFaq === i ? (
                          <ChevronUp className="w-5 h-5 text-[#4E8F89] shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                        )}
                      </button>
                      {openFaq === i && (
                        <div className="px-6 pb-5 pt-2 border-t border-slate-100">
                          <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <div className="space-y-8">
            {data.device && (
              <div className="bg-[#0B1F33] rounded-2xl p-8 text-white">
                <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                  <Cpu className="text-[#4E8F89]" size={20} />
                  Recommended device
                </h3>
                <p className="font-black text-xl mb-1">{data.device.name}</p>
                <p className="text-white/60 text-sm mb-6">{data.device.note}</p>
                <Link
                  to="/resources/equipment"
                  className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-bold transition text-sm"
                >
                  Browse all equipment <ChevronRight size={14} />
                </Link>
              </div>
            )}

            <div className="bg-gradient-to-br from-[#EAF5F3] to-white rounded-2xl p-8 border border-[#4E8F89]/20">
              <ShieldCheck className="text-[#4E8F89] mb-3" size={28} />
              <h3 className="font-bold text-[#0B1F33] text-lg mb-2">Free 2-week trial</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Try the platform on your device before you commit. No card required.
              </p>
              <Link
                to="/consultation"
                className="w-full flex items-center justify-center gap-2 bg-[#f59e0b] hover:bg-[#ffae00] text-black py-3 rounded-lg font-extrabold transition text-sm"
              >
                Start the trial
              </Link>
            </div>

            <a
              href="https://t.me/tekonika_systems"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#229ED9] hover:bg-[#1a8bc4] text-white py-3 rounded-lg font-bold transition text-sm"
            >
              <MessageCircle size={18} /> Ask on Telegram
            </a>
          </div>
        </div>
      </div>

      {/* ── OTHER CATEGORIES ── */}
      <section className="py-16 px-6 bg-[#f7f8f9] border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-black text-[#0B1F33] mb-6">Other things you can track</h2>
          <div className="flex flex-wrap gap-3">
            {Object.entries(peopleAll)
              .filter(([key]) => key !== slug)
              .map(([key, v]) => (
                <Link
                  key={key}
                  to={`/people/${key}`}
                  className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-600 hover:border-[#4E8F89] hover:text-[#4E8F89] transition"
                >
                  {v.title}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CompanyCTA />
    </div>
  );
}
