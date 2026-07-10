import React from "react";
import { ArrowRight } from "lucide-react";

export default function NewsSection() {
  const news = [
    {
      date: "March 21, 2025",
      title: "Automated fuel control",
    },
    {
      date: "March 14, 2025",
      title: "Ufin Control presents an updated logo",
    },
    {
      date: "October 18, 2024",
      title: "Cloud video storage",
    },
  ];

  return (
    <section className="bg-[#EAF5F2] py-28">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_3fr] gap-8 items-start">
          
          {/* Left Heading */}
          <div className="pr-4 mb-10 lg:mb-0">
            <h2 className="text-3xl lg:text-[34px] font-bold text-[#1F2937] leading-tight">
              Interesting news<br />and articles
            </h2>
          </div>

          {/* News Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {news.map((item, index) => (
              <div
                key={index}
                className="border-l border-gray-300/60 px-8 py-2 flex flex-col justify-between min-h-[160px]"
              >
                <div>
                  <p className="text-xs text-[#9CA3AF] mb-3 font-medium">
                    {item.date}
                  </p>
                  <h3 className="text-base font-bold text-[#1F2937] leading-snug pr-4">
                    {item.title}
                  </h3>
                </div>

                <button className="mt-8 w-8 h-8 rounded bg-[#F58220] hover:bg-[#e0771c] transition flex items-center justify-center shrink-0">
                  <ArrowRight size={16} className="text-white" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}