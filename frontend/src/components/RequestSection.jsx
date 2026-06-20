import React, { useState } from "react";

const steps = [
  "Определить перечень параметров мониторинга транспорта",
  "Согласовать спецификацию оборудования автомониторинга и условий его монтажа",
  "Произвести оплату оборудования с монтажом и услуг контроля на ближайший месяц",
  "Предоставить а/м интеграторам для монтажа оборудования и установки системы",
  "Теперь ваши а/м под непрерывным контролем!",
];

export default function RequestSection() {
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);

  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#eaf4f2] rounded-xl p-10 lg:p-14">
          <div className="grid lg:grid-cols-[1.6fr_380px] gap-14">

            {/* Left — steps */}
            <div>
              <h2 className="text-2xl font-bold text-[#132133] mb-10">
                Как начать?
              </h2>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-9 h-9 rounded bg-[#177f73] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-[#102133] text-sm leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white p-7 shadow-md rounded -mt-24 relative z-10">
              <h3 className="text-xl font-bold text-[#132133] text-center mb-6">
                Оставить заявку
              </h3>

              <div className="flex items-center gap-3 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80"
                  alt="director"
                  className="w-12 h-12 rounded object-cover"
                />
                <div>
                  <p className="font-semibold text-[#f59e0b] text-sm">Чульский Сергей</p>
                  <p className="text-xs text-gray-400">Тех. директор</p>
                </div>
              </div>

              <div className="flex justify-between text-[#4E8F89] text-xs mb-5">
                <a href="tel:88004440481" className="hover:underline">📞 8 (800) 444-04-81</a>
                <a href="mailto:buy@ufin.online" className="hover:underline">✉ buy@ufin.online</a>
              </div>

              <div className="space-y-3">
                <div className="flex border border-gray-200 rounded overflow-hidden focus-within:border-[#4E8F89] transition">
                  <span className="px-3 py-3 bg-gray-50 text-gray-400 text-sm border-r border-gray-200">+7</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(999) 999-9999*"
                    className="flex-1 px-3 py-3 text-sm focus:outline-none text-gray-800"
                  />
                </div>

                <button className="w-full py-3 rounded bg-[#177f73] hover:bg-[#14695f] text-white text-sm font-semibold transition">
                  Отправить
                </button>

                <label className="flex gap-2 items-start cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 accent-[#4E8F89]"
                  />
                  <span className="text-xs text-gray-400 leading-relaxed">
                    Дал согласие на{" "}
                    <a href="#" className="text-[#4E8F89] hover:underline">обработку персональных данных</a>
                  </span>
                </label>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
