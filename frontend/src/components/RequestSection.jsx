import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function RequestSection() {
  const steps = [
    "Define a list of transport monitoring parameters",
    "Agree on equipment specifications and installation conditions",
    "Make payment for equipment, installation and monitoring services",
    "Provide vehicles for installation and setup",
    "Now your cars are under continuous control",
  ];

  return (
    <section className="bg-[#f5f5f5] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="relative bg-[#eaf4f2] rounded-sm p-16">

          <div className="grid lg:grid-cols-[1.5fr_420px] gap-16">

            {/* LEFT */}
            <div>

              <h2 className="text-5xl font-bold text-[#132133] mb-14">
                How to start?
              </h2>

              <div className="grid md:grid-cols-2 gap-x-14 gap-y-10">

                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex gap-5"
                  >

                    <div
                      className="
                        w-12
                        h-12
                        rounded
                        bg-[#177f73]
                        text-white
                        flex
                        items-center
                        justify-center
                        font-bold
                        shrink-0
                      "
                    >
                      {i + 1}
                    </div>

                    <p className="text-[#102133] leading-7">
                      {step}
                    </p>

                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div
              className="
                bg-white
                p-8
                shadow-lg
                rounded
                -mt-32
                relative
                z-10
              "
            >

              <h3 className="text-center text-5xl font-bold text-[#132133]">
                Submit a request
              </h3>

              <div className="flex items-center gap-4 mt-8">

                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300"
                  alt="director"
                  className="w-16 h-16 rounded"
                />
                <div>
                  <h4 className="font-semibold text-[#ff8c00]">
                    Chulsky Sergey
                  </h4>

                  <p className="text-sm text-slate-500">
                    Technical Director
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">

                <div className="flex justify-between text-[#ff8c00] text-sm">
                  <span>📞 8 (800) 444-04-81</span>
                  <span>✉ buy@tekonikasystems.online</span>
                </div>

                <input
                  type="tel"
                  placeholder="+7 (999) 999-9999"
                  className="
                    w-full
                    h-12
                    px-4
                    border
                    rounded
                    outline-none
                  "
                />

                <button
                  className="
                    w-full
                    h-12
                    rounded
                    bg-[#177f73]
                    text-white
                    font-semibold
                    hover:bg-[#14695f]
                    transition
                  "
                >
                  Send
                </button>

                <label className="flex gap-2 text-xs text-slate-500">

                  <input type="checkbox" />

                  I agree to processing of personal data

                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
