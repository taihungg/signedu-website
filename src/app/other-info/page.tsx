import Link from 'next/link';

export const metadata = {
  title: "Thông tin khác - SignEdu",
  description: "Các tổ chức, doanh nghiệp và cộng đồng hỗ trợ Người Điếc và người khuyết tật.",
};

export default function OtherInfoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-block px-5 py-2 bg-[#83daf2]/10 text-[#83daf2] border border-[#83daf2]/20 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
            HỆ SINH THÁI HÒA NHẬP
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-headline font-extrabold text-[#00105b] leading-[1.3]">
            Kết nối các nguồn lực <br className="hidden md:block" />
            <span className="text-[#83daf2]">phát triển cộng đồng</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto pt-4 font-sans">
            Khám phá mạng lưới các tổ chức xã hội, doanh nghiệp và hội nhóm đang ngày đêm kiến tạo một môi trường sống công bằng và không rào cản cho Người Điếc tại Việt Nam.
          </p>
        </div>
      </section>

      {/* Section 2: Deaf Community Organizations */}
      <section className="py-12 px-6 max-w-7xl mx-auto w-full border-t border-slate-100">
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-headline font-bold text-[#00105b]">Tổ chức cộng đồng Người Điếc</h2>
          <p className="text-slate-600 mt-2">Các đơn vị nòng cốt trực tiếp hỗ trợ, đại diện và phát triển văn hóa Người Điếc.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: HAD */}
          <div className="bg-white border border-slate-100 p-6 rounded-[1.5rem] shadow-[0_10px_40px_rgba(0,16,91,0.04)] hover:shadow-[0_20px_50px_rgba(0,16,91,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row items-start gap-5 h-full group">
            <div className="shrink-0">
               <img src="/other-info/had.jpg" alt="Chi hội người Điếc Hà Nội" className="h-16 w-16 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-headline font-bold text-[#00105b] mb-2">Chi hội người Điếc Hà Nội (HAD)</h3>
              <p className="text-slate-600 text-sm mb-4 flex-grow leading-relaxed font-sans">
                Tổ chức xã hội đại diện cho cộng đồng người Điếc tại Hà Nội, thúc đẩy kết nối và hỗ trợ hội viên.
              </p>
              <div className="pt-4 border-t border-slate-100 mt-auto">
                <div className="flex items-start gap-3 text-slate-600 hover:text-[#83daf2] transition-colors">
                  <span className="material-symbols-outlined text-[#83daf2] text-[18px] mt-0.5">location_on</span>
                  <span className="text-sm leading-relaxed">Tầng 3, số 31 ngõ 41 Thái Hà, Đống Đa, Hà Nội</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: BVD */}
          <div className="bg-white border border-slate-100 p-6 rounded-[1.5rem] shadow-[0_10px_40px_rgba(0,16,91,0.04)] hover:shadow-[0_20px_50px_rgba(0,16,91,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row items-start gap-5 h-full group">
            <div className="shrink-0">
               <img src="/other-info/bvd.jpg" alt="Ban vận động Hội người Điếc Việt Nam" className="h-16 w-16 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-headline font-bold text-[#00105b] mb-2">Ban vận động Hội người Điếc Việt Nam</h3>
              <p className="text-slate-600 text-sm mb-4 flex-grow leading-relaxed font-sans">
                Tổ chức phi chính phủ đại diện tiếng nói của cộng đồng người Điếc trên toàn quốc.
              </p>
              <div className="pt-4 border-t border-slate-100 mt-auto space-y-3">
                <a href="tel:0914942742" className="flex items-center gap-3 text-slate-600 hover:text-[#83daf2] transition-colors">
                  <span className="material-symbols-outlined text-[#83daf2] text-[18px]">call</span>
                  <span className="text-sm font-medium">091 494 27 42</span>
                </a>
                <a href="mailto:bvdhoinguoidiecvn.vnfd@gmail.com" className="flex items-center gap-3 text-slate-600 hover:text-[#83daf2] transition-colors">
                  <span className="material-symbols-outlined text-[#83daf2] text-[18px]">mail</span>
                  <span className="text-sm font-medium break-all">bvdhoinguoidiecvn.vnfd@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Green Hands */}
          <div className="bg-white border border-slate-100 p-6 rounded-[1.5rem] shadow-[0_10px_40px_rgba(0,16,91,0.04)] hover:shadow-[0_20px_50px_rgba(0,16,91,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row items-start gap-5 h-full group">
            <div className="shrink-0">
               <img src="/other-info/green-hands.jpg" alt="Green Hands" className="h-16 w-16 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-headline font-bold text-[#00105b] mb-2">Green Hands <br/> Những Bàn Tay Xanh</h3>
              <p className="text-slate-600 text-sm mb-4 flex-grow leading-relaxed font-sans">
                Tổ chức thúc đẩy giá trị Ngôn ngữ ký hiệu và xây dựng xã hội hòa nhập, nơi người Điếc được tôn trọng, hỗ trợ.
              </p>
              <div className="pt-4 border-t border-slate-100 mt-auto space-y-3">
                <a href="tel:0385723177" className="flex items-center gap-3 text-slate-600 hover:text-[#83daf2] transition-colors">
                  <span className="material-symbols-outlined text-[#83daf2] text-[18px]">call</span>
                  <span className="text-sm font-medium">038 572 3177</span>
                </a>
                <a href="mailto:greenhands.vn23@gmail.com" className="flex items-center gap-3 text-slate-600 hover:text-[#83daf2] transition-colors">
                  <span className="material-symbols-outlined text-[#83daf2] text-[18px]">mail</span>
                  <span className="text-sm font-medium break-all">greenhands.vn23@gmail.com</span>
                </a>
                <div className="flex items-start gap-3 text-slate-600 pt-1 hover:text-[#83daf2] transition-colors">
                  <span className="material-symbols-outlined text-[#83daf2] text-[18px] mt-0.5">location_on</span>
                  <span className="text-sm leading-relaxed">
                    151 Thuỵ Khuê, Hà Nội <br />
                    33 Ngô Thời Nhiệm, Q3, TP.HCM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Disability Support Organization (ACDC) */}
      <section className="py-12 px-6 max-w-5xl mx-auto w-full relative">
        <div className="bg-[#f8fafd] border border-[#83daf2]/10 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group shadow-sm">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#f1d577]/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#83daf2]/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
          
          <div className="md:w-1/3 flex justify-center relative z-10">
            <div className="w-40 h-40 bg-white rounded-full shadow-[0_15px_30px_rgba(0,16,91,0.05)] flex items-center justify-center border border-slate-100 p-6 group-hover:scale-105 transition-transform duration-500">
               <img src="/other-info/acdc.png" alt="ACDC Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          
          <div className="md:w-2/3 relative z-10 text-center md:text-left">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#83daf2] mb-2 block">Tổ chức khuyết tật nổi bật</span>
            <h3 className="text-2xl md:text-3xl font-headline font-bold text-[#00105b] mb-3">
              Trung tâm Hành động vì sự Phát triển Cộng đồng (ACDC)
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto md:mx-0 font-sans text-sm md:text-base">
              Tổ chức đi đầu trong việc thúc đẩy môi trường không rào cản, cải thiện chất lượng sống và bảo vệ quyền lợi chính đáng cho cộng đồng người khuyết tật tại Việt Nam.
            </p>
            <Link href="https://acdc.vn" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-[#00105b] font-bold rounded-full hover:border-[#83daf2] hover:text-[#83daf2] hover:shadow-[0_8px_20px_rgba(131,218,242,0.1)] hover:-translate-y-0.5 transition-all duration-300 text-sm">
              Tìm hiểu thêm <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Employers Supporting Deaf People */}
      <section className="py-12 px-6 max-w-7xl mx-auto w-full border-t border-slate-100 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-headline font-bold text-[#00105b]">Doanh nghiệp đồng hành</h2>
          <p className="text-slate-600 mt-2 font-sans md:text-lg">Các thương hiệu lớn tạo môi trường làm việc hòa nhập trọn vẹn cho Người Điếc.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
           {/* Starbucks */}
           <div className="w-48 bg-white border border-slate-100 rounded-[1.5rem] h-32 flex items-center justify-center p-6 hover:shadow-[0_15px_35px_rgba(0,16,91,0.06)] hover:border-[#00704A]/30 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <img src="/other-info/sb.png" alt="Starbucks" className="h-20 w-auto object-contain group-hover:scale-105 transition-all duration-500" />
           </div>

           {/* Tokyo Life */}
           <div className="w-48 bg-white border border-slate-100 rounded-[1.5rem] h-32 flex items-center justify-center p-6 hover:shadow-[0_15px_35px_rgba(0,16,91,0.06)] hover:border-[#E60012]/30 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <img src="/other-info/tokyo-life.png" alt="Tokyo Life" className="h-16 w-auto object-contain group-hover:scale-105 transition-all duration-500" />
           </div>
        </div>
      </section>
    </>
  );
}
