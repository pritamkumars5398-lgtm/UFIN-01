import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ChevronRight, Check, ChevronDown, ChevronUp, MessageCircle, ArrowRight,
  ShieldCheck, Activity, Target, Quote, Boxes, Plug,
} from "lucide-react";
import { resolveServicePage, sectionImagePool, deviceImagePool } from "../data/servicePageScaffold";

export default function ServiceDetail() {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const data = resolveServicePage(slug);
  const isSolution = data.category === "Solutions";
  const isIntegration = data.category === "Integrations";
  const rich = !isSolution && !isIntegration;

  const sections = (data.sections || []).map((s, i) => ({
    ...s,
    image: s.image || sectionImagePool[i % sectionImagePool.length],
  }));

  const person = data.contactPerson;
  const initials = person ? person.name.split(" ").map((n) => n[0]).join("") : "";

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* ── 1. HERO ── */}
      <section
        className="relative min-h-[62vh] flex items-center pt-28 pb-16 px-6 lg:px-8"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(11,31,51,0.93) 0%, rgba(11,31,51,0.72) 100%), url('${data.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services" className="hover:text-white transition">{data.category}</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">{data.title}</span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-block bg-[#4E8F89] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              {data.category}
            </span>
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5 drop-shadow-sm">
              {data.title}
            </h1>
            <p className="text-xl text-white/90 font-semibold mb-3 leading-snug">{data.subtitle}</p>
            <p className="text-white/75 text-lg leading-relaxed mb-8">{data.description}</p>

            {data.pricing && (
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-3">
                  <div className="text-white font-black text-lg">{data.pricing.equip}</div>
                  <div className="text-white/60 text-xs">Equipment &amp; installation</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-3">
                  <div className="text-white font-black text-lg">{data.pricing.sub}</div>
                  <div className="text-white/60 text-xs">Subscription per vehicle</div>
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/consultation"
                className="px-8 py-4 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-extrabold rounded-xl transition shadow-lg text-base"
              >
                {isIntegration ? "Get started" : "Try free — 2 weeks"}
              </Link>
              <a
                href="#details"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold hover:bg-white/10 rounded-xl transition text-base backdrop-blur-sm"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STATS BAR ── */}
      {data.stats?.length > 0 && (
        <section className="bg-[#0B1F33] py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
              {data.stats.map((s, i) => (
                <div key={i} className={i !== 0 ? "pl-4" : ""}>
                  <div className="text-3xl lg:text-4xl font-black text-[#4E8F89] mb-1">{s.value}</div>
                  <div className="text-white/60 text-xs md:text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div id="details" />

      {/* ── 3. WHAT YOU CAN MONITOR (intro bullets) ── */}
      {data.highlights?.length > 0 && (
        <section className="py-16 px-6 bg-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-black text-[#0B1F33] mb-4">
              {isIntegration ? "What the API lets you do" : `What ${data.title.toLowerCase()} lets you control`}
            </h2>
            <p className="text-slate-500 mb-10 max-w-2xl mx-auto">
              A single system for the parameters that actually affect your costs and service quality.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {data.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#f7f8f9] p-5 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-[#4E8F89]/10 flex items-center justify-center shrink-0">
                    <Check size={16} className="text-[#4E8F89]" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. DEEP-DIVE SECTIONS (alternating image + text) ── */}
      {sections.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto space-y-20">
            {sections.map((sec, idx) => (
              <div
                key={idx}
                className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                <div
                  className={`relative rounded-3xl overflow-hidden shadow-lg border border-slate-100 ${
                    idx % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <img src={sec.image} alt={sec.title} className="w-full h-[340px] object-cover" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-2xl bg-[#0B1F33] text-white flex items-center justify-center font-black shadow-md">
                    0{idx + 1}
                  </div>
                </div>

                <div className="space-y-5">
                  <h3 className="text-2xl lg:text-3xl font-black text-[#0B1F33] leading-snug">{sec.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{sec.content}</p>

                  {sec.details?.length > 0 && (
                    <ul className="space-y-2.5 pt-1">
                      {sec.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                          <ArrowRight size={17} className="text-[#4E8F89] shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.benefits?.length > 0 && (
                    <div className="bg-[#EAF5F3] p-5 rounded-xl border border-[#4E8F89]/20">
                      <h4 className="font-bold text-[#0B1F33] mb-3 flex items-center gap-2 text-sm">
                        <Target size={16} className="text-[#4E8F89]" /> Main benefits
                      </h4>
                      <ul className="space-y-2">
                        {sec.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                            <Check size={15} className="text-[#4E8F89] shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link
                    to="/consultation"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4E8F89]/10 text-[#4E8F89] hover:bg-[#4E8F89] hover:text-white font-bold transition text-sm"
                  >
                    Learn more &amp; order <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 5. MONITOR / DETECT ── */}
      {rich && (data.monitors?.length > 0 || data.detects?.length > 0) && (
        <section className="py-16 px-6 bg-[#f7f8f9]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
            {data.detects?.length > 0 && (
              <div className="bg-white rounded-2xl p-8 border border-slate-100">
                <h3 className="text-lg font-bold flex items-center gap-2 mb-5 text-[#0B1F33]">
                  <ShieldCheck className="text-[#f59e0b]" size={20} /> Monitoring prevents
                </h3>
                <ul className="space-y-3">
                  {data.detects.map((d, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <Check size={16} className="text-[#f59e0b] shrink-0 mt-0.5" /> <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {data.monitors?.length > 0 && (
              <div className="bg-white rounded-2xl p-8 border border-slate-100">
                <h3 className="text-lg font-bold flex items-center gap-2 mb-5 text-[#0B1F33]">
                  <Activity className="text-[#4E8F89]" size={20} /> Control parameters
                </h3>
                <ul className="space-y-3">
                  {data.monitors.map((m, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <Check size={16} className="text-[#4E8F89] shrink-0 mt-0.5" /> <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── 6. CLIENTS STRIP ── */}
      {data.clients?.length > 0 && (
        <section className="py-12 px-6 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-6">
              Our solutions are used by
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {data.clients.map((c, i) => (
                <span
                  key={i}
                  className="bg-[#f7f8f9] border border-slate-100 rounded-lg px-5 py-3 text-sm font-semibold text-slate-700"
                >
                  {c}
                </span>
              ))}
              <Link
                to="/reviews"
                className="inline-flex items-center gap-1 px-5 py-3 text-sm font-bold text-[#4E8F89] hover:underline"
              >
                View all cases <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── 7. HOW TO START + CONTACT PERSON ── */}
      <section className="py-20 px-6 bg-[#f7f8f9]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_320px] gap-12">
          <div>
            <h2 className="text-3xl font-black text-[#0B1F33] mb-10">How to start</h2>
            <ol className="space-y-6">
              {data.steps.map((s, i) => (
                <li key={i} className="flex gap-5">
                  <span className="w-9 h-9 rounded-full bg-[#4E8F89] text-white text-sm font-black flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-[#0B1F33]">{s.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mt-0.5">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              to="/consultation"
              className="inline-flex items-center gap-2 mt-10 px-8 py-3.5 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-extrabold rounded-xl transition text-sm"
            >
              Submit a request <ArrowRight size={16} />
            </Link>
          </div>

          {person && (
            <aside className="bg-white rounded-2xl p-8 border border-slate-100 h-fit">
              <div className="w-16 h-16 rounded-full bg-[#4E8F89] flex items-center justify-center text-white text-xl font-black mb-4">
                {initials}
              </div>
              <h3 className="font-bold text-[#0B1F33] text-lg">{person.name}</h3>
              <p className="text-slate-500 text-sm mb-5">{person.role}</p>
              <div className="space-y-2 text-sm mb-5">
                <a href="tel:88004440481" className="block text-slate-700 font-semibold hover:text-[#4E8F89] transition">
                  8 (800) 444-04-81
                </a>
                <a
                  href="mailto:info@tekonikasystems.online"
                  className="block text-slate-500 hover:text-[#4E8F89] transition"
                >
                  info@tekonikasystems.online
                </a>
              </div>
              <a
                href={person.telegram || "https://t.me/tekonika_systems"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#229ED9] hover:bg-[#1a8bc4] text-white py-3 rounded-lg font-bold transition text-sm"
              >
                <MessageCircle size={16} /> Chat in Telegram
              </a>
            </aside>
          )}
        </div>
      </section>

      {/* ── 8. PORTFOLIO ── */}
      {rich && data.portfolio?.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-[#0B1F33] mb-3">Our portfolio</h2>
            <p className="text-slate-400 text-sm mb-12">Real deployments — scope, fleet size and timeline</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.portfolio.map((p, i) => (
                <div key={i} className="bg-[#f7f8f9] rounded-2xl p-6 border border-slate-100 flex flex-col">
                  <h3 className="font-bold text-[#0B1F33] mb-2">{p.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{p.scope}</p>
                  <dl className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div>
                      <dt className="text-slate-400">Fleet</dt>
                      <dd className="text-slate-800 font-semibold">{p.fleet}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-400">Install time</dt>
                      <dd className="text-slate-800 font-semibold">{p.time}</dd>
                    </div>
                  </dl>
                  <p className="text-[#4E8F89] font-black text-sm border-t border-slate-200 pt-3">{p.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 9. TARIFFS ── */}
      {rich && data.tariffs?.length > 0 && (
        <section className="py-20 px-6 bg-[#0B1F33]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-3">Service tariff per vehicle</h2>
            <p className="text-white/50 text-sm mb-12">
              A separate tariff per vehicle. Equipment can be purchased or rented.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {data.tariffs.map((t, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-6 flex flex-col ${
                    t.highlight ? "bg-white ring-2 ring-[#4E8F89]" : "bg-white/5 border border-white/10"
                  }`}
                >
                  <h3 className={`font-black text-lg mb-1 ${t.highlight ? "text-[#0B1F33]" : "text-white"}`}>
                    {t.name}
                  </h3>
                  <p className={`text-xs mb-4 ${t.highlight ? "text-slate-500" : "text-white/50"}`}>
                    {t.interval}
                  </p>
                  <div className={`text-2xl font-black mb-0.5 ${t.highlight ? "text-[#0B1F33]" : "text-white"}`}>
                    {t.monthly}
                    <span className={`text-sm font-medium ${t.highlight ? "text-slate-400" : "text-white/40"}`}>
                      {" "}/ mo
                    </span>
                  </div>
                  <p className={`text-xs mb-5 ${t.highlight ? "text-slate-400" : "text-white/40"}`}>{t.annual}</p>
                  <p className={`text-xs mb-5 flex-1 ${t.highlight ? "text-slate-500" : "text-white/50"}`}>{t.note}</p>
                  <Link
                    to="/consultation"
                    className={`text-center font-extrabold rounded-lg py-2.5 text-sm transition ${
                      t.highlight
                        ? "bg-[#f59e0b] hover:bg-[#ffae00] text-black"
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                  >
                    Order
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 10. BEFORE / AFTER ── */}
      {rich && data.beforeAfter?.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-[#0B1F33] mb-3">
              Results of using {data.title.toLowerCase()}
            </h2>
            <p className="text-slate-400 text-sm mb-10">Typical change across a mid-size fleet in the first year</p>
            <div className="rounded-2xl border border-slate-200 overflow-hidden">
              <div className="grid grid-cols-[1fr_120px_120px] bg-[#f7f8f9] text-xs font-bold uppercase tracking-wider text-slate-400 px-6 py-4">
                <span>Metric</span>
                <span className="text-center">Before</span>
                <span className="text-center">After</span>
              </div>
              {data.beforeAfter.map((r, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1fr_120px_120px] items-center px-6 py-4 border-t border-slate-100 text-sm"
                >
                  <span className="text-slate-700">{r.metric}</span>
                  <span className="text-center text-slate-400">{r.before}</span>
                  <span className="text-center text-[#4E8F89] font-bold">{r.after}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/consultation"
                className="px-8 py-3.5 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-extrabold rounded-xl transition text-sm"
              >
                Try it
              </Link>
              <span className="text-slate-400 text-sm">Free 2-week trial period</span>
            </div>
          </div>
        </section>
      )}

      {/* ── 11. ADDITIONALLY ── */}
      {!isIntegration && data.additional?.length > 0 && (
        <section className="py-20 px-6 bg-[#f7f8f9]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-[#0B1F33] mb-12">Additionally</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {data.additional.map((g, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border border-slate-100">
                  <h3 className="font-bold text-[#0B1F33] mb-4">{g.title}</h3>
                  <ul className="space-y-2.5">
                    {g.items.map((it, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <Check size={15} className="text-[#4E8F89] shrink-0 mt-0.5" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 11b. ADDITIONAL ADVANTAGES (solution feature list) ── */}
      {isSolution && data.features?.length > 0 && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#0B1F33] mb-8">Additional advantages</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#f7f8f9] p-5 rounded-xl">
                  <Check size={16} className="text-[#4E8F89] shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm font-medium leading-relaxed">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 12. INTEGRATION PARTNERS (integrations only) ── */}
      {isIntegration && (
        <section className="py-20 px-6 bg-[#f7f8f9]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-[#0B1F33] mb-3">Already connected</h2>
            <p className="text-slate-400 text-sm mb-10">
              Data is transmitted continuously or on demand, in the protocol the receiving side expects.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-100">
                <h3 className="font-bold text-[#0B1F33] mb-4 flex items-center gap-2">
                  <Plug size={18} className="text-[#4E8F89]" /> Systems &amp; portals
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["1C", "SAP", "Galaxia", "Yandex.Courier", "MoveInSync", "RedBus", "Mos.ru", "Advantum"].map((p) => (
                    <span key={p} className="text-xs bg-[#f7f8f9] text-slate-600 px-3 py-1.5 rounded-full">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-slate-100">
                <h3 className="font-bold text-[#0B1F33] mb-4 flex items-center gap-2">
                  <Boxes size={18} className="text-[#4E8F89]" /> Protocols
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["EGTS", "AIS140", "Wialon IPS", "NIS", "REST / WebSocket"].map((p) => (
                    <span key={p} className="text-xs bg-[#f7f8f9] text-slate-600 px-3 py-1.5 rounded-full">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 13. EQUIPMENT SHOWCASE ── */}
      {data.equipment?.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-[#0B1F33] mb-3">Compatible equipment</h2>
            <p className="text-slate-400 text-sm mb-12">
              Deeply integrated with all major monitoring devices — the list of models is constantly expanding.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {data.equipment.map((e, i) => (
                <div
                  key={i}
                  className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition"
                >
                  <div className="h-40 bg-[#f7f8f9] flex items-center justify-center p-4">
                    <img
                      src={deviceImagePool[i % deviceImagePool.length]}
                      alt={e.name}
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
      )}

      {/* ── 14. FAQ ── */}
      {data.faqs?.length > 0 && (
        <section className="py-20 px-6 bg-[#f7f8f9]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-[#0B1F33] mb-10">Questions and answers</h2>
            <div className="space-y-3">
              {data.faqs.map((f, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition"
                  >
                    <span className="font-bold text-[#0B1F33] text-sm pr-4">{f.q}</span>
                    {openFaq === i ? (
                      <ChevronUp className="w-5 h-5 text-[#4E8F89] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 pt-1 border-t border-slate-100">
                      <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 15. TESTIMONIAL ── */}
      {data.testimonial && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto bg-[#0B1F33] rounded-3xl p-10 text-white">
            <Quote className="text-[#4E8F89] mb-5" size={36} />
            <p className="text-lg lg:text-xl font-medium leading-relaxed mb-6">"{data.testimonial.quote}"</p>
            <p className="font-bold text-[#4E8F89]">{data.testimonial.author}</p>
            <p className="text-white/50 text-sm">{data.testimonial.role}</p>
            <Link
              to="/reviews"
              className="inline-flex items-center gap-1 mt-5 text-sm font-bold text-white/80 hover:text-white transition"
            >
              All reviews <ChevronRight size={15} />
            </Link>
          </div>
        </section>
      )}

      {/* ── 16. BOTTOM CTA (unchanged) ── */}
      <section className="bg-[#4E8F89] py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-6">
            Ready to implement {data.title.toLowerCase()}?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Leave an online request now! We will contact you during business hours and give you a 10% discount!
          </p>
          <Link
            to="/consultation"
            className="inline-block px-10 py-4 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-bold rounded-lg transition text-lg shadow-lg hover:shadow-xl"
          >
            Submit Request
          </Link>
        </div>
      </section>
    </div>
  );
}
