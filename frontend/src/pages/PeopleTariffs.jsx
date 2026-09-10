import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronRight } from "lucide-react";
import PageHero from "../components/PageHero";
import CompanyCTA from "../components/CompanyCTA";
import { peopleTariffs } from "../data/peopleContent";
import heroImg from "../assets/about-highway.png";

const compareRows = [
  { label: "Several calls a day asking \"where are you?\"", before: true, after: false, invert: true },
  { label: "Remote engine block", before: false, after: true },
  { label: "Trip statistics and history", before: false, after: true },
  { label: "Arrival / departure alerts", before: false, after: true },
  { label: "Driving-style and speed alerts", before: false, after: true },
];

export default function PeopleTariffs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Tariffs"
        subtitle="Simple monthly plans, billed per object. Change or cancel any time."
        image={heroImg}
        crumbs={[{ label: "For people", to: "/people" }, { label: "Tariffs" }]}
      />

      {/* ── Plans ── */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {peopleTariffs.map((p) => (
            <div
              key={p.name}
              className={`rounded-3xl p-8 border flex flex-col ${
                p.highlight
                  ? "border-[#4E8F89] shadow-xl ring-1 ring-[#4E8F89]/20"
                  : "border-slate-200"
              }`}
            >
              {p.highlight && (
                <span className="self-start text-[10px] font-black uppercase tracking-widest bg-[#4E8F89] text-white px-3 py-1 rounded-full mb-4">
                  Most popular
                </span>
              )}
              <h3 className="font-black text-[#0B1F33] text-xl mb-1">{p.name}</h3>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-3xl font-black text-[#0B1F33]">{p.price}</span>
                <span className="text-slate-400 text-sm mb-1">/ {p.period.replace("per ", "")}</span>
              </div>
              <p className="text-slate-400 text-xs mb-6">{p.interval}</p>
              <ul className="space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check size={15} className="text-[#4E8F89] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/consultation"
                className={`mt-8 text-center font-extrabold rounded-xl py-3.5 text-sm transition ${
                  p.highlight
                    ? "bg-[#f59e0b] hover:bg-[#ffae00] text-black"
                    : "bg-[#EAF5F3] hover:bg-[#4E8F89] hover:text-white text-[#4E8F89]"
                }`}
              >
                Choose {p.name}
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-400 text-xs mt-8">
          Equipment is paid once, from 3 500 ₽ depending on the device. Pay-As-You-Go pricing means
          you're only billed for what an object actually uses.
        </p>
      </section>

      {/* ── Before / after ── */}
      <section className="py-16 px-6 lg:px-8 bg-[#f7f8f9]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-[#0B1F33] mb-8 text-center">
            Life before and after
          </h2>
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-[1fr_90px_90px] text-xs font-bold uppercase tracking-wider text-slate-400 px-6 py-4 border-b border-slate-100">
              <span />
              <span className="text-center">Before</span>
              <span className="text-center">After</span>
            </div>
            {compareRows.map((r) => {
              const beforeYes = r.invert ? r.before : r.before;
              return (
                <div
                  key={r.label}
                  className="grid grid-cols-[1fr_90px_90px] items-center px-6 py-4 border-b border-slate-50 last:border-0 text-sm text-slate-600"
                >
                  <span>{r.label}</span>
                  <span className="text-center">
                    {r.before ? (
                      <span className={r.invert ? "text-rose-500 font-bold" : "text-[#4E8F89] font-bold"}>
                        Yes
                      </span>
                    ) : (
                      <span className="text-slate-300">—</span>
                    )}
                  </span>
                  <span className="text-center">
                    {r.after ? (
                      <span className="text-[#4E8F89] font-bold">Yes</span>
                    ) : (
                      <span className={r.invert ? "text-[#4E8F89] font-bold" : "text-slate-300"}>
                        {r.invert ? "No" : "—"}
                      </span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6 lg:px-8 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-black text-[#0B1F33] mb-4">
            Two weeks free, then pick a plan
          </h2>
          <p className="text-slate-500 mb-8">
            Start with any device and the full feature set. Decide once you've seen it working.
          </p>
          <Link
            to="/consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-extrabold rounded-xl transition text-sm"
          >
            Start free trial <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      <CompanyCTA />
    </div>
  );
}
