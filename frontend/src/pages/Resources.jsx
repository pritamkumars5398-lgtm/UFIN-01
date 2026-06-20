import React, { useState } from "react";
import { FileText, Smartphone, Shield, HelpCircle, BookOpen, Settings, ChevronDown, Search } from "lucide-react";

const categories = ["Все", "Оборудование", "Документы", "Приложение", "Обновления"];

const resources = [
  { Icon: Settings, cat: "Оборудование", title: "Совместимое оборудование для бизнеса", desc: "Полный список поддерживаемых трекеров, датчиков и периферии", badge: "PDF", badgeColor: "bg-red-100 text-red-600" },
  { Icon: Smartphone, cat: "Приложение", title: "Руководство пользователя мобильного приложения", desc: "Пошаговая инструкция по работе с приложением Уфин Контроль", badge: "Гид", badgeColor: "bg-blue-100 text-blue-600" },
  { Icon: FileText, cat: "Документы", title: "Пользовательское соглашение", desc: "Условия использования сервиса Уфин Контроль", badge: "DOC", badgeColor: "bg-gray-100 text-gray-600" },
  { Icon: Shield, cat: "Документы", title: "Политика конфиденциальности", desc: "Как мы обрабатываем и защищаем ваши персональные данные", badge: "DOC", badgeColor: "bg-gray-100 text-gray-600" },
  { Icon: HelpCircle, cat: "Обновления", title: "Что нового мы разработали?", desc: "Список последних обновлений и новых функций платформы", badge: "Новое", badgeColor: "bg-green-100 text-green-600" },
  { Icon: BookOpen, cat: "Оборудование", title: "Инструкции к трекерам", desc: "Документация по установке и настройке каждой модели", badge: "PDF", badgeColor: "bg-red-100 text-red-600" },
];

const news = [
  { img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80", title: "Трекер спас жизнь храброй собаке!", date: "15 мая 2026", tag: "Истории" },
  { img: "https://images.unsplash.com/photo-1545262810-a9b9f1db8a84?auto=format&fit=crop&w=600&q=80", title: "Автоматизированный контроль расхода топлива", date: "2 апреля 2026", tag: "Продукт" },
  { img: "https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?auto=format&fit=crop&w=600&q=80", title: "Уфин Контроль представляет обновлённый логотип", date: "18 марта 2026", tag: "Компания" },
];

const faqs = [
  { q: "Как подключить трекер к платформе?", a: "После установки трекера подключитесь к личному кабинету, перейдите в раздел «Оборудование» и добавьте устройство по IMEI." },
  { q: "Поддерживаются ли сторонние GPS-трекеры?", a: "Да, мы поддерживаем более 200 моделей трекеров от ведущих производителей. Полный список — в разделе «Совместимое оборудование»." },
  { q: "Как получить доступ к API?", a: "Подайте заявку через форму на странице «Интеграции» или напишите на buy@ufin.online. Доступ предоставляется после согласования условий." },
  { q: "Какой формат экспорта данных поддерживается?", a: "Данные экспортируются в форматах Excel, CSV и PDF. Также доступен API для интеграции с вашими системами." },
];

export default function Resources() {
  const [activeCat, setActiveCat] = useState("Все");
  const [openFaq, setOpenFaq] = useState(null);

  const filtered = activeCat === "Все" ? resources : resources.filter((r) => r.cat === activeCat);

  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO — editorial light style ── */}
      <section className="bg-white pt-32 pb-16 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#4E8F89] text-xs font-bold uppercase tracking-widest">База знаний</span>
              <h1 className="text-5xl font-black text-gray-900 leading-tight mt-3 mb-5">
                Ресурсы<br />
                <span className="text-[#4E8F89]">и документация</span>
              </h1>
              <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
                Всё необходимое для работы с платформой Уфин Контроль — инструкции, соглашения, руководства и новости
              </p>
              <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 max-w-sm">
                <Search size={16} className="text-gray-400 shrink-0" />
                <input type="text" placeholder="Поиск по ресурсам..." className="flex-1 bg-transparent text-sm text-gray-700 focus:outline-none placeholder-gray-400" />
              </div>
            </div>
            {/* Featured card */}
            <div className="relative rounded-2xl overflow-hidden h-64 lg:h-80 group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80"
                alt="Featured"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-xs bg-[#f59e0b] text-black font-bold px-2 py-0.5 rounded mb-2 inline-block">Истории</span>
                <h3 className="text-lg font-bold leading-snug">Трекер спас жизнь<br/>храброй собаке!</h3>
                <p className="text-white/60 text-xs mt-1">15 мая 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESOURCES — category filter + grid ── */}
      <section id="resources" className="py-16 bg-[#f7f8f9] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h2 className="text-2xl font-black text-gray-900">Материалы</h2>
            <div className="flex gap-2 flex-wrap">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCat(c)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${
                    activeCat === c ? "bg-[#4E8F89] text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-[#4E8F89]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(({ Icon, title, desc, badge, badgeColor }) => (
              <a key={title} href="#" className="group bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#4E8F89]/10 flex items-center justify-center">
                    <Icon size={18} className="text-[#4E8F89]" />
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${badgeColor}`}>{badge}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2 leading-snug flex-1">{title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
                <div className="mt-4 text-[#4E8F89] text-xs font-medium group-hover:underline">Открыть →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWS — magazine grid ── */}
      <section id="news" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-10">Новости</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Large featured */}
            <a href="#" className="group lg:col-span-2 relative rounded-2xl overflow-hidden aspect-[16/9] block">
              <img src={news[0].img} alt={news[0].title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-xs bg-[#f59e0b] text-black font-bold px-2 py-0.5 rounded mb-3 inline-block">{news[0].tag}</span>
                <h3 className="text-xl font-bold text-white leading-snug">{news[0].title}</h3>
                <p className="text-white/50 text-xs mt-2">{news[0].date}</p>
              </div>
            </a>
            {/* Small items */}
            <div className="flex flex-col gap-6">
              {news.slice(1).map(({ img, title, date, tag }) => (
                <a key={title} href="#" className="group flex gap-4 items-start">
                  <div className="w-24 h-20 rounded-xl overflow-hidden shrink-0">
                    <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                  </div>
                  <div>
                    <span className="text-[10px] bg-gray-100 text-gray-500 font-bold px-2 py-0.5 rounded mb-1.5 inline-block">{tag}</span>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-[#4E8F89] transition">{title}</h3>
                    <p className="text-gray-400 text-xs mt-1">{date}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-16 px-6 bg-[#f7f8f9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-2 text-center">Частые вопросы</h2>
          <p className="text-gray-400 text-sm text-center mb-10">Ответы на популярные вопросы о платформе</p>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-bold text-gray-900 hover:text-[#4E8F89] transition"
                >
                  {q}
                  <ChevronDown size={16} className={`text-gray-400 transition-transform shrink-0 ml-4 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">{a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
