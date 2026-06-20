import React, { useState } from "react";

const reviews = [
  {
    logo: "АС",
    company: "ООО СК Авансстрой",
    text: "Пользуемся услугами мониторинга уже много лет. Пробовали несколько различных систем отслеживания, в последнее время работали на локальном сервере, который не позволял нам развивать автоматизацию. Облачный сервис Уфин контроль позволил нам не только интегрировать спутниковый мониторинг автотранспорта в свою информационную среду, но и подключить мониторинг выездных сотрудников по сотовой сети.",
  },
  {
    logo: "TC",
    company: "TransCo Ltd.",
    text: "Платформа помогла нам сократить расходы на топливо и оптимизировать маршруты. Интеграция прошла гладко, а служба поддержки всегда оперативно отвечала на вопросы.",
  },
  {
    logo: "LF",
    company: "LogiFleet",
    text: "Оповещения в реальном времени и аналитика поведения водителей позволили нам повысить безопасность и снизить количество инцидентов в автопарке.",
  },
  {
    logo: "AT",
    company: "АгроТранс",
    text: "Мониторинг температуры и ХОУ для рефрижераторного транспорта позволил нам избежать значительных потерь в пиковые сезоны.",
  },
  {
    logo: "CG",
    company: "CityTaxi Group",
    text: "Удобный интерфейс и надёжное отслеживание — наши диспетчеры пользуются системой каждый день.",
  },
];

export default function ClientFeedback() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#043e35] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-white text-3xl font-bold mb-16">
          Отзывы наших клиентов
        </h2>

        <div className="grid lg:grid-cols-2 items-center gap-16">

          {/* Left — logo */}
          <div className="relative flex items-center justify-center">
            <button
              onClick={() => setActive((active - 1 + reviews.length) % reviews.length)}
              className="absolute left-0 w-10 h-10 rounded-full border border-white/15 text-white hover:bg-white/10 transition text-sm"
            >
              ←
            </button>

            <div className="text-[160px] font-black leading-none tracking-tight select-none">
              <span className="text-[#08b4ff]">{reviews[active].logo[0]}</span>
              <span className="bg-gradient-to-b from-[#28c9ff] to-[#0077ff] bg-clip-text text-transparent">
                {reviews[active].logo[1] || reviews[active].logo[0]}
              </span>
            </div>

            <button
              onClick={() => setActive((active + 1) % reviews.length)}
              className="absolute right-0 w-10 h-10 rounded-full border border-white/15 text-white hover:bg-white/10 transition text-sm"
            >
              →
            </button>
          </div>

          {/* Right — review card */}
          <div>
            <div className="bg-[#003329] rounded-xl p-8 shadow-2xl">
              <p className="text-white text-base leading-8">
                {reviews[active].text}
              </p>
              <div className="mt-8 text-white/75 text-sm font-semibold">
                {reviews[active].company}
              </div>
              <button className="mt-6 px-8 py-3 rounded bg-[#f59e0b] hover:bg-[#ffae00] text-black text-sm font-bold transition">
                Полный отзыв
              </button>
            </div>

            <div className="flex gap-3 mt-6">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition ${i === active ? "bg-white" : "bg-white/20"}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
