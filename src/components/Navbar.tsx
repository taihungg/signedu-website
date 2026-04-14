"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Giới thiệu", href: "/" },
    { name: "Giải pháp", href: "/solutions" },
    { name: "Đối tác", href: "/partners" },
    { name: "Thông tin khác", href: "/other-info" },
    { name: "Liên hệ", href: "/contacts" },
  ];

  return (
    <div className="fixed top-2 md:top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-8 pointer-events-none transition-all duration-300">
      <nav className="pointer-events-auto w-full max-w-7xl bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(61,77,163,0.12)] border border-[#3D4DA3]/10 rounded-3xl">
        <div className="flex justify-between items-center px-4 md:px-6 py-0 md:py-0">
          <Link href="/" className="flex items-center -ml-2">
            <img src="/images/logo.png" alt="SignEdu Logo" className="h-16 md:h-20 w-auto object-contain" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-headline font-bold tracking-tight transition-colors ${isActive
                    ? "text-[#83daf2] border-b-2 border-[#83daf2] pb-1"
                    : "text-[#3D4DA3] hover:text-[#83daf2] pb-1 border-b-2 border-transparent"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold text-sm hover:opacity-80 transition-all duration-300 active:scale-95">
            Học Ngôn ngữ ký hiệu
          </button>
        </div>
      </nav>
    </div>
  );
}
