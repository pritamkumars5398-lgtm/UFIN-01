import React from "react";
import { FaApple, FaAndroid, FaChrome } from "react-icons/fa";
import { SiHuawei } from "react-icons/si";

export default function UpdateLog() {
  const updates = [
    {
      date: "April 15, 2026",
      title: "Tech support at MAX",
      icons: [
        <FaApple key="apple" size={24} color="#000000" />,
        <FaAndroid key="android" size={24} color="#A4C639" />,
        <SiHuawei key="huawei" size={24} color="#FF0000" />,
      ],
      desc: "Messenger Max is now the primary service for technical support in Russia across all UFIN Control mobile apps.",
    },
    {
      date: "March 30, 2026",
      title: "",
      icons: [
        <SiHuawei key="huawei" size={24} color="#FF0000" />,
      ],
      desc: "A mobile version of the application for Huawei based on HMS with previously implemented features has been released functions for the GMS-based version.",
    },
    {
      date: "March 15, 2026",
      title: "Web application",
      icons: [
        <FaChrome key="chrome" size={24} color="#4285F4" />, // Chrome color isn't strictly defined in screenshot, it shows standard multi-color chrome icon, but a solid color or react-icons is fine
      ],
      desc: "Fuel and other sensor monitoring charts have been supplemented with information about trips, parking, refueling and fuel draining events.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[800px] mx-auto px-6">
        
        <h2 className="text-center text-4xl font-normal text-[#1F2937] mb-16">
          Update log
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
                <h3 className="text-xl font-bold text-[#1F2937] mb-4">
                  {item.title}
                </h3>
              )}

              <div className="flex gap-3 mb-4">
                {item.icons}
              </div>

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