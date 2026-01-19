import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01";
import { Button } from "@/components/ui/button";
import Card from "@/homepage/card";
import Footer from "@/components/ui/footer";
import { productService } from "@/services/productServices";
import { useState, useEffect } from "react";
import { type Courses } from "@/types/courses";

function HomePage() {
  // Fetch products (courses)
  const [products, setProducts] = useState<Courses[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await productService.getAll();
        if (error) throw error;
        if (response) {
          setProducts(response);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      {/* header section */}
      {/* nav section */}
      <Navbar01 />
      {/* main section */}
      <main className="bg-[#FFFDF3] w-[100%]">
        {/* hero section */}
        {/* responsive width juga custom class bisa diliat di index.css */}
        <section className="text-white mx-auto relative mt-3 responsive-width container">
          <div className="hero-bg rounded-md absolute top-2 h-[335px] w-full"></div>
          <section className="overlay-style w-full">
            {/* Flex-center adalah custom style bisa diliat di index.css */}
            <section className="hero-text flex-col flex-center gap-4">
              <h1 className="font-bold">
                Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
                Interaktif!
              </h1>
              <p className="text-center">
                Temukan ilmu baru yang menarik dan mendalam melalui koleksi
                video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda
                juga dapat berpartisipasi dalam latihan interaktif yang akan
                meningkatkan pemahaman Anda.
              </p>
              <Button variant="green" className="w-[300px] mx-auto">
                Temukan Video Course untuk Dipelajari!
              </Button>
            </section>
          </section>
        </section>
        {/* information section */}
        <section className="information mx-auto relative top-90 responsive-width container">
          <h1 className="text-[24px] font-bold">
            Koleksi Video <br /> Pembelajaran Unggulan
          </h1>
          <p className="opacity-70">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
          <ul className="flex w-full overflow-x-auto gap-4  scrollbar-hide no-scrollbar mt-5 mb-5 ">
            <li className="category-button">Semua Kelas</li>
            <li className="category-button">Pemasaran</li>
            <li className="category-button">Desain</li>
            <li className="category-button">Pengembangan diri</li>
            <li className="category-button">Bisnis</li>
          </ul>
          {/* card class section */}
          <section
            className="grid gap-5 
          // responsive 
           sm:grid-cols-2 lg:gap-3 md:grid-cols-2 lg:grid-cols-3 xl:w-[96%] mx-auto"
          >
            {" "}
            {/* Added pb-10 for bottom spacing */}
            {loading ? (
              <div className="col-span-full flex-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
              </div>
            ) : error ? (
              <div className="col-span-full text-center py-20 text-red-500">
                {error}
              </div>
            ) : (
              // display product
              products.map((product) => (
                <Card
                  key={product.id}
                  img={product.img}
                  name={product.name}
                  description={product.description}
                  profileImg={product.profileImg}
                  profileName={product.profileName}
                  profileDesc={product.profileDesc}
                  rate={product.rate}
                  price={product.price}
                />
              ))
            )}
          </section>
        </section>
        {/* newsletter section */}
        <section className="relative text-white mx-auto top-95 mb-190 responsive-width">
          <div className="newsletter-bg rounded-md absolute top-2 h-[335px] w-full"></div>
          <section className="overlay-style w-full">
            <section className="hero-text flex flex-col gap-2">
              <p>NEWSLETTER</p>
              <h1 className="text-[24px] font-bold ">
                Mau Belajar Lebih Banyak?
              </h1>
              <p>
                Daftarkan dirimu untuk mendapatkan informasi terbaru dan
                penawaran spesial dari program-program terbaik harisenin.com
              </p>
              <form
                action=""
                className=" flex gap-2 flex-col md:flex-row mx-auto relative"
              >
                <input
                  type="email"
                  placeholder="Masukkan Email"
                  className="bg-background w-[320px] text-center rounded-md text-black py-2 md:w-[450px] md:py-4 md:text-start md:px-5"
                />
                <Button
                  type="submit"
                  className="md:absolute md:w-[120px] md:top-2 md:right-2 "
                  variant="yellow"
                  size="lg"
                >
                  Subscribe
                </Button>
              </form>
            </section>
          </section>
        </section>
      </main>
      {/* footer section */}
      <Footer />
    </>
  );
}

export default HomePage;
