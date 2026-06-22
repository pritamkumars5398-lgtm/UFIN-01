import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import logoDark from "../assets/logo-dark.png";

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
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-transparent backdrop-blur-xl border-b border-white/10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center">
              <img src={logoDark} alt="Tekonika Systems" className="h-10 object-contain" />
            </Link>

            <div className="hidden lg:flex bg-white/5 border border-white/10 rounded-full p-1">

              <button
                onClick={() => setActiveToggle("business")}
                className={`px-4 py-2 rounded-full transition ${
                  activeToggle === "business"
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Business
              </button>

              <button
                onClick={() => setActiveToggle("people")}
                className={`px-4 py-2 rounded-full transition ${
                  activeToggle === "people"
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white"
                }`}
              >
                People
              </button>

            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-white/75">

            {[
              "Services",
              "Resources",
              "Company",
            ].map((item) => (
              <button
                key={item}
                className="hover:text-white transition"
              >
                {item}
              </button>
            ))}

            <Link
              to="/contacts"
              className="hover:text-white"
            >
              Contacts
            </Link>

          </nav>

          {/* Right */}
          <div className="flex items-center gap-4">

            <a
              href="tel:88004440481"
              className="hidden xl:block text-[#00d89a]"
            >
              8 (800) 444-04-81
            </a>

            <Link
              to="/consultation"
              className="hidden sm:flex items-center px-6 py-3 rounded-full bg-[#f59e0b] hover:bg-[#ffae00] text-black font-bold shadow-lg transition"
            >
              Consultation
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white"
            >
              ☰
            </button>

          </div>
        </div>

        {/* Mobile */}
        {mobileOpen && (
          <div className="md:hidden mt-3 rounded-3xl bg-black/70 backdrop-blur-xl border border-white/10 p-5">

            <div className="flex flex-col gap-3">

              {[
                "Home",
                "About",
                "Services",
                "Resources",
                "Company",
                "Contacts",
              ].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white"
                >
                  {item}
                </Link>
              ))}

              <Link
                to="/consultation"
                className="mt-4 bg-[#f59e0b] text-black rounded-full py-3 text-center font-bold"
              >
                Consultation
              </Link>

            </div>
          </div>
        )}
      </div>
    </header>
  );
}
