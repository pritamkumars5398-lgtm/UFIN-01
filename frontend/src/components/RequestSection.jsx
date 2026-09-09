import React from "react";
import { Phone, Mail } from "lucide-react";
import ceoImg from "../assets/ceo.webp";
import { useLanguage } from "../context/LanguageContext";

export default function RequestSection() {
  const { t, language } = useLanguage();

  const steps = [
    "Define a list of transport monitoring parameters",
    "Agree on the specifications of the vehicle monitoring equipment and its installation conditions",
    "Make payment for equipment, installation, and monitoring services for the next month.",
    "Provide vehicles to integrators for equipment installation and monitoring system setup",
    "Now your cars are under continuous control!"
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative bg-[#EAF5F2] md:py-20 py-12 px-6 lg:px-12 overflow-hidden rounded-3xl">
          <div className="grid lg:grid-cols-[1.2fr_450px] gap-12 lg:gap-20">
            {/* LEFT SIDE */}
            <div className="relative z-10">
              <h2 className="text-4xl md:text-[44px] font-bold text-[#1F2937] mb-12">
                How to start?
              </h2>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
                {/* Column 1: Steps 1, 2, 3 */}
                <div className="flex flex-col gap-y-8">
                  {steps.slice(0, 3).map((step, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded shrink-0 bg-[#1B7F6D] text-white flex items-center justify-center font-bold text-lg">
                        {i + 1}
                      </div>
                      <p className="text-[#1F2937] text-sm md:text-base leading-snug">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Column 2: Steps 4, 5 */}
                <div className="flex flex-col gap-y-8">
                  {steps.slice(3, 5).map((step, i) => (
                    <div key={i + 3} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded shrink-0 bg-[#1B7F6D] text-white flex items-center justify-center font-bold text-lg">
                        {i + 4}
                      </div>
                      <p className="text-[#1F2937] text-sm md:text-base leading-snug">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (FORM) */}
            <div className="relative z-20">
              <div className="bg-white p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-md lg:-mt-32 lg:-mb-32 relative animate-scale-up">
                <h3 className="text-center text-4xl font-bold text-[#1F2937] mb-8 leading-tight">
                  {t("hero.button") || "Submit a request"}
                </h3>

                {/* CEO Info */}
                <div className="flex items-center gap-4 mb-8">
                  <img
                    src={ceoImg}
                    alt="director"
                    className="w-[60px] h-[60px] rounded object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-[#F58220] text-sm">
                      {language === "en" ? "Sergey Chulsky" : "Чульский Сергей"}
                    </h4>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {language === "en" ? "Technical Director" : "Технический директор"}
                    </p>
                  </div>
                </div>

                {/* Contact Links */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <a href={`tel:${t("common.phone").replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2 text-[#F58220] font-bold text-sm hover:underline">
                    <Phone size={16} className="text-[#1B7F6D]" />
                    {t("common.phone")}
                  </a>
                  <a href={`mailto:${t("common.emailBuy")}`} className="flex items-center gap-2 text-[#F58220] font-bold text-sm hover:underline break-all">
                    <Mail size={16} className="text-[#1B7F6D]" />
                    {t("common.emailBuy")}
                  </a>
                </div>

                {/* Phone Input Box */}
                <div className="flex mb-4">
                  <div className="bg-[#E5E7EB] text-gray-600 px-4 py-3 flex items-center justify-center font-medium rounded-l text-sm">
                    +7
                  </div>
                  <input
                    type="tel"
                    placeholder="(999) 999-9999*"
                    className="flex-1 bg-[#F9FAFB] border border-gray-200 px-4 py-3 text-sm outline-none rounded-r focus:border-[#1B7F6D] transition"
                  />
                </div>

                {/* Submit Button */}
                <button className="w-full bg-[#1B7F6D] hover:bg-[#156758] text-white font-bold text-sm py-4 rounded transition-colors mb-4">
                  {t("common.send")}
                </button>

                {/* Checkbox */}
                <label className="flex items-start gap-2 cursor-pointer mt-4">
                  <input type="checkbox" className="mt-1" defaultChecked />
                  <span className="text-xs text-gray-500 leading-tight">
                    {language === "en" ? "I agree to " : "Я согласен на "}
                    <span className="text-[#F58220]">
                      {language === "en" ? "processing of personal data" : "обработку персональных данных"}
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
