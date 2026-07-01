import React from "react";
import { ChevronRight, Phone } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import partnerImg from "../assets/rybric-1.png.webp";

export default function ResourcesSection() {
  const { t } = useLanguage();
  const items = t("resourcesSection.list") || [];

  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left image */}
          <div>
            <img
              src={partnerImg}
              alt="Partnership"
              className="w-full h-[560px] object-cover rounded-xl"
            />
          </div>

          {/* Right content */}
          <div>
            <p className="text-[#4E8F89] uppercase text-xs font-semibold tracking-widest mb-2">
              {t("resourcesSection.category")}
            </p>
            <h2 className="text-3xl font-bold text-[#0B1F33] leading-tight mb-8">
              {t("resourcesSection.title")}
            </h2>

            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-gray-100 rounded-lg p-5 flex justify-between items-start hover:shadow-md transition cursor-pointer"
                >
                  <div>
                    <h3 className="text-sm font-semibold text-[#0B1F33] mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                  <ChevronRight size={16} className="text-gray-300 mt-0.5 shrink-0" />
                </div>
              ))}
            </div>

            {/* Contact card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 mt-5">
              <p className="text-sm font-bold text-[#0B1F33] mb-4">{t("resourcesSection.questionsTitle")}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center">
                    <Phone size={15} className="text-gray-500" />
                  </div>
                  <span className="text-base font-bold text-[#0B1F33]">{t("common.phone")}</span>
                </div>
                <a href="https://t.me/tekonika_systems" className="w-9 h-9 rounded bg-[#229ED9] text-white flex items-center justify-center hover:opacity-80 transition">
                  <FaTelegramPlane size={16} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
