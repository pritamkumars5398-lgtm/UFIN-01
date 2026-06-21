import React, { useState } from "react";
import { FileText, Smartphone, Shield, HelpCircle, BookOpen, Settings, ChevronDown, Search } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Resources() {
  const { t, language } = useLanguage();
  const [activeCat, setActiveCat] = useState("All");
  const [openFaq, setOpenFaq] = useState(null);

  const categoriesMap = {
    "All": language === "en" ? "All" : "Все",
    "Equipment": language === "en" ? "Equipment" : "Оборудование",
    "Documents": language === "en" ? "Documents" : "Документы",
    "App": language === "en" ? "App" : "Приложение",
    "Updates": language === "en" ? "Updates" : "Обновления",
  };

  const resourceIcons = [Settings, Smartphone, FileText, Shield, HelpCircle, BookOpen];
  const badgeColors = [
    "bg-red-100 text-red-600",
    "bg-blue-100 text-blue-600",
    "bg-gray-100 text-gray-600",
    "bg-gray-100 text-gray-600",
    "bg-green-100 text-green-600",
    "bg-red-100 text-red-600",
  ];

  const resources = (t("resourcesPage.resourcesList") || []).map((res, idx) => ({
    ...res,
    Icon: resourceIcons[idx],
    badgeColor: badgeColors[idx]
  }));

  const news = [
    { img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80", title: t("resourcesPage.featuredTitle").replace("\n", " "), date: language === "en" ? "May 15, 2026" : "15 мая 2026", tag: language === "en" ? "Stories" : "Истории" },
    { img: "https://images.unsplash.com/photo-1545262810-a9b9f1db8a84?auto=format&fit=crop&w=600&q=80", title: t("resourcesPage.resourcesList.1.title"), date: language === "en" ? "April 2, 2026" : "2 апреля 2026", tag: language === "en" ? "Product" : "Продукт" },
    { img: "https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?auto=format&fit=crop&w=600&q=80", title: t("resourcesPage.resourcesList.4.title"), date: language === "en" ? "March 18, 2026" : "18 марта 2026", tag: language === "en" ? "Company" : "Компания" },
  ];

  const faqs = t("resourcesPage.faqs") || [];

  const filtered = activeCat === "All" ? resources : resources.filter((r) => r.cat === activeCat);

  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO — editorial light style ── */}
      <section className="bg-white pt-32 pb-16 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#4E8F89] text-xs font-bold uppercase tracking-widest">
                {t("resourcesPage.category")}
              </span>
              <h1 className="text-5xl font-black text-gray-900 leading-tight mt-3 mb-5 whitespace-pre-line">
                {t("resourcesPage.title")}
              </h1>
              <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
                {t("resourcesPage.desc")}
              </p>
              <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 max-w-sm">
                <Search size={16} className="text-gray-400 shrink-0" />
                <input type="text" placeholder={t("resourcesPage.searchPlaceholder")} className="flex-1 bg-transparent text-sm text-gray-700 focus:outline-none placeholder-gray-400" />
              </div>
            </div>
            {/* Featured card */}
            <div className="relative rounded-2xl overflow-hidden h-64 lg:h-80 group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80"
                alt="Featured"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-xs bg-[#f59e0b] text-black font-bold px-2 py-0.5 rounded mb-2 inline-block">
                  {t("resourcesPage.featuredTag")}
                </span>
                <h3 className="text-lg font-bold leading-snug whitespace-pre-line">
                  {t("resourcesPage.featuredTitle")}
                </h3>
                <p className="text-white/60 text-xs mt-1">{language === "en" ? "May 15, 2026" : "15 мая 2026"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESOURCES — category filter + grid ── */}
      <section id="resources" className="py-16 bg-[#f7f8f9] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h2 className="text-2xl font-black text-gray-900">
              {t("resourcesPage.materialsTitle")}
            </h2>
            <div className="flex gap-2 flex-wrap">
              {Object.keys(categoriesMap).map((catKey) => (
                <button
                  key={catKey}
                  onClick={() => setActiveCat(catKey)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${
                    activeCat === catKey ? "bg-[#4E8F89] text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-[#4E8F89]"
                  }`}
                >
                  {categoriesMap[catKey]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(({ Icon, title, desc, badge, badgeColor }) => (
              <a key={title} href="#" className="group bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#4E8F89]/10 flex items-center justify-center">
                    {Icon && <Icon size={18} className="text-[#4E8F89]" />}
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${badgeColor}`}>{badge}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2 leading-snug flex-1">{title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
                <div className="mt-4 text-[#4E8F89] text-xs font-medium group-hover:underline">
                  {t("resourcesPage.openLink")}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWS — magazine grid ── */}
      <section id="news" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-10">
            {t("resourcesPage.newsTitle")}
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Large featured */}
            <a href="#" className="group lg:col-span-2 relative rounded-2xl overflow-hidden aspect-[16/9] block">
              <img src={news[0].img} alt={news[0].title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-xs bg-[#f59e0b] text-black font-bold px-2 py-0.5 rounded mb-3 inline-block">{news[0].tag}</span>
                <h3 className="text-xl font-bold text-white leading-snug">{news[0].title}</h3>
                <p className="text-white/50 text-xs mt-2">{news[0].date}</p>
              </div>
            </a>
            {/* Small items */}
            <div className="flex flex-col gap-6">
              {news.slice(1).map(({ img, title, date, tag }) => (
                <a key={title} href="#" className="group flex gap-4 items-start">
                  <div className="w-24 h-20 rounded-xl overflow-hidden shrink-0">
                    <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                  </div>
                  <div>
                    <span className="text-[10px] bg-gray-100 text-gray-500 font-bold px-2 py-0.5 rounded mb-1.5 inline-block">{tag}</span>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-[#4E8F89] transition">{title}</h3>
                    <p className="text-gray-400 text-xs mt-1">{date}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-16 px-6 bg-[#f7f8f9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-2 text-center">
            {t("resourcesPage.faqTitle")}
          </h2>
          <p className="text-gray-400 text-sm text-center mb-10">
            {t("resourcesPage.faqSubtitle")}
          </p>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-bold text-gray-900 hover:text-[#4E8F89] transition"
                >
                  {q}
                  <ChevronDown size={16} className={`text-gray-400 transition-transform shrink-0 ml-4 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">{a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
