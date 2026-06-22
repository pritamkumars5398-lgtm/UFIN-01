import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function OperationsSection() {
  const industries = [
    {
      title: "Transportation of food products",
      img: "https://cdn-icons-png.flaticon.com/512/3081/3081984.png",
    },
    {
      title: "Freight transport",
      img: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
    },
    {
      title: "Passenger transportation",
      img: "https://cdn-icons-png.flaticon.com/512/3448/3448339.png",
    },
    {
      title: "Taxi fleets",
      img: "https://cdn-icons-png.flaticon.com/512/3097/3097181.png",
    },
    {
      title: "Construction equipment",
      img: "https://cdn-icons-png.flaticon.com/512/1995/1995470.png",
    },
    {
      title: "Leasing",
      img: "https://cdn-icons-png.flaticon.com/512/744/744465.png",
    },
    {
      title: "Dangerous goods",
      img: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png",
    },
    {
      title: "Agricultural machinery",
      img: "https://cdn-icons-png.flaticon.com/512/2630/2630526.png",
    },
  ];

  return (
    <section className="bg-[#f7f7f7] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold text-[#0B1F33] mb-20">
          Industry solutions
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-20">

          {industries.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center group"
            >

              <img
                src={item.img}
                alt={item.title}
                className="
                  w-[150px]
                  h-[110px]
                  object-contain
                  group-hover:scale-110
                  transition
                  duration-500
                "
              />

              <p
                className="
                  mt-8
                  text-center
                  text-[#073b37]
                  font-semibold
                  max-w-[220px]
                "
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-20">

          <button
            className="
              px-10
              py-3
              rounded
              border
              border-[#00796B]
              text-[#00796B]
              hover:bg-[#00796B]
              hover:text-white
              transition
            "
          >
            Show all
          </button>
        </div>

      </div>
    </section>
  );
}
