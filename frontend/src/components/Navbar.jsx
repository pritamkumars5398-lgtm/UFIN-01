import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

/* ── Shared news items ── */
const newsItems = [
  { img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80", title: "Трекер спас жизнь храброй собаке!", to: "/resources#news" },
  { img: "https://images.unsplash.com/photo-1545262810-a9b9f1db8a84?auto=format&fit=crop&w=400&q=80", title: "Автоматизированный контроль топлива", to: "/resources#news" },
  { img: "https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?auto=format&fit=crop&w=400&q=80", title: "Уфин Контроль представляет обновлённый логотип", to: "/company#news" },
];

const NewsGrid = () => (
  <div>
    <Link to="/resources#news" className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 flex items-center justify-between hover:text-[#4E8F89] transition">
      Новости <span className="text-xs font-normal text-[#4E8F89]">Все →</span>
    </Link>
    <div className="grid grid-cols-3 gap-4 mt-3">
      {newsItems.map(({ img, title, to }) => (
        <Link key={title} to={to} className="group block">
          <div className="rounded-lg overflow-hidden mb-2 aspect-[4/3]">
            <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
          </div>
          <p className="text-xs text-gray-700 leading-snug group-hover:text-[#4E8F89] transition">{title}</p>
        </Link>
      ))}
    </div>
  </div>
);

/* ── Dropdown panels (use Link internally) ── */
const UslugiDropdown = () => (
  <div className="grid grid-cols-4 gap-10 px-10 py-8">
    {/* Our services */}
    <div>
      <Link to="/services#services" className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 block hover:text-[#4E8F89] transition">
        Наши услуги
      </Link>
      <ul className="space-y-3">
        {[
          "ГЛОНАСС/GPS мониторинг транспорта",
          "Контроль водителя",
          "Контроль расхода топлива",
          "Контроль температуры",
          "Контроль давления в шинах",
          "Маршрутные задания",
          "Мониторинг сотрудников",
          "Видеонаблюдение за транспортом",
        ].map((s) => (
          <li key={s}>
            <Link to="/services#services" className="text-sm text-gray-600 hover:text-[#4E8F89] transition">{s}</Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Solutions */}
    <div>
      <Link to="/services#solutions" className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 block hover:text-[#4E8F89] transition">
        Решения
      </Link>
      <ul className="space-y-4">
        {[
          { title: "Эффективность", desc: "Как Уфин повышает эффективность вашего бизнеса" },
          { title: "Безопасность перевозок", desc: "Предотвращение аварий и инцидентов" },
          { title: "Лояльность и удержание клиентов", desc: "Довольный клиент всегда возвращается" },
          { title: "Уровень оказания услуг", desc: "Как мы повышаем качество ваших услуг" },
          { title: "Контроль угроз", desc: "Защитите бизнес с помощью систем контроля" },
        ].map(({ title, desc }) => (
          <li key={title}>
            <Link to="/services#solutions" className="group block">
              <p className="text-sm font-medium text-gray-800 group-hover:text-[#4E8F89] transition">{title}</p>
              <p className="text-xs text-gray-400 mt-0.5 leading-snug">{desc}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* By industry */}
    <div>
      <Link to="/services#industries" className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 block hover:text-[#4E8F89] transition">
        По отраслям
      </Link>
      <ul className="space-y-3">
        {[
          "Перевозка продуктов питания",
          "Грузовой транспорт",
          "Пассажирские перевозки",
          "Такси",
          "Строительная техника",
          "Лизинг",
          "Опасные грузы",
          "Сельхозтехника",
          "Мониторинг транспорта ЖКХ",
          "Банки",
          "Производство",
          "Торговля",
          "Фармацевтика",
          "Медицинские учреждения",
          "Топливно-энергетический комплекс",
          "Лёгкие коммерческие автомобили",
        ].map((s) => (
          <li key={s}>
            <Link to="/services#industries" className="text-sm text-gray-600 hover:text-[#4E8F89] transition leading-snug block">{s}</Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Integrations */}
    <div>
      <Link to="/services#integrations" className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 block hover:text-[#4E8F89] transition">
        Интеграции
      </Link>
      <ul className="space-y-3">
        {["API", "Серверы ретрансляции", "Переход с Wialon", "Установка ГЛОНАСС"].map((s) => (
          <li key={s}>
            <Link to="/services#integrations" className="text-sm text-gray-600 hover:text-[#4E8F89] transition">{s}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ResursiDropdown = () => (
  <div className="grid grid-cols-2 gap-10 px-10 py-8">
    <div>
      <Link to="/resources#resources" className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 block hover:text-[#4E8F89] transition">
        Ресурсы
      </Link>
      <ul className="space-y-3">
        {[
          { label: "Совместимое оборудование для бизнеса", to: "/resources#resources" },
          { label: "Руководство пользователя мобильного приложения", to: "/resources#resources" },
          { label: "Пользовательское соглашение", to: "/resources#resources" },
          { label: "Политика конфиденциальности", to: "/resources#resources" },
          { label: "Что нового мы разработали?", to: "/resources#resources" },
          { label: "Инструкции к трекерам", to: "/resources#resources" },
        ].map(({ label, to }) => (
          <li key={label}>
            <Link to={to} className="text-sm text-gray-600 hover:text-[#4E8F89] transition">{label}</Link>
          </li>
        ))}
      </ul>
      <Link to="/resources#faq" className="inline-flex items-center gap-1 mt-5 text-xs font-medium text-[#4E8F89] hover:underline">
        Частые вопросы →
      </Link>
    </div>
    <NewsGrid />
  </div>
);

const KompaniyaDropdown = () => (
  <div className="grid grid-cols-2 gap-10 px-10 py-8">
    <div>
      <Link to="/company" className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 block hover:text-[#4E8F89] transition">
        Компания
      </Link>
      <ul className="space-y-3">
        {[
          { label: "О компании", to: "/company#about" },
          { label: "Контакты", to: "/contacts" },
          { label: "Отзывы", to: "/company#about" },
          { label: "Партнёрам", to: "/company" },
          { label: "Новости", to: "/company#news" },
          { label: "Блог", to: "/resources#news" },
          { label: "Вакансии", to: "/company" },
          { label: "Гарантии", to: "/company" },
        ].map(({ label, to }) => (
          <li key={label}>
            <Link to={to} className="text-sm text-gray-600 hover:text-[#4E8F89] transition">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
    <NewsGrid />
  </div>
);

const NAV_ITEMS = [
  { label: "Услуги",   path: "/services", Panel: UslugiDropdown },
  { label: "Ресурсы",  path: "/resources", Panel: ResursiDropdown },
  { label: "Компания", path: "/company",   Panel: KompaniyaDropdown },
];

/* ── Owl SVG ── */
const OwlLogo = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="18" cy="20" rx="13" ry="12" fill="white" fillOpacity="0.9"/>
    <polygon points="8,10 6,2 13,8" fill="white" fillOpacity="0.9"/>
    <polygon points="28,10 30,2 23,8" fill="white" fillOpacity="0.9"/>
    <circle cx="13" cy="18" r="4" fill="#f59e0b"/>
    <circle cx="23" cy="18" r="4" fill="#f59e0b"/>
    <circle cx="13" cy="18" r="2" fill="#1a1a1a"/>
    <circle cx="23" cy="18" r="2" fill="#1a1a1a"/>
    <polygon points="18,21 15,25 21,25" fill="#f59e0b"/>
    <path d="M5 24 Q8 30 18 31 Q28 30 31 24" stroke="white" strokeWidth="1.5" fill="none" strokeOpacity="0.6"/>
  </svg>
);

/* ── Component ── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeToggle, setActiveToggle] = useState("business");
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimer = useRef(null);

  const handleOpen = (label) => { clearTimeout(closeTimer.current); setOpenMenu(label); };
  const handleClose = () => { closeTimer.current = setTimeout(() => setOpenMenu(null), 120); };
  const closeAll = () => { setOpenMenu(null); setMobileOpen(false); };

  return (
    <header className="fixed top-0 left-0 w-full z-50" style={{ background: "#3a3a3a" }}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" onClick={closeAll} className="flex items-center gap-2.5 shrink-0">
            <OwlLogo />
            <div className="leading-none">
              <span className="block text-[#f59e0b] font-black text-lg tracking-wide">УФИН</span>
              <span className="block text-white text-[10px] tracking-[4px] font-medium opacity-80">КОНТРОЛЬ</span>
            </div>
          </Link>

          {/* Toggle */}
          <div className="hidden lg:flex bg-white/10 rounded-full p-0.5 shrink-0">
            {["business", "people"].map((t) => (
              <button
                key={t}
                onClick={() => setActiveToggle(t)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                  activeToggle === t ? "bg-white text-gray-900" : "text-white/75 hover:text-white"
                }`}
              >
                {t === "business" ? "Бизнесу" : "Людям"}
              </button>
            ))}
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {NAV_ITEMS.map(({ label, path, Panel }) => (
              <div key={label} className="relative" onMouseEnter={() => handleOpen(label)} onMouseLeave={handleClose}>
                <Link
                  to={path}
                  onClick={closeAll}
                  className={`flex items-center gap-1 text-sm font-medium transition whitespace-nowrap ${
                    openMenu === label ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  {label}
                  <ChevronDown size={13} className={`transition-transform duration-200 ${openMenu === label ? "rotate-180" : ""}`} />
                </Link>

                {openMenu === label && (
                  <div
                    className="fixed left-0 right-0 bg-white shadow-xl border-t border-gray-100 overflow-y-auto"
                    style={{ top: "64px", maxHeight: "calc(100vh - 64px)" }}
                    onMouseEnter={() => handleOpen(label)}
                    onMouseLeave={handleClose}
                    onClick={closeAll}
                  >
                    <div className="max-w-7xl mx-auto">
                      <Panel />
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link to="/contacts" onClick={closeAll} className="text-sm font-medium text-white/80 hover:text-white transition whitespace-nowrap">
              Контакты
            </Link>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="tel:88004440481" className="hidden xl:block text-[#4dbe9e] text-sm font-medium whitespace-nowrap hover:text-[#00d89a] transition">
              8 (800) 444-04-81
            </a>
            <Link to="/consultation" onClick={closeAll} className="hidden sm:flex items-center px-5 py-2 rounded-full bg-[#f59e0b] hover:bg-[#ffae00] text-black text-sm font-bold transition whitespace-nowrap">
              Консультация
            </Link>
            <Link to="/login" onClick={closeAll} className="hidden sm:flex items-center px-5 py-2 rounded-full border border-white/25 text-white/80 hover:border-white/60 hover:text-white text-sm font-medium transition whitespace-nowrap">
              Вход
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white text-xl">☰</button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#2e2e2e] rounded-b-2xl p-5 mb-2 border-t border-white/10">
            <div className="flex flex-col gap-3">
              {[
                ["Главная", "/"],
                ["Услуги", "/services"],
                ["Ресурсы", "/resources"],
                ["Компания", "/company"],
                ["Контакты", "/contacts"],
              ].map(([label, path]) => (
                <Link key={label} to={path} onClick={closeAll} className="text-white/80 hover:text-white text-sm py-1 border-b border-white/5">
                  {label}
                </Link>
              ))}
              <div className="flex gap-2 mt-3">
                <Link to="/consultation" onClick={closeAll} className="flex-1 bg-[#f59e0b] text-black rounded-full py-2.5 text-center font-bold text-sm">
                  Консультация
                </Link>
                <Link to="/login" onClick={closeAll} className="flex-1 border border-white/25 text-white rounded-full py-2.5 text-sm font-medium text-center">
                  Вход
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
