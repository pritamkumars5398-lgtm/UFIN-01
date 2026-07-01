import React from "react";
import { useLanguage } from "../context/LanguageContext";
import bannerImg1 from "../assets/rybric-1.png.webp";
import bannerImg2 from "../assets/rybric-10.png.webp";

const images = [
  bannerImg1,
  bannerImg2,
];

export default function FeatureBanner() {
  const { t } = useLanguage();
  const items = t("featureBanner.list") || [];

  return (
    <section className="bg-[#f5f5f5] py-8">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid md:grid-cols-2">
          {items.map((item, index) => (
            <div key={item.title} className="relative h-80 overflow-hidden group">
              <img
                src={images[index]}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-[#01453f]/70" />
              <div className="relative z-10 h-full flex flex-col justify-center px-10 text-white">
                <h2 className="text-lg font-bold max-w-xs mb-3 leading-snug">
                  {item.title}
                </h2>
                <p className="max-w-xs text-xs text-white/80 leading-relaxed mb-6">
                  {item.desc}
                </p>
                <button className="w-32 h-10 bg-[#f59e0b] hover:bg-[#ffae00] rounded text-black text-sm font-bold transition">
                  {t("featureBanner.button")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
