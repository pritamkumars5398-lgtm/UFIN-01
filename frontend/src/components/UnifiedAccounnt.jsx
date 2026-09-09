import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Section Images
import imgTransport from "../assets/transport.png";
import imgVideo from "../assets/video.png";
import imgDriver from "../assets/driver.png";
import imgEmployees from "../assets/employees.png"; 
import imgIntegrations from "../assets/integrations.png";
import imgTasks from "../assets/tasks.png";

// SVG Icons
import iconTick from "../assets/tick-1.svg";
import iconCamera from "../assets/camera.svg";
import iconReg from "../assets/reg.svg";
import iconDisplay from "../assets/display.svg";
import iconDriver from "../assets/driver-icon.svg";
import iconPersonal from "../assets/personal-1.svg";
import iconApi from "../assets/api.svg";
import iconTr from "../assets/tr-1.svg";
import iconTaskBoard from "../assets/Produkty.png.webp"; // fallback or reuse

export default function UnifiedAccounnt() {
  const [active, setActive] = useState("TRANSPORT");

  const content = {
    TRANSPORT: {
      description:
        "Continuous location and operation monitoring improves business profitability by continuously monitoring your fleet's performance at your production sites with minimal overhead. The system will instantly notify you of fuel drains, temperature exceeding specified limits, low tire pressure, and many other important events impacting your business.",
      cards: [
        { title: "Fuel consumption", icon: iconTick },
        { title: "Transportation temperature and HOU", icon: iconTick },
        { title: "Tire pressure", icon: iconTick },
      ],
      img: imgTransport,
    },

    VIDEO: {
      description:
        "Online streaming and archiving of video footage of the situation in the cab, cabin, along the route, and around the vehicle ensures compliance with the RF Government Regulations for the transportation of passengers and hazardous goods, provides evidence in the event of an accident, minimizes the risk of theft, and improves driver discipline and performance. Video is stored not only on the dashcam but also in the Ufin Control cloud.",
      cards: [
        { title: "Cameras", icon: iconCamera },
        { title: "Registrars", icon: iconReg },
        { title: "Displays", icon: iconDisplay },
      ],
      img: imgVideo,
    },

    DRIVER: {
      description:
        "Driver attention, coupled with automated assistance in tracking and identifying pedestrians and other road hazards, is gradually becoming a mandatory, first-class tool for improving road safety. Modern GSM transmitters and artificial intelligence-powered cameras can help avoid danger and remind drivers to focus on driving if they become distracted.",
      cards: [
        { title: "Driver control", icon: iconDriver },
      ],
      img: imgDriver,
    },

    EMPLOYEES: {
      description:
        "Employee location tracking improves the efficiency of hired personnel: ensuring accurate employee arrival at work or to a client, reducing the use of work time for personal purposes, and optimizing the costs of completing tasks.",
      cards: [
        { title: "Employee monitoring", icon: iconPersonal },
      ],
      img: imgEmployees,
    },

    INTEGRATION: {
      description:
        "Do your customers want to see how you serve them in your information systems? The age of digitalization is upon us. Integration is one of the most important advantages for a carrier. Connect to Ufin Control and you can transmit not only your customers' locations to external systems, but also cargo temperature, estimated arrival time, videos, and much more.",
      cards: [
        { title: "API integration", icon: iconApi },
        { title: "Relay servers", icon: iconTr },
      ],
      img: imgIntegrations,
    },

    TASKS: {
      description:
        "Create and manage alerts and operational tasks.",
      cards: [
        { title: "Task Board", icon: iconTick },
        { title: "Assignments", icon: iconTick },
        { title: "History", icon: iconTick },
      ],
      img: imgTasks,
    },
  };

  const current = content[active];

  return (
    <section className="bg-[#edf5f3] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Unified personal account
        </h2>

        {/* Tabs — left-aligned row, uppercase, teal underline */}
        <div className="border-b border-gray-300 mb-10">
          <div className="flex flex-wrap gap-0">
            {Object.keys(content).map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`
                  px-6 py-4 text-sm font-semibold tracking-widest uppercase relative transition-colors
                  ${active === tab
                    ? "text-[#0d9488]"
                    : "text-gray-700 hover:text-gray-900"}
                `}
              >
                {tab}
                {active === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#0d9488] rounded-t" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Body — description + accordions LEFT, image RIGHT */}
        <div className="grid lg:grid-cols-2 gap-16 items-start pt-4">

          {/* LEFT */}
          <div>
            <p className="text-gray-800 leading-7 text-[15px] mb-8 max-w-lg">
              {current.description}
            </p>

            <div className="space-y-3">
              {current.cards.map((item) => (
                <button
                  key={item.title}
                  className="group w-full max-w-md bg-transparent rounded border border-gray-300 px-5 py-4 flex justify-between items-center hover:border-[#0d9488] hover:shadow-sm transition text-left text-[15px] text-gray-800 font-medium"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-[30px] h-[30px] flex items-center justify-center bg-teal-50 rounded-full">
                      <img src={item.icon} alt={item.title} className="w-5 h-5 object-contain" />
                    </div>
                    <span>{item.title}</span>
                  </div>
                  <ChevronRight size={18} className="text-gray-500 group-hover:text-[#0d9488] group-hover:translate-x-1 transition" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
            <img
              key={current.img}
              src={current.img}
              alt={active}
              className="w-full h-[420px] object-cover transition duration-700 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
