"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Giới thiệu", href: "/" },
    { name: "Giải pháp", href: "/giai-phap" },
    { name: "Đối tác", href: "/doi-tac" },
    { name: "Thông tin khác", href: "/thong-tin-khac" },
    { name: "Liên hệ", href: "/lien-he" },
  ];

  return (
    <div className="fixed top-2 md:top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-8 pointer-events-none transition-all duration-300">
      <nav className="pointer-events-auto w-full max-w-7xl bg-[#fbf8ff]/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,16,91,0.08)] border border-[#00105b]/5 rounded-3xl">
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
                    : "text-[#00105b] hover:text-[#83daf2] pb-1 border-b-2 border-transparent"
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
