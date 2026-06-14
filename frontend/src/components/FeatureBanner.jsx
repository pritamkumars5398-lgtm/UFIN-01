import React from "react";

export default function FeatureBanner() {
  const items = [
    {
      title: "Integration with your accounting systems",
      desc: "To reduce routine work, eliminate reporting errors, and automate fleet accounting and reporting.",
      img: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1600",
    },
    {
      title: "Driver control",
      desc: "Reducing the impact of human factors on road safety.",
      img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-10">

      <div className="max-w-[1500px] mx-auto">

        <div className="grid md:grid-cols-2">

          {items.map((item) => (
            <div
              key={item.title}
              className="
                relative
                h-[420px]
                overflow-hidden
                group
              "
            >

              {/* Background */}
              <img
                src={item.img}
                alt={item.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition
                  duration-700
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-black/65
                  via-black/35
                  to-[#01453f]/80
                "
              />

              {/* Content */}
              <div
                className="
                  relative
                  z-10
                  h-full
                  flex
                  flex-col
                  justify-center
                  px-14
                  text-white
                "
              >

                <h2 className="text-5xl font-bold max-w-xl mb-8">
                  {item.title}
                </h2>

                <p className="max-w-xl text-lg text-white/85 leading-8 mb-10">
                  {item.desc}
                </p>

                <button
                  className="
                    w-[180px]
                    h-[56px]
                    bg-[#FFA62B]
                    hover:bg-[#ff9600]
                    rounded
                    font-semibold
                    transition
                  "
                >
                  Read more
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}