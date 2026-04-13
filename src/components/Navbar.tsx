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
    <nav className="sticky top-0 z-50 w-full bg-[#fbf8ff]/80 backdrop-blur-md shadow-[0_12px_32px_rgba(0,16,91,0.06)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        <Link href="/" className="text-2xl font-black text-[#00105b] tracking-tight">
          SignEdu
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-headline font-bold tracking-tight transition-colors ${
                  isActive
                    ? "text-[#00687b] border-b-2 border-[#00687b] pb-1"
                    : "text-[#00105b] hover:text-[#00687b] pb-1 border-b-2 border-transparent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold text-sm hover:opacity-80 transition-all duration-300 active:scale-95">
          Hợp tác cùng SignEdu
        </button>
      </div>
    </nav>
  );
}
