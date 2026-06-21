import React from "react";
import { useLanguage } from "../context/LanguageContext";

const images = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1461800919507-79b16743b257?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&w=300&q=80",
];

export default function DevicesSection() {
  const { t } = useLanguage();
  const devicesList = t("devices.list") || [];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-3xl font-bold text-[#102133] mb-12">
          {t("devices.title")}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {devicesList.map((item, index) => (
            <div
              key={item.title}
              className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition"
            >
              <div className="w-full h-28 flex items-center justify-center mb-5">
                <img
                  src={images[index]}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-[#22313d] text-xs leading-snug mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed flex-1">
                {item.desc}
              </p>
              <button className="mt-5 w-full py-2.5 rounded bg-[#f59e0b] hover:bg-[#ffae00] text-black text-xs font-bold transition">
                {t("devices.button")}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
