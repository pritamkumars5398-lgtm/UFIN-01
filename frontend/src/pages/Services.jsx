import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart2, Users, Fuel, Thermometer,
  ArrowRight, Check
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const serviceIcons = [BarChart2, Users, Fuel, Thermometer];
  const serviceImages = [
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1545262810-a9b9f1db8a84?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
  ];
  const services = (t("servicesPage.servicesList") || []).map((s, idx) => ({
    ...s,
    Icon: serviceIcons[idx],
    img: serviceImages[idx]
  }));

  const solutionColors = [
    "border-[#4E8F89]",
    "border-[#f59e0b]",
    "border-[#4E8F89]",
    "border-[#f59e0b]",
    "border-[#4E8F89]"
  ];
  const solutions = (t("servicesPage.solutionsList") || []).map((s, idx) => ({
    ...s,
    color: solutionColors[idx]
  }));

  const industryImages = [
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1596633608891-fd3c7ef1e97d?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1545262810-a9b9f1db8a84?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=400&q=80"
  ];
  const industries = (t("servicesPage.industriesList") || []).map((ind, idx) => ({
    ...ind,
    img: industryImages[idx]
  }));

  const integrations = t("servicesPage.integrationsList") || [];

  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO — dark full-width ── */}
      <section
        className="relative min-h-[60vh] flex items-end pb-16 px-8 lg:px-24"
        style={{
          backgroundImage: "linear-gradient(to top, rgba(5,15,25,0.95) 30%, rgba(5,15,25,0.55) 100%), url('https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover", backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto w-full pt-36">
          <span className="inline-block bg-[#4E8F89]/20 text-[#4E8F89] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            {t("servicesPage.category")}
          </span>
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight max-w-2xl mb-6 whitespace-pre-line">
            {t("servicesPage.title")}
          </h1>
          <p className="text-white/60 text-lg max-w-xl mb-8">
            {t("servicesPage.desc")}
          </p>
          <div className="flex gap-4">
            <Link to="/consultation" className="px-7 py-3 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-bold rounded transition text-sm">
              {t("servicesPage.consultBtn")}
            </Link>
            <a href="#services" className="px-7 py-3 border border-white/20 text-white hover:bg-white/10 rounded transition text-sm">
              {t("servicesPage.allServicesBtn")}
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES — alternating rows ── */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-gray-900 mb-3">
              {t("servicesPage.sectionTitle")}
            </h2>
            <p className="text-gray-400 text-sm max-w-lg mx-auto">
              {t("servicesPage.sectionSubtitle")}
            </p>
          </div>
          <div className="space-y-0 divide-y divide-gray-100">
            {services.map(({ Icon, title, desc, img, points }, i) => (
              <div
                key={title}
                className={`grid lg:grid-cols-2 gap-0 items-stretch min-h-[320px] ${i % 2 === 1 ? "flex-row-reverse" : ""}`}
              >
                {/* Image side */}
                <div className={`relative overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img src={img} alt={title} className="w-full h-full object-cover min-h-[260px]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                </div>
                {/* Text side */}
                <div className={`flex flex-col justify-center px-10 py-12 bg-white ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="w-12 h-12 rounded-xl bg-[#4E8F89]/10 flex items-center justify-center mb-5">
                    {Icon && <Icon size={22} className="text-[#4E8F89]" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>
                  <ul className="space-y-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-gray-700">
                        <Check size={14} className="text-[#4E8F89] shrink-0" />{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section id="solutions" className="bg-[#0d1b2a] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-3">
            {t("servicesPage.solutionsTitle")}
          </h2>
          <p className="text-white/40 text-sm mb-12">
            {t("servicesPage.solutionsSubtitle")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map(({ title, desc, color }) => (
              <div key={title} className={`bg-white/5 border-t-2 ${color} rounded-xl p-6 hover:bg-white/10 transition cursor-pointer`}>
                <h3 className="font-bold text-white mb-2 text-sm">{title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                <div className="mt-5 flex items-center gap-1 text-[#4E8F89] text-xs font-medium">
                  {t("common.learnMore")} <ArrowRight size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section id="industries" className="py-20 bg-[#f7f8f9] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">
                {t("servicesPage.industriesTitle")}
              </h2>
              <p className="text-gray-400 text-sm">
                {t("servicesPage.industriesSubtitle")}
              </p>
            </div>
            <button className="px-5 py-2.5 border border-[#4E8F89] text-[#4E8F89] text-sm rounded hover:bg-[#4E8F89] hover:text-white transition">
              {t("servicesPage.showAllBtn")}
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map(({ title, img }) => (
              <a key={title} href="#" className="group relative overflow-hidden rounded-xl aspect-[4/3] block">
                <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold leading-snug">{title}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ── */}
      <section id="integrations" className="bg-[#4E8F89] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-black text-white mb-2">
              {t("servicesPage.integrationsTitle")}
            </h2>
            <p className="text-white/70 text-sm">
              {t("servicesPage.integrationsSubtitle")}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {integrations.map((item) => (
              <a key={item} href="#" className="px-5 py-2.5 bg-white text-[#4E8F89] text-sm font-bold rounded-full hover:bg-[#EAF5F3] transition">
                {item}
              </a>
            ))}
          </div>
          <Link to="/consultation" className="px-7 py-3 bg-[#f59e0b] hover:bg-[#ffae00] text-black text-sm font-bold rounded transition whitespace-nowrap shrink-0">
            {t("servicesPage.connectBtn")}
          </Link>
        </div>
      </section>

    </div>
  );
}
