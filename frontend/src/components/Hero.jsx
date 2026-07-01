import React from "react";
import businessVideo from "../assets/business-main.mp4";

export default function Hero() {
  const features = [
    {
      title: "route of movement and control of operation",
      desc: "monitoring location, fuel consumption, tire pressure and other parameters",
    },
    {
      title: "video monitoring of the transportation process",
      desc: "compliance with industry standards, improving safety, and determining who is at fault in an accident",
    },
    {
      title: "control of climatic parameters of transportation",
      desc: "confirmed quality of transportation, continuous automated transfer of data on transportation conditions to the client",
    },
    {
      title: "video monitoring and driver assistance",
      desc: "improving safety and reducing the number of road accidents",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden font-sans">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={businessVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">
        <div className="max-w-3xl">
          
          <h1 className="text-4xl md:text-[50px] font-bold text-white leading-tight tracking-tight mb-12">
            GLONASS transport monitoring
          </h1>

          <div className="space-y-6">
            {features.map((item, index) => (
              <div key={index} className="flex gap-5 items-start group">
                <div className="shrink-0 mt-1">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#f59e0b]" // Orange color for checkmark
                  >
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div>
                  <h3 className="text-xl text-white font-medium mb-1.5 group-hover:text-[#f59e0b] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed max-w-2xl font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
