import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calculator } from "lucide-react";
import { roiDefaults } from "../data/servicePageScaffold";

const fmt = (n) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(Math.max(0, Math.round(n)));

const FIELDS = [
  { key: "fleetSize", label: "Vehicles in the fleet", min: 1, max: 500, step: 1, unit: "" },
  { key: "fuelPrice", label: "Fuel price", min: 20, max: 120, step: 1, unit: "₽ / L" },
  { key: "consumption", label: "Consumption", min: 5, max: 60, step: 1, unit: "L / 100 km" },
  { key: "monthlyKm", label: "Mileage per vehicle", min: 500, max: 20000, step: 500, unit: "km / month" },
  { key: "targetSaving", label: "Target saving", min: 5, max: 40, step: 1, unit: "%" },
];

/**
 * Interactive payback calculator — mirrors the "Расчёт эффективности" section
 * on the reference taxi / food-transport pages. Opt-in per page via
 * servicesContent[slug].roiCalculator.
 */
export default function RoiCalculator({ title = "Efficiency calculator", tariffs = [] }) {
  const [v, setV] = useState({ ...roiDefaults });
  const tariffOptions = tariffs.length
    ? tariffs
    : [{ name: "Economy", monthly: "₽249" }, { name: "Premium", monthly: "₽549" }];
  const [tariffIdx, setTariffIdx] = useState(
    Math.max(0, tariffOptions.findIndex((t) => t.highlight))
  );

  const set = (key) => (e) => setV((s) => ({ ...s, [key]: Number(e.target.value) }));

  const result = useMemo(() => {
    const sub = Number(String(tariffOptions[tariffIdx]?.monthly || "").replace(/[^\d.]/g, "")) || v.subPerVehicle;
    const monthlyFuelPerVehicle = (v.monthlyKm * v.consumption / 100) * v.fuelPrice;
    const monthlySavePerVehicle = monthlyFuelPerVehicle * (v.targetSaving / 100);
    const fleetMonthlySave = monthlySavePerVehicle * v.fleetSize;
    const fleetMonthlyCost = sub * v.fleetSize;
    const netMonthly = fleetMonthlySave - fleetMonthlyCost;
    const equipTotal = v.equipPerVehicle * v.fleetSize;
    const paybackMonths = netMonthly > 0 ? equipTotal / netMonthly : null;
    return {
      monthly: netMonthly,
      annual: netMonthly * 12,
      payback: paybackMonths,
      sub,
    };
  }, [v, tariffIdx, tariffOptions]);

  return (
    <section className="py-20 px-6 bg-[#f7f8f9]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <Calculator className="text-[#4E8F89]" size={24} />
          <h2 className="text-3xl font-black text-[#0B1F33]">{title}</h2>
        </div>
        <p className="text-slate-400 text-sm mb-10">
          Estimate the monthly saving and how quickly the equipment pays for itself. Figures are indicative.
        </p>

        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          {/* Inputs */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 space-y-6">
            {FIELDS.map((f) => (
              <div key={f.key}>
                <div className="flex items-baseline justify-between mb-2">
                  <label className="text-sm font-semibold text-[#0B1F33]">{f.label}</label>
                  <span className="text-sm text-slate-500 tabular-nums">
                    {fmt(v[f.key])} {f.unit}
                  </span>
                </div>
                <input
                  type="range"
                  min={f.min}
                  max={f.max}
                  step={f.step}
                  value={v[f.key]}
                  onChange={set(f.key)}
                  className="w-full accent-[#4E8F89]"
                  aria-label={f.label}
                />
              </div>
            ))}

            <div>
              <label className="text-sm font-semibold text-[#0B1F33] block mb-2">Tariff</label>
              <div className="flex flex-wrap gap-2">
                {tariffOptions.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => setTariffIdx(i)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                      tariffIdx === i
                        ? "bg-[#4E8F89] text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {t.name} · {t.monthly}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="bg-[#0B1F33] rounded-2xl p-8 text-white flex flex-col">
            <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-6">
              Estimated result
            </p>
            <div className="space-y-6 flex-1">
              <div>
                <div className="text-3xl font-black text-[#4E8F89]">₽{fmt(result.monthly)}</div>
                <div className="text-white/50 text-sm">Net saving per month (whole fleet)</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">₽{fmt(result.annual)}</div>
                <div className="text-white/50 text-sm">Net saving per year</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">
                  {result.payback ? `${result.payback.toFixed(1)} mo` : "—"}
                </div>
                <div className="text-white/50 text-sm">Equipment payback period</div>
              </div>
            </div>
            <Link
              to="/consultation"
              className="mt-8 text-center bg-[#f59e0b] hover:bg-[#ffae00] text-black font-extrabold rounded-xl py-3.5 text-sm transition"
            >
              Get an exact quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
