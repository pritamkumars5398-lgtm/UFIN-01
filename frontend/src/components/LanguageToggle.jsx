import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed z-[9999]"
      style={{ bottom: "90px", right: "20px" }}
    >
      {/* Tooltip label */}
      {hovered && (
        <div
          className="absolute right-14 top-1/2 -translate-y-1/2 bg-[#222] text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg"
        >
          {language === "en" ? "Switch to Russian" : "Switch to English"}
        </div>
      )}

      <button
        onClick={() => setLanguage(language === "en" ? "ru" : "en")}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        title={language === "en" ? "Switch to Russian" : "Switch to English"}
        className="w-12 h-12 rounded-full bg-[#2a2a2a]/90 backdrop-blur-sm text-white flex items-center justify-center shadow-xl hover:bg-[#177f73] hover:scale-110 transition-all duration-200 border border-white/10"
      >
        {/* Translation icon — 文A style matching your screenshot */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M5 8l6 6" />
          <path d="M4 6h7" />
          <path d="M2 4h9" />
          <path d="m10 4-3 12" />
          <path d="M14 12h8" />
          <path d="M18 8v9" />
        </svg>
      </button>

      {/* Current language badge */}
      <span className="absolute -top-1.5 -right-1.5 bg-[#177f73] text-white text-[9px] font-bold rounded-full w-5 h-5 flex items-center justify-center uppercase shadow">
        {language}
      </span>
    </div>
  );
}
