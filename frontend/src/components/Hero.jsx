import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const features = [
    {
      title: "Route monitoring & operation control",
      desc: "Monitoring location, fuel consumption, tire pressure and other parameters",
    },
    {
      title: "Transportation video monitoring",
      desc: "Compliance with standards, improved safety, and accident analysis",
    },
    {
      title: "Climate parameter control",
      desc: "Automated transfer of transportation condition data to clients",
    },
    {
      title: "Driver assistance & video monitoring",
      desc: "Improving safety and reducing road accidents",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <div className="backdrop-blur-lg bg-black/50 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl text-white">
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              GLONASS Transport Monitoring
            </h1>

            <p className="mt-4 text-white/75 text-lg">
              Smart transport tracking with real-time monitoring,
              safety systems and climate control.
            </p>

            <div className="mt-10 space-y-7">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879A1 1 0 003.293 9.293l4 4a1 1 0 001.414 0l8-8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-orange-400 transition">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-white/70 leading-7">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/consultation"
                className="px-7 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-semibold transition"
              >
                Request Demo
              </Link>

              <Link
                to="/services"
                className="px-7 py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black transition"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}