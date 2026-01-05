import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01";
import hero from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import Card from "@/homepage/card";
import cardimage1 from "@/assets/card-assets/cardimage1.jpg";
import cardimage2 from "@/assets/card-assets/cardimage2.jpg";
import cardimage3 from "@/assets/card-assets/cardimage3.jpg";
import profile1 from "@/assets/profile-card/profilecard1.png"; // Import profile image
import profile2 from "@/assets/profile-card/profilecard2.png"; // Import profile image
import profile3 from "@/assets/profile-card/profilecard3.png"; // Import profile image
import newsletter from "@/assets/newsletter.jpg";
import Footer from "@/components/ui/footer";

function HomePage() {
  return (
    <>
      {/* header section */}
      {/* nav section */}
      <Navbar01 />
      {/* main section */}
      <main className="bg-[#FFFDF3] w-[100%]">
        {/* hero section */}
        <section className="hero text-white mx-auto w-[94vw] relative mt-3 lg:w-[90vw] xl:w-[80vw]">
          <img
            src={hero}
            alt=""
            className="rounded-md absolute inset-0 top-2 h-[335px] w-[94vw] lg:w-[90vw] xl:w-[80vw]"
          />
          <section className="overlay absolute top-2 text-center bg-black/80 rounded-md h-[335px] flex flex-col justify-center items-center w-[94vw] lg:w-[90vw] xl:w-[80vw]">
            <section className="hero-text flex flex-col justify-center items-center gap-4">
              <h1 className="font-bold">
                Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
                Interaktif!
              </h1>
              <p className="w-[90vw]">
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
        <section className="information mx-auto relative top-90 w-[94vw] lg:w-[90vw] xl:w-[80vw]">
          <h1 className="text-[24px] font-bold">
            Koleksi Video <br /> Pembelajaran Unggulan
          </h1>
          <p className="opacity-70">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
          <ul className="flex w-full overflow-x-auto gap-4 flex-nowrap scrollbar-hide no-scrollbar mt-5 mb-5">
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
          <section
            className="grid gap-5 w-[94vw] mx-auto
          // responsive 
           sm:grid-cols-3 lg:w-[88vw] lg:gap-3 xl:w-[80vw] xl:grid-cols-4 2xl:w-[80vw] 2xl:grid-cols-5"
          >
            {" "}
            {/* Added pb-10 for bottom spacing */}
            <Card
              img={cardimage1}
              name="Big 4 Auditor Financial Analyst"
              description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik."
              profileImg={profile1}
              profileName="Jenna Ortega"
              profileDesc="Senior Accountant di Gojek"
              rate="3.5 (86)"
              price="Rp 300K"
            />
            <Card
              img={cardimage2}
              name="Big 4 Auditor Financial Analyst"
              description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik."
              profileImg={profile2}
              profileName="Jenna Ortega"
              profileDesc="Senior Accountant di Gojek"
              rate="3.5 (86)"
              price="Rp 300K"
            />
            <Card
              img={cardimage3}
              name="Big 4 Auditor Financial Analyst"
              description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik."
              profileImg={profile3}
              profileName="Jenna Ortega"
              profileDesc="Senior Accountant di Gojek"
              rate="3.5 (86)"
              price="Rp 300K"
            />
            <Card
              img={cardimage1}
              name="Big 4 Auditor Financial Analyst"
              description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik."
              profileImg={profile1}
              profileName="Jenna Ortega"
              profileDesc="Senior Accountant di Gojek"
              rate="3.5 (86)"
              price="Rp 300K"
            />
            <Card
              img={cardimage2}
              name="Big 4 Auditor Financial Analyst"
              description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik."
              profileImg={profile2}
              profileName="Jenna Ortega"
              profileDesc="Senior Accountant di Gojek"
              rate="3.5 (86)"
              price="Rp 300K"
            />
            <Card
              img={cardimage3}
              name="Big 4 Auditor Financial Analyst"
              description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik."
              profileImg={profile3}
              profileName="Jenna Ortega"
              profileDesc="Senior Accountant di Gojek"
              rate="3.5 (86)"
              price="Rp 300K"
            />
            <Card
              img={cardimage1}
              name="Big 4 Auditor Financial Analyst"
              description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik."
              profileImg={profile1}
              profileName="Jenna Ortega"
              profileDesc="Senior Accountant di Gojek"
              rate="3.5 (86)"
              price="Rp 300K"
            />
            <Card
              img={cardimage2}
              name="Big 4 Auditor Financial Analyst"
              description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik."
              profileImg={profile2}
              profileName="Jenna Ortega"
              profileDesc="Senior Accountant di Gojek"
              rate="3.5 (86)"
              price="Rp 300K"
            />
            <Card
              img={cardimage3}
              name="Big 4 Auditor Financial Analyst"
              description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik."
              profileImg={profile3}
              profileName="Jenna Ortega"
              profileDesc="Senior Accountant di Gojek"
              rate="3.5 (86)"
              price="Rp 300K"
            />
          </section>
        </section>
        {/* newsletter section */}
        <section className="relative text-white mx-auto top-95 mb-190 w-[94vw] lg:w-[90vw] xl:w-[80vw]">
          <img
            src={newsletter}
            alt=""
            loading="lazy"
            className="rounded-md absolute inset-0 top-2 h-[335px] w-[94vw] lg:w-[90vw] xl:w-[80vw]"
          />
          <section className="overlay absolute top-2 text-center bg-black/80 rounded-md h-[335px] w-[94vw] lg:w-[90vw] xl:w-[80vw] flex justify-center items-center">
            <section className="hero-text flex flex-col gap-2">
              <p>NEWSLETTER</p>
              <h1 className="text-[24px] font-bold ">
                Mau Belajar Lebih Banyak?
              </h1>
              <p>
                Daftarkan dirimu untuk mendapatkan informasi terbaru dan
                penawaran spesial dari program-program terbaik harisenin.com
              </p>
              <form action="" className=" flex gap-2 flex-col mx-auto relative">
                <input
                  type="email"
                  placeholder="Masukkan Email"
                  className="bg-background w-[320px] text-center rounded-md text-black py-2 md:w-[450px] md:py-4 md:text-start md:px-5"
                />
                <button
                  type="submit"
                  className="bg-yellow-500 w-[320px] text-center rounded-md text-background font-bold py-2 md:absolute md:w-[120px] md:top-2 md:right-2 "
                >
                  Subscribe
                </button>
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
