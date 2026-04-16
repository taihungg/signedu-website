import Link from "next/link";

export const metadata = {
  title: "Đối tác - SignEdu",
  description: "Cộng đồng đối tác tiên phong đồng hành cùng SignEdu",
};

const partners = [
  { name: "Đội Sinh viên Công tác Xã hội", img: "/partners/SVCTXH.jpg" },
  { name: "Học viện Báo chí và Tuyên truyền", img: "/partners/ajc.jpg" },
  { name: "Cent", img: "/partners/cent.jpg" },
  { name: "Chạm", img: "/partners/chamj.jpg" },
  { name: "Flowee", img: "/partners/flowee.jpg" },
  { name: "SHE Enterprise", img: "/partners/she.png" },
  { name: "Starbucks", img: "/partners/starbuck.jpg" },
  { name: "Trung tâm NNKH", img: "/partners/ttnnkh.jpg" },
  { name: "Đại học KHXH&NV", img: "/partners/ussh.jpg" },
  { name: "XEM", img: "/partners/xem.jpg" },
];

const row1 = [...partners.slice(0, 5), ...partners.slice(0, 5), ...partners.slice(0, 5), ...partners.slice(0, 5)];
const row2 = [...partners.slice(5, 10), ...partners.slice(5, 10), ...partners.slice(5, 10), ...partners.slice(5, 10)];

const MarqueeStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee 30s linear infinite;
      min-width: max-content;
    }
    .animate-marquee-reverse {
      animation: marquee 35s linear infinite reverse;
      min-width: max-content;
    }
    .pause-on-hover:hover .animate-marquee,
    .pause-on-hover:hover .animate-marquee-reverse {
      animation-play-state: paused;
    }
  `}} />
);

export default function PartnersPage() {
  return (
    <>
      <MarqueeStyles />
      {/* Hero Section */}
      <section className="pt-32 pb-6 px-8 max-w-7xl mx-auto w-full text-center">
        <div className="max-w-4xl mx-auto space-y">
          <span className="inline-block px-5 py-2 bg-[#83daf2]/10 text-[#83daf2] border border-[#83daf2]/20 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
            Cộng đồng hòa nhập
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold text-[#00105b] tracking-tight leading-tight">
            Đồng hành cùng những <br className="hidden md:block" />
            <span className="text-[#83daf2] italic">đối tác tiên phong</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto pt-4">
             Sự tham gia và hỗ trợ từ các doanh nghiệp, nhà trường và tố chức xã hội là động lực to lớn<br />
             giúp SignEdu kiến tạo một môi trường phát triển bao trùm, không rào cản<br />
             cho cộng đồng người Điếc và người khiếm thính.
          </p>
        </div>
      </section>

      {/* Grid Section replaced with Marquee */}
      <section className="pb-24 w-full overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex flex-col gap-6 md:gap-10 pause-on-hover px-4 md:px-0 py-10 md:py-12">
          {/* Row 1 */}
          <div className="flex animate-marquee gap-6 md:gap-10 items-center">
            {row1.map((partner, index) => (
              <div 
                key={`r1-${index}`}
                className="group flex-shrink-0 flex items-center justify-center p-6 md:p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-300 cursor-pointer w-64 h-36 md:w-80 md:h-44 hover:shadow-[0_15px_40px_rgba(131,218,242,0.15)] hover:border-[#83daf2] hover:scale-105 hover:-translate-y-2 hover:z-20"
              >
                 <img 
                   src={partner.img} 
                   alt={partner.name} 
                   className="object-contain w-full h-full drop-shadow-sm group-hover:drop-shadow-lg transition-transform duration-500" 
                 />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex animate-marquee-reverse gap-6 md:gap-10 items-center">
            {row2.map((partner, index) => (
              <div 
                key={`r2-${index}`}
                className="group flex-shrink-0 flex items-center justify-center p-6 md:p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-300 cursor-pointer w-64 h-36 md:w-80 md:h-44 hover:shadow-[0_15px_40px_rgba(131,218,242,0.15)] hover:border-[#83daf2] hover:scale-105 hover:-translate-y-2 hover:z-20"
              >
                 <img 
                   src={partner.img} 
                   alt={partner.name} 
                   className="object-contain w-full h-full drop-shadow-sm group-hover:drop-shadow-lg transition-transform duration-500" 
                 />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined Social Proof & CTA Section */}
      <section className="py-6 px-6 w-full relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-white border border-[#83daf2]/20 shadow-[0_20px_50px_rgba(0,16,91,0.06)] rounded-[3rem] p-8 md:p-16 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f1d577]/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#83daf2]/10 rounded-full blur-3xl -ml-20 -mb-20 group-hover:scale-110 transition-transform duration-700"></div>
            
            {/* Stats Grid Inside the Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mb-16 border-b border-slate-100 pb-12">
              <div className="text-center">
                <strong className="block text-5xl font-headline font-black text-[#83daf2] mb-3">10+</strong>
                <p className="text-[#00105b] font-bold text-lg">Đối tác tin cậy</p>
                <span className="text-slate-500 text-sm">Gắn kết bền vững cùng sứ mệnh</span>
              </div>
              <div className="text-center">
                <strong className="block text-5xl font-headline font-black text-[#f1d577] mb-3">30+</strong>
                <p className="text-[#00105b] font-bold text-lg">Dự án triển khai</p>
                <span className="text-slate-500 text-sm">Hiệu quả thực tiễn, chuyển hóa năng lực</span>
              </div>
              <div className="text-center">
                <strong className="block text-5xl font-headline font-black text-[#3D4DA3] mb-3">10.000+</strong>
                <p className="text-[#00105b] font-bold text-lg">Người được lan tỏa</p>
                <span className="text-slate-500 text-sm">Giá trị bao trùm, thay đổi nhận thức</span>
              </div>
            </div>

            {/* CTA Content */}
            <div className="text-center relative z-10">
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-[#00105b] mb-4 group-hover:text-[#83daf2] transition-colors">
                Trở thành đối tác của SignEdu
              </h2>
              <p className="text-slate-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Cùng chúng tôi hiện thực hóa định hướng trách nhiệm xã hội và tạo ra những thay đổi mang tính cốt lõi cho một cộng đồng không rào cản.
              </p>
              
              <Link href="/contacts" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#f1d577] text-[#3D4DA3] rounded-[2rem] font-bold text-lg hover:bg-[#e7c760] transition-all duration-300 shadow-md hover:shadow-[0_10px_30px_rgba(241,213,119,0.3)] hover:-translate-y-1 transform active:scale-95">
                Liên hệ ngay <span className="material-symbols-outlined transition-transform duration-300">send</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
