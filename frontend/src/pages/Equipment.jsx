import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronRight, SlidersHorizontal } from "lucide-react";
import PageHero from "../components/PageHero";
import CompanyCTA from "../components/CompanyCTA";
import { equipment, equipmentCategories } from "../data/resourcesContent";
import heroImg from "../assets/rybric-bg.png";

const SORTS = {
  Popular: () => 0,
  "Name A–Z": (a, b) => a.name.localeCompare(b.name),
};

export default function Equipment() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("Popular");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const counts = useMemo(() => {
    const c = { All: equipment.length };
    equipment.forEach((e) => {
      c[e.category] = (c[e.category] || 0) + 1;
    });
    return c;
  }, []);

  const q = query.trim().toLowerCase();
  const list = equipment
    .filter((e) => category === "All" || e.category === category)
    .filter(
      (e) =>
        !q ||
        e.name.toLowerCase().includes(q) ||
        e.desc.toLowerCase().includes(q) ||
        e.tags.some((t) => t.toLowerCase().includes(q))
    )
    .sort(SORTS[sort]);

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Compatible equipment for business"
        subtitle="Trackers, recorders and sensors that work out of the box with the Tekonika Systems platform."
        image={heroImg}
        crumbs={[{ label: "Resources", to: "/resources" }, { label: "Equipment" }]}
      />

      <section className="py-14 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[240px_1fr] gap-10">
          {/* Sidebar */}
          <aside>
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5">
                <Search size={16} className="text-slate-400 shrink-0" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search equipment"
                  className="flex-1 bg-transparent text-sm focus:outline-none placeholder-slate-400"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3 flex items-center gap-2">
                  <SlidersHorizontal size={13} /> Category
                </p>
                <ul className="space-y-1">
                  {equipmentCategories.map((c) => (
                    <li key={c}>
                      <button
                        onClick={() => setCategory(c)}
                        className={`w-full flex items-center justify-between text-left text-sm px-3 py-2 rounded-lg transition ${
                          category === c
                            ? "bg-[#4E8F89] text-white font-semibold"
                            : "text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {c}
                        <span className={category === c ? "text-white/70" : "text-slate-400"}>
                          {counts[c] || 0}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-slate-400">{list.length} products</p>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-[#4E8F89] bg-white"
              >
                {Object.keys(SORTS).map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {list.map((e) => (
                <div
                  key={e.name}
                  className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition"
                >
                  <div className="h-44 bg-[#f7f8f9] flex items-center justify-center p-5">
                    <img
                      src={e.image}
                      alt={e.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#4E8F89] mb-1">
                      {e.category}
                    </span>
                    <h3 className="font-bold text-[#0B1F33] text-sm mb-2">{e.name}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed flex-1">{e.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {e.tags.map((t) => (
                        <span key={t} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                      <span className="font-black text-[#0B1F33] text-sm">{e.price}</span>
                      <Link
                        to="/consultation"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#4E8F89] hover:underline"
                      >
                        Get pricing <ChevronRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {list.length === 0 && (
              <p className="text-slate-400 text-sm py-16 text-center">
                No equipment matches your filters.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F33] py-14 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-3">
            Bring your own hardware
          </h2>
          <p className="text-white/70 mb-6">
            Already have trackers from another provider? We support 200+ models and can re-point them
            to our servers without replacement.
          </p>
          <Link
            to="/services/wialon-migration"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-extrabold rounded-xl transition text-sm"
          >
            See migration options <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      <CompanyCTA />
    </div>
  );
}
