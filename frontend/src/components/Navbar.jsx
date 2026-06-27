import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logoLight from "../assets/logo-light.png";
import { 
  serviceMenuItems, 
  solutionMenuItems, 
  industryMenuItems, 
  integrationMenuItems 
} from "../data/servicesData";

/* ── News Grid Component ── */
const NewsGrid = () => {
  const newsItems = [
    { img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80", title: "Latest System Updates", to: "/resources#news" },
    { img: "https://images.unsplash.com/photo-1545262810-a9b9f1db8a84?auto=format&fit=crop&w=400&q=80", title: "Fuel Control Best Practices", to: "/resources#news" },
    { img: "https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?auto=format&fit=crop&w=400&q=80", title: "New API Capabilities", to: "/company#news" },
  ];
  return (
    <div>
      <Link to="/resources#news" className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 flex items-center justify-between hover:text-[#4E8F89] transition">
        News <span className="text-xs font-normal text-[#4E8F89]">All news</span>
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
  return (
    <div className="grid grid-cols-4 gap-10 px-10 py-8">
      {/* Our services */}
      <div>
        <Link to="/services" className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 block hover:text-[#4E8F89] transition">
          Our Services
        </Link>
        <ul className="space-y-3">
          {serviceMenuItems.map((s) => (
            <li key={s.slug}>
              <Link to={`/services/${s.slug}`} className="text-sm text-gray-600 hover:text-[#4E8F89] transition">{s.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Solutions */}
      <div>
        <Link to="/services" className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 block hover:text-[#4E8F89] transition">
          Solutions
        </Link>
        <ul className="space-y-4">
          {solutionMenuItems.map(({ label, desc, slug }) => (
            <li key={slug}>
              <Link to={`/solutions/${slug}`} className="group block">
                <p className="text-sm font-medium text-gray-800 group-hover:text-[#4E8F89] transition">{label}</p>
                <p className="text-xs text-gray-400 mt-0.5 leading-snug">{desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* By industry */}
      <div>
        <span className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 block">
          By Industry
        </span>
        <ul className="space-y-3 max-h-[360px] overflow-y-auto pr-2 scrollbar-thin">
          {industryMenuItems.map((s) => (
            <li key={s.slug}>
              <Link to={`/services`} className="text-sm text-gray-600 hover:text-[#4E8F89] transition leading-snug block">{s.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Integrations */}
      <div>
        <span className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 block">
          Integrations
        </span>
        <ul className="space-y-3">
          {integrationMenuItems.map((s) => (
            <li key={s.slug}>
              <Link to={`/services`} className="text-sm text-gray-600 hover:text-[#4E8F89] transition">{s.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ResursiDropdown = () => {
  const resourcesList = [
    { label: "Blog & Articles", to: "/resources#blog" },
    { label: "Webinars & Events", to: "/resources#webinars" },
    { label: "Case Studies", to: "/resources#cases" },
    { label: "Documentation", to: "/resources#docs" },
  ];
  return (
    <div className="grid grid-cols-2 gap-10 px-10 py-8">
      <div>
        <Link to="/resources" className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 block hover:text-[#4E8F89] transition">
          Resources
        </Link>
        <ul className="space-y-3">
          {resourcesList.map(({ label, to }) => (
            <li key={label}>
              <Link to={to} className="text-sm text-gray-600 hover:text-[#4E8F89] transition">{label}</Link>
            </li>
          ))}
        </ul>
        <Link to="/resources#faq" className="inline-flex items-center gap-1 mt-5 text-xs font-medium text-[#4E8F89] hover:underline">
          Go to FAQ Section
        </Link>
      </div>
      <NewsGrid />
    </div>
  );
};

const KompaniyaDropdown = () => {
  const companyList = [
    { label: "About Us", to: "/about" },
    { label: "Careers", to: "/company#careers" },
    { label: "Partners", to: "/company#partners" },
    { label: "Contact Us", to: "/contacts" },
  ];
  return (
    <div className="grid grid-cols-2 gap-10 px-10 py-8">
      <div>
        <Link to="/company" className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 block hover:text-[#4E8F89] transition">
          Company
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

/* ── Navbar Component ── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeToggle, setActiveToggle] = useState("business");
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimer = useRef(null);

  const handleOpen = (label) => { clearTimeout(closeTimer.current); setOpenMenu(label); };
  const handleClose = () => { closeTimer.current = setTimeout(() => setOpenMenu(null), 120); };
  const closeAll = () => { setOpenMenu(null); setMobileOpen(false); };

  const navItems = [
    { label: "Services",   path: "/services", Panel: UslugiDropdown },
    { label: "Resources",  path: "/resources", Panel: ResursiDropdown },
    { label: "Company", path: "/company",   Panel: KompaniyaDropdown },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-transparent backdrop-blur-xl border-b border-white/10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center" onClick={closeAll}>
              <img src={logoLight} alt="Tekonika Systems" className="h-16 object-contain" />
            </Link>

            <div className="hidden lg:flex bg-white/5 border border-white/10 rounded-full p-1">

              <button
                onClick={() => setActiveToggle("business")}
                className={`px-4 py-2 rounded-full transition ${
                  activeToggle === "business"
                    ? "bg-white text-black text-sm font-medium"
                    : "text-white/70 hover:text-white text-sm"
                }`}
              >
                Business
              </button>

              <button
                onClick={() => setActiveToggle("people")}
                className={`px-4 py-2 rounded-full transition ${
                  activeToggle === "people"
                    ? "bg-white text-black text-sm font-medium"
                    : "text-white/70 hover:text-white text-sm"
                }`}
              >
                People
              </button>

            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-white/75 items-center">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="relative py-8"
                onMouseEnter={() => handleOpen(item.label)}
                onMouseLeave={handleClose}
              >
                <Link
                  to={item.path}
                  className="hover:text-white transition flex items-center gap-1 group font-medium"
                  onClick={closeAll}
                >
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${openMenu === item.label ? "rotate-180 text-white" : "text-white/50 group-hover:text-white"}`} />
                </Link>

                {/* Mega Menu Dropdown */}
                {openMenu === item.label && (
                  <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[900px] bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden transform origin-top transition-all animate-in fade-in zoom-in-95 duration-200">
                    <item.Panel />
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/contacts"
              className="hover:text-white font-medium"
              onClick={closeAll}
            >
              Contacts
            </Link>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-4">

            <a
              href="tel:88004440481"
              className="hidden xl:block text-[#00d89a] font-bold"
            >
              8 (800) 444-04-81
            </a>

            <Link
              to="/consultation"
              className="hidden sm:flex items-center px-6 py-2.5 rounded-full bg-[#f59e0b] hover:bg-[#ffae00] text-black font-bold shadow-lg transition text-sm"
              onClick={closeAll}
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
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white py-2"
                  onClick={closeAll}
                >
                  {item}
                </Link>
              ))}

              <Link
                to="/consultation"
                className="mt-4 bg-[#f59e0b] text-black rounded-full py-3 text-center font-bold"
                onClick={closeAll}
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
