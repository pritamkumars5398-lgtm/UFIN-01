import React, { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import gazprom from "../assets/GazpromMain.png.webp";
import gruz from "../assets/GruzTransport.png.webp";
import passenger from "../assets/PassazhirPerevozki.png.webp";
import taxi from "../assets/Taxi.png.webp";
import construction from "../assets/StroyTechnika.png.webp";
import leasing from "../assets/Lizing.png.webp";
import produkiy from "../assets/Produkty.png.webp";
import rybricBg from "../assets/rybric-bg.png";

const companies = [
  { name: "Торэкс", country: "Россия", img: gruz },
  { name: "Октион", country: "Россия", img: produkiy },
  { name: "ГазПром Межрегионгаз", country: "Россия", img: gazprom },
  { name: "Sudha Fleet Management", country: "Индия", img: passenger },
  { name: "Bajaj Travels", country: "Индия", img: taxi },
  { name: "ПАО «Северсталь»", country: "Россия", img: construction },
  { name: "Логистик Групп", country: "Россия", img: leasing },
];

export default function CompanyClients() {
  const { t, language } = useLanguage();
  const scrollRef = useRef(null);

  const scroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-[#f6f7f7] py-24 overflow-hidden">

      {/* Map Background */}
      <div
        className="absolute inset-0 opacity-[0.06] bg-center bg-cover"
        style={{ backgroundImage: `url('${rybricBg}')` }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#0b1f33] max-w-3xl mx-auto leading-tight mb-14">
          {t("companyClients.title")}
        </h2>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {companies.map((item) => {
              const countryLabel = item.country === "Россия" 
                ? (language === "en" ? "Russia" : "Россия")
                : (language === "en" ? "India" : "Индия");

              return (
                <div
                  key={item.name}
                  className="bg-white shrink-0 w-44 overflow-hidden hover:-translate-y-1 transition duration-300 rounded"
                >
                  <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-[#24323d] text-xs leading-snug">{item.name}</h3>
                    <p className="text-[#4E8F89] mt-1 text-xs">{countryLabel}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={scroll}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#4E8F89] hover:text-white transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
