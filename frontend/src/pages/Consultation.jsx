import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Phone, Mail, Clock3 } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

const benefits = [
  "Бесплатная консультация без обязательств",
  "Подбор оборудования под ваш автопарк",
  "Демонстрация платформы в режиме реального времени",
  "Коммерческое предложение в течение 1 рабочего дня",
  "Техническая поддержка на всех этапах подключения",
];

const clients = [
  { name: "Торэкс", country: "Россия" },
  { name: "ГазПром", country: "Россия" },
  { name: "Bajaj Travels", country: "Индия" },
  { name: "Октион", country: "Россия" },
];

export default function Consultation() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", company: "", message: "", consent: false });
  const [sent, setSent] = useState(false);

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
            ← На главную
          </Link>

          <span className="text-[#4E8F89] text-xs font-bold uppercase tracking-widest mb-4">Бесплатно</span>
          <h1 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
            Получите консультацию<br />
            <span className="text-[#f59e0b]">от эксперта</span>
          </h1>
          <p className="text-white/55 text-sm leading-relaxed mb-10 max-w-sm">
            Расскажите о вашем автопарке — мы подберём оптимальное решение и рассчитаем стоимость
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
              <a href="tel:88004440481" className="text-white text-sm font-medium hover:text-[#4E8F89] transition">8 (800) 444-04-81</a>
              <span className="text-white/30 text-xs">бесплатно</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={15} className="text-[#4E8F89]" />
              <a href="mailto:buy@ufin.online" className="text-white/70 text-sm hover:text-white transition">buy@ufin.online</a>
            </div>
            <div className="flex items-center gap-3">
              <Clock3 size={15} className="text-[#4E8F89]" />
              <span className="text-white/50 text-sm">Пн–Пт: 9:00–18:00 · Техподдержка 24/7</span>
            </div>
            <a
              href="https://t.me/ufin_online"
              className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 bg-[#229ED9] hover:bg-[#1a8bc4] text-white text-sm font-bold rounded-full transition"
            >
              <FaTelegramPlane size={14} /> Чат в Telegram
            </a>
          </div>

          {/* Client logos */}
          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Нам доверяют</p>
            <div className="flex flex-wrap gap-3">
              {clients.map(({ name, country }) => (
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
                alt="Чульский Сергей"
                className="w-14 h-14 rounded-xl object-cover border-2 border-[#4E8F89]/30"
              />
              <div>
                <p className="font-black text-gray-900 text-sm">Чульский Сергей</p>
                <p className="text-gray-400 text-xs">Технический директор</p>
                <p className="text-[#4E8F89] text-xs mt-0.5">Отвечу в течение часа</p>
              </div>
            </div>

            {sent ? (
              <div className="bg-white rounded-2xl p-10 text-center border border-gray-100 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-[#4E8F89]/10 flex items-center justify-center mx-auto mb-5">
                  <Check size={28} className="text-[#4E8F89]" />
                </div>
                <h2 className="text-xl font-black text-gray-900 mb-2">Заявка отправлена!</h2>
                <p className="text-gray-400 text-sm leading-relaxed">Мы свяжемся с вами в течение рабочего дня</p>
                <Link to="/" className="mt-6 inline-block text-[#4E8F89] text-sm hover:underline">← На главную</Link>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl font-black text-gray-900 mb-1">Оставить заявку</h2>
                <p className="text-gray-400 text-xs mb-7">Заполните форму — мы свяжемся с вами в ближайшее время</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="Ваше имя *"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#4E8F89] transition"
                    required
                  />
                  <div className="flex border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#4E8F89] transition">
                    <span className="px-3 py-3 bg-gray-50 text-gray-400 text-sm border-r border-gray-200 shrink-0">+7</span>
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="(999) 999-9999 *"
                      className="flex-1 px-4 py-3 text-sm text-gray-800 focus:outline-none"
                      required
                    />
                  </div>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="Email *"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#4E8F89] transition"
                    required
                  />
                  <input
                    type="text" name="company" value={form.company} onChange={handleChange}
                    placeholder="Название компании"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#4E8F89] transition"
                  />
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Кратко опишите задачу или вопрос..."
                    rows={3}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#4E8F89] transition resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#f59e0b] hover:bg-[#ffae00] text-black font-black py-4 rounded-xl transition text-sm"
                  >
                    Отправить заявку →
                  </button>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} className="mt-0.5 accent-[#4E8F89]" required />
                    <span className="text-gray-400 text-xs leading-relaxed">
                      Дал согласие на{" "}
                      <a href="#" className="text-[#4E8F89] hover:underline">обработку персональных данных</a>
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
