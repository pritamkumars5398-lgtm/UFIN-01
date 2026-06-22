import React, { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const companies = [
  { name: "Торэкс", country: "Россия", img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=400&q=80" },
  { name: "Октион", country: "Россия", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80" },
  { name: "ГазПром Межрегионгаз", country: "Россия", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80" },
  { name: "Sudha Fleet Management", country: "Индия", img: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?auto=format&fit=crop&w=400&q=80" },
  { name: "Bajaj Travels", country: "Индия", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" },
  { name: "ПАО «Северсталь»", country: "Россия", img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=400&q=80" },
  { name: "Логистик Групп", country: "Россия", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=400&q=80" },
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
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600')" }}
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
