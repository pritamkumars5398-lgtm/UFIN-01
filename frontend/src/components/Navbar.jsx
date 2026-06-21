import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

/* ── News Grid Component ── */
const NewsGrid = () => {
  const { t } = useLanguage();
  const newsItems = [
    { img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80", title: t("resourcesPage.featuredTitle").replace("\n", " "), to: "/resources#news" },
    { img: "https://images.unsplash.com/photo-1545262810-a9b9f1db8a84?auto=format&fit=crop&w=400&q=80", title: t("resourcesPage.resourcesList.1.title"), to: "/resources#news" },
    { img: "https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?auto=format&fit=crop&w=400&q=80", title: t("resourcesPage.resourcesList.4.title"), to: "/company#news" },
  ];
  return (
    <div>
      <Link to="/resources#news" className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 flex items-center justify-between hover:text-[#4E8F89] transition">
        {t("navbar.news")} <span className="text-xs font-normal text-[#4E8F89]">{t("navbar.newsAll")}</span>
      </Link>
      <div className="grid grid-cols-3 gap-4 mt-3">
        {newsItems.map(({ img, title, to }) => (
          <Link key={title} to={to} className="group block">
            <div className="rounded-lg overflow-hidden mb-2 aspect-[4/3]">
              <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
            </div>
            <p className="text-xs text-gray-700 leading-snug group-hover:text-[#4E8F89] transition">{title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

/* ── Dropdown panels ── */
const UslugiDropdown = () => {
  const { t } = useLanguage();
  const servicesList = t("navbar.servicesList") || [];
  const solutionsList = t("navbar.solutionsList") || [];
  const industriesList = t("navbar.industriesList") || [];
  const integrationsList = t("navbar.integrationsList") || [];

  return (
    <div className="grid grid-cols-4 gap-10 px-10 py-8">
      {/* Our services */}
      <div>
        <Link to="/services#services" className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 block hover:text-[#4E8F89] transition">
          {t("navbar.ourServices")}
        </Link>
        <ul className="space-y-3">
          {servicesList.map((s) => (
            <li key={s}>
              <Link to="/services#services" className="text-sm text-gray-600 hover:text-[#4E8F89] transition">{s}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Solutions */}
      <div>
        <Link to="/services#solutions" className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 block hover:text-[#4E8F89] transition">
          {t("navbar.solutions")}
        </Link>
        <ul className="space-y-4">
          {solutionsList.map(({ title, desc }) => (
            <li key={title}>
              <Link to="/services#solutions" className="group block">
                <p className="text-sm font-medium text-gray-800 group-hover:text-[#4E8F89] transition">{title}</p>
                <p className="text-xs text-gray-400 mt-0.5 leading-snug">{desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* By industry */}
      <div>
        <Link to="/services#industries" className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 block hover:text-[#4E8F89] transition">
          {t("navbar.byIndustry")}
        </Link>
        <ul className="space-y-3 max-h-[360px] overflow-y-auto pr-2 scrollbar-thin">
          {industriesList.map((s) => (
            <li key={s}>
              <Link to="/services#industries" className="text-sm text-gray-600 hover:text-[#4E8F89] transition leading-snug block">{s}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Integrations */}
      <div>
        <Link to="/services#integrations" className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 block hover:text-[#4E8F89] transition">
          {t("navbar.integrations")}
        </Link>
        <ul className="space-y-3">
          {integrationsList.map((s) => (
            <li key={s}>
              <Link to="/services#integrations" className="text-sm text-gray-600 hover:text-[#4E8F89] transition">{s}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ResursiDropdown = () => {
  const { t } = useLanguage();
  const resourcesList = t("navbar.resourcesList") || [];
  return (
    <div className="grid grid-cols-2 gap-10 px-10 py-8">
      <div>
        <Link to="/resources#resources" className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 block hover:text-[#4E8F89] transition">
          {t("navbar.resourcesTitle")}
        </Link>
        <ul className="space-y-3">
          {resourcesList.map(({ label, to }) => (
            <li key={label}>
              <Link to={to} className="text-sm text-gray-600 hover:text-[#4E8F89] transition">{label}</Link>
            </li>
          ))}
        </ul>
        <Link to="/resources#faq" className="inline-flex items-center gap-1 mt-5 text-xs font-medium text-[#4E8F89] hover:underline">
          {t("navbar.faqLink")}
        </Link>
      </div>
      <NewsGrid />
    </div>
  );
};

const KompaniyaDropdown = () => {
  const { t } = useLanguage();
  const companyList = t("navbar.companyList") || [];
  return (
    <div className="grid grid-cols-2 gap-10 px-10 py-8">
      <div>
        <Link to="/company" className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 block hover:text-[#4E8F89] transition">
          {t("navbar.company")}
        </Link>
        <ul className="space-y-3">
          {companyList.map(({ label, to }) => (
            <li key={label}>
              <Link to={to} className="text-sm text-gray-600 hover:text-[#4E8F89] transition">{label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <NewsGrid />
    </div>
  );
};

/* ── Owl SVG ── */
const OwlLogo = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="18" cy="20" rx="13" ry="12" fill="white" fillOpacity="0.9"/>
    <polygon points="8,10 6,2 13,8" fill="white" fillOpacity="0.9"/>
    <polygon points="28,10 30,2 23,8" fill="white" fillOpacity="0.9"/>
    <circle cx="13" cy="18" r="4" fill="#f59e0b"/>
    <circle cx="23" cy="18" r="4" fill="#f59e0b"/>
    <circle cx="13" cy="18" r="2" fill="#1a1a1a"/>
    <circle cx="23" cy="18" r="2" fill="#1a1a1a"/>
    <polygon points="18,21 15,25 21,25" fill="#f59e0b"/>
    <path d="M5 24 Q8 30 18 31 Q28 30 31 24" stroke="white" strokeWidth="1.5" fill="none" strokeOpacity="0.6"/>
  </svg>
);

/* ── Navbar Component ── */
export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeToggle, setActiveToggle] = useState("business");
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimer = useRef(null);

  const handleOpen = (label) => { clearTimeout(closeTimer.current); setOpenMenu(label); };
  const handleClose = () => { closeTimer.current = setTimeout(() => setOpenMenu(null), 120); };
  const closeAll = () => { setOpenMenu(null); setMobileOpen(false); };

  const navItems = [
    { label: t("navbar.services"),   path: "/services", Panel: UslugiDropdown },
    { label: t("navbar.resources"),  path: "/resources", Panel: ResursiDropdown },
    { label: t("navbar.company"), path: "/company",   Panel: KompaniyaDropdown },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50" style={{ background: "#3a3a3a" }}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" onClick={closeAll} className="flex items-center gap-2.5 shrink-0">
            <OwlLogo />
            <div className="leading-none">
              <span className="block text-[#f59e0b] font-black text-lg tracking-wide">{t("navbar.logoBrand")}</span>
              <span className="block text-white text-[10px] tracking-[4px] font-medium opacity-80">{t("navbar.logoControl")}</span>
            </div>
          </Link>

          {/* Toggle */}
          <div className="hidden lg:flex bg-white/10 rounded-full p-0.5 shrink-0">
            {["business", "people"].map((tKey) => (
              <button
                key={tKey}
                onClick={() => setActiveToggle(tKey)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                  activeToggle === tKey ? "bg-white text-gray-900" : "text-white/75 hover:text-white"
                }`}
              >
                {tKey === "business" ? t("common.business") : t("common.people")}
              </button>
            ))}
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {navItems.map(({ label, path, Panel }) => (
              <div key={label} className="relative" onMouseEnter={() => handleOpen(label)} onMouseLeave={handleClose}>
                <Link
                  to={path}
                  onClick={closeAll}
                  className={`flex items-center gap-1 text-sm font-medium transition whitespace-nowrap ${
                    openMenu === label ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  {label}
                  <ChevronDown size={13} className={`transition-transform duration-200 ${openMenu === label ? "rotate-180" : ""}`} />
                </Link>

                {openMenu === label && (
                  <div
                    className="fixed left-0 right-0 bg-white shadow-xl border-t border-gray-100 overflow-y-auto"
                    style={{ top: "64px", maxHeight: "calc(100vh - 64px)" }}
                    onMouseEnter={() => handleOpen(label)}
                    onMouseLeave={handleClose}
                    onClick={closeAll}
                  >
                    <div className="max-w-7xl mx-auto">
                      <Panel />
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link to="/contacts" onClick={closeAll} className="text-sm font-medium text-white/80 hover:text-white transition whitespace-nowrap">
              {t("navbar.contacts")}
            </Link>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3 shrink-0">
            <a href={`tel:${t("common.phone").replace(/\s+/g, "")}`} className="hidden xl:block text-[#4dbe9e] text-sm font-medium whitespace-nowrap hover:text-[#00d89a] transition">
              {t("navbar.phone")}
            </a>

            {/* Language Switcher */}
            <div className="flex items-center bg-white/10 rounded-full p-0.5 select-none text-xs border border-white/10">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-full font-bold transition ${
                  language === "en" ? "bg-white text-gray-900 shadow-sm" : "text-white/85 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("ru")}
                className={`px-2.5 py-1 rounded-full font-bold transition ${
                  language === "ru" ? "bg-white text-gray-900 shadow-sm" : "text-white/85 hover:text-white"
                }`}
              >
                RU
              </button>
            </div>

            <Link to="/consultation" onClick={closeAll} className="hidden sm:flex items-center px-5 py-2 rounded-full bg-[#f59e0b] hover:bg-[#ffae00] text-black text-sm font-bold transition whitespace-nowrap">
              {t("navbar.consultation")}
            </Link>
            <Link to="/login" onClick={closeAll} className="hidden sm:flex items-center px-5 py-2 rounded-full border border-white/25 text-white/80 hover:border-white/60 hover:text-white text-sm font-medium transition whitespace-nowrap">
              {t("navbar.login")}
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white text-xl">☰</button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#2e2e2e] rounded-b-2xl p-5 mb-2 border-t border-white/10">
            <div className="flex flex-col gap-3">
              {[
                [t("navbar.menuHome"), "/"],
                [t("navbar.services"), "/services"],
                [t("navbar.resources"), "/resources"],
                [t("navbar.company"), "/company"],
                [t("navbar.contacts"), "/contacts"],
              ].map(([label, path]) => (
                <Link key={label} to={path} onClick={closeAll} className="text-white/80 hover:text-white text-sm py-1 border-b border-white/5">
                  {label}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex justify-center gap-2 mt-2 bg-white/5 rounded-full p-1 max-w-[160px] mx-auto text-xs border border-white/10">
                <button
                  onClick={() => setLanguage("en")}
                  className={`flex-1 py-1 rounded-full font-bold transition text-center ${
                    language === "en" ? "bg-white text-gray-900 shadow-sm" : "text-white/80"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("ru")}
                  className={`flex-1 py-1 rounded-full font-bold transition text-center ${
                    language === "ru" ? "bg-white text-gray-900 shadow-sm" : "text-white/80"
                  }`}
                >
                  RU
                </button>
              </div>

              <div className="flex gap-2 mt-3">
                <Link to="/consultation" onClick={closeAll} className="flex-1 bg-[#f59e0b] text-black rounded-full py-2.5 text-center font-bold text-sm">
                  {t("navbar.consultation")}
                </Link>
                <Link to="/login" onClick={closeAll} className="flex-1 border border-white/25 text-white rounded-full py-2.5 text-sm font-medium text-center">
                  {t("navbar.login")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
