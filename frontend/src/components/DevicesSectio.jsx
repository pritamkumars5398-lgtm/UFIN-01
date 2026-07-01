import React from "react";
import { useLanguage } from "../context/LanguageContext";
import galileo from "../assets/galileo10.jpg.webp";
import ent850 from "../assets/ENT850.png.webp";
import umka from "../assets/umka302-1.jpg.webp";
import bpk from "../assets/BPK4-EHBO.jpg.webp";
import img24 from "../assets/img-24-e1674854414374.png.webp";

const images = [
  galileo,
  ent850,
  umka,
  bpk,
  img24,
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
