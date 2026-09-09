import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ── Correct logos from ufin.online big-review section ──
import avanstroyLogo from "../assets/avanstroy-logo.svg";
import stsLogo       from "../assets/sts-logo.svg";
import adeoLogo      from "../assets/adeo-logo.png";
import oktionLogo    from "../assets/oktion-logo.png";
import trakLogo      from "../assets/trakgrupp-logo.png";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const review = reviews[active];

  return (
    <section className="bg-[#043e35] py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Title */}
        <h2 className="text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 leading-tight">
          {t("clientFeedback.title") || "Feedback from our clients"}
        </h2>

        {/* Main Slider Row */}
        <div className="relative flex items-center justify-between gap-2 sm:gap-4 md:gap-6">

          {/* Desktop Left Arrow */}
          <button
            onClick={prev}
            aria-label="Previous review"
            className="hidden sm:flex shrink-0 w-11 h-11 rounded-full border border-white/25 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white items-center justify-center transition cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Active Slide Content */}
          <div
            key={active}
            className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 items-center animate-fade-in"
          >
            {/* Logo Column */}
            <div className="md:col-span-5 flex items-center justify-center p-4 sm:p-6 min-h-[140px] sm:min-h-[200px] md:min-h-[260px]">
              <img
                src={review.logo}
                alt={review.company}
                className="max-w-[200px] sm:max-w-[260px] md:max-w-[320px] max-h-[120px] sm:max-h-[180px] md:max-h-[220px] w-full object-contain filter drop-shadow-md"
              />
            </div>

            {/* Review Card Column */}
            <div className="md:col-span-7 bg-[#033028] rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 shadow-2xl border border-white/5">
              <p className="text-white text-sm sm:text-base leading-relaxed sm:leading-loose mb-4 sm:mb-6 font-normal">
                {review.text}
              </p>

              <p className="text-white/60 font-semibold text-xs sm:text-sm mb-6 sm:mb-8">
                {review.company}
              </p>

              <a
                href={review.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-[#ffb137] hover:bg-[#ffa517] text-white font-semibold text-sm transition shadow-md"
              >
                {t("clientFeedback.fullReview") || "Full review"}
              </a>
            </div>
          </div>

          {/* Desktop Right Arrow */}
          <button
            onClick={next}
            aria-label="Next review"
            className="hidden sm:flex shrink-0 w-11 h-11 rounded-full border border-white/25 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white items-center justify-center transition cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Mobile Arrows & Indicators Bar */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
          
          {/* Mobile Left Arrow */}
          <button
            onClick={prev}
            aria-label="Previous review"
            className="flex sm:hidden shrink-0 w-9 h-9 rounded-full border border-white/25 bg-white/5 active:bg-white/20 text-white items-center justify-center transition"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Review ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-7 bg-white" : "w-2.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Mobile Right Arrow */}
          <button
            onClick={next}
            aria-label="Next review"
            className="flex sm:hidden shrink-0 w-9 h-9 rounded-full border border-white/25 bg-white/5 active:bg-white/20 text-white items-center justify-center transition"
          >
            <ChevronRight size={20} />
          </button>

        </div>

      </div>
    </section>
  );
}
