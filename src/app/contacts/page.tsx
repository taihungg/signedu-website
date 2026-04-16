import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Liên hệ - SignEdu",
  description: "Trang liên hệ SignEdu",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 max-w-7xl mx-auto w-full text-center md:text-left">
        <div className="max-w-5xl mx-auto md:mx-0">
          <span className="inline-block px-5 py-2 bg-[#83daf2]/10 text-[#83daf2] rounded-full text-sm font-bold tracking-widest uppercase mb-6 border border-[#83daf2]/20">
            Kết nối cùng chúng tôi
          </span>
          <h1 className="text-5xl md:text-5xl font-headline font-extrabold text-[#00105b] tracking-tight mb-6">
            Mọi khoảng cách đều có thể <span className="text-[#83daf2] italic">thu hẹp.</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto md:mx-0">
            Chúng tôi luôn sẵn sàng lắng nghe các ý tưởng, phản hồi và cơ hội hợp tác để cùng nhau kiến tạo một cộng đồng không rào cản cho người Điếc.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="pb-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgba(0,16,91,0.06)] border border-slate-100 space-y-8 relative overflow-hidden">
              
              <h2 className="text-2xl font-bold font-headline text-[#00105b] mb-6 relative z-10">Thông tin liên hệ</h2>
              
              <div className="flex items-start gap-5 group relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#83daf2]/10 flex items-center justify-center text-[#83daf2] group-hover:scale-110 group-hover:bg-[#83daf2] group-hover:text-white transition-all duration-300 shrink-0 shadow-sm border border-[#83daf2]/20">
                  <span className="material-symbols-outlined text-3xl">mail</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#00105b] text-lg mb-1">Email</h3>
                  <a href="mailto:hello@signedu.vn" className="text-slate-600 font-medium block hover:text-[#83daf2] transition-colors">signedu2025@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-5 group relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#f1d577]/10 flex items-center justify-center text-[#d1ac2c] group-hover:scale-110 group-hover:bg-[#f1d577] group-hover:text-[#3D4DA3] transition-all duration-300 shrink-0 shadow-sm border border-[#f1d577]/30">
                  <span className="material-symbols-outlined text-3xl">call</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#00105b] text-lg mb-1">Điện thoại</h3>
                  <p className="text-slate-600 font-medium">+84 348 325 101 (Ms. Thảo Vy)</p>
                  <p className="text-slate-500 text-sm mt-1 bg-slate-50 inline-block px-2 py-1 rounded-md border border-slate-100">Thứ 2 - Thứ 6: 08:00 - 17:00</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#3D4DA3]/10 flex items-center justify-center text-[#3D4DA3] group-hover:scale-110 group-hover:bg-[#3D4DA3] group-hover:text-white transition-all duration-300 shrink-0 shadow-sm border border-[#3D4DA3]/20">
                  <span className="material-symbols-outlined text-3xl">location_on</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#00105b] text-lg mb-1">Văn phòng</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">Tòa nhà ABC<br/>Học viện Báo chí và Tuyên truyền</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group pt-8 border-t border-slate-100 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#00105b]/5 flex items-center justify-center text-[#00105b] group-hover:scale-110 group-hover:bg-[#1877F2] transition-all duration-300 shrink-0 shadow-sm border border-[#00105b]/10">
                  <img src="/icons/facebook.svg" alt="Facebook" className="w-8 h-8 group-hover:brightness-0 group-hover:invert transition-all" />
                </div>
                <div>
                  <h3 className="font-bold text-[#00105b] text-lg mb-1">Facebook</h3>
                  <a href="https://www.facebook.com/profile.php?id=61580129730953" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#00105b] font-bold hover:text-[#1877F2] transition-colors">
                    SignEdu - Ký hiệu kết nối <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#00105b]/5 flex items-center justify-center text-[#00105b] group-hover:scale-110 group-hover:bg-[#0068FF] transition-all duration-300 shrink-0 shadow-sm border border-[#00105b]/10">
                  <img src="/icons/zalo.svg" alt="Zalo" className="w-8 h-8 group-hover:brightness-0 group-hover:invert transition-all" />
                </div>
                <div>
                  <h3 className="font-bold text-[#00105b] text-lg mb-1">Zalo</h3>
                  <a href="https://zalo.me/0348325101" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-600 font-bold hover:text-[#0068FF] transition-colors">
                    0348 325 101 <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Microcopy box on left */}
            <div className="bg-[#83daf2]/5 p-6 md:p-8 rounded-[2rem] border border-[#83daf2]/20 flex items-start gap-5 shadow-sm">
               <span className="material-symbols-outlined text-[#83daf2] text-4xl shrink-0">schedule</span>
               <div>
                 <strong className="text-[#00105b] text-lg block font-bold mb-2">Cam kết phản hồi</strong>
                 <p className="text-slate-700 italic leading-relaxed">Chúng tôi sẽ phản hồi yêu cầu tư vấn trong vòng <span className="font-bold text-[#83daf2] bg-white px-2 py-0.5 rounded-md shadow-sm ml-1">24–48 giờ</span> làm việc.</p>
               </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_12px_40px_rgba(0,16,91,0.08)] border border-[#83daf2]/10 relative overflow-hidden">
               {/* Decorative border top */}
               <div className="absolute top-0 left-0 w-full h-1.5 bg-[#83daf2]"></div>
               
               <div className="mb-10 text-center md:text-left">
                 <h2 className="text-3xl md:text-4xl font-headline font-bold text-[#00105b] mb-4">Gửi yêu cầu tư vấn</h2>
               </div>
               <ContactForm />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
