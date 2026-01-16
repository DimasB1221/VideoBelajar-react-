import { useState } from "react";
import { BookOpen, Tag, Clock, ChevronDown, ChevronUp } from "lucide-react";

export function FilterCard() {
  const [openSections, setOpenSections] = useState({
    bidangStudi: true,
    harga: true,
    durasi: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <section className="bg-white rounded-[10px] p-6 border border-gray-100 shadow-sm">
      <section className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-[#333]">Filter</h2>
        <button className="text-[#FF5722] text-sm font-semibold hover:underline">
          Reset
        </button>
      </section>

      {/* Bidang Studi Section */}
      <section className="mb-4">
        <button
          onClick={() => toggleSection("bidangStudi")}
          className="w-full flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 mb-2 hover:bg-gray-50 transition-colors"
        >
          <section className="flex items-center gap-3 text-[#4ADE80]">
            <BookOpen size={20} />
            <span className="font-semibold">Bidang Studi</span>
          </section>
          {openSections.bidangStudi ? (
            <ChevronUp size={20} className="text-[#4ADE80]" />
          ) : (
            <ChevronDown size={20} className="text-[#4ADE80]" />
          )}
        </button>

        {openSections.bidangStudi && (
          <section className="pl-2 space-y-3 mt-2">
            {[
              "Pemasaran",
              "Digital & Teknologi",
              "Pengembangan Diri",
              "Bisnis Manajemen",
            ].map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <section className="relative flex items-center">
                  <input
                    type="checkbox"
                    className="peer w-5 h-5 rounded border-2 border-gray-300 checked:bg-[#4ADE80] checked:border-[#4ADE80] focus:ring-0 appearance-none transition-all"
                  />
                  <svg
                    className="absolute w-3.5 h-3.5 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none"
                    viewBox="0 0 14 10"
                    fill="none"
                  >
                    <path
                      d="M1 5L4.5 8.5L13 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </section>
                <span className="text-gray-500 group-hover:text-gray-700">
                  {item}
                </span>
              </label>
            ))}
          </section>
        )}
      </section>

      {/* Harga Section */}
      <section className="mb-4">
        <button
          onClick={() => toggleSection("harga")}
          className="w-full flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 mb-2 hover:bg-gray-50 transition-colors"
        >
          <section className="flex items-center gap-3 text-[#4ADE80]">
            <Tag size={20} />
            <span className="font-semibold">Harga</span>
          </section>
          {openSections.harga ? (
            <ChevronUp size={20} className="text-[#4ADE80]" />
          ) : (
            <ChevronDown size={20} className="text-[#4ADE80]" />
          )}
        </button>

        {openSections.harga && (
          <section className="pl-2 space-y-3 mt-2">
            {["Semua Harga", "Diskon", "Gratis"].map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <section className="relative flex items-center">
                  <input
                    type="checkbox"
                    className="peer w-5 h-5 rounded border-2 border-gray-300 checked:bg-[#4ADE80] checked:border-[#4ADE80] focus:ring-0 appearance-none transition-all"
                  />
                  <svg
                    className="absolute w-3.5 h-3.5 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none"
                    viewBox="0 0 14 10"
                    fill="none"
                  >
                    <path
                      d="M1 5L4.5 8.5L13 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </section>
                <span className="text-gray-500 group-hover:text-gray-700">
                  {item}
                </span>
              </label>
            ))}
          </section>
        )}
      </section>

      {/* Durasi Section */}
      <section className="mb-4">
        <button
          onClick={() => toggleSection("durasi")}
          className="w-full flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 mb-2 hover:bg-gray-50 transition-colors"
        >
          <section className="flex items-center gap-3 text-[#4ADE80]">
            <Clock size={20} />
            <span className="font-semibold">Durasi</span>
          </section>
          {openSections.durasi ? (
            <ChevronUp size={20} className="text-[#4ADE80]" />
          ) : (
            <ChevronDown size={20} className="text-[#4ADE80]" />
          )}
        </button>

        {openSections.durasi && (
          <section className="pl-2 space-y-3 mt-2">
            {["Kurang dari 4 Jam", "4 - 8 Jam", "Lebih dari 8 Jam"].map(
              (item) => (
                <label
                  key={item}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <section className="relative flex items-center">
                    <input
                      type="checkbox"
                      className="peer w-5 h-5 rounded border-2 border-gray-300 checked:bg-[#4ADE80] checked:border-[#4ADE80] focus:ring-0 appearance-none transition-all"
                    />
                    <svg
                      className="absolute w-3.5 h-3.5 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none"
                      viewBox="0 0 14 10"
                      fill="none"
                    >
                      <path
                        d="M1 5L4.5 8.5L13 1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </section>
                  <span className="text-gray-500 group-hover:text-gray-700">
                    {item}
                  </span>
                </label>
              )
            )}
          </section>
        )}
      </section>
    </section>
  );
}
