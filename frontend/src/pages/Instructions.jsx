import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FileText, Search, ChevronRight, Cpu } from "lucide-react";
import PageHero from "../components/PageHero";
import CompanyCTA from "../components/CompanyCTA";
import { instructionGroups, connectSteps, instructionModels } from "../data/resourcesContent";
import heroImg from "../assets/driver.png";

export default function Instructions() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const q = query.trim().toLowerCase();
  const groups = instructionGroups
    .map((g) => ({
      ...g,
      items: g.items.filter(
        (it) =>
          !q ||
          it.title.toLowerCase().includes(q) ||
          it.desc.toLowerCase().includes(q)
      ),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Instructions for trackers"
        subtitle="Connection and setup guides for every supported tracker model and the Tekonika Systems apps."
        image={heroImg}
        crumbs={[{ label: "Resources", to: "/resources" }, { label: "Instructions" }]}
      />

      {/* ── Universal connect steps ── */}
      <section className="py-16 px-6 lg:px-8 bg-[#f7f8f9]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-[#0B1F33] mb-3 text-center">
            How to connect any tracker
          </h2>
          <p className="text-slate-400 text-sm text-center mb-10">
            Four steps that apply to almost every device
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {connectSteps.map((s, i) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 border border-slate-100">
                <div className="w-9 h-9 rounded-full bg-[#4E8F89] text-white text-sm font-black flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-[#0B1F33] text-sm mb-2">{s.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Browse by device ── */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-[#0B1F33] mb-3">Browse by device</h2>
          <p className="text-slate-400 text-sm mb-10">Pick your model to open its connection guide.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {instructionModels.map((m) => {
              const Card = (
                <>
                  <div className="h-28 bg-[#f7f8f9] rounded-xl flex items-center justify-center p-4 mb-3">
                    <img
                      src={m.image}
                      alt={m.name}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#4E8F89]">{m.tag}</span>
                  <p className="font-bold text-[#0B1F33] text-sm leading-snug mt-0.5">{m.name}</p>
                </>
              );
              return m.to ? (
                <Link
                  key={m.name}
                  to={m.to}
                  className="group bg-white border border-slate-200 rounded-2xl p-4 hover:border-[#4E8F89] hover:shadow-md transition"
                >
                  {Card}
                </Link>
              ) : (
                <a
                  key={m.name}
                  href="#guides"
                  className="group bg-white border border-slate-200 rounded-2xl p-4 hover:border-[#4E8F89] hover:shadow-md transition"
                >
                  {Card}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Model guides ── */}
      <section id="guides" className="py-16 px-6 lg:px-8 bg-[#f7f8f9]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <h2 className="text-2xl font-black text-[#0B1F33]">Guides by model</h2>
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 md:w-72">
              <Search size={16} className="text-slate-400 shrink-0" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search model or topic"
                className="flex-1 bg-transparent text-sm focus:outline-none placeholder-slate-400"
              />
            </div>
          </div>

          {groups.length === 0 && (
            <p className="text-slate-400 text-sm">Nothing matches "{query}".</p>
          )}

          <div className="space-y-12">
            {groups.map((g) => (
              <div key={g.group}>
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#4E8F89] mb-5">
                  <Cpu size={14} /> {g.group}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {g.items.map((it) => (
                    <div
                      key={it.title}
                      className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition flex flex-col"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#4E8F89]/10 flex items-center justify-center mb-4">
                        <FileText size={18} className="text-[#4E8F89]" />
                      </div>
                      <h4 className="font-bold text-[#0B1F33] text-sm mb-2 group-hover:text-[#4E8F89] transition">
                        {it.title}
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed flex-1">{it.desc}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#4E8F89]">
                        {it.steps} steps <ChevronRight size={13} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Help ── */}
      <section className="pb-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto bg-[#EAF5F3] rounded-3xl p-8 md:p-10 border border-[#4E8F89]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-black text-[#0B1F33] text-lg mb-1">Stuck on setup?</h2>
            <p className="text-slate-500 text-sm">
              24/7 technical support can connect remotely and finish the configuration for you.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="https://t.me/tekonika_systems"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#229ED9] hover:bg-[#1a8bc4] text-white font-bold rounded-xl text-sm transition"
            >
              Telegram
            </a>
            <Link
              to="/contacts"
              className="px-6 py-3 bg-white border border-slate-200 text-[#0B1F33] font-bold rounded-xl text-sm hover:border-[#4E8F89] transition"
            >
              All contacts
            </Link>
          </div>
        </div>
      </section>

      <CompanyCTA />
    </div>
  );
}
