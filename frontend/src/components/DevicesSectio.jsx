import React from "react";

const devices = [
  {
    title: "Бортовой навигационный терминал GALILEOSKY 10",
    desc: "Передовой функционал для мониторинга, контроля и управления объектами",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Бортовой навигационный терминал СИГНАЛ S-2653",
    desc: "ГЛОНАСС-трекер серии СИГНАЛ с двумя интерфейсами CAN для работы с онлайн СКДШ",
    img: "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Бортовой навигационный терминал УМКа302",
    desc: "Флагманская линейка ГЛОНАСС/GPS трекеров — новый уровень производительности",
    img: "https://images.unsplash.com/photo-1461800919507-79b16743b257?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Личное: Бортовой навигационный терминал Scout ENT855",
    desc: "Scout ENT855 является лучшим выбором для компаний, осуществляющих комплексное оснащение автотранспорта",
    img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Видеорегистратор ВРК4-ЕНВО",
    desc: "Цифровой видеорегистратор, предназначенный для транспортного применения",
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&w=300&q=80",
  },
];

export default function DevicesSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-3xl font-bold text-[#102133] mb-12">
          Устройства контроля от ведущих производителей
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {devices.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition"
            >
              <div className="w-full h-28 flex items-center justify-center mb-5">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-[#22313d] text-xs leading-snug mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed flex-1">
                {item.desc}
              </p>
              <button className="mt-5 w-full py-2.5 rounded bg-[#f59e0b] hover:bg-[#ffae00] text-black text-xs font-bold transition">
                Узнать цену
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
