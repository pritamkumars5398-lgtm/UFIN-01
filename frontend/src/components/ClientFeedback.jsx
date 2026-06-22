import React, { useState } from "react";

export default function ClientFeedback() {
  const [active, setActive] = useState(0);

  const reviews = [
    {
      company: "LLC SK Avanstroy",
      text:
        "We've been using vehicle monitoring services for many years. We've tried several tracking systems, and most recently we were working on a local server, which prevented us from developing automation. The cloud service allowed us to integrate satellite vehicle monitoring into our information system and connect field staff to mobile monitoring.",
    },
    {
      company: "TransCo Ltd.",
      text:
        "The platform helped us reduce fuel costs and optimize routes. Integration was smooth and the support team was responsive.",
    },
    {
      company: "LogiFleet",
      text:
        "Real-time alerts and driver behaviour analytics allowed us to improve safety and decrease incidents across our fleet.",
    },
    {
      company: "AgroTrans",
      text:
        "Monitoring temperature and HOU for refrigerated transport saved us significant losses during seasonal peaks.",
    },
    {
      company: "CityTaxi Group",
      text:
        "Easy to use interface and reliable tracking — our dispatchers rely on it every day.",
    },
  ];

  return (
    <section className="bg-[#043e35] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-white text-5xl font-bold mb-20">
          Feedback from our clients
        </h2>

        <div className="grid lg:grid-cols-2 items-center gap-16">

          {/* Left */}
          <div className="relative flex items-center justify-center">

            <button
              onClick={() => setActive((active - 1 + reviews.length) % reviews.length)}
              aria-label="Previous review"
              className="absolute left-0 w-12 h-12 rounded-full border border-white/10 text-white hover:bg-white/10 transition"
            >
              ‹
            </button>

            <div className="text-[180px] font-black leading-none tracking-tight">

              <span className="text-[#08b4ff]">A</span>

              <span className="bg-gradient-to-b from-[#28c9ff] to-[#0077ff] bg-clip-text text-transparent">
                C
              </span>
            </div>

            <button
              onClick={() => setActive((active + 1) % reviews.length)}
              aria-label="Next review"
              className="absolute right-0 w-12 h-12 rounded-full border border-white/10 text-white hover:bg-white/10 transition"
            >
              ›
            </button>
          </div>

          {/* Right — review card */}
          <div>

            <div className="bg-[#003329] rounded-2xl p-8 lg:p-10 shadow-2xl">

              <p className="text-white text-[20px] leading-9">
                {reviews[active].text}
              </p>

              <div className="mt-12 text-white/80 font-semibold">
                {reviews[active].company}
              </div>

              <button className="mt-8 px-10 py-4 rounded-lg bg-[#ffb137] hover:bg-[#ff9f0a] text-white font-semibold shadow-[0_10px_30px_rgba(255,177,55,.4)] transition">
                Full review
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-4 mt-8">

              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Show review ${i + 1}`}
                  className={`w-3 h-3 rounded-full transition ${
                    i === active ? "bg-white" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
