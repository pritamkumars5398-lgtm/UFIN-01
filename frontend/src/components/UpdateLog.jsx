import React from "react";
import { FaApple, FaAndroid, FaChrome } from "react-icons/fa";
import { SiHuawei } from "react-icons/si";
import { useLanguage } from "../context/LanguageContext";

export default function UpdateLog() {
  const { t } = useLanguage();
  const updates = t("servicesPage.updateLogItems") || [];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[800px] mx-auto px-6">
        
        <h2 className="text-center text-4xl font-normal text-[#1F2937] mb-16">
          {t("updateLogTitle") || "Update log"}
        </h2>

        <div className="space-y-0">
          {updates.map((item, index) => (
            <div
              key={index}
              className={`pb-12 ${index !== updates.length - 1 ? "border-b border-gray-100 mb-12" : ""}`}
            >
              <p className="text-sm text-[#9CA3AF] mb-4">
                {item.date}
              </p>

              {item.title && (
                <a href={item.link} target="_blank" rel="noreferrer" className="block mb-4">
                  <h3 className="text-xl font-bold text-[#1F2937] hover:text-[#1B7F6D] transition-colors inline-block">
                    {item.title}
                  </h3>
                </a>
              )}

              <p className="text-[#1F2937] text-[15px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="
              px-10
              py-3
              rounded
              border
              border-[#1B7F6D]
              text-[#1B7F6D]
              font-medium
              hover:bg-[#1B7F6D]
              hover:text-white
              transition
            "
          >
            All changes
          </button>
        </div>

      </div>
    </section>
  );
}