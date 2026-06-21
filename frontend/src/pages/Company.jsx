import React from "react";
import { Link } from "react-router-dom";
import { Award, Globe, HeartHandshake, Briefcase, ShieldCheck, ChevronRight, ArrowRight } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Company() {
  const { t, language } = useLanguage();

  const stats = t("companyPage.stats") || [];
  
  const valueIcons = [Award, Globe, ShieldCheck];
  const values = (t("companyPage.valuesList") || []).map((val, idx) => ({
    ...val,
    Icon: valueIcons[idx]
  }));

  const timeline = t("companyPage.timeline") || [];

  const linkIcons = [HeartHandshake, Briefcase, Award];
  const links = (t("companyPage.links") || []).map((link, idx) => ({
    ...link,
    Icon: linkIcons[idx],
    href: "#"
  }));

  const news = [
    { img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80", title: t("resourcesPage.featuredTitle").replace("\n", " "), date: language === "en" ? "May 15, 2026" : "15 мая 2026", tag: language === "en" ? "Stories" : "Истории" },
    { img: "https://images.unsplash.com/photo-1545262810-a9b9f1db8a84?auto=format&fit=crop&w=600&q=80", title: t("resourcesPage.resourcesList.1.title"), date: language === "en" ? "April 2, 2026" : "2 апреля 2026", tag: language === "en" ? "Product" : "Продукт" },
    { img: "https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?auto=format&fit=crop&w=600&q=80", title: t("resourcesPage.resourcesList.4.title"), date: language === "en" ? "March 18, 2026" : "18 марта 2026", tag: language === "en" ? "Company" : "Компания" },
  ];

  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO — split screen ── */}
      <section className="grid lg:grid-cols-2 min-h-[90vh]">
        {/* Left dark */}
        <div className="bg-[#0d1b2a] flex flex-col justify-center px-10 lg:px-16 pt-32 pb-16">
          <span className="text-[#4E8F89] text-xs font-bold uppercase tracking-widest mb-4">
            {t("companyPage.aboutCategory")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6 whitespace-pre-line">
            {t("companyPage.heroTitle")}
          </h1>
          <p className="text-white/55 text-base leading-relaxed mb-10 max-w-md">
            {t("companyPage.heroDesc")}
          </p>
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ value, label }) => (
              <div key={label} className="border border-white/10 rounded-xl p-5">
                <p className="text-3xl font-black text-[#f59e0b] mb-1">{value}</p>
                <p className="text-white/50 text-xs">{label}</p>
              </div>
            ))}
          </div>
          <Link to="/consultation" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-[#4E8F89] hover:text-white transition">
            {t("companyPage.becomeClient")} <ArrowRight size={14} />
          </Link>
        </div>
        {/* Right image */}
        <div className="relative min-h-[50vh] lg:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
            alt="Company"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0d1b2a]/20" />
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-12 text-center">
            {t("companyPage.valuesTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ Icon, title, desc }) => (
              <div key={title} className="text-center px-8 py-10 rounded-2xl bg-[#EAF5F3] hover:bg-[#4E8F89] group transition duration-300">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto mb-5 shadow-sm">
                  {Icon && <Icon size={22} className="text-[#4E8F89] group-hover:text-[#4E8F89] transition" />}
                </div>
                <h3 className="font-black text-gray-900 group-hover:text-white text-lg mb-3 transition">{title}</h3>
                <p className="text-gray-500 group-hover:text-white/75 text-sm leading-relaxed transition">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section id="about" className="py-20 px-6 bg-[#f7f8f9]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-14 text-center">
            {t("companyPage.historyTitle")}
          </h2>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-gray-200 hidden md:block" />
            <div className="space-y-10">
              {timeline.map(({ year, title, desc }, i) => (
                <div key={year} className="flex gap-6 items-start">
                  <div className="shrink-0 w-[72px] flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 relative text-xs font-black ${i === timeline.length - 1 ? "bg-[#f59e0b] text-black" : "bg-[#4E8F89] text-white"}`}>
                      {year.slice(2)}
                    </div>
                    <span className="text-xs text-gray-400 mt-1">{year}</span>
                  </div>
                  <div className="bg-white rounded-xl p-5 flex-1 border border-gray-100 hover:shadow-md transition">
                    <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {links.map(({ Icon, title, desc, href }) => (
              <a key={title} href={href} className="group flex items-center gap-5 border border-gray-200 rounded-xl p-6 hover:border-[#4E8F89] hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-[#4E8F89]/10 flex items-center justify-center shrink-0 group-hover:bg-[#4E8F89] transition">
                  {Icon && <Icon size={20} className="text-[#4E8F89] group-hover:text-white transition" />}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-sm">{title}</h3>
                  <p className="text-gray-400 text-xs">{desc}</p>
                </div>
                <ChevronRight size={16} className="text-gray-300 group-hover:text-[#4E8F89] transition" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIRECTOR CTA ── */}
      <section className="bg-[#151b27] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-[#4E8F89]/30">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" alt="Director" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
              {t("companyPage.directorTitle")}
            </p>
            <h3 className="text-xl font-black text-white mb-2">
              {t("companyPage.directorName")}
            </h3>
            <p className="text-white/60 text-sm max-w-xl">
              {t("companyPage.directorDesc")}
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href="https://t.me/ufin_online" className="flex items-center gap-2 px-6 py-3 bg-[#229ED9] hover:bg-[#1a8bc4] text-white text-sm font-bold rounded-full transition">
              <FaTelegramPlane size={15} /> Telegram
            </a>
            <Link to="/contacts" className="px-6 py-3 border border-white/20 text-white text-sm font-bold rounded-full hover:bg-white/10 transition">
              {t("navbar.contacts")}
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEWS ── */}
      <section id="news" className="py-16 px-6 bg-[#f7f8f9]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-black text-gray-900">
              {t("companyPage.newsTitle")}
            </h2>
            <a href="#" className="text-[#4E8F89] text-sm font-medium hover:underline">
              {t("companyPage.newsAll")}
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {news.map(({ img, title, date, tag }) => (
              <a key={title} href="#" className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition">
                <div className="aspect-video overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-[10px] bg-[#4E8F89]/10 text-[#4E8F89] font-bold px-2 py-0.5 rounded mb-2 inline-block">{tag}</span>
                  <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-[#4E8F89] transition">{title}</h3>
                  <p className="text-gray-400 text-xs mt-2">{date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
