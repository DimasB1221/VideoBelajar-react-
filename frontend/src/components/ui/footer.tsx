import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const footerLinks = [
  {
    title: "Kategori",
    links: [
      { label: "Digital & Teknologi", href: "#" },
      { label: "Pemasaran", href: "#" },
      { label: "Manajemen Bisnis", href: "#" },
      { label: "Pengembangan Diri", href: "#" },
      { label: "Desain", href: "#" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Kebijakan Privasi", href: "#" },
      { label: "Ketentuan Layanan", href: "#" },
      { label: "Bantuan", href: "#" },
    ],
  },
  {
    title: "Komunitas",
    links: [
      { label: "Tips Sukses", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Linkedin, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
];

function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-5 pb-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-20">
          {/* Brand Section */}
          <div className="lg:w-1/3 space-y-4">
            <h2 className="text-xl font-bold text-[#FFBD3A] flex items-center ">
              videobelajar
            </h2>
            <p className="font-bold text-gray-900 text-lg sm:w-[300px]">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </p>
            <div className="text-gray-600 text-sm space-y-1">
              <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
              <p>+62-877-7123-1234</p>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:w-2/3 lg:flex lg:justify-between grid gap-4">
            {footerLinks.map((section) => (
              <div
                key={section.title}
                className="border-b lg:border-none border-gray-100 pb-4 lg:pb-0"
              >
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center justify-between w-full lg:w-auto lg:cursor-default group"
                >
                  <h3 className="font-bold text-gray-900 text-base">
                    {section.title}
                  </h3>
                  <div className="lg:hidden text-gray-400">
                    {openSection === section.title ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>
                <ul
                  className={`mt-4 space-y-3 text-gray-500 text-sm ${
                    openSection === section.title ? "block" : "hidden"
                  } lg:block`}
                >
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="hover:text-yellow-500 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-100 gap-6">
          <p className="text-gray-500 text-sm">
            @2023 Gerobak Sayur All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
