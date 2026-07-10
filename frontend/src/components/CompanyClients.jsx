import React, { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

import rybricBg from "../assets/rybric-bg.png";

// Import downloaded company slider images
import torexImg from "../assets/companies/____________2022-10-17_141426046.png.webp";
import oktionImg from "../assets/companies/____________2022-07-01_190844774.png.webp";
import gazpromImg from "../assets/companies/GazpromMain.png.webp";
import sudhaImg from "../assets/companies/img-24-e1674854414374.png.webp";
import bajajImg from "../assets/companies/____________2022-08-26_124906397.png.webp";
import o11Img from "../assets/companies/____________2023-01-15_170731221-e1674854433948.png.webp";
import zhukovskyImg from "../assets/companies/img-25-e1674854546297.png.webp";
import toyomiImg from "../assets/companies/img-26.png.webp";
import avanstroyImg from "../assets/companies/avanstroj-scaled.jpg.webp";
import sagarImg from "../assets/sagartravels.jpg";
import kupetsImg from "../assets/companies/kupecz.jpg.webp";
import pflkImg from "../assets/companies/pflk-m.png.webp";

const companies = [
  { name: "Torex", nameRu: "Торэкс", country: "Russia", countryRu: "Россия", img: torexImg },
  { name: "Oktion", nameRu: "Октион", country: "Russia", countryRu: "Россия", img: oktionImg },
  { name: "Gazprom Mezhregiongaz", nameRu: "ГазПром Межрегионгаз", country: "Russia", countryRu: "Россия", img: gazpromImg },
  { name: "Sudha Fleet Management", nameRu: "Sudha Fleet Management", country: "India", countryRu: "Индия", img: sudhaImg },
  { name: "Bajaj Travels", nameRu: "Bajaj Travels", country: "India", countryRu: "Индия", img: bajajImg },
  { name: 'PJSC "O11"', nameRu: 'ПАО "О11"', country: "Russia", countryRu: "Россия", img: o11Img },
  { name: "Zhukovsky ACS of the Ministry of Emergency Situations", nameRu: "Жуковский АСЦ МЧС России", country: "Russia", countryRu: "Россия", img: zhukovskyImg },
  { name: "Toyomi", nameRu: "Тойоми", country: "Russia", countryRu: "Россия", img: toyomiImg },
  { name: 'LLC SK "Avanstroy"', nameRu: 'ООО СК "Аванстрой"', country: "Russia", countryRu: "Россия", img: avanstroyImg },
  { name: "Sagar Travels", nameRu: "Sagar Travels", country: "India", countryRu: "Индия", img: sagarImg },
  { name: "KupetsStroy", nameRu: "КупецСтрой", country: "Russia", countryRu: "Россия", img: kupetsImg },
  { name: "PFLK-M", nameRu: "ПФЛК-М", country: "Russia", countryRu: "Россия", img: pflkImg },
];

export default function CompanyClients() {
  const { t, language } = useLanguage();
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -370, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 370, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#ffffff" }}>

      {/* Faint Map Background */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover pointer-events-none"
        style={{ 
          backgroundImage: `url('${rybricBg}')`,
          opacity: 0.15, 
          backgroundPosition: "center top"
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6">
        
        <h2 className="text-center font-normal text-[#132133] leading-tight mb-16 mx-auto" style={{ fontSize: "clamp(24px, 4vw, 44px)", maxWidth: "1000px" }}>
          {t("companyClients.title")}
        </h2>

        <div className="relative group">
          {/* LEFT ARROW */}
          <button
            onClick={scrollLeft}
            className="absolute left-[-24px] top-[40%] z-10 w-[50px] h-[50px] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md"
            style={{ backgroundColor: "#1B7F6D", color: "#fff" }}
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {companies.map((item, index) => {
              const displayName = language === "en" ? item.name : item.nameRu;
              const displayCountry = language === "en" ? item.country : item.countryRu;

              return (
                <div
                  key={index}
                  className="bg-white shrink-0 w-[280px] md:w-[350px] flex flex-col snap-center relative shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300"
                >
                  <div className="h-[200px] md:h-[230px] w-full overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={displayName} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                    />
                  </div>
                  <div className="p-6 pb-8 bg-white flex flex-col flex-1">
                    <h3 className="font-bold text-[#132133] text-lg mb-2 leading-snug">
                      {displayName}
                    </h3>
                    <p className="text-[#849aab] text-sm mt-auto font-medium">
                      {displayCountry}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={scrollRight}
            className="absolute right-[-24px] top-[40%] z-10 w-[50px] h-[50px] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md"
            style={{ backgroundColor: "#1B7F6D", color: "#fff" }}
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

        </div>
      </div>
    </section>
  );
}
