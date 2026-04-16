import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 md:pt-10 pb-8 mt-auto border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-12 mb-16">
          
          {/* Brand Block */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-sm">
            <Link href="/" className="inline-block transition-transform hover:scale-105 duration-300">
              <img src="/images/logo.png" alt="SignEdu Logo" className="h-30 w-auto object-contain" />
            </Link>
            <p className="text-[#00105b]/80 font-medium text-lg italic pr-4">
              "Vì một Việt Nam hòa nhập không rào cản"
            </p>
          </div>

          {/* Contact Info & Social */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-10 sm:gap-16">
            
            {/* Contact Group */}
            <div className="flex flex-col gap-5 text-[#00105b]/85 font-medium">
              <a href="mailto:signedu2025@gmail.com" className="flex items-center gap-3 hover:text-[#83daf2] transition-colors group">
                <span className="material-symbols-outlined text-[#3D4DA3] bg-[#f4f2ff] p-2.5 rounded-2xl group-hover:bg-[#83daf2] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-0.5">mail</span>
                signedu2025@gmail.com
              </a>
              <a href="tel:+84348325101" className="flex items-center gap-3 hover:text-[#83daf2] transition-colors group">
                <span className="material-symbols-outlined text-[#3D4DA3] bg-[#f4f2ff] p-2.5 rounded-2xl group-hover:bg-[#83daf2] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-0.5">call</span>
                (+84) 348 325 101 (Ms. Thảo Vy)
              </a>
            </div>

            {/* Social Block */}
            <div className="flex flex-col items-center sm:items-start gap-5 text-[#00105b]/85 font-medium">
              <span className="opacity-50 text-xs uppercase tracking-widest font-extrabold mt-1">Theo dõi chúng tôi</span>
              <div className="flex flex-col gap-3">
                <a href="https://www.facebook.com/profile.php?id=61580129730953" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#1877F2] transition-colors group">
                  <div className="text-[#3D4DA3] bg-[#f4f2ff] p-2.5 rounded-2xl group-hover:bg-[#1877F2] transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-0.5 flex items-center justify-center">
                    <img src="/icons/facebook.svg" alt="Facebook" className="w-[22px] h-[22px] group-hover:brightness-0 group-hover:invert transition-all" />
                  </div>
                  SignEdu - Ký hiệu kết nối
                </a>
                <a href="https://zalo.me/0348325101" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#0068FF] transition-colors group">
                  <div className="text-[#3D4DA3] bg-[#f4f2ff] p-2.5 rounded-2xl group-hover:bg-[#0068FF] transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-0.5 flex items-center justify-center">
                    <img src="/icons/zalo.svg" alt="Zalo" className="w-[22px] h-[22px] group-hover:brightness-0 group-hover:invert transition-all" />
                  </div>
                  0348 325 101 (Ms. Thảo Vy)
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Divider */}
        <hr className="border-t border-slate-200 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[#00105b]/50">
          <p>© 2025 SignEdu. All rights reserved. Tactile Clarity for the Deaf Community.</p>
          <div className="flex gap-6 font-medium">
            <Link href="#" className="hover:text-[#83daf2] hover:underline transition-all">Chính sách bảo mật</Link>
            <Link href="#" className="hover:text-[#83daf2] hover:underline transition-all">Điều khoản sử dụng</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
