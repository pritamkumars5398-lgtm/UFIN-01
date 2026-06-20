import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const content = {
  "ТРАНСПОРТ": {
    description:
      "Непрерывный контроль местонахождения и эксплуатации обеспечивает повышение рентабельности бизнеса за счёт постоянного контроля работы вашего транспорта на ваших производственных задачах с минимальными издержками. Система мгновенно уведомит вас о сливе топлива, выходе температуры перевозки за заданные пределы, снижении давления в шинах и о многих других важных событиях, влияющих на ваш бизнес.",
    cards: ["Расход топлива", "Температура перевозки и ХОУ", "Давление в шинах"],
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
  },
  "ВИДЕО": {
    description: "Просматривайте прямые и архивные видеопотоки с камер автопарка для повышения безопасности.",
    cards: ["Прямой эфир", "Запись видео", "Умные оповещения"],
    img: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=80",
  },
  "ВОДИТЕЛЬ": {
    description: "Отслеживайте показатели водителей и управляйте записями в одной панели управления.",
    cards: ["Профиль водителя", "Оценка безопасности", "Обучение"],
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
  },
  "СОТРУДНИКИ": {
    description: "Эффективно управляйте сотрудниками, правами доступа и операциями.",
    cards: ["Роли", "Права доступа", "Активность"],
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  "ИНТЕГРАЦИИ": {
    description: "Интегрируйте внешние API и автоматизируйте бизнес-процессы.",
    cards: ["API", "Вебхуки", "Автоматизация"],
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  },
  "ЗАДАНИЯ": {
    description: "Создавайте и управляйте оповещениями и операционными задачами.",
    cards: ["Доска задач", "Назначения", "История"],
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
  },
};

export default function UnifiedAccounnt() {
  const [active, setActive] = useState("ТРАНСПОРТ");
  const current = content[active];

  return (
    <section className="bg-[#edf5f3] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-3xl font-bold text-slate-900 mb-12">
          Единый личный кабинет
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-6 border-b border-slate-200 mb-12">
          {Object.keys(content).map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`pb-4 text-xs font-semibold tracking-widest transition relative ${
                active === tab ? "text-[#0d9488]" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {tab}
              {active === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0d9488]" />
              )}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-slate-600 text-sm leading-7 mb-8 max-w-xl">
              {current.description}
            </p>
            <div className="space-y-3">
              {current.cards.map((item) => (
                <button
                  key={item}
                  className="group w-full max-w-sm bg-white rounded-lg border border-slate-100 px-5 py-4 flex justify-between items-center hover:shadow-md hover:-translate-y-0.5 transition text-sm"
                >
                  <span className="font-medium text-gray-800">{item}</span>
                  <ChevronRight size={16} className="text-gray-300 group-hover:text-[#4E8F89] transition" />
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              key={current.img}
              src={current.img}
              alt={active}
              className="w-full h-80 object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
