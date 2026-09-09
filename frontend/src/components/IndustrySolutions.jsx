import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// Industry category images - same as ufin.online
import imgFood from "../assets/Produkty.png";
import imgFreight from "../assets/GruzTransport.png";
import imgPassenger from "../assets/PassazhirPerevozki.png";
import imgTaxi from "../assets/Taxi.png";
import imgConstruction from "../assets/StroyTechnika.png";
import imgLeasing from "../assets/Lizing.png";
import imgDangerous from "../assets/OpasnieGruzy.png";
import imgAgriculture from "../assets/Selhoz.png";
import imgUtilities from "../assets/ZhKHa.png";
import imgBanks from "../assets/Banki.png";
import imgProduction from "../assets/Proizvodstvo.png";
import imgTrade from "../assets/Torgovlya.png";
import imgPharma from "../assets/Farma.png";
import imgMedical from "../assets/MedUchrezhdeniya.png";
import imgFuel from "../assets/ToplivoIEnergetika.png";

const industries = [
  {
    key: "food",
    labelEn: "Transportation of food products",
    labelRu: "Перевозка продуктов питания",
    img: imgFood,
  },
  {
    key: "freight",
    labelEn: "Freight transport",
    labelRu: "Грузовой транспорт",
    img: imgFreight,
  },
  {
    key: "passenger",
    labelEn: "Passenger transportation",
    labelRu: "Пассажирские перевозки",
    img: imgPassenger,
  },
  {
    key: "taxi",
    labelEn: "Taxi fleets",
    labelRu: "Таксомоторные парки",
    img: imgTaxi,
  },
  {
    key: "construction",
    labelEn: "Construction equipment",
    labelRu: "Строительная техника",
    img: imgConstruction,
  },
  {
    key: "leasing",
    labelEn: "Leasing",
    labelRu: "Лизинг",
    img: imgLeasing,
  },
  {
    key: "dangerous",
    labelEn: "Dangerous goods",
    labelRu: "Опасные грузы",
    img: imgDangerous,
  },
  {
    key: "agriculture",
    labelEn: "Agricultural equipment",
    labelRu: "Сельхозтехника",
    img: imgAgriculture,
  },
  {
    key: "utilities",
    labelEn: "Utilities",
    labelRu: "ЖКХ",
    img: imgUtilities,
  },
  {
    key: "banks",
    labelEn: "Banks",
    labelRu: "Банки",
    img: imgBanks,
  },
  {
    key: "production",
    labelEn: "Production",
    labelRu: "Производство",
    img: imgProduction,
  },
  {
    key: "trade",
    labelEn: "Trade",
    labelRu: "Торговля",
    img: imgTrade,
  },
  {
    key: "pharma",
    labelEn: "Pharmaceuticals",
    labelRu: "Фармацевтика",
    img: imgPharma,
  },
  {
    key: "medical",
    labelEn: "Medical institutions",
    labelRu: "Медицинские учреждения",
    img: imgMedical,
  },
  {
    key: "fuel",
    labelEn: "Fuel & Energy",
    labelRu: "Топливо и Энергетика",
    img: imgFuel,
  },
];

export default function IndustrySolutions() {
  const { language } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  // Instead of slicing, we render all and control visibility via CSS classes for animation
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading — same as ufin.online: centered, large bold */}
        <h2 className="text-center text-4xl md:text-[2.6rem] font-bold text-gray-900 mb-16 tracking-tight">
          Industry solutions
        </h2>

        {/* Grid — 4 columns on desktop, 2 on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14 transition-all duration-500 ease-in-out">
          {industries.map((item, index) => (
            <a
              key={item.key}
              href="#"
              className={`group flex flex-col items-center text-center cursor-pointer transition-all duration-500 ${!showAll && index >= 8 ? 'opacity-0 scale-95 hidden' : 'opacity-100 scale-100'}`}
              style={{ display: !showAll && index >= 8 ? 'none' : 'flex' }}
            >
              {/* Image with transparent background, scales on hover */}
              <div className="h-[160px] w-full flex items-center justify-center mb-5">
                <img
                  src={item.img}
                  alt={language === "en" ? item.labelEn : item.labelRu}
                  className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-110"
                />
              </div>

              {/* Label */}
              <p className="text-[15px] font-semibold text-gray-900 leading-snug group-hover:text-[#0d9488] transition-colors">
                {language === "en" ? item.labelEn : item.labelRu}
              </p>
            </a>
          ))}
        </div>

        {/* Toggle button */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full max-w-[280px] py-3.5 px-6 border border-[#0d9488] text-[#0d9488] rounded-md font-medium text-base hover:bg-[#0d9488] hover:text-white transition-colors cursor-pointer"
          >
            {showAll 
              ? (language === "en" ? "Show less" : "Скрыть") 
              : (language === "en" ? "Show all" : "Показать все")}
          </button>
        </div>
      </div>
    </section>
  );
}
