import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, MapPin, Briefcase, Clock, Check } from "lucide-react";
import PageHero from "../components/PageHero";
import CompanyCTA from "../components/CompanyCTA";
import {
  vacancies,
  vacancyIntro,
  vacancyPerks,
  vacancyImage,
} from "../data/companyContent";
import employeesImg from "../assets/employees.png";

export default function Vacancies() {
  const [open, setOpen] = useState(vacancies[0]?.slug ?? null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Vacancies"
        subtitle="Build cloud control services used by hundreds of companies."
        image={employeesImg}
        crumbs={[{ label: "Company", to: "/company" }, { label: "Vacancies" }]}
      />

      {/* ── Intro ── */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-[#0B1F33] mb-5">Work at Tekonika Systems</h2>
            <p className="text-slate-600 text-lg leading-relaxed">{vacancyIntro}</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            <img src={vacancyImage} alt="Team at work" className="w-full h-[320px] object-cover" />
          </div>
        </div>
      </section>

      {/* ── Perks ── */}
      <section className="py-16 px-6 lg:px-8 bg-[#f7f8f9]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-[#0B1F33] mb-10 text-center">
            What we offer
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {vacancyPerks.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-6 border border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-[#4E8F89]/10 flex items-center justify-center mb-4">
                  <Check size={18} className="text-[#4E8F89]" />
                </div>
                <h3 className="font-bold text-[#0B1F33] mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open positions ── */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-[#0B1F33] mb-3">Open positions</h2>
          <p className="text-slate-400 text-sm mb-10">
            {vacancies.length} roles currently open. Don't see a fit? Send us your CV anyway.
          </p>

          <div className="space-y-4">
            {vacancies.map((v) => {
              const isOpen = open === v.slug;
              return (
                <div
                  key={v.slug}
                  className="border border-slate-200 rounded-2xl overflow-hidden bg-white"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : v.slug)}
                    className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition"
                  >
                    <div>
                      <h3 className="font-bold text-[#0B1F33] mb-2">{v.title}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                        <span className="flex items-center gap-1"><MapPin size={12} /> {v.location}</span>
                        <span className="flex items-center gap-1"><Briefcase size={12} /> {v.experience}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {v.type}</span>
                      </div>
                    </div>
                    {isOpen ? (
                      <ChevronUp size={20} className="text-[#4E8F89] shrink-0 mt-1" />
                    ) : (
                      <ChevronDown size={20} className="text-slate-400 shrink-0 mt-1" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-7 pt-1 border-t border-slate-100">
                      <p className="text-slate-600 text-sm leading-relaxed my-5">{v.summary}</p>
                      <p className="text-xs text-slate-400 mb-6">{v.format}</p>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold text-[#0B1F33] text-sm mb-3">Responsibilities</h4>
                          <ul className="space-y-2">
                            {v.responsibilities.map((r) => (
                              <li key={r} className="flex items-start gap-2 text-sm text-slate-600">
                                <Check size={14} className="text-[#4E8F89] shrink-0 mt-0.5" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-[#0B1F33] text-sm mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {v.requirements.map((r) => (
                              <li key={r} className="flex items-start gap-2 text-sm text-slate-600">
                                <Check size={14} className="text-[#4E8F89] shrink-0 mt-0.5" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {v.niceToHave && (
                        <div className="mt-6">
                          <h4 className="font-bold text-[#0B1F33] text-sm mb-2">Nice to have</h4>
                          <div className="flex flex-wrap gap-2">
                            {v.niceToHave.map((n) => (
                              <span key={n} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                                {n}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-6 p-4 bg-[#EAF5F3] rounded-xl">
                        <h4 className="font-bold text-[#0B1F33] text-sm mb-2">We offer</h4>
                        <ul className="space-y-1.5">
                          {v.offer.map((o) => (
                            <li key={o} className="flex items-start gap-2 text-sm text-slate-600">
                              <Check size={14} className="text-[#4E8F89] shrink-0 mt-0.5" />
                              {o}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={`mailto:hr@tekonikasystems.online?subject=${encodeURIComponent(
                          `Application: ${v.title}`
                        )}`}
                        className="inline-flex items-center justify-center mt-6 px-8 py-3 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-extrabold rounded-xl text-sm transition"
                      >
                        Apply for this role
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center text-sm text-slate-500">
            Speculative applications:{" "}
            <a href="mailto:hr@tekonikasystems.online" className="text-[#4E8F89] font-semibold hover:underline">
              hr@tekonikasystems.online
            </a>
          </div>
        </div>
      </section>

      <CompanyCTA
        heading="Questions about a role?"
        subtitle="Reach out and the hiring team will get back to you."
      />
    </div>
  );
}
