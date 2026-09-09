import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import PageHero from "../components/PageHero";
import CompanyCTA from "../components/CompanyCTA";
import { newsPosts } from "../data/companyContent";
import heroImg from "../assets/transport.png";

export default function News() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [lead, ...rest] = newsPosts;

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="News"
        subtitle="Product updates, customer stories and company announcements."
        image={heroImg}
        crumbs={[{ label: "Company", to: "/company" }, { label: "News" }]}
      />

      {/* ── Lead story ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Link
            to={`/news/${lead.slug}`}
            className="group grid lg:grid-cols-2 gap-8 items-center rounded-3xl overflow-hidden border border-slate-100 hover:shadow-lg transition"
          >
            <div className="relative min-h-[280px] overflow-hidden">
              <img
                src={lead.image}
                alt={lead.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-8 lg:p-12">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f59e0b]">
                {lead.tag} · {lead.date}
              </span>
              <h2 className="text-2xl lg:text-3xl font-black text-[#0B1F33] mt-3 mb-4 leading-snug group-hover:text-[#4E8F89] transition">
                {lead.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">{lead.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm font-bold text-[#4E8F89]">
                Read more <ChevronRight size={16} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((n) => (
            <Link
              key={n.slug}
              to={`/news/${n.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={n.image}
                  alt={n.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#4E8F89] mb-2">
                  {n.tag} · {n.date}
                </span>
                <h3 className="font-bold text-[#0B1F33] leading-snug mb-2 group-hover:text-[#4E8F89] transition">
                  {n.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{n.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CompanyCTA />
    </div>
  );
}
