import React, { useRef, useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import galileo from "../assets/galileo10.jpg.webp";
import signal from "../assets/signal-s2653.jpg";
import ent850 from "../assets/ENT850.png.webp";
import umka from "../assets/umka302-1.jpg.webp";
import bpk from "../assets/BPK4-EHBO.jpg.webp";
import img24 from "../assets/img-24-e1674854414374.png.webp";
import mdsm7 from "../assets/mdsm-7.jpg";
import mdas9 from "../assets/mdas-9.jpg";
import mrv21 from "../assets/mrv-21.jpg";
import escortTd from "../assets/escort-td-ble.jpg";
import externalTpms from "../assets/external-tpms.jpg";
import hp21 from "../assets/hp21.jpg";
import tpmsMonitor from "../assets/tpms-monitor.jpg";
import internalTpms from "../assets/internal-tpms.jpg";


// Maps each device index to its image — order matches translations.js devices.list
const deviceImages = [
  galileo,       // 0 - GALILEOSKY 10
  signal,        // 1 - SIGNAL S-2653
  umka,          // 2 - UMKa302
  ent850,        // 3 - Scout ENT855
  bpk,           // 4 - BPK4-EHBO
  mdsm7,         // 5 - MDSM-7
  mdas9,         // 6 - MDAS-9
  mrv21,         // 7 - MRV-21
  escortTd,      // 8 - Escort TD-BLE
  externalTpms,  // 9 - External TPMS
  hp21,          // 10 - HP21
  tpmsMonitor,   // 11 - TPMS Monitor
  internalTpms,  // 12 - Internal TPMS
];


export default function DevicesSection() {
  const { t } = useLanguage();
  const devicesList = t("devices.list") || [];
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  // Responsive: update how many cards are visible
  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      if (w < 600) setVisibleCount(1);
      else if (w < 900) setVisibleCount(2);
      else if (w < 1100) setVisibleCount(3);
      else setVisibleCount(4);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, devicesList.length - visibleCount);
  const canPrev = currentIndex > 0;
  const canNext = currentIndex < maxIndex;

  const scrollToIndex = (idx) => {
    const clampedIdx = Math.max(0, Math.min(idx, maxIndex));
    setCurrentIndex(clampedIdx);
    if (trackRef.current) {
      const card = trackRef.current.children[0];
      if (card) {
        const gapPx = 20;
        const cardW = card.offsetWidth + gapPx;
        trackRef.current.style.transform = `translateX(-${clampedIdx * cardW}px)`;
      }
    }
  };

  const handlePrev = () => scrollToIndex(currentIndex - 1);
  const handleNext = () => scrollToIndex(currentIndex + 1);

  return (
    <section className="bg-white py-16">
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 40px" }}>
        {/* Section Title */}
        <h2
          className="text-center font-bold text-[#102133] mb-12"
          style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
        >
          {t("devices.title")}
        </h2>

        {/* Carousel container */}
        <div style={{ position: "relative" }}>
          {/* Overflow mask */}
          <div style={{ overflow: "hidden" }}>
            <div
              ref={trackRef}
              style={{
                display: "flex",
                gap: 20,
                transition: "transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)",
                willChange: "transform",
              }}
            >
              {devicesList.map((item, index) => (
                <DeviceCard
                  key={item.title + index}
                  item={item}
                  img={deviceImages[index]}
                  buttonLabel={t("devices.button")}
                  visibleCount={visibleCount}
                />
              ))}
            </div>
          </div>

          {/* Prev Arrow */}
          <ArrowBtn
            direction="left"
            disabled={!canPrev}
            onClick={handlePrev}
          />

          {/* Next Arrow */}
          <ArrowBtn
            direction="right"
            disabled={!canNext}
            onClick={handleNext}
          />
        </div>

        {/* Dot indicators */}
        {maxIndex > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 8,
              marginTop: 24,
            }}
          >
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: i === currentIndex ? 28 : 10,
                  height: 10,
                  borderRadius: 5,
                  border: "none",
                  cursor: "pointer",
                  background: i === currentIndex ? "#3a7a52" : "#d1d5db",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// Individual Device Card
function DeviceCard({ item, img, buttonLabel, visibleCount }) {
  const cardWidth = `calc((100% - ${(visibleCount - 1) * 20}px) / ${visibleCount})`;

  return (
    <div
      style={{
        flexShrink: 0,
        width: cardWidth,
        minWidth: cardWidth,
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        padding: "20px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        boxSizing: "border-box",
      }}
      className="device-card-hover"
    >
      {/* Image */}
      <div
        style={{
          width: "100%",
          height: 160,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
          overflow: "hidden",
        }}
      >
        {img ? (
          <img
            src={img}
            alt={item.title}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
              transition: "transform 0.3s ease",
            }}
            className="device-img-hover"
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#f3f4f6",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#9ca3af",
              fontSize: 12,
            }}
          >
            No image
          </div>
        )}
      </div>

      {/* Title */}
      <h3
        style={{
          fontWeight: 700,
          color: "#22313d",
          fontSize: 13,
          lineHeight: 1.4,
          marginBottom: 10,
        }}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: 12,
          color: "#6b7280",
          lineHeight: 1.6,
          flex: 1,
        }}
      >
        {item.desc}
      </p>

      {/* CTA Button */}
      <button
        style={{
          marginTop: 16,
          width: "100%",
          padding: "10px 0",
          borderRadius: 6,
          border: "none",
          background: "#f59e0b",
          color: "#102133",
          fontWeight: 700,
          fontSize: 13,
          cursor: "pointer",
          transition: "background 0.2s ease",
        }}
        className="device-btn-hover"
      >
        {buttonLabel}
      </button>
    </div>
  );
}

// Arrow navigation button
function ArrowBtn({ direction, disabled, onClick }) {
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={isLeft ? "Previous" : "Next"}
      style={{
        position: "absolute",
        [isLeft ? "left" : "right"]: -22,
        top: "38%",
        transform: "translateY(-50%)",
        zIndex: 10,
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 22,
        fontWeight: 700,
        color: "#fff",
        background: disabled ? "#d1d5db" : "#3a7a52",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        boxShadow: disabled ? "none" : "0 2px 10px rgba(58,122,82,0.35)",
        transition: "background 0.2s ease, opacity 0.2s ease",
        lineHeight: 1,
      }}
      className={disabled ? "" : "arrow-btn-hover"}
    >
      {isLeft ? "‹" : "›"}
    </button>
  );
}
