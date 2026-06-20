import React from "react";

const items = [
  {
    title: "Интеграция с вашими учётными системами",
    desc: "С целью снижения рутинной работы, исключения ошибок в отчётах и направления усилий ваших сотрудников на повышение качества услуг мы помогаем максимально интегрировать (внедрить) и автоматизировать учёт и отчётность по автопарку",
    img: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Контроль водителя",
    desc: "Сокращения влияния человеческого фактора на безопасность дорожного движения",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function FeatureBanner() {
  return (
    <section className="bg-[#f5f5f5] py-8">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid md:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="relative h-80 overflow-hidden group">
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-[#01453f]/70" />
              <div className="relative z-10 h-full flex flex-col justify-center px-10 text-white">
                <h2 className="text-lg font-bold max-w-xs mb-3 leading-snug">
                  {item.title}
                </h2>
                <p className="max-w-xs text-xs text-white/80 leading-relaxed mb-6">
                  {item.desc}
                </p>
                <button className="w-32 h-10 bg-[#f59e0b] hover:bg-[#ffae00] rounded text-black text-sm font-bold transition">
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
