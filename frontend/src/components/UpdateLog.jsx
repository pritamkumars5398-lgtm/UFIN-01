import React from "react";

import {
  Apple,
  Smartphone,
  Monitor,
} from "lucide-react";

import {
  FaAndroid,
  FaChrome,
} from "react-icons/fa";

export default function UpdateLog() {
  const updates = [
    {
      date: "April 15, 2026",
      title: "Tech support at MAX",

      icons: [
        <Apple key="apple" size={22} />,
        <FaAndroid key="android" size={22} color="#67C23A" />,
        <Smartphone key="phone" size={22} />,
      ],

      desc:
        "Messenger MAX is now available as the main support channel across all TEKONIKA SYSTEMS Control mobile applications.",
    },

    {
      date: "March 30, 2026",
      title: "Mobile Application",

      icons: [
        <Smartphone key="smart" size={22} />,
      ],

      desc:
        "The mobile application has been updated with improved performance and support for additional mobile services.",
    },

    {
      date: "March 15, 2026",
      title: "Web application",

      icons: [
        <FaChrome key="chrome" size={22} color="#4285F4" />,
        <Monitor key="monitor" size={22} />,
      ],

      desc:
        "Fuel and sensor monitoring charts now include trips, parking, refueling and draining events.",
    },
  ];

  return (
    <section className="bg-[#f7f7f7] py-24">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold text-[#0B1F33] mb-16">
          Update log
        </h2>

        <div className="space-y-12">

          {updates.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-10"
            >
              <p className="text-sm text-gray-400 mb-3">
                {item.date}
              </p>

              <h3 className="text-2xl font-semibold text-[#0B1F33] mb-4">
                {item.title}
              </h3>

              <div className="flex gap-4 mb-5">
                {item.icons}
              </div>

              <p className="text-gray-700 leading-8">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        <div className="flex justify-center mt-14">

          <button
            className="
              px-10
              py-3
              rounded
              border
              border-[#0A8B82]
              text-[#0A8B82]
              hover:bg-[#0A8B82]
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