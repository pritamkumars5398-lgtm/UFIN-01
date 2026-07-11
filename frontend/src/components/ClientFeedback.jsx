import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// ── Correct logos from ufin.online big-review section ──
import avanstroyLogo from "../assets/avanstroy-logo.svg";
import stsLogo       from "../assets/sts-logo.svg";
import adeoLogo      from "../assets/adeo-logo.png";
import oktionLogo    from "../assets/oktion-logo.png";
import trakLogo      from "../assets/trakgrupp-logo.png";
import sagarLogo     from "../assets/sagartravels-logo.jpg";

const reviews = [
  {
    logo: avanstroyLogo,
    company: "LLC SK Avanstroy",
    text: "We've been using vehicle monitoring services for many years. We've tried several different tracking systems, and most recently, we were working on a local server, which prevented us from developing automation. The Ufin Control cloud service allowed us not only to integrate satellite vehicle monitoring into our information system but also to connect our field staff to mobile monitoring.",
    link: "https://ufin.online/review/rukovoditel-transportnogo-otdela-sk-avanstroy-alexander-parfenov/",
  },
  {
    logo: stsLogo,
    company: "STS Logistic",
    text: "For several years of cooperation with the monitoring system, we've been able to significantly improve driver discipline and minimize personal use of vehicles. The quality of service and technical support at all stages of connection completely satisfy us.",
    link: "https://ufin.online/review/rukovoditel-transportnogo-otdela-gk-sts-dmitrij-gladkov/",
  },
  {
    logo: adeoLogo,
    company: "Adeo.Pro",
    text: "Vehicle monitoring gave our company the opportunity to fully control vehicle movements and optimize costs. The integration with Ufin Control allowed us to automate all operational processes and provide clients with accurate data.",
    link: "https://ufin.online/review/adeo-pro/",
  },
  {
    logo: oktionLogo,
    company: "Октион",
    text: "Thanks to vehicle monitoring we've been able to fully manage our transport and quickly respond to any changes. We got full control over all our vehicles at once, integration with 1C and several other services was a pleasant bonus.",
    link: "https://ufin.online/review/kompaniya-oktion-rossiya/",
  },
  {
    logo: trakLogo,
    company: "ТракГрупп",
    text: "Cooperation with the transport monitoring service Ufin Control has provided us with a complete picture of what happens with all our vehicles at any time. We noticed results from the first day: integration with 1C and other business systems went smoothly.",
    link: "https://ufin.online/review/truck-grupp/",
  },
];

export default function ClientFeedback() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  const prev = () => setActive((active - 1 + reviews.length) % reviews.length);
  const next = () => setActive((active + 1) % reviews.length);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActive(current => (current + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const review = reviews[active];

  return (
    <section
      style={{
        background: "#043e35",
        paddingTop: "80px",
        paddingBottom: "80px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        {/* Title */}
        <h2
          style={{
            textAlign: "center",
            color: "#ffffff",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
            marginBottom: "60px",
            lineHeight: 1.2,
          }}
        >
          {t("clientFeedback.title") || "Feedback from our clients"}
        </h2>

        {/* Slider row */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            aria-label="Previous review"
            style={{
              flexShrink: 0,
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.25)",
              background: "transparent",
              color: "rgba(255,255,255,0.7)",
              fontSize: "22px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ‹
          </button>

          {/* SLIDE */}
          <div
            key={active}
            className="animate-fade-in"
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "minmax(220px, 380px) 1fr",
              gap: "32px",
              alignItems: "center",
            }}
          >
            {/* LEFT — company logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "260px",
                padding: "16px",
              }}
            >
              <img
                src={review.logo}
                alt={review.company}
                style={{
                  maxWidth: "320px",
                  maxHeight: "220px",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* RIGHT — review card */}
            <div
              style={{
                background: "#033028",
                borderRadius: "12px",
                padding: "40px 44px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              }}
            >
              <p
                style={{
                  color: "#ffffff",
                  fontSize: "16px",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                {review.text}
              </p>

              <p
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontWeight: 600,
                  fontSize: "14px",
                  marginBottom: "24px",
                }}
              >
                {review.company}
              </p>

              <a
                href={review.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "12px 32px",
                  borderRadius: "6px",
                  background: "#ffb137",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                {t("clientFeedback.fullReview") || "Full review"}
              </a>
            </div>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            aria-label="Next review"
            style={{
              flexShrink: 0,
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.25)",
              background: "transparent",
              color: "rgba(255,255,255,0.7)",
              fontSize: "22px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ›
          </button>
        </div>

        {/* Dot indicators */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "40px",
          }}
        >
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Review ${i + 1}`}
              style={{
                width: i === active ? "28px" : "10px",
                height: "10px",
                borderRadius: "5px",
                background: i === active ? "#ffffff" : "rgba(255,255,255,0.25)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
