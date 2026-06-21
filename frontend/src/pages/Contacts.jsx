import React, { useState } from "react";
import { BarChart2, Wifi, Share2, Headphones, Star } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Contacts() {
  const { t, language } = useLanguage();
  const [form, setForm] = useState({ name: "", phone: "", email: "", consent: false });

  const deptIcons = [BarChart2, Wifi, Share2, Headphones];
  const deptEmails = ["a@ufin.online", "a@ufin.online", "osa@ufin.online", "support@ufin.online"];
  const departments = (t("contactsPage.departments") || []).map((dept, idx) => ({
    ...dept,
    Icon: deptIcons[idx],
    email: deptEmails[idx]
  }));

  const branchesList = t("contactsPage.branchesList") || [];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white min-h-screen">

      {/* ── 1. HERO ── */}
      <section
        className="relative pt-36 pb-24 px-8 lg:px-24 text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(20,20,20,0.88) 40%, rgba(0,0,0,0.35) 100%), url('https://images.unsplash.com/photo-1556741533-6e0a5cc854a1?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "320px",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-black mb-4 leading-tight">
            {t("contactsPage.title")}
          </h1>
          <p className="text-white/65 text-lg">
            {t("contactsPage.subtitle")}
          </p>
        </div>
      </section>

      {/* ── 2. DEPARTMENT CARDS ── */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {departments.map(({ title, desc, email, Icon }) => (
            <div
              key={title}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
            >
              <Icon size={34} className="text-[#4E8F89] mb-4" />
              <h3 className="font-bold text-[#4E8F89] text-sm mb-2 leading-snug">{title}</h3>
              <p className="text-gray-400 text-xs mb-5 leading-relaxed">{desc}</p>
              <a
                href={`mailto:${email}`}
                className="text-gray-900 font-bold text-sm hover:text-[#4E8F89] transition"
              >
                {email}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. MAP + CONTACT INFO ── */}
      <section className="bg-[#EAF5F3]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">

          {/* Map */}
          <div className="lg:w-[58%] h-72 lg:h-80">
            <iframe
              title="Yandex Map"
              src="https://yandex.ru/map-widget/v1/?ll=37.684820%2C55.856720&z=16&pt=37.684820,55.856720,pm2rdl"
              width="100%"
              height="100%"
              className="border-0 block"
              allowFullScreen
            />
          </div>

          {/* Info panel */}
          <div className="lg:w-[42%] px-10 py-10 flex flex-col justify-center gap-6">
            <div>
              <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">
                {t("contactsPage.phoneLabel")}
              </p>
              <a
                href={`tel:${t("common.phone").replace(/\s+/g, "")}`}
                className="text-2xl font-bold text-gray-900 hover:text-[#4E8F89] transition"
              >
                {t("common.phone")}
              </a>
            </div>

            <div>
              <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">
                {t("contactsPage.addressLabel")}
              </p>
              <p className="text-gray-800 font-medium text-sm leading-relaxed">
                {t("contactsPage.addressValue")}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">
                {t("contactsPage.socialLabel")}
              </p>
              <div className="flex gap-3">
                <a
                  href="https://t.me/ufin_online"
                  className="w-9 h-9 rounded-full bg-[#229ED9] flex items-center justify-center hover:opacity-80 transition"
                >
                  <FaTelegramPlane className="text-white text-base" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#e8381a] flex items-center justify-center hover:opacity-80 transition"
                >
                  <span className="text-white text-xs font-extrabold">R</span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={15}
                  className={
                    i <= 4
                      ? "fill-[#f59e0b] text-[#f59e0b]"
                      : "fill-gray-200 text-gray-200"
                  }
                />
              ))}
              <span className="text-sm font-bold text-gray-900 ml-1">4.9</span>
              <span className="text-xs text-gray-400 ml-2">
                {t("contactsPage.ratingLabel")}
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. BRANCHES ── */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">
          {t("contactsPage.branchesTitle")}
        </h2>
        {branchesList.map((branch, i) => (
          <p key={i} className="text-gray-700 text-sm mb-2">
            {branch}
          </p>
        ))}
      </section>

      {/* ── 5. BIG MAP + FORM ── */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-gray-200 shadow-sm">

          {/* Map */}
          <div className="lg:w-[60%]" style={{ minHeight: "440px" }}>
            <iframe
              title="Yandex Map Detail"
              src="https://yandex.ru/map-widget/v1/?ll=37.684820%2C55.856720&z=14&pt=37.684820,55.856720,pm2rdl"
              width="100%"
              height="100%"
              className="border-0 block"
              style={{ minHeight: "440px" }}
              allowFullScreen
            />
          </div>

          {/* Form */}
          <div className="lg:w-[40%] bg-white p-8 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              {t("contactsPage.formTitle")}
            </h2>
            <p className="text-gray-400 text-xs mb-7 leading-relaxed">
              {t("contactsPage.formSubtitle")}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t("contactsPage.placeholderName")}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#4E8F89] transition"
                required
              />

              <div className="flex border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#4E8F89] transition">
                <span className="px-3 py-3 bg-gray-50 text-gray-500 text-sm border-r border-gray-200 shrink-0">
                  +7
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={t("contactsPage.placeholderPhone")}
                  className="flex-1 px-4 py-3 text-sm text-gray-800 focus:outline-none"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t("contactsPage.placeholderEmail")}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#4E8F89] transition"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#4E8F89] hover:bg-[#3d7a74] text-white font-semibold py-3 rounded-lg transition"
              >
                {t("contactsPage.submitBtn")}
              </button>

              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  className="mt-0.5 accent-[#4E8F89]"
                  required
                />
                <span className="text-gray-400 text-xs leading-relaxed">
                  {t("contactsPage.consentText")}{" "}
                  <a href="#" className="text-[#4E8F89] hover:underline">
                    {t("contactsPage.consentLink")}
                  </a>
                </span>
              </label>
            </form>
          </div>

        </div>
      </section>

      {/* ── 6. GENERAL DIRECTOR CTA ── */}
      <section className="bg-[#151b27] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">

          {/* Director */}
          <div className="lg:w-[38%] flex flex-col items-start">
            <div className="bg-white/10 rounded-xl px-4 py-2 text-white/60 text-xs mb-5">
              {t("contactsPage.directorLabel")}:{" "}
              <span className="font-bold text-white">{t("contactsPage.directorName")}</span>
            </div>
            <div
              className="w-72 h-72 rounded-2xl overflow-hidden bg-gradient-to-b from-[#2a3245] to-[#1a2030] flex items-end justify-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "top center",
              }}
            />
          </div>

          {/* CTA text */}
          <div className="lg:w-[62%]">
            <h2 className="text-3xl lg:text-4xl font-black text-[#4E8F89] mb-3">
              {t("contactsPage.ctaTitle")}
            </h2>
            <p className="text-white/65 mb-8 text-base">
              {t("contactsPage.ctaDesc")}
            </p>

            <a
              href="https://t.me/ufin_online"
              className="inline-flex items-center gap-2 bg-[#229ED9] hover:bg-[#1a8bc4] text-white font-semibold px-7 py-3 rounded-full transition"
            >
              <FaTelegramPlane size={17} />
              {t("contactsPage.telegramChat")}
            </a>

            <div className="mt-9 border-l-4 border-[#f59e0b] pl-5">
              <p className="text-[#f59e0b] font-bold text-sm mb-1 tracking-wider">
                {t("contactsPage.promoTitle")}
              </p>
              <p className="text-white font-bold text-lg leading-snug max-w-xl">
                {t("contactsPage.promoDesc")}
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
