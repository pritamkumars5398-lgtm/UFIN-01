import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Quote, ChevronRight, Star } from "lucide-react";
import PageHero from "../components/PageHero";
import CompanyCTA from "../components/CompanyCTA";
import { reviews } from "../data/companyContent";
import aboutHighway from "../assets/about-highway.png";

const PER_PAGE = 9;

export default function Reviews() {
  const [industry, setIndustry] = useState("All");
  const [visible, setVisible] = useState(PER_PAGE);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setVisible(PER_PAGE);
  }, [industry]);

  const industries = useMemo(
    () => ["All", ...Array.from(new Set(reviews.map((r) => r.industry)))],
    []
  );

  const filtered =
    industry === "All" ? reviews : reviews.filter((r) => r.industry === industry);
  const shown = filtered.slice(0, visible);

  const featured = reviews[0];

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Reviews from our clients"
        subtitle="Companies across construction, logistics, retail and energy on how the platform works for them."
        image={aboutHighway}
        crumbs={[{ label: "Company", to: "/company" }, { label: "Reviews" }]}
      />

      {/* ── Stats bar ── */}
      <section className="bg-[#0B1F33] py-10 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          {[
            { v: "400+", l: "Corporate clients" },
            { v: "4.9", l: "Average client rating" },
            { v: "8 yrs", l: "Average client tenure" },
            { v: "20+", l: "Industries served" },
          ].map((s, i) => (
            <div key={i} className={i !== 0 ? "pl-4" : ""}>
              <div className="text-3xl lg:text-4xl font-black text-[#4E8F89] mb-1">{s.v}</div>
              <div className="text-white/60 text-xs md:text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured review ── */}
      <section className="py-16 px-6 lg:px-8 bg-[#f7f8f9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-stretch bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
            <div className="relative min-h-[280px]">
              <img
                src={featured.image}
                alt={featured.company}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <Quote className="text-[#4E8F89] mb-5" size={36} />
              <p className="text-slate-700 text-lg leading-relaxed mb-6">"{featured.excerpt}"</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>
              <p className="font-black text-[#0B1F33]">{featured.author}</p>
              <p className="text-slate-500 text-sm mb-6">
                {featured.role}, {featured.company}
              </p>
              <Link
                to={`/reviews/${featured.slug}`}
                className="inline-flex items-center gap-1 text-sm font-bold text-[#4E8F89] hover:underline"
              >
                Read the full case <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter + grid ── */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setIndustry(ind)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
                  industry === ind
                    ? "bg-[#4E8F89] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shown.map((r) => (
              <div
                key={r.slug}
                className="flex flex-col bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between mb-4 h-10">
                  {r.logo ? (
                    <img src={r.logo} alt={r.company} className="h-8 max-w-[130px] object-contain" />
                  ) : (
                    <span className="font-black text-[#0B1F33] text-sm">{r.company}</span>
                  )}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#4E8F89] bg-[#4E8F89]/10 px-2 py-1 rounded">
                    {r.industry}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">"{r.excerpt}"</p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-bold text-[#0B1F33] text-sm">{r.author}</p>
                  <p className="text-slate-400 text-xs mb-3">
                    {r.role} · {r.date}
                  </p>
                  <Link
                    to={`/reviews/${r.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#4E8F89] hover:underline"
                  >
                    View case <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {visible < filtered.length && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setVisible((v) => v + PER_PAGE)}
                className="px-6 py-3 rounded-xl border border-slate-200 text-sm font-bold text-[#4E8F89] hover:border-[#4E8F89] transition"
              >
                Show more
              </button>
            </div>
          )}
        </div>
      </section>

      <CompanyCTA
        heading="Want a reference call?"
        subtitle="We can connect you with a client in your industry who runs a similar fleet."
      />
    </div>
  );
}
