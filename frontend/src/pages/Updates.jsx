import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import CompanyCTA from "../components/CompanyCTA";
import { updates } from "../data/resourcesContent";
import heroImg from "../assets/integrations.png";

const tagColor = {
  Support: "bg-blue-100 text-blue-700",
  Mobile: "bg-purple-100 text-purple-700",
  Web: "bg-[#4E8F89]/15 text-[#3d7872]",
  Billing: "bg-amber-100 text-amber-700",
  Devices: "bg-rose-100 text-rose-700",
};

export default function Updates() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="What's new we developed"
        subtitle="The latest updates to the Tekonika Systems platform, web dashboard and mobile apps."
        image={heroImg}
        crumbs={[{ label: "Resources", to: "/resources" }, { label: "Updates" }]}
      />

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-slate-200 pl-8 space-y-10">
            {updates.map((u, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-2 border-[#4E8F89] flex items-center justify-center">
                  <Sparkles size={10} className="text-[#4E8F89]" />
                </span>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-slate-400">{u.date}</span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      tagColor[u.tag] || "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {u.tag}
                  </span>
                </div>
                <h3 className="font-bold text-[#0B1F33] mb-1.5">{u.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 p-6 bg-[#EAF5F3] rounded-2xl border border-[#4E8F89]/20 text-center">
            <p className="text-[#0B1F33] font-bold mb-1">Want a feature we don't have yet?</p>
            <p className="text-slate-500 text-sm mb-4">
              We build custom features for clients regularly — tell us what you need.
            </p>
            <Link
              to="/consultation"
              className="inline-block px-6 py-3 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-extrabold rounded-xl text-sm transition"
            >
              Request a feature
            </Link>
          </div>
        </div>
      </section>

      <CompanyCTA
        heading="Stay on the latest build"
        subtitle="Updates roll out automatically — your account and integrations are unaffected."
      />
    </div>
  );
}
