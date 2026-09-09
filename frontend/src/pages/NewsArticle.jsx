import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronRight, ArrowLeft } from "lucide-react";
import CompanyCTA from "../components/CompanyCTA";
import { newsPosts } from "../data/companyContent";

export default function NewsArticle() {
  const { slug } = useParams();
  const post = newsPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <Navigate to="/news" replace />;

  const more = newsPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="bg-white min-h-screen">
      <section
        className="relative min-h-[52vh] flex items-end pt-28 pb-14 px-6"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(11,31,51,0.92), rgba(11,31,51,0.65)), url('${post.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl mx-auto w-full">
          <div className="flex items-center gap-2 text-sm text-white/60 mb-5">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight size={14} />
            <Link to="/news" className="hover:text-white transition">News</Link>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#f59e0b]">
            {post.tag} · {post.date}
          </span>
          <h1 className="text-3xl lg:text-4xl font-black text-white leading-tight mt-3">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8">{post.excerpt}</p>
          <div className="space-y-5">
            {post.body.map((p, i) => (
              <p key={i} className="text-slate-600 text-base leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <Link
            to="/news"
            className="inline-flex items-center gap-2 mt-12 text-sm font-bold text-[#4E8F89] hover:underline"
          >
            <ArrowLeft size={16} /> All news
          </Link>
        </div>
      </article>

      {more.length > 0 && (
        <section className="pb-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-black text-[#0B1F33] mb-6">More news</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {more.map((n) => (
                <Link
                  key={n.slug}
                  to={`/news/${n.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition"
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={n.image} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#0B1F33] text-sm leading-snug group-hover:text-[#4E8F89] transition">
                      {n.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CompanyCTA />
    </div>
  );
}
