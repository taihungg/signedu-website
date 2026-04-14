"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";

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
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#f1d577] via-[#fff3c7] to-[#e7c760] rounded-full blur-md opacity-75 group-hover:opacity-100 animate-pulse transition duration-1000"></div>
            <a href="https://app.signedu.info" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden bg-gradient-to-r from-[#e7c760] to-[#f1d577] text-[#3D4DA3] px-9 py-3.5 rounded-full font-headline font-black text-[15px] tracking-wide shadow-[0_0_20px_rgba(241,213,119,0.5)] hover:shadow-[0_8px_30px_rgba(241,213,119,0.8)] hover:-translate-y-1.5 transition-all duration-500 active:translate-y-0 flex items-center gap-2 border-2 border-white/60 group-hover:border-white">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              <Sparkles className="w-5 h-5 text-[#3D4DA3] animate-pulse" style={{ animationDuration: '2s' }} />
              <span className="relative z-10 drop-shadow-[0_2px_2px_rgba(255,255,255,0.6)]">Học NNKH</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
