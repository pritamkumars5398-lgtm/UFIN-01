import React from "react";
import { ChevronRight, Phone, Send } from "lucide-react";

export default function ResourcesSection() {
  const items = [
    {
      title: "Integration with corporate information systems",
      desc: "Free your employees from routine work",
    },
    {
      title: "Entry passes",
      desc: "Data relay to the Russian Scientific Research Center",
    },
    {
      title: "Wide range of compatible equipment",
      desc: "Allows you to create unique solutions for your business",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
              alt="Handshake"
              className="w-full h-[650px] object-cover rounded-xl"
            />
          </div>

          {/* Right Content */}
          <div>

            <p className="text-[#0A8B82] uppercase text-sm font-semibold mb-3">
              Resources
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F33] leading-tight mb-10">
              Your partner for many
              <br />
              years
            </h2>

            {/* Cards */}
            <div className="space-y-5">

              {items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-7 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex justify-between items-start">

                    <div>
                      <h3 className="text-lg font-semibold text-[#0B1F33] mb-4">
                        {item.title}
                      </h3>

                      <p className="text-gray-500 text-sm">
                        {item.desc}
                      </p>
                    </div>

                    <ChevronRight
                      size={18}
                      className="text-gray-400 mt-1"
                    />
                  </div>
                </div>
              ))}

            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-lg shadow-md p-7 mt-6">

              <h3 className="text-2xl font-bold text-[#0B1F33] mb-6">
                Any questions left?
              </h3>

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-full border flex items-center justify-center">
                    <Phone size={18} />
                  </div>

                  <span className="text-xl font-bold">
                    8 (800) 444-04-81
                  </span>
                </div>

                <button className="w-11 h-11 rounded-md bg-[#1DA1F2] text-white flex items-center justify-center hover:scale-105 transition">
                  <Send size={18} />
                </button>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}