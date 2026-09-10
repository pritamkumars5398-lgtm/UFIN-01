import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import PageHero from "../components/PageHero";
import CompanyCTA from "../components/CompanyCTA";
import { newsPosts } from "../data/companyContent";
import heroImg from "../assets/transport.png";

const PER_PAGE = 5;

export default function News() {
  const [visible, setVisible] = useState(PER_PAGE);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shown = newsPosts.slice(0, visible);

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="News"
        subtitle="The latest news about our company — product updates, customer stories and announcements."
        image={heroImg}
        crumbs={[{ label: "Company", to: "/company" }, { label: "News" }]}
      />

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto divide-y divide-slate-100">
          {shown.map((n) => (
            <article key={n.slug} className="py-8 first:pt-0">
              <Link
                to={`/news/${n.slug}`}
                className="group grid sm:grid-cols-[220px_1fr] gap-6 items-start"
              >
                <div className="aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden bg-[#f7f8f9]">
                  <img
                    src={n.image}
                    alt={n.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 mb-2">
                    <span className="font-bold uppercase tracking-wider text-[#4E8F89]">{n.tag}</span>
                    <span>·</span>
                    <span>{n.date}</span>
                    {n.author && (
                      <>
                        <span>·</span>
                        <span>{n.author}</span>
                      </>
                    )}
                  </div>
                  <h2 className="text-lg lg:text-xl font-black text-[#0B1F33] leading-snug mb-2 group-hover:text-[#4E8F89] transition">
                    {n.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">{n.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-[#4E8F89]">
                    Read more <ChevronRight size={15} />
                  </span>
                </div>
              </Link>
            </article>
          ))}

          {visible < newsPosts.length && (
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

      <CompanyCTA />
    </div>
  );
}
