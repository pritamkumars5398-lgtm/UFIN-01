import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contacts() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const contactCards = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "ðóðÁð╗ðÁÐäð¥ð¢",
      value: "8 (800) 444-04-81",
      sub: "ðæðÁÐüð┐ð╗ð░Ðéð¢ð¥ ð┐ð¥ ðáð¥ÐüÐüð©ð©",
      href: "tel:88004440481",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "a@ufin.online",
      sub: "ð×Ðéð▓ðÁÐéð©ð╝ ð▓ ÐéðÁÐçðÁð¢ð©ðÁ Ðçð░Ðüð░",
      href: "mailto:a@ufin.online",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "ðáðÁðÂð©ð╝ ÐÇð░ð▒ð¥ÐéÐï",
      value: "ðƒð¢ÔÇôðƒÐé: 9:00 ÔÇô 18:00",
      sub: "ðíð▒ÔÇôðÆÐü: ð▓ÐïÐàð¥ð┤ð¢ð¥ð╣",
      href: null,
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "ðÉð┤ÐÇðÁÐü",
      value: "Ðâð╗. ðøÐæÐéÐçð©ð║ð░ ðæð░ð▒ÐâÐêð║ð©ð¢ð░, ð┤. 1, ð║ð¥ÐÇð┐ÐâÐü 3, ÐìÐé. 7, ð¥Ðäð©Ðü 17",
      sub: "ð£ð¥Ðüð║ð▓ð░, 129344",
      href: null,
    },
  ];

  return (
    <>
      {/* ÔöÇÔöÇ Hero Banner ÔöÇÔöÇ */}
      <section className="relative min-h-[380px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#0b1f33]/75" />

        <div className="relative max-w-7xl mx-auto px-6 pb-20 pt-40 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/50 text-sm mb-5">
            <Link to="/" className="hover:text-white transition">
              ðôð╗ð░ð▓ð¢ð░ÐÅ
            </Link>
            <span>/</span>
            <span className="text-white">ðÜð¥ð¢Ðéð░ð║ÐéÐï</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            ðÜð¥ð¢Ðéð░ð║ÐéÐï
          </h1>
          <p className="mt-4 text-white/65 text-lg max-w-xl">
            ðƒÐÇðÁð┤ð¥ÐüÐéð░ð▓ð╗ÐÅðÁð╝ Ðüð©ÐüÐéðÁð╝Ðï ð╝ð¥ð¢ð©Ðéð¥ÐÇð©ð¢ð│ð░ ð┤ð╗ÐÅ ð╗ÐÄð┤ðÁð╣ ð© ÐéÐÇð░ð¢Ðüð┐ð¥ÐÇÐéð░ ð▓ ð£ð¥Ðüð║ð▓ðÁ.
            ðÜð¥ð¢ð║ÐâÐÇðÁð¢Ðéð¢ÐïðÁ ÐåðÁð¢Ðï ð© ð▒ÐïÐüÐéÐÇð░ÐÅ ÐâÐüÐéð░ð¢ð¥ð▓ð║ð░.
          </p>
        </div>
      </section>

      {/* ÔöÇÔöÇ Contact Cards ÔöÇÔöÇ */}
      <section className="bg-[#f7f7f7] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card) => (
              <div
                key={card.label}
                className="bg-white p-8 rounded hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <div className="w-14 h-14 rounded bg-[#edf5f3] flex items-center justify-center text-[#177f73] mb-6">
                  {card.icon}
                </div>

                <p className="text-sm font-semibold text-[#8aa6a0] uppercase tracking-widest mb-2">
                  {card.label}
                </p>

                {card.href ? (
                  <a
                    href={card.href}
                    className="text-lg font-bold text-[#0b1f33] hover:text-[#177f73] transition leading-snug block"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="text-lg font-bold text-[#0b1f33] leading-snug">
                    {card.value}
                  </p>
                )}

                <p className="text-sm text-slate-500 mt-1">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÔöÇÔöÇ Form + Info ÔöÇÔöÇ */}
      <section className="bg-[#eaf4f2] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-[#eaf4f2] rounded-sm">
            <div className="grid lg:grid-cols-[1.5fr_420px] gap-16 items-start">

              {/* LEFT ÔÇô Company info */}
              <div>
                <h2 className="text-5xl font-bold text-[#132133] mb-14">
                  ðÜð░ð║ ð¢ð░Ðü ð¢ð░ð╣Ðéð©?
                </h2>

                <div className="grid md:grid-cols-2 gap-10">

                  <div>
                    <h3 className="text-sm font-semibold text-[#177f73] uppercase tracking-widest mb-3">
                      ð×ÐÇð│ð░ð¢ð©ðÀð░Ðåð©ÐÅ
                    </h3>
                    <p className="text-[#102133] leading-7 font-medium">
                      ð×ð×ð× ┬½ðÜð¥ð╝ð┐ð░Ðü┬╗
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#177f73] uppercase tracking-widest mb-3">
                      ð«ÐÇð©ð┤ð©ÐçðÁÐüð║ð©ð╣ ð░ð┤ÐÇðÁÐü
                    </h3>
                    <p className="text-[#102133] leading-7">
                      Ðâð╗. ðøÐæÐéÐçð©ð║ð░ ðæð░ð▒ÐâÐêð║ð©ð¢ð░, ð┤. 1,<br />
                      ð║ð¥ÐÇð┐ÐâÐü 3, ÐìÐé. 7, ð¥Ðäð©Ðü 17,<br />
                      ð£ð¥Ðüð║ð▓ð░, ðáð¥ÐüÐüð©ÐÅ, 129344
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#177f73] uppercase tracking-widest mb-3">
                      ðóðÁð╗ðÁÐäð¥ð¢
                    </h3>
                    <a
                      href="tel:88004440481"
                      className="text-[#102133] leading-7 font-medium hover:text-[#177f73] transition"
                    >
                      8 (800) 444-04-81
                    </a>
                    <p className="text-sm text-slate-500">ðæðÁÐüð┐ð╗ð░Ðéð¢ð¥ ð┐ð¥ ðáð¥ÐüÐüð©ð©</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#177f73] uppercase tracking-widest mb-3">
                      Email
                    </h3>
                    <a
                      href="mailto:a@ufin.online"
                      className="text-[#102133] leading-7 font-medium hover:text-[#177f73] transition"
                    >
                      a@ufin.online
                    </a>
                    <p className="text-sm text-slate-500">ð×ð▒Ðëð©ðÁ ð▓ð¥ð┐ÐÇð¥ÐüÐï</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#177f73] uppercase tracking-widest mb-3">
                      ðáðÁðÂð©ð╝ ÐÇð░ð▒ð¥ÐéÐï
                    </h3>
                    <p className="text-[#102133] leading-7">
                      ðƒð¢ ÔÇô ðƒÐé: 9:00 ÔÇô 18:00<br />
                      ðíð▒ ÔÇô ðÆÐü: ð▓ÐïÐàð¥ð┤ð¢ð¥ð╣
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#177f73] uppercase tracking-widest mb-3">
                      ðóðÁð╗ðÁð│ÐÇð░ð╝
                    </h3>
                    <a
                      href="https://t.me/ufin_online"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#102133] leading-7 font-medium hover:text-[#177f73] transition"
                    >
                      @ufin_online
                    </a>
                    <p className="text-sm text-slate-500">ðæÐïÐüÐéÐÇÐïðÁ ð▓ð¥ð┐ÐÇð¥ÐüÐï</p>
                  </div>

                </div>
              </div>

              {/* RIGHT ÔÇô Form card (same style as RequestSection) */}
              <div className="bg-white p-8 shadow-lg rounded -mt-0 lg:-mt-16 relative z-10">
                <h3 className="text-center text-3xl font-bold text-[#132133] mb-2">
                  ð×ÐüÐéð░ð▓ð©ÐéÐî ðÀð░ÐÅð▓ð║Ðâ
                </h3>
                <p className="text-center text-sm text-slate-500 mb-8">
                  ðƒðÁÐÇðÁðÀð▓ð¥ð¢ð©ð╝ ð▓ ÐéðÁÐçðÁð¢ð©ðÁ 15 ð╝ð©ð¢ÐâÐé
                </p>

                {/* Manager */}
                <div className="flex items-center gap-4 mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300"
                    alt="ð£ðÁð¢ðÁð┤ðÂðÁÐÇ"
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-[#ff8c00]">ðºÐâð╗ÐîÐüð║ð©ð╣ ðíðÁÐÇð│ðÁð╣</h4>
                    <p className="text-sm text-slate-500">ðóðÁÐàð¢ð©ÐçðÁÐüð║ð©ð╣ ð┤ð©ÐÇðÁð║Ðéð¥ÐÇ</p>
                  </div>
                </div>

                <div className="flex justify-between text-[#ff8c00] text-sm mb-6">
                  <span>­ƒô× 8 (800) 444-04-81</span>
                  <span>Ô£ë a@ufin.online</span>
                </div>

                {sent ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-[#edf5f3] flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-[#177f73]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-bold text-[#132133] text-lg">ðùð░ÐÅð▓ð║ð░ ð¥Ðéð┐ÐÇð░ð▓ð╗ðÁð¢ð░!</p>
                    <p className="text-slate-500 text-sm mt-1">ð£Ðï Ðüð▓ÐÅðÂðÁð╝ÐüÐÅ Ðü ð▓ð░ð╝ð© ð▓ ð▒ð╗ð©ðÂð░ð╣ÐêðÁðÁ ð▓ÐÇðÁð╝ÐÅ.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      required
                      placeholder="ðÆð░ÐêðÁ ð©ð╝ÐÅ"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full h-12 px-4 border border-slate-200 rounded outline-none focus:border-[#177f73] transition"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="+7 (999) 999-99-99"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full h-12 px-4 border border-slate-200 rounded outline-none focus:border-[#177f73] transition"
                    />
                    <textarea
                      placeholder="ðÆð░Ðê ð▓ð¥ð┐ÐÇð¥Ðü ð©ð╗ð© Ðüð¥ð¥ð▒ÐëðÁð¢ð©ðÁ"
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded outline-none focus:border-[#177f73] transition resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full h-12 rounded bg-[#177f73] text-white font-semibold hover:bg-[#14695f] transition"
                    >
                      ð×Ðéð┐ÐÇð░ð▓ð©ÐéÐî
                    </button>
                    <label className="flex gap-2 text-xs text-slate-500 items-start cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-0.5 accent-[#177f73]"
                      />
                      ð» Ðüð¥ð│ð╗ð░ÐüðÁð¢(ð░) ð¢ð░ ð¥ð▒ÐÇð░ð▒ð¥Ðéð║Ðâ ð┐ðÁÐÇÐüð¥ð¢ð░ð╗Ðîð¢ÐïÐà ð┤ð░ð¢ð¢ÐïÐà
                    </label>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ÔöÇÔöÇ Map ÔöÇÔöÇ */}
      <section className="bg-[#f7f7f7] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold text-[#0b1f33] mb-14">
            ð£Ðï ð¢ð░ ð║ð░ÐÇÐéðÁ
          </h2>

          <div className="rounded overflow-hidden shadow-lg">
            <iframe
              title="Ufin Office Moscow"
              src="https://maps.google.com/maps?q=55.835832,37.680819&z=15&output=embed"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="text-center text-slate-500 mt-6 text-sm">
            Ðâð╗. ðøÐæÐéÐçð©ð║ð░ ðæð░ð▒ÐâÐêð║ð©ð¢ð░, ð┤. 1, ð║ð¥ÐÇð┐ÐâÐü 3, ÐìÐé. 7, ð¥Ðäð©Ðü 17, ð£ð¥Ðüð║ð▓ð░, 129344
          </p>
        </div>
      </section>
    </>
  );
}
