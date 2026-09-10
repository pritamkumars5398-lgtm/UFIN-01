import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Send } from "lucide-react";

/**
 * Compact inline lead form — mirrors the "Get detailed information" form
 * on the reference API / relay-servers pages. Local success state only.
 */
export default function InlineLeadForm({
  heading = "Get detailed information",
  subtitle = "Leave your contacts and a specialist will get back to you.",
}) {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", consent: false });
  const [sent, setSent] = useState(false);

  const upd = (k) => (e) =>
    setForm((s) => ({ ...s, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  return (
    <section className="py-20 px-6 bg-[#0B1F33]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-white mb-2">{heading}</h2>
        <p className="text-white/50 text-sm mb-8">{subtitle}</p>

        {sent ? (
          <div className="bg-white rounded-2xl p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-[#EAF5F3] flex items-center justify-center mx-auto mb-4">
              <Send className="w-5 h-5 text-[#4E8F89]" />
            </div>
            <p className="font-black text-[#0B1F33] text-lg">Request sent</p>
            <p className="text-slate-400 text-sm mt-1">We will contact you during the business day.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="bg-white rounded-2xl p-6 sm:p-8 grid sm:grid-cols-2 gap-4"
          >
            <input
              required
              placeholder="Name"
              value={form.name}
              onChange={upd("name")}
              className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4E8F89]"
            />
            <input
              placeholder="Company"
              value={form.company}
              onChange={upd("company")}
              className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4E8F89]"
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={upd("email")}
              className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4E8F89]"
            />
            <div className="flex border border-slate-200 rounded-xl overflow-hidden focus-within:border-[#4E8F89]">
              <span className="px-3 py-3 bg-slate-50 text-slate-400 text-sm border-r border-slate-200">+7</span>
              <input
                required
                type="tel"
                placeholder="(999) 999-99-99"
                value={form.phone}
                onChange={upd("phone")}
                className="flex-1 px-4 py-3 text-sm focus:outline-none"
              />
            </div>
            <label className="sm:col-span-2 flex items-start gap-2 cursor-pointer">
              <input type="checkbox" required checked={form.consent} onChange={upd("consent")} className="mt-0.5 accent-[#4E8F89]" />
              <span className="text-slate-400 text-xs leading-relaxed">
                I agree to the{" "}
                <Link to="/resources/privacy-policy" className="text-[#4E8F89] hover:underline">
                  processing of personal data
                </Link>
              </span>
            </label>
            <button
              type="submit"
              className="sm:col-span-2 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-black py-3.5 rounded-xl transition text-sm"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
