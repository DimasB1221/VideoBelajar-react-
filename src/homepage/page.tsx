import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01";
import hero from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import Card from "@/homepage/card";
import cardimage1 from "@/assets/card-assets/cardimage1.jpg";
import profile from "@/assets/profile.png"; // Import profile image

function HomePage() {
  return (
    <>
      {/* header section */}
      <header className="">
        {/* nav section */}
        <Navbar01 />
      </header>
      {/* main section */}
      <main className="bg-[#FFFDF3] h-[100vh] w-[100%]">
        {/* hero section */}
        <section className="hero text-white mx-auto w-[360px] relative">
          <img
            src={hero}
            alt=""
            className="rounded-md absolute inset-0 top-2"
          />
          <section className="overlay absolute top-2 text-center bg-black/80 rounded-md h-[335px]">
            <section className="hero-text py-10 grid gap-5">
              <h1 className="text-[24px] font-bold">
                Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
                Interaktif!
              </h1>
              <p>
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
        <section className="information mx-auto relative top-90 w-[360px] mx-auto">
          <h1 className="text-[24px] font-bold">
            Koleksi Video <br /> Pembelajaran Unggulan
          </h1>
          <p className="opacity-70">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
          <ul className="flex w-full overflow-x-scroll gap-4 flex-nowrap scrollbar-hide mt-5 mb-5">
            <li className="whitespace-nowrap text-sm font-medium cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-colors">
              Semua Kelas
            </li>
            <li className="whitespace-nowrap text-sm font-medium cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-colors">
              Pemasaran
            </li>
            <li className="whitespace-nowrap text-sm font-medium cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-colors">
              Desain
            </li>
            <li className="whitespace-nowrap text-sm font-medium cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-colors">
              Pengembangan diri
            </li>
            <li className="whitespace-nowrap text-sm font-medium cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-colors">
              Bisnis
            </li>
          </ul>
          {/* card class section */}
          <div className="pb-10">
            {" "}
            {/* Added pb-10 for bottom spacing */}
            <Card
              img={cardimage1}
              name="Big 4 Auditor Financial Analyst"
              description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik."
              profileImg={profile}
              profileName="Jenna Ortega"
              profileDesc="Senior Accountant di Gojek"
              rate="3.5 (86)"
              price="Rp 300K"
            />
          </div>
        </section>
      </main>
      {/* footer section */}
      <footer></footer>
    </>
  );
}

export default HomePage;
