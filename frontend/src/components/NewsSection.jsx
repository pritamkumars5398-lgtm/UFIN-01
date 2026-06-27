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
      title: "Tekonika Systems Control presents an updated logo",
    },
    {
      date: "October 18, 2024",
      title: "Cloud video storage",
    },
  ];

  return (
    <section className="bg-[#EEF4F3] py-28">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">

          {/* Left Heading */}
          <div className="pr-10">
            <h2 className="text-[48px] font-bold text-[#0B1F33] leading-tight">
              Interesting news
              <br />
              and articles
            </h2>
          </div>

          {/* News Cards */}
          {news.map((item, index) => (
            <div
              key={index}
              className="border-l border-gray-300 px-8 flex flex-col justify-between min-h-[130px]"
            >
              <div>
                <p className="text-sm text-gray-400 mb-3">
                  {item.date}
                </p>

                <h3 className="text-lg font-semibold text-[#0B1F33] leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Button */}
              <button className="mt-8 w-10 h-10 rounded-md bg-[#FFA726] hover:bg-[#ff9800] transition flex items-center justify-center">
                <ArrowRight
                  size={18}
                  className="text-white"
                />
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}