import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const features = t("hero.features") || [];

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-7xl mx-auto px-6 py-28">
        <div className="max-w-2xl">
          <div className="backdrop-blur-lg bg-black/45 border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl text-white">

            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              {t("hero.title")}
            </h1>

            <div className="mt-8 space-y-5">
              {features.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4E8F89]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} className="text-[#4E8F89]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                to="/consultation"
                className="inline-block px-7 py-3 rounded bg-[#f59e0b] hover:bg-[#ffae00] text-black text-sm font-bold transition"
              >
                {t("hero.button")}
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
