import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronRight, ArrowLeft, Clock } from "lucide-react";
import CompanyCTA from "../components/CompanyCTA";
import { blogPosts } from "../data/companyContent";

export default function BlogArticle() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .concat(blogPosts.filter((p) => p.slug !== slug && p.category !== post.category))
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      <section
        className="relative min-h-[52vh] flex items-end pt-28 pb-14 px-6"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(11,31,51,0.92), rgba(11,31,51,0.6)), url('${post.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl mx-auto w-full">
          <div className="flex items-center gap-2 text-sm text-white/60 mb-5">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight size={14} />
            <Link to="/blog" className="hover:text-white transition">Blog</Link>
          </div>
          <span className="inline-block bg-[#4E8F89] text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-white/60 text-sm">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <Clock size={13} /> {post.readTime}
            </span>
          </div>
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

          <div className="mt-12 p-6 bg-[#EAF5F3] rounded-2xl border border-[#4E8F89]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#0B1F33] font-bold text-sm">
              Want this working on your fleet?
            </p>
            <Link
              to="/consultation"
              className="px-6 py-3 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-extrabold rounded-xl text-sm transition whitespace-nowrap"
            >
              Get a consultation
            </Link>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 mt-10 text-sm font-bold text-[#4E8F89] hover:underline"
          >
            <ArrowLeft size={16} /> All articles
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <section className="pb-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-black text-[#0B1F33] mb-6">Related reading</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition"
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#4E8F89]">
                      {p.category}
                    </span>
                    <h3 className="font-bold text-[#0B1F33] text-sm leading-snug mt-1 group-hover:text-[#4E8F89] transition">
                      {p.title}
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
