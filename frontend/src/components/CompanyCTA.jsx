import React from "react";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import osipovImg from "../assets/osipov-fullbody.png";

/**
 * Shared "Contact us / Promotion" banner used at the bottom of the
 * Company-section sub-pages. Mirrors the dark-green CEO block from
 * the reference site.
 */
export default function CompanyCTA({
  heading = "Contact us",
  subtitle = "Get detailed information and a consultation.",
}) {
  return (
    <section className="bg-[#1d4135] overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] items-end">
          {/* CEO photo + label */}
          <div className="relative hidden lg:flex items-end">
            <div className="relative w-full max-w-[360px] ml-auto">
              <div className="absolute top-24 -left-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4 z-20 shadow-xl">
                <p className="text-white/50 text-[12px] font-medium tracking-wide mb-1">
                  General Manager
                </p>
                <p className="text-white font-semibold text-[17px] leading-tight">
                  Alexey Osipov
                </p>
              </div>
              <img
                src={osipovImg}
                alt="Alexey Osipov — General Manager"
                className="w-full object-contain object-bottom"
                style={{ minHeight: "360px", maxHeight: "440px" }}
              />
            </div>
          </div>

          {/* Text + actions */}
          <div className="text-white py-16 lg:pl-12">
            <h2 className="text-[32px] lg:text-[36px] font-bold mb-3">{heading}</h2>
            <p className="text-white/60 text-[15px] mb-8 max-w-[460px]">{subtitle}</p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="https://t.me/tekonika_systems"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 transition rounded-md px-5 py-2.5 text-[#00a3ff] text-[14px] font-bold shadow-sm"
              >
                <FaTelegramPlane size={18} />
                Telegram chat
              </a>
              <Link
                to="/consultation"
                className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#ffae00] transition rounded-md px-6 py-2.5 text-black text-[14px] font-extrabold shadow-sm"
              >
                Request a callback
              </Link>
            </div>

            <div>
              <p className="text-[#F58220] font-bold text-[15px] uppercase tracking-wide mb-2">
                Promotion!
              </p>
              <p className="text-white/75 text-[14px] leading-relaxed max-w-[460px]">
                Submit your online request now. We will contact you during business
                hours and give you a 10% discount on the initial equipment installation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
