import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

/* ── Dropdown content ── */
const newsItems = [
  {
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80",
    title: "The tracker saved the life of a brave dog!",
  },
  {
    img: "https://images.unsplash.com/photo-1545262810-a9b9f1db8a84?auto=format&fit=crop&w=400&q=80",
    title: "Automated fuel control",
  },
  {
    img: "https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?auto=format&fit=crop&w=400&q=80",
    title: "Ufin Control presents an updated logo",
  },
];

const servicesDropdown = (
  <div className="grid grid-cols-4 gap-10 px-10 py-8">
    {/* Our services */}
    <div>
      <p className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">
        Our services
      </p>
      <ul className="space-y-3">
        {[
          "GLONASS/GPS vehicle monitoring",
          "Driver control",
          "Fuel consumption control",
          "Temperature control",
          "Tire pressure monitoring",
          "Route assignments",
          "Employee monitoring",
          "Video surveillance for transport",
        ].map((s) => (
          <li key={s}>
            <a href="#" className="text-sm text-gray-600 hover:text-[#4E8F89] transition">
              {s}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Solutions */}
    <div>
      <p className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">
        Solutions
      </p>
      <ul className="space-y-4">
        {[
          { title: "Efficiency", desc: "How Ufin improves your business efficiency" },
          { title: "Transportation safety", desc: "Prevention of accidents and incidents" },
          { title: "Customer loyalty and retention", desc: "A happy customer always comes back – we work on this together" },
          { title: "Level of service provision", desc: "How we improve the quality of your services" },
          { title: "Threat Control", desc: "Protect your business with our access and control systems" },
        ].map(({ title, desc }) => (
          <li key={title}>
            <a href="#" className="group block">
              <p className="text-sm font-medium text-gray-800 group-hover:text-[#4E8F89] transition">{title}</p>
              <p className="text-xs text-gray-400 mt-0.5 leading-snug">{desc}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* By industry */}
    <div>
      <p className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">
        By industry
      </p>
      <ul className="space-y-3">
        {[
          "Transportation of food products",
          "Freight transportation",
          "Passenger transportation",
          "Taxi",
          "Construction equipment",
          "Leasing",
          "Dangerous goods",
          "Agricultural machinery",
          "Monitoring of transport and housing and communal services",
          "Banks",
          "Production",
          "Trade",
          "Pharmaceuticals",
          "Medical institutions",
          "Fuel and energy",
          "Light commercial vehicles",
        ].map((s) => (
          <li key={s}>
            <a href="#" className="text-sm text-gray-600 hover:text-[#4E8F89] transition leading-snug block">
              {s}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Integrations */}
    <div>
      <p className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">
        Integrations
      </p>
      <ul className="space-y-3">
        {["API", "Relay servers", "Transition from Wialon", "GLONASS installation"].map((s) => (
          <li key={s}>
            <a href="#" className="text-sm text-gray-600 hover:text-[#4E8F89] transition">
              {s}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const resourcesDropdown = (
  <div className="grid grid-cols-2 gap-10 px-10 py-8">
    {/* Resources links */}
    <div>
      <p className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">
        Resources
      </p>
      <ul className="space-y-3">
        {[
          "Compatible equipment for business",
          "Mobile app user manual",
          "User Agreement",
          "Privacy Policy",
          "What new things have we developed?",
          "Instructions for trackers",
        ].map((s) => (
          <li key={s}>
            <a href="#" className="text-sm text-gray-600 hover:text-[#4E8F89] transition">
              {s}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* News */}
    <div>
      <p className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">
        News
      </p>
      <div className="grid grid-cols-3 gap-4">
        {newsItems.map(({ img, title }) => (
          <a key={title} href="#" className="group block">
            <div className="rounded-lg overflow-hidden mb-2 aspect-[4/3]">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <p className="text-xs text-gray-700 leading-snug group-hover:text-[#4E8F89] transition">
              {title}
            </p>
          </a>
        ))}
      </div>
    </div>
  </div>
);

const companyDropdown = (
  <div className="grid grid-cols-2 gap-10 px-10 py-8">
    {/* Company links */}
    <div>
      <p className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">
        Company
      </p>
      <ul className="space-y-3">
        {[
          "About the company",
          "Contacts",
          "Reviews",
          "To partners",
          "News",
          "Blog",
          "Vacancies",
          "Guarantees",
        ].map((s) => (
          <li key={s}>
            <a href="#" className="text-sm text-gray-600 hover:text-[#4E8F89] transition">
              {s}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* News */}
    <div>
      <p className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">
        News
      </p>
      <div className="grid grid-cols-3 gap-4">
        {newsItems.map(({ img, title }) => (
          <a key={title} href="#" className="group block">
            <div className="rounded-lg overflow-hidden mb-2 aspect-[4/3]">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <p className="text-xs text-gray-700 leading-snug group-hover:text-[#4E8F89] transition">
              {title}
            </p>
          </a>
        ))}
      </div>
    </div>
  </div>
);

const NAV_ITEMS = [
  { label: "Services", dropdown: servicesDropdown },
  { label: "Resources", dropdown: resourcesDropdown },
  { label: "Company", dropdown: companyDropdown },
];

/* ── Component ── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeToggle, setActiveToggle] = useState("business");
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimer = useRef(null);

  const openDropdown = (label) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glass bar */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-transparent backdrop-blur-xl border-b border-white/10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white font-bold shadow-lg">
                УФ
              </div>
              <div>
                <h2 className="text-white font-black text-xl">УФИН</h2>
                <p className="text-white/60 text-xs tracking-[3px]">КОНТРОЛЬ</p>
              </div>
            </Link>

            <div className="hidden lg:flex bg-white/5 border border-white/10 rounded-full p-1">
              <button
                onClick={() => setActiveToggle("business")}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  activeToggle === "business" ? "bg-white text-black" : "text-white/70 hover:text-white"
                }`}
              >
                For business
              </button>
              <button
                onClick={() => setActiveToggle("people")}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  activeToggle === "people" ? "bg-white text-black" : "text-white/70 hover:text-white"
                }`}
              >
                To people
              </button>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(({ label, dropdown }) => (
              <div
                key={label}
                className="relative"
                onMouseEnter={() => openDropdown(label)}
                onMouseLeave={scheduleClose}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition ${
                    openMenu === label ? "text-[#4E8F89]" : "text-white/75 hover:text-white"
                  }`}
                >
                  {label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${openMenu === label ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Mega dropdown */}
                {openMenu === label && (
                  <div
                    className="fixed left-0 right-0 bg-white shadow-xl border-t border-gray-100 overflow-y-auto"
                    style={{ top: "80px", maxHeight: "calc(100vh - 80px)" }}
                    onMouseEnter={() => openDropdown(label)}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="max-w-7xl mx-auto">
                      {dropdown}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link to="/contacts" className="text-sm font-medium text-white/75 hover:text-white transition">
              Contacts
            </Link>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-4">
            <a href="tel:88004440481" className="hidden xl:block text-[#00d89a] text-sm font-medium">
              8 (800) 444-04-81
            </a>
            <Link
              to="/consultation"
              className="hidden sm:flex items-center px-6 py-2.5 rounded-full bg-[#f59e0b] hover:bg-[#ffae00] text-black text-sm font-bold shadow-lg transition"
            >
              Consultation
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white text-xl">
              ☰
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-3 rounded-3xl bg-black/70 backdrop-blur-xl border border-white/10 p-5 mb-4">
            <div className="flex flex-col gap-3">
              {["Home", "Services", "Resources", "Company", "Contacts"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/80 hover:text-white text-sm"
                >
                  {item}
                </Link>
              ))}
              <Link
                to="/consultation"
                onClick={() => setMobileOpen(false)}
                className="mt-4 bg-[#f59e0b] text-black rounded-full py-3 text-center font-bold text-sm"
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
