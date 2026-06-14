import React from "react";

export default function DevicesSection() {
  const devices = [
    {
      title: "On-board navigation terminal GALILEOSKY 10",
      desc: "Advanced functionality for monitoring and control.",
      img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=600",
    },
    {
      title: "SIGNAL S-2653 Navigation Terminal",
      desc: "Tracker with CAN interfaces and monitoring.",
      img: "https://images.unsplash.com/photo-1580894908361-967195033215?w=600",
    },
    {
      title: "UMKa302 Navigation Terminal",
      desc: "Reliable GLONASS/GPS tracking terminal.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    },
    {
      title: "Scout ENT855 Navigation Terminal",
      desc: "Comprehensive monitoring with sensors.",
      img: "https://images.unsplash.com/photo-1581092335878-3b9d58f3c0f4?w=600",
    },
    {
      title: "BI820 Dash Cam",
      desc: "Digital recorder with GPS and Wi-Fi.",
      img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600",
    },
  ];

  return (
    <section className="bg-[#f7f7f7] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-medium text-[#102133] mb-16">
          Control devices from leading manufacturers
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {devices.map((item) => (
            <div
              key={item.title}
              className="
                bg-white
                border
                border-slate-200
                rounded
                p-6
                flex
                flex-col
                items-center
                text-center
                hover:-translate-y-2
                hover:shadow-xl
                transition
              "
            >

              <img
                src={item.img}
                alt={item.title}
                className="
                  w-[160px]
                  h-[110px]
                  object-contain
                  mb-8
                "
              />

              <h3 className="font-semibold text-[#22313d]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm text-[#8aa0a5] leading-6">
                {item.desc}
              </p>

              <button
                className="
                  mt-8
                  w-full
                  py-3
                  rounded
                  bg-[#FFA62B]
                  hover:bg-[#ff9800]
                  text-white
                  font-semibold
                  transition
                "
              >
                Find out the price
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}