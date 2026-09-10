import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

/**
 * Shared layout for legal documents (User Agreement, Privacy Policy).
 * Renders a light hero, a sticky table of contents and numbered sections.
 */
export default function LegalDoc({ title, crumbLabel, doc }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  useEffect(() => {
    const onScroll = () => {
      const tops = doc.sections.map((_, i) => {
        const el = document.getElementById(`sec-${i}`);
        return el ? el.getBoundingClientRect().top : Infinity;
      });
      const idx = tops.findIndex((t) => t > 120);
      setActive(idx === -1 ? doc.sections.length - 1 : Math.max(0, idx - 1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [doc.sections]);

  const jump = (i) => {
    const el = document.getElementById(`sec-${i}`);
    if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-[#0B1F33] pt-32 pb-14 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-5">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight size={14} />
            <Link to="/resources" className="hover:text-white transition">Resources</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">{crumbLabel}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white mb-3">{title}</h1>
          <p className="text-white/50 text-sm">{doc.updated}</p>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[220px_minmax(0,760px)] gap-12">
          {/* TOC */}
          <nav className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">
                Contents
              </p>
              <ul className="space-y-2">
                {doc.sections.map((s, i) => (
                  <li key={i}>
                    <button
                      onClick={() => jump(i)}
                      className={`text-left text-sm leading-snug transition ${
                        active === i
                          ? "text-[#4E8F89] font-semibold"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      {s.heading}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Content */}
          <div>
            <p className="text-slate-600 leading-relaxed mb-10 pb-10 border-b border-slate-100">
              {doc.intro}
            </p>
            <div className="space-y-10">
              {doc.sections.map((s, i) => (
                <div key={i} id={`sec-${i}`} className="scroll-mt-28">
                  <h2 className="text-lg font-black text-[#0B1F33] mb-3">{s.heading}</h2>
                  <div className="space-y-3">
                    {s.body.map((p, j) => (
                      <p key={j} className="text-slate-600 text-[15px] leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-4 text-sm">
              <Link to="/resources/user-agreement" className="text-[#4E8F89] font-semibold hover:underline">
                User Agreement
              </Link>
              <Link to="/resources/privacy-policy" className="text-[#4E8F89] font-semibold hover:underline">
                Privacy Policy
              </Link>
              <Link to="/contacts" className="text-[#4E8F89] font-semibold hover:underline">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
