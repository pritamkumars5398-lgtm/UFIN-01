import React from "react";

export default function ProfitabilitySection() {
  return (
    <section className="bg-white">
      {/* ── Heading block (Image 1 top area) ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12 text-center">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          We increase your profitability through continuous monitoring of
          operations
        </h2>
      </div>

      {/* ── Full-width 3D animation video (Image 2) ── */}
      <div className="w-full overflow-hidden bg-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full object-contain"
          style={{ display: "block" }}
        >
          <source src="/busniess-1-1.mp4#t=0.001" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
