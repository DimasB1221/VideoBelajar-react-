// Halaman mendatang

// import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01";
// import Footer from "@/components/ui/footer";
// import { ChevronDown, Search } from "lucide-react";
// import { FilterCard } from "./filterCard";
// import { useState, useEffect } from "react";

// function Product() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sort, setSort] = useState("asc");
//   const [filters, setFilters] = useState({
//     bidangStudi: [],
//     durasi: [],
//     tag: [],
//   });

//   return (
//     <>
//       <Navbar01 />
//       <main className="bg-[#FFFDF3] w-full min-h-screen pb-20">
//         <section className="mx-auto w-[94vw] lg:w-[90vw] xl:w-[80vw] py-10">
//           <section className="mb-8">
//             <h1 className="text-[32px] font-bold text-[#1e1e1e]">
//               Koleksi Video <br /> Pembelajaran Unggulan
//             </h1>
//             <p className="mt-2 text-[#6e6e6e]">
//               Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
//             </p>
//           </section>

//           <section className="flex flex-col lg:flex-row gap-8">
//             {/* Filter Sidebar */}
//             <section className="w-full lg:w-1/4 shrink-0 space-y-6">
//               <FilterCard />
//             </section>

//             {/* Product Content (Placeholder/Search + Sort) */}
//             <section className="w-full lg:w-3/4">
//               <section className="flex flex-col sm:flex-row gap-4 mb-6">
//                 <section className="relative w-[150px]">
//                   <button className="flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600">
//                     <span>Urutkan</span>
//                     <ChevronDown size={16} />
//                   </button>
//                 </section>
//                 <section className="relative flex-1">
//                   <input
//                     type="text"
//                     placeholder="Cari Kelas"
//                     className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#4ADE80] bg-white text-gray-700"
//                   />
//                   <Search
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
//                     size={20}
//                   />
//                 </section>
//               </section>

//               {/* Grid Produk dummy to visualize layout integration */}
//               <section
//                 className="grid gap-5 w-[94vw] mx-auto
//                 // responsive
//            sm:grid-cols-3 lg:w-[88vw] lg:gap-3 xl:w-[80vw] xl:grid-cols-4 2xl:w-[80vw] 2xl:grid-cols-5"
//               >
//                 <p>Product akan disini</p>
//               </section>
//             </section>
//           </section>
//         </section>
//       </main>
//       {/* footer section */}
//       <Footer />
//     </>
//   );
// }

// export default Product;
