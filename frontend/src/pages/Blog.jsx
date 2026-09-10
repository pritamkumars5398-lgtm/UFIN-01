import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Clock } from "lucide-react";
import PageHero from "../components/PageHero";
import CompanyCTA from "../components/CompanyCTA";
import { blogPosts } from "../data/companyContent";
import heroImg from "../assets/about-highway.png";

const PER_PAGE = 6;

export default function Blog() {
  const [category, setCategory] = useState("All");
  const [visible, setVisible] = useState(PER_PAGE);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setVisible(PER_PAGE);
  }, [category]);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))],
    []
  );

  const filtered =
    category === "All" ? blogPosts : blogPosts.filter((p) => p.category === category);
  const shown = filtered.slice(0, visible);

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Blog"
        subtitle="Expert articles on transport monitoring, fleet efficiency and vehicle security."
        image={heroImg}
        crumbs={[{ label: "Company", to: "/company" }, { label: "Blog" }]}
      />

      <section className="py-16 px-6 lg:px-8">
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

          {/* List */}
          <div className="divide-y divide-slate-100">
            {shown.map((p) => (
              <article key={p.slug} className="py-8 first:pt-0">
                <Link
                  to={`/blog/${p.slug}`}
                  className="group grid sm:grid-cols-[220px_1fr] gap-6 items-start"
                >
                  <div className="aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden bg-[#f7f8f9]">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 mb-2">
                      <span className="font-bold uppercase tracking-wider text-[#4E8F89]">{p.category}</span>
                      <span>·</span>
                      <span>{p.date}</span>
                      <span>·</span>
                      <span>{p.author}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {p.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg lg:text-xl font-black text-[#0B1F33] leading-snug mb-2 group-hover:text-[#4E8F89] transition">
                      {p.title}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">{p.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-[#4E8F89]">
                      Read more <ChevronRight size={15} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {shown.length === 0 && (
            <p className="text-slate-400 text-sm py-10 text-center">No articles in this category yet.</p>
          )}

          {visible < filtered.length && (
            <div className="pt-8 text-center">
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
        heading="Have a topic you want covered?"
        subtitle="Tell us what you would like to read about fleet monitoring and telematics."
      />
    </div>
  );
}
