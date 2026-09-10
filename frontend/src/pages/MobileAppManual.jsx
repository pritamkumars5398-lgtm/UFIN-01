import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronDown, ChevronUp, Smartphone, ArrowLeft } from "lucide-react";
import { AppleIcon, GooglePlayIcon } from "../components/Icons";
import PageHero from "../components/PageHero";
import CompanyCTA from "../components/CompanyCTA";
import { mobileAppManual } from "../data/resourcesContent";
import heroImg from "../assets/driver.png";

function HuaweiIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
  );
}

export default function MobileAppManual() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Mobile app user manual"
        subtitle="First-run setup for the Tekonika Systems app — sign in, add objects, notifications and reports."
        image={heroImg}
        crumbs={[
          { label: "Resources", to: "/resources" },
          { label: "Instructions", to: "/resources/instructions" },
          { label: "Mobile app" },
        ]}
      />

      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/resources/instructions"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#4E8F89] hover:underline mb-8"
          >
            <ArrowLeft size={16} /> All instructions
          </Link>

          <p className="text-lg text-slate-700 leading-relaxed mb-8">{mobileAppManual.intro}</p>

          {/* Download + requirements */}
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <div className="bg-[#0B1F33] rounded-2xl p-6 text-white">
              <p className="flex items-center gap-2 font-bold mb-4">
                <Smartphone size={18} className="text-[#4E8F89]" /> Get the app
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 text-xs font-semibold">
                  <AppleIcon size={14} /> App Store
                </span>
                <span className="inline-flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 text-xs font-semibold">
                  <GooglePlayIcon size={13} /> Google Play
                </span>
                <span className="inline-flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 text-xs font-semibold">
                  <HuaweiIcon size={14} /> AppGallery
                </span>
                <span className="inline-flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 text-xs font-semibold">
                  RuStore
                </span>
              </div>
            </div>
            <div className="bg-[#f7f8f9] rounded-2xl p-6 border border-slate-100">
              <p className="font-bold text-[#0B1F33] mb-4">Before you start</p>
              <ul className="space-y-2">
                {mobileAppManual.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check size={15} className="text-[#4E8F89] shrink-0 mt-0.5" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Steps */}
          <div className="relative border-l-2 border-slate-200 pl-8 space-y-10">
            {mobileAppManual.steps.map((s, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-[#4E8F89] text-white text-sm font-black flex items-center justify-center">
                  {i + 1}
                </span>
                <h2 className="font-bold text-[#0B1F33] text-lg mb-1.5">{s.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-black text-[#0B1F33] mt-16 mb-6">Troubleshooting</h2>
          <div className="space-y-3">
            {mobileAppManual.faqs.map((f, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-bold text-[#0B1F33] hover:bg-slate-50 transition"
                >
                  {f.q}
                  {openFaq === i ? (
                    <ChevronUp size={16} className="text-[#4E8F89] shrink-0" />
                  ) : (
                    <ChevronDown size={16} className="text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 pt-1 border-t border-slate-100 text-sm text-slate-600 leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CompanyCTA
        heading="Need a hand with setup?"
        subtitle="24/7 technical support can connect remotely and finish the configuration with you."
      />
    </div>
  );
}
