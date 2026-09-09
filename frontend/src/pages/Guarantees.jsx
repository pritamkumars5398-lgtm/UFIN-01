import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, XCircle, LifeBuoy, Phone, Mail, Clock3, FileText } from "lucide-react";
import PageHero from "../components/PageHero";
import CompanyCTA from "../components/CompanyCTA";
import { guaranteeExclusions, guaranteeSteps } from "../data/companyContent";
import heroImg from "../assets/trucks.png";

export default function Guarantees() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Guarantees"
        subtitle="Warranty terms for equipment and services provided by Tekonika Systems."
        image={heroImg}
        crumbs={[{ label: "Company", to: "/company" }, { label: "Guarantees" }]}
      />

      {/* ── Key terms ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6">
          {[
            { v: "12 months", l: "Standard warranty from the date of installation" },
            { v: "24/7", l: "Technical support for warranty cases" },
            { v: "Fast swap", l: "Faulty devices replaced to minimize downtime" },
          ].map((s) => (
            <div key={s.l} className="bg-[#EAF5F3] rounded-2xl p-6 text-center border border-[#4E8F89]/15">
              <div className="text-2xl font-black text-[#4E8F89] mb-2">{s.v}</div>
              <p className="text-slate-500 text-sm leading-relaxed">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── General provisions ── */}
      <section className="pb-4 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <ShieldCheck className="text-[#4E8F89]" size={24} />
            <h2 className="text-2xl font-black text-[#0B1F33]">General provisions</h2>
          </div>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Tekonika Systems is committed to the high quality of its products and services. We
              recommend that installation, maintenance and repair be carried out only by qualified
              specialists in accordance with the manufacturer's specifications.
            </p>
            <p>
              The company accepts no warranty responsibility for equipment that has been installed or
              serviced improperly or by unqualified personnel.
            </p>
            <p>
              The warranty period is <strong>12 months from the date of equipment installation</strong>,
              unless a different period is specified for third-party products. Individual warranty
              periods for specific devices are stated in their technical passports.
            </p>
          </div>
        </div>
      </section>

      {/* ── Exclusions ── */}
      <section className="py-14 px-6 bg-[#f7f8f9] mt-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <XCircle className="text-[#f59e0b]" size={24} />
            <h2 className="text-2xl font-black text-[#0B1F33]">What the warranty does not cover</h2>
          </div>
          <ul className="space-y-3">
            {guaranteeExclusions.map((e) => (
              <li
                key={e}
                className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-100 text-sm text-slate-600"
              >
                <XCircle size={16} className="text-[#f59e0b] shrink-0 mt-0.5" />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Service support steps ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <LifeBuoy className="text-[#4E8F89]" size={24} />
            <h2 className="text-2xl font-black text-[#0B1F33]">If you find a defect</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {guaranteeSteps.map((s, i) => (
              <div key={s.title} className="bg-[#f7f8f9] rounded-2xl p-6">
                <div className="w-9 h-9 rounded-full bg-[#4E8F89] text-white text-sm font-black flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-[#0B1F33] mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact block ── */}
      <section className="pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto bg-[#0B1F33] rounded-3xl p-8 md:p-10 text-white">
          <h2 className="text-xl font-black mb-6">Warranty support</h2>
          <div className="grid sm:grid-cols-3 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <Phone size={16} className="text-[#4E8F89] mt-0.5" />
              <a href="tel:88004440481" className="hover:text-[#4E8F89] transition">8 (800) 444-04-81</a>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={16} className="text-[#4E8F89] mt-0.5" />
              <a href="mailto:support@tekonikasystems.online" className="hover:text-[#4E8F89] transition break-all">
                support@tekonikasystems.online
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 size={16} className="text-[#4E8F89] mt-0.5" />
              <span className="text-white/70">Mon–Fri 9:00–18:00 · Tech support 24/7</span>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4">
            <Link
              to="/resources/user-agreement"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#4E8F89] hover:underline"
            >
              <FileText size={15} /> User Agreement
            </Link>
            <Link
              to="/resources/privacy-policy"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#4E8F89] hover:underline"
            >
              <FileText size={15} /> Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      <CompanyCTA
        heading="Not sure if your case is covered?"
        subtitle="Send us the device serial and a short description — we will check it against the warranty."
      />
    </div>
  );
}
