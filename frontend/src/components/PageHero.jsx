import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

/**
 * Shared page hero for inner pages — dark image banner with the title
 * bottom-left and an optional breadcrumb. Matches the About / Contacts style.
 */
export default function PageHero({ title, subtitle, image, crumbs = [] }) {
  return (
    <section className="relative h-[360px] md:h-[400px] flex items-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(11,31,51,0.90) 0%, rgba(11,31,51,0.65) 55%, rgba(11,31,51,0.35) 100%)",
        }}
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-14">
        {crumbs.length > 0 && (
          <div className="flex items-center gap-2 text-sm text-white/60 mb-5">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight size={14} />
                {c.to ? (
                  <Link to={c.to} className="hover:text-white transition">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{c.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
        <h1 className="text-[38px] md:text-[46px] font-black text-white leading-tight mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/75 text-[16px] md:text-[18px] max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
