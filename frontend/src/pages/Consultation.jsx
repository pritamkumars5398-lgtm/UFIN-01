import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Phone, Mail, Clock3 } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const clients = [
  { name: "Торэкс", country: "Россия" },
  { name: "ГазПром", country: "Россия" },
  { name: "Bajaj Travels", country: "Индия" },
  { name: "Октион", country: "Россия" },
];

export default function Consultation() {
  const { t, language } = useLanguage();
  const [form, setForm] = useState({ name: "", phone: "", email: "", company: "", message: "", consent: false });
  const [sent, setSent] = useState(false);

  const benefits = language === "en" ? [
    "Free consultation with no obligations",
    "Equipment selection tailored to your fleet",
    "Real-time platform demonstration",
    "Commercial proposal within 1 business day",
    "Technical support at all setup stages"
  ] : [
    "Бесплатная консультация без обязательств",
    "Подбор оборудования под ваш автопарк",
    "Демонстрация платформы в режиме реального времени",
    "Коммерческое предложение в течение 1 рабочего дня",
    "Техническая поддержка на всех этапах подключения"
  ];

  const clientList = clients.map((c) => ({
    ...c,
    country: c.country === "Россия" ? (language === "en" ? "Russia" : "Россия") : (language === "en" ? "India" : "Индия")
  }));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen">

      {/* ── FULL-PAGE SPLIT ── */}
      <div className="grid lg:grid-cols-[1fr_1fr] min-h-screen">

        {/* LEFT — dark info panel */}
        <div className="bg-[#0d1b2a] flex flex-col justify-center px-10 lg:px-16 pt-28 pb-16">

          <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs mb-10 transition">
            {t("consultationPage.backBtn")}
          </Link>

          <span className="text-[#4E8F89] text-xs font-bold uppercase tracking-widest mb-4">
            {t("consultationPage.category")}
          </span>
          <h1 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4 whitespace-pre-line">
            {t("consultationPage.title")}
          </h1>
          <p className="text-white/55 text-sm leading-relaxed mb-10 max-w-sm">
            {t("consultationPage.desc")}
          </p>

          {/* Benefits */}
          <ul className="space-y-3 mb-12">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-white/70">
                <div className="w-5 h-5 rounded-full bg-[#4E8F89]/25 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={11} className="text-[#4E8F89]" />
                </div>
                {b}
              </li>
            ))}
          </ul>

          {/* Contacts */}
          <div className="space-y-4 border-t border-white/10 pt-8">
            <div className="flex items-center gap-3">
              <Phone size={15} className="text-[#4E8F89]" />
              <a href={`tel:${t("common.phone").replace(/\s+/g, "")}`} className="text-white text-sm font-medium hover:text-[#4E8F89] transition">
                {t("common.phone")}
              </a>
              <span className="text-white/30 text-xs">{t("consultationPage.freeText")}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={15} className="text-[#4E8F89]" />
              <a href={`mailto:${t("common.emailBuy")}`} className="text-white/70 text-sm hover:text-white transition">
                {t("common.emailBuy")}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Clock3 size={15} className="text-[#4E8F89]" />
              <span className="text-white/50 text-sm">{t("consultationPage.support247")}</span>
            </div>
            <a
              href="https://t.me/ufin_online"
              className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 bg-[#229ED9] hover:bg-[#1a8bc4] text-white text-sm font-bold rounded-full transition"
            >
              <FaTelegramPlane size={14} /> {t("consultationPage.telegramChat")}
            </a>
          </div>

          {/* Client logos */}
          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="text-white/30 text-xs uppercase tracking-widest mb-4">
              {t("consultationPage.trustText")}
            </p>
            <div className="flex flex-wrap gap-3">
              {clientList.map(({ name, country }) => (
                <div key={name} className="bg-white/5 rounded-lg px-4 py-2">
                  <p className="text-white text-xs font-bold">{name}</p>
                  <p className="text-white/30 text-[10px]">{country}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="bg-[#f7f8f9] flex items-center justify-center px-8 lg:px-16 pt-28 pb-16">
          <div className="w-full max-w-md">

            {/* Director */}
            <div className="flex items-center gap-4 mb-8">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80"
                alt="Sergey Chulsky"
                className="w-14 h-14 rounded-xl object-cover border-2 border-[#4E8F89]/30"
              />
              <div>
                <p className="font-black text-gray-900 text-sm">{t("consultationPage.directorName")}</p>
                <p className="text-gray-400 text-xs">{t("consultationPage.directorTitle")}</p>
                <p className="text-[#4E8F89] text-xs mt-0.5">{t("consultationPage.directorActive")}</p>
              </div>
            </div>

            {sent ? (
              <div className="bg-white rounded-2xl p-10 text-center border border-gray-100 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-[#4E8F89]/10 flex items-center justify-center mx-auto mb-5">
                  <Check size={28} className="text-[#4E8F89]" />
                </div>
                <h2 className="text-xl font-black text-gray-900 mb-2">
                  {t("consultationPage.successTitle")}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t("consultationPage.successDesc")}
                </p>
                <Link to="/" className="mt-6 inline-block text-[#4E8F89] text-sm hover:underline">
                  {t("consultationPage.backBtn")}
                </Link>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl font-black text-gray-900 mb-1">
                  {t("consultationPage.formTitle")}
                </h2>
                <p className="text-gray-400 text-xs mb-7">
                  {t("consultationPage.formSubtitle")}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder={t("consultationPage.placeholderName")}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#4E8F89] transition"
                    required
                  />
                  <div className="flex border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#4E8F89] transition">
                    <span className="px-3 py-3 bg-gray-50 text-gray-400 text-sm border-r border-gray-200 shrink-0">+7</span>
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder={t("consultationPage.placeholderPhone")}
                      className="flex-1 px-4 py-3 text-sm text-gray-800 focus:outline-none"
                      required
                    />
                  </div>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder={t("consultationPage.placeholderEmail")}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#4E8F89] transition"
                    required
                  />
                  <input
                    type="text" name="company" value={form.company} onChange={handleChange}
                    placeholder={t("consultationPage.placeholderCompany")}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#4E8F89] transition"
                  />
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder={t("consultationPage.placeholderMessage")}
                    rows={3}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#4E8F89] transition resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#f59e0b] hover:bg-[#ffae00] text-black font-black py-4 rounded-xl transition text-sm"
                  >
                    {t("consultationPage.submitBtn")}
                  </button>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} className="mt-0.5 accent-[#4E8F89]" required />
                    <span className="text-gray-400 text-xs leading-relaxed">
                      {t("consultationPage.consentText")}{" "}
                      <a href="#" className="text-[#4E8F89] hover:underline">{t("consultationPage.consentLink")}</a>
                    </span>
                  </label>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
