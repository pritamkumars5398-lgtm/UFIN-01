import React from "react";

export default function CompanyClients() {
  const companies = [
    {
      name: "Torex",
      country: "Russia",
      img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800",
    },
    {
      name: "Oktion",
      country: "Russia",
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
    },
    {
      name: "Gazprom Mezhregiongaz",
      country: "Russia",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    },
    {
      name: "Sudha Fleet Management",
      country: "India",
      img: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=800",
    },
    {
      name: "Bajaj Travels",
      country: "India",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    },
    {
      name: "PJSC",
      country: "Russia",
      img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
    },
  ];

  return (
    <section className="relative bg-[#f6f7f7] py-24 overflow-hidden">

      {/* Map Background */}
      <div
        className="absolute inset-0 opacity-[0.08] bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600')",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        <h2 className="text-center text-3xl md:text-5xl font-medium text-[#0b1f33] max-w-6xl mx-auto leading-tight mb-20">
          More than 500 companies in Russia and India use the services of the
          Federal Financial Monitoring Service (UFIN).
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {companies.map((item) => (
            <div
              key={item.name}
              className="
                bg-white
                overflow-hidden
                hover:-translate-y-2
                transition
                duration-500
              "
            >

              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[140px] object-cover"
              />

              <div className="p-6">

                <h3 className="font-semibold text-[#24323d]">
                  {item.name}
                </h3>

                <p className="text-[#8aa6a0] mt-2 text-sm">
                  {item.country}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}