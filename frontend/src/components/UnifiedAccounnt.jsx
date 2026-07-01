import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import imgTransport from "../assets/GruzTransport.png.webp";
import imgVideo from "../assets/rybric-1.png.webp";
import imgDriver from "../assets/rybric-10.png.webp";
import imgEmployees from "../assets/PassazhirPerevozki.png.webp";
import imgIntegrations from "../assets/StroyTechnika.png.webp";
import imgTasks from "../assets/Produkty.png.webp";

const images = {
  "TRANSPORT": imgTransport,
  "VIDEO": imgVideo,
  "DRIVER": imgDriver,
  "EMPLOYEES": imgEmployees,
  "INTEGRATIONS": imgIntegrations,
  "TASKS": imgTasks,
};

export default function UnifiedAccounnt() {
  const [active, setActive] = useState("TRANSPORT");

  const content = {
    TRANSPORT: {
      description:
        "Continuous location and operation monitoring improves business profitability by continuously monitoring your fleet's performance at your production sites with minimal overhead. The system will instantly notify you of fuel drains, temperature exceeding specified limits, low tire pressure, and many other important events impacting your business.",
      cards: [
        "Fuel consumption",
        "Transportation temperature and HOU",
        "Tire pressure",
      ],
      img: imgTransport,
    },

    VIDEO: {
      description:
        "View live and historical video feeds from fleet cameras to improve security.",
      cards: [
        "Live feed",
        "Recorded videos",
        "Smart alerts",
      ],
      img: imgVideo,
    },

    DRIVER: {
      description:
        "Track driver performance and manage records in one dashboard.",
      cards: [
        "Driver profile",
        "Safety score",
        "Training",
      ],
      img: imgDriver,
    },

    EMPLOYEES: {
      description:
        "Manage employees, permissions and operations efficiently.",
      cards: [
        "Roles",
        "Permissions",
        "Activity",
      ],
      img: imgEmployees,
    },

    INTEGRATION: {
      description:
        "Integrate external APIs and automate business workflows.",
      cards: [
        "API",
        "Webhooks",
        "Automation",
      ],
      img: imgIntegrations,
    },

    TASKS: {
      description:
        "Create and manage alerts and operational tasks.",
      cards: [
        "Task Board",
        "Assignments",
        "History",
      ],
      img: imgTasks,
    },
  };

  const current = content[active];

  return (
    <section className="bg-[#edf5f3] py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-5xl font-bold text-slate-900 mb-16">
          Unified personal account
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-10 border-b border-slate-300 mb-16">

          {Object.keys(content).map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`
                pb-5
                font-semibold
                transition-all
                relative
                ${
                  active === tab
                    ? "text-[#0d9488]"
                    : "text-slate-600 hover:text-black"
                }
              `}
            >
              {tab}

              {active === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0d9488]" />
              )}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT */}
          <div>

            <p className="text-slate-700 leading-8 mb-10 max-w-xl">
              {current.description}
            </p>

            <div className="space-y-4">

              {current.cards.map((item) => (
                <button
                  key={item}
                  className="
                    group
                    w-full
                    max-w-md
                    bg-white
                    rounded-xl
                    border
                    border-slate-200
                    px-7
                    py-5
                    flex
                    justify-between
                    items-center
                    hover:shadow-lg
                    hover:-translate-y-1
                    transition
                  "
                >
                  <span>{item}</span>

                  <span className="group-hover:translate-x-2 transition">
                    →
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>

            <div
              className="
                rounded-3xl
                overflow-hidden
                shadow-[0_30px_80px_rgba(0,0,0,.12)]
              "
            >

              <img
                key={current.img}
                src={current.img}
                alt={active}
                className="
                  w-full
                  h-[450px]
                  object-cover
                  hover:scale-105
                  transition
                  duration-700
                "
              />

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
