import React from "react";
import { useLanguage } from "../context/LanguageContext";

const industries = [
  {
    titleKey: "Food transportation",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=400&q=80",
  },
  {
    titleKey: "Freight transport",
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=400&q=80",
  },
  {
    titleKey: "Passenger transit",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=400&q=80",
  },
  {
    titleKey: "Taxi fleets",
    img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    titleKey: "Construction equipment",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80",
  },
  {
    titleKey: "Leasing",
    img: "https://images.unsplash.com/photo-1596633608891-fd3c7ef1e97d?auto=format&fit=crop&w=400&q=80",
  },
  {
    titleKey: "Dangerous goods",
    img: "https://images.unsplash.com/photo-1545262810-a9b9f1db8a84?auto=format&fit=crop&w=400&q=80",
  },
  {
    titleKey: "Agricultural machinery",
    img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=400&q=80",
  },
];

export default function OperationsSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-3xl font-bold text-[#0B1F33] mb-14">
          {t("operations.title")}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {industries.map((item) => (
            <div key={item.titleKey} className="flex flex-col items-center group cursor-pointer">
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-50">
                <img
                  src={item.img}
                  alt={t(`operations.industries.${item.titleKey}`)}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-[#073b37] leading-snug">
                {t(`operations.industries.${item.titleKey}`)}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-8 py-2.5 rounded border border-[#4E8F89] text-[#4E8F89] text-sm hover:bg-[#4E8F89] hover:text-white transition">
            {t("operations.button")}
          </button>
        </div>

      </div>
    </section>
  );
}
