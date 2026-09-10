import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  const handleClose = () => {
    setModalOpen(false);
    setSent(false);
    setPhone("");
    setAgreed(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    setSent(true);
  };

  // Get localized content
  const heroData = t("hero") || {};
  const features = heroData.features || [];

  return (
    <>
      <section className="relative min-h-screen overflow-hidden font-sans">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/business-main.mp4#t=0.001" type="video/mp4" />
          </video>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-20 animate-fade-in-up">
            <div className="max-w-[750px] bg-black/75 rounded-2xl p-8 md:p-12 lg:p-14 backdrop-blur-sm border border-white/5">
              <h1 className="text-4xl md:text-[44px] lg:text-[52px] font-extrabold text-white leading-[1.15] tracking-tight mb-10">
                {heroData.title}
              </h1>

              <div className="space-y-6">
                {features.map((item, index) => (
                  <div key={index} className="flex gap-5 items-start group">
                    <div className="shrink-0 mt-1">
                      <img
                        src={new URL("../assets/tick-1.svg", import.meta.url).href}
                        alt="check"
                        className="w-6 h-6 object-contain"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                    <div>
                      <h3 className="text-[17px] text-white font-bold mb-1.5 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[#e2e8f0] text-[15px] leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button — opens modal */}
              <button
                onClick={() => setModalOpen(true)}
                className="mt-8 px-10 py-4 rounded-md font-bold text-white text-[15px] bg-[#fca311] hover:bg-[#e2930f] transition-all cursor-pointer"
              >
                {heroData.button || "Submit a request"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center animate-fade-in"
          style={{ background: "rgba(0,0,0,0.55)" }}
          onClick={handleClose}
        >
          <div
            className="relative bg-white rounded-2xl px-10 py-10 w-full max-w-[480px] mx-4 animate-scale-up"
            style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.22)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition text-xl leading-none cursor-pointer"
              aria-label="Close"
            >
              ✕
            </button>

            {sent ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Request sent!</h2>
                <p className="text-gray-500 text-sm">We will contact you during the business day.</p>
                <button
                  onClick={handleClose}
                  className="mt-6 px-6 py-2.5 rounded-lg bg-[#177f73] text-white font-semibold hover:bg-[#136860] transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                {/* Title */}
                <h2 className="text-[32px] font-extrabold text-gray-900 leading-tight mb-7">
                  {heroData.button}
                </h2>

                {/* Telegram Button */}
                <a
                  href="https://t.me/tekonika_systems"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl text-white font-semibold text-[15px] transition hover:opacity-90"
                  style={{ background: "#2AABEE" }}
                >
                  {/* Telegram icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21.944 2.506a1.5 1.5 0 00-1.553-.232L2.5 9.75a1.5 1.5 0 00.09 2.77l4.16 1.387 1.61 5.148a1 1 0 001.74.332l2.42-2.748 4.74 3.488a1.5 1.5 0 002.32-1.003l2-14.5a1.5 1.5 0 00-.636-1.118z"
                      fill="white"
                    />
                  </svg>
                  on Telegram
                </a>

                {/* Separator */}
                <div className="flex items-center gap-3 my-5">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-gray-500 text-sm whitespace-nowrap">or order a call</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Form */}
                <form onSubmit={handleSend} className="space-y-4">
                  {/* Phone input with +7 prefix */}
                  <div
                    className="flex items-center rounded-xl overflow-hidden border border-gray-200"
                    style={{ background: "#f0f4f8" }}
                  >
                    <span
                      className="px-4 py-3.5 text-gray-600 font-semibold text-[15px] border-r border-gray-200 select-none"
                      style={{ background: "#f0f4f8" }}
                    >
                      +7
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="(999) 999-9999*"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="flex-1 px-4 py-3.5 bg-transparent text-gray-700 text-[15px] outline-none placeholder-gray-400"
                    />
                  </div>

                  {/* Send Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-white font-bold text-[15px] transition hover:opacity-90 cursor-pointer"
                    style={{ background: "#177f73" }}
                  >
                    Send
                  </button>

                  {/* Consent */}
                  <label className="flex items-start gap-2.5 cursor-pointer mt-1">
                    <input
                      type="checkbox"
                      required
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 w-4 h-4 accent-[#177f73] cursor-pointer"
                    />
                    <span className="text-[13px] text-gray-500 leading-relaxed">
                      I agree to{" "}
                      <a
                        href="/privacy"
                        className="text-[#ff9c23] hover:underline"
                      >
                        processing of personal data
                      </a>
                    </span>
                  </label>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
