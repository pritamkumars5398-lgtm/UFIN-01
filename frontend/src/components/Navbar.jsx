import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeToggle, setActiveToggle] = useState("business");

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glass Background */}
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
                <h2 className="text-white font-black text-xl">
                  УФИН
                </h2>

                <p className="text-white/60 text-xs tracking-[3px]">
                  КОНТРОЛЬ
                </p>
              </div>

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