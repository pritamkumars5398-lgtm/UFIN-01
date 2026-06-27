import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { serviceData, solutionData } from "../data/servicesData";
import { 
  ChevronRight, Check, ChevronDown, ChevronUp, MessageCircle, 
  ArrowRight, ShieldCheck, Activity, Target
} from "lucide-react";

export default function ServiceDetail() {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(null);

  // Check if it's a service or a solution
  const data = serviceData[slug] || solutionData[slug];

  // Scroll to top on mount or slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* ── HERO ── */}
      <section
        className="relative min-h-[60vh] flex items-center pt-24 pb-16 px-6"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(11,31,51,0.95) 0%, rgba(11,31,51,0.7) 100%), url('${data.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight size={14} />
            <span>{data.category}</span>
            <ChevronRight size={14} />
            <span className="text-white font-medium">{data.title}</span>
          </div>
          
          <div className="max-w-3xl">
            <span className="inline-block bg-[#4E8F89] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded mb-5">
              {data.category}
            </span>
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-white/90 font-medium mb-4">
              {data.subtitle}
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              {data.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/consultation" className="px-8 py-3.5 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-bold rounded transition text-sm">
                Get a Consultation
              </Link>
              <a href="#details" className="px-8 py-3.5 border border-white/20 text-white hover:bg-white/10 rounded transition text-sm">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ROW ── */}
      {data.stats && data.stats.length > 0 && (
        <section className="bg-[#0B1F33] py-10 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {data.stats.map((stat, i) => (
                <div key={i} className={`flex flex-col items-center text-center ${i !== 0 ? 'md:pl-8 pt-8 md:pt-0' : ''}`}>
                  <span className="text-4xl font-black text-[#4E8F89] mb-2">{stat.value}</span>
                  <span className="text-white/60 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="max-w-7xl mx-auto px-6 py-20" id="details">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* ── MAIN CONTENT (LEFT 2/3) ── */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Highlights Grid */}
            {data.highlights && data.highlights.length > 0 && (
              <div>
                <h2 className="text-2xl font-black text-[#0B1F33] mb-8">Key Advantages</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {data.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3 bg-[#f7f8f9] p-5 rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-[#4E8F89]/10 flex items-center justify-center shrink-0">
                        <Check size={16} className="text-[#4E8F89]" />
                      </div>
                      <span className="text-slate-700 text-sm font-medium leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Content Sections */}
            {data.sections && data.sections.map((section, idx) => (
              <div key={idx} className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-black text-[#0B1F33] mb-6">{section.title}</h2>
                <p className="text-slate-600 text-base leading-relaxed mb-6">{section.content}</p>
                
                {/* Details List */}
                {section.details && section.details.length > 0 && (
                  <ul className="space-y-3 mb-8">
                    {section.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 text-base">
                        <ArrowRight size={18} className="text-[#4E8F89] shrink-0 mt-1" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Benefits List (used in solutions) */}
                {section.benefits && section.benefits.length > 0 && (
                  <div className="bg-[#EAF5F3] p-6 rounded-xl mb-8 border border-[#4E8F89]/20">
                    <h4 className="font-bold text-[#0B1F33] mb-4 flex items-center gap-2">
                      <Target size={20} className="text-[#4E8F89]" />
                      Main Benefits
                    </h4>
                    <ul className="space-y-3">
                      {section.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                          <Check size={16} className="text-[#4E8F89] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            {/* Equipment Section */}
            {data.equipment && data.equipment.length > 0 && (
              <div>
                <h2 className="text-2xl font-black text-[#0B1F33] mb-8">Supported Equipment</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {data.equipment.map((item, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition bg-white group">
                      <h3 className="font-bold text-[#0B1F33] text-lg mb-3 group-hover:text-[#4E8F89] transition">{item.name}</h3>
                      <p className="text-slate-500 text-sm mb-4 leading-relaxed">{item.desc}</p>
                      {item.price && (
                        <Link to="/consultation" className="text-[#4E8F89] text-sm font-semibold flex items-center gap-1 hover:underline">
                          Get pricing <ChevronRight size={14} />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* FAQs */}
            {data.faqs && data.faqs.length > 0 && (
              <div>
                <h2 className="text-2xl font-black text-[#0B1F33] mb-8">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {data.faqs.map((faq, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left bg-gray-50/50 hover:bg-gray-50 transition"
                      >
                        <span className="font-bold text-[#0B1F33] text-sm pr-4">{faq.q}</span>
                        {openFaq === i 
                          ? <ChevronUp className="w-5 h-5 text-[#4E8F89] shrink-0" />
                          : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
                      </button>
                      {openFaq === i && (
                        <div className="px-6 pb-5 pt-2 border-t border-gray-100">
                          <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── SIDEBAR (RIGHT 1/3) ── */}
          <div className="space-y-8">
            
            {/* Monitor / Detect Cards */}
            {(data.monitors?.length > 0 || data.detects?.length > 0) && (
              <div className="bg-[#0B1F33] rounded-2xl p-8 text-white">
                {data.monitors && data.monitors.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                      <Activity className="text-[#4E8F89]" size={20} />
                      What we monitor
                    </h3>
                    <ul className="space-y-3">
                      {data.monitors.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                          <Check size={16} className="text-[#4E8F89] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {data.detects && data.detects.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                      <ShieldCheck className="text-[#f59e0b]" size={20} />
                      What we detect & prevent
                    </h3>
                    <ul className="space-y-3">
                      {data.detects.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                          <Check size={16} className="text-[#f59e0b] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Clients */}
            {data.clients && data.clients.length > 0 && (
              <div className="bg-[#f7f8f9] rounded-2xl p-8 border border-gray-100">
                <h3 className="font-bold text-[#0B1F33] mb-4">Trusted By</h3>
                <div className="flex flex-col gap-3">
                  {data.clients.map((client, i) => (
                    <div key={i} className="bg-white py-3 px-4 rounded-lg shadow-sm text-sm font-semibold text-slate-700 border border-gray-100 text-center">
                      {client}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Person */}
            {data.contactPerson && (
              <div className="bg-gradient-to-br from-[#EAF5F3] to-white rounded-2xl p-8 border border-[#4E8F89]/20">
                <div className="w-16 h-16 rounded-full bg-[#4E8F89] flex items-center justify-center text-white text-xl font-bold mb-4">
                  {data.contactPerson.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-bold text-[#0B1F33] text-lg">{data.contactPerson.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{data.contactPerson.role}</p>
                <p className="text-sm text-slate-700 font-medium mb-4">
                  Need detailed information or a consultation?
                </p>
                <a 
                  href={data.contactPerson.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#229ED9] hover:bg-[#1a8bc4] text-white py-3 rounded-lg font-bold transition text-sm"
                >
                  <MessageCircle size={18} /> Chat in Telegram
                </a>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ── CTA BOTTOM ── */}
      <section className="bg-[#4E8F89] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
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
