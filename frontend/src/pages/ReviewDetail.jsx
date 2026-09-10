import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronRight, ChevronLeft, Quote, Star } from "lucide-react";
import CompanyCTA from "../components/CompanyCTA";
import { reviews } from "../data/companyContent";

export default function ReviewDetail() {
  const { slug } = useParams();
  const review = reviews.find((r) => r.slug === slug);
  const index = reviews.findIndex((r) => r.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!review) return <Navigate to="/reviews" replace />;

  const prev = index > 0 ? reviews[index - 1] : null;
  const next = index < reviews.length - 1 ? reviews[index + 1] : null;

  return (
    <div className="bg-white min-h-screen">
      {/* ── Hero ── */}
      <section
        className="relative min-h-[50vh] flex items-end pt-28 pb-14 px-6 lg:px-8"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(11,31,51,0.94), rgba(11,31,51,0.7)), url('${review.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 text-sm text-white/60 mb-5">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight size={14} />
            <Link to="/reviews" className="hover:text-white transition">Reviews</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">{review.company}</span>
          </div>
          <span className="inline-block bg-[#4E8F89] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
            {review.industry}
          </span>
          <h1 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-3">
            {review.company}
          </h1>
          <p className="text-white/70">
            {review.author} · {review.role} · {review.date}
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_260px] gap-12">
          <div>
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-[#f59e0b] text-[#f59e0b]" />
              ))}
            </div>
            <Quote className="text-[#4E8F89] mb-4" size={40} />
            <div className="space-y-5">
              {review.body.map((p, i) => (
                <p key={i} className="text-slate-700 text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            {review.logo && (
              <div className="bg-[#f7f8f9] border border-slate-100 rounded-2xl p-6 flex items-center justify-center h-32">
                <img src={review.logo} alt={review.company} className="max-h-16 max-w-full object-contain" />
              </div>
            )}
            <div className="bg-[#EAF5F3] rounded-2xl p-6 border border-[#4E8F89]/20">
              <p className="text-xs uppercase tracking-widest text-[#4E8F89] font-bold mb-3">Details</p>
              <dl className="space-y-2 text-sm">
                <div>
                  <dt className="text-slate-400 text-xs">Industry</dt>
                  <dd className="text-slate-800 font-medium">{review.industry}</dd>
                </div>
                <div>
                  <dt className="text-slate-400 text-xs">Contact</dt>
                  <dd className="text-slate-800 font-medium">{review.author}</dd>
                </div>
                <div>
                  <dt className="text-slate-400 text-xs">Published</dt>
                  <dd className="text-slate-800 font-medium">{review.date}</dd>
                </div>
              </dl>
            </div>
            <Link
              to="/consultation"
              className="block text-center bg-[#f59e0b] hover:bg-[#ffae00] text-black font-extrabold rounded-xl py-3 text-sm transition"
            >
              Get the same setup
            </Link>
          </aside>
        </div>

        {/* Prev / Next */}
        <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-slate-100 flex justify-between gap-4">
          {prev ? (
            <Link to={`/reviews/${prev.slug}`} className="group flex items-center gap-2 text-sm text-slate-500 hover:text-[#4E8F89] transition">
              <ChevronLeft size={16} />
              <span className="max-w-[160px] truncate">{prev.company}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link to={`/reviews/${next.slug}`} className="group flex items-center gap-2 text-sm text-slate-500 hover:text-[#4E8F89] transition text-right">
              <span className="max-w-[160px] truncate">{next.company}</span>
              <ChevronRight size={16} />
            </Link>
          ) : <span />}
        </div>
      </section>

      <CompanyCTA />
    </div>
  );
}
