import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Clock } from "lucide-react";
import PageHero from "../components/PageHero";
import CompanyCTA from "../components/CompanyCTA";
import { blogPosts } from "../data/companyContent";
import heroImg from "../assets/about-highway.png";

export default function Blog() {
  const [category, setCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))],
    []
  );

  const filtered =
    category === "All" ? blogPosts : blogPosts.filter((p) => p.category === category);

  const [lead, ...rest] = filtered;

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Blog"
        subtitle="Expert articles on transport monitoring, fleet efficiency and vehicle security."
        image={heroImg}
        crumbs={[{ label: "Company", to: "/company" }, { label: "Blog" }]}
      />

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filter */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
                  category === c
                    ? "bg-[#4E8F89] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Lead */}
          {lead && (
            <Link
              to={`/blog/${lead.slug}`}
              className="group grid lg:grid-cols-2 gap-8 items-center rounded-3xl overflow-hidden border border-slate-100 hover:shadow-lg transition mb-12"
            >
              <div className="relative min-h-[280px] overflow-hidden">
                <img
                  src={lead.image}
                  alt={lead.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-8 lg:p-12">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#4E8F89]">
                  {lead.category}
                </span>
                <h2 className="text-2xl lg:text-3xl font-black text-[#0B1F33] mt-3 mb-4 leading-snug group-hover:text-[#4E8F89] transition">
                  {lead.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-5">{lead.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span>{lead.author}</span>
                  <span>·</span>
                  <span>{lead.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {lead.readTime}
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition flex flex-col"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#4E8F89] mb-2">
                    {p.category}
                  </span>
                  <h3 className="font-bold text-[#0B1F33] leading-snug mb-2 group-hover:text-[#4E8F89] transition">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{p.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mt-4 pt-4 border-t border-slate-100">
                    <span>{p.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {p.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CompanyCTA
        heading="Have a topic you want covered?"
        subtitle="Tell us what you would like to read about fleet monitoring and telematics."
      />
    </div>
  );
}
