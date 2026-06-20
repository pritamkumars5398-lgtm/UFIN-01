import React, { useState } from "react";
import { BarChart2, Wifi, Share2, Headphones, Star } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

const departments = [
  {
    title: "Отдел по развитию бизнеса",
    desc: "Сотрудничество с партнерами и поставщиками",
    email: "a@ufin.online",
    Icon: BarChart2,
  },
  {
    title: "По вопросам подключения",
    desc: "Продажи, подключения новых объектов и собственных трекеров клиента",
    email: "a@ufin.online",
    Icon: Wifi,
  },
  {
    title: "Медиацентр",
    desc: "Общение с клиентами по вопросам новых продуктов, рекламы и сотрудничества",
    email: "osa@ufin.online",
    Icon: Share2,
  },
  {
    title: "Техподдержка 24/7",
    desc: "Технические вопросы с клиентами и поставщиками",
    email: "support@ufin.online",
    Icon: Headphones,
  },
];

export default function Contacts() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", consent: false });

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
          <h1 className="text-5xl font-black mb-4 leading-tight">Контакты</h1>
          <p className="text-white/65 text-lg">Где мы находимся и как к нам добраться</p>
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
              <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Телефон</p>
              <a
                href="tel:88004440481"
                className="text-2xl font-bold text-gray-900 hover:text-[#4E8F89] transition"
              >
                8 (800) 444-04-81
              </a>
            </div>

            <div>
              <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Адрес</p>
              <p className="text-gray-800 font-medium text-sm leading-relaxed">
                Москва, 129344, ул. Лётчика Бабушкина, д. 1, корпус 3, эт. 7, офис 17
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Мы в сетях</p>
              <div className="flex gap-3">
                <a
                  href="#"
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
              <span className="text-xs text-gray-400 ml-2">Рейтинг на Яндексе</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. BRANCHES ── */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">Наши филиалы</h2>
        <p className="text-gray-700 text-sm mb-2">
          г.о. Подольск, п.Сельхозтехника, Домодедовское шоссе, д.20И, СТО «Подольск» (рядом с Авто-М)
        </p>
        <p className="text-gray-700 text-sm">
          г. Балашиха, Объездное шоссе, дом 10а, СТО «Балашиха»
        </p>
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
            <h2 className="text-xl font-bold text-gray-900 mb-1">Связаться с нами</h2>
            <p className="text-gray-400 text-xs mb-7 leading-relaxed">
              Оставьте контактные данные и наш специалист свяжется с вами в кратчайшие сроки
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Имя"
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
                  placeholder="(999) 999-9999*"
                  className="flex-1 px-4 py-3 text-sm text-gray-800 focus:outline-none"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Почта"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#4E8F89] transition"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#4E8F89] hover:bg-[#3d7a74] text-white font-semibold py-3 rounded-lg transition"
              >
                Отправить
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
                  Дал согласие на{" "}
                  <a href="#" className="text-[#4E8F89] hover:underline">
                    обработку персональных данных
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
              Генеральный директор:{" "}
              <span className="font-bold text-white">Алексей Осипов</span>
            </div>
            {/* Photo placeholder — replace src with real photo */}
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
              Свяжитесь с нами
            </h2>
            <p className="text-white/65 mb-8 text-base">
              Получите подробную информацию и консультацию!
            </p>

            <a
              href="https://t.me/ufin_online"
              className="inline-flex items-center gap-2 bg-[#229ED9] hover:bg-[#1a8bc4] text-white font-semibold px-7 py-3 rounded-full transition"
            >
              <FaTelegramPlane size={17} />
              Чат в Telegram
            </a>

            <div className="mt-9 border-l-4 border-[#f59e0b] pl-5">
              <p className="text-[#f59e0b] font-bold text-sm mb-1 tracking-wider">АКЦИЯ!</p>
              <p className="text-white font-bold text-lg leading-snug max-w-xl">
                Оставьте онлайн заявку сейчас! Мы с вами свяжемся в рабочее время и дадим 10% скидки!
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
