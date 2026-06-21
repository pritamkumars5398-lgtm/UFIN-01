import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const images = {
  "TRANSPORT": "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
  "VIDEO": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=80",
  "DRIVER": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
  "EMPLOYEES": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  "INTEGRATIONS": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  "TASKS": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
};

export default function UnifiedAccounnt() {
  const { t } = useLanguage();
  const [active, setActive] = useState("TRANSPORT");

  const tabKeys = ["TRANSPORT", "VIDEO", "DRIVER", "EMPLOYEES", "INTEGRATIONS", "TASKS"];
  const currentDescription = t(`unifiedAccount.content.${active}.description`);
  const currentCards = t(`unifiedAccount.content.${active}.cards`) || [];
  const currentImg = images[active];

  return (
    <section className="bg-[#edf5f3] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-3xl font-bold text-slate-900 mb-12">
          {t("unifiedAccount.title")}
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-6 border-b border-slate-200 mb-12">
          {tabKeys.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`pb-4 text-xs font-semibold tracking-widest transition relative ${
                active === tab ? "text-[#0d9488]" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {t(`unifiedAccount.tabs.${tab}`)}
              {active === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0d9488]" />
              )}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-slate-600 text-sm leading-7 mb-8 max-w-xl">
              {currentDescription}
            </p>
            <div className="space-y-3">
              {currentCards.map((item) => (
                <button
                  key={item}
                  className="group w-full max-w-sm bg-white rounded-lg border border-slate-100 px-5 py-4 flex justify-between items-center hover:shadow-md hover:-translate-y-0.5 transition text-sm"
                >
                  <span className="font-medium text-gray-800">{item}</span>
                  <ChevronRight size={16} className="text-gray-300 group-hover:text-[#4E8F89] transition" />
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              key={currentImg}
              src={currentImg}
              alt={active}
              className="w-full h-80 object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
