import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { deviceImagePool } from "../data/servicePageScaffold";

/**
 * Horizontal equipment carousel — replaces the static grid so the
 * "Compatible equipment" section matches the reference's scrollable row.
 */
export default function EquipmentCarousel({ items = [] }) {
  const track = useRef(null);

  const scroll = (dir) => {
    if (track.current) track.current.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  if (!items.length) return null;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-3">
          <h2 className="text-3xl font-black text-[#0B1F33]">Compatible equipment</h2>
          <div className="hidden sm:flex gap-2 shrink-0">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#4E8F89] hover:text-[#4E8F89] transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#4E8F89] hover:text-[#4E8F89] transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <p className="text-slate-400 text-sm mb-8">
          Deeply integrated with all major monitoring devices — the list of models keeps expanding.
        </p>

        <div
          ref={track}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((e, i) => (
            <div
              key={e.name + i}
              className="group snap-start shrink-0 w-[260px] flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition"
            >
              <div className="h-40 bg-[#f7f8f9] flex items-center justify-center p-4">
                <img
                  src={e.image || deviceImagePool[i % deviceImagePool.length]}
                  alt={e.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-bold text-[#0B1F33] text-sm mb-2">{e.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed flex-1">{e.desc}</p>
                <Link
                  to="/resources/equipment"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#4E8F89] hover:underline"
                >
                  Get price <ChevronRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
