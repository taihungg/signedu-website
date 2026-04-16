"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "training",
    title: "Chương trình đào tạo và trải nghiệm",
    shortDesc: "Tổ chức các chương trình trải nghiệm Ngôn ngữ ký hiệu, giáo dục nhận thức và kỹ năng giao tiếp hoà nhập.",
    image: "/services/sv1.JPG",
    highlights: [
      "Trải nghiệm thực tế về Ngôn ngữ ký hiệu",
      "Thay đổi nhận thức và thái độ",
      "Thực hành kỹ năng giao tiếp hòa nhập"
    ],
    detailedContent: (
      <div className="space-y-8 font-body text-base md:text-lg">
        <div>
          <h4 className="font-bold text-[#00105b] text-xl mb-4 border-b border-slate-100 pb-2">Các dịch vụ bao gồm</h4>
          <ul className="space-y-5">
            <li className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-[#f1d577] shrink-0 mt-1">check_circle</span>
              <p className="text-slate-700 leading-relaxed"><strong className="text-[#83daf2] font-bold">Workshop trải nghiệm Ngôn ngữ ký hiệu và giao tiếp hòa nhập:</strong> Giúp người tham gia làm quen với Ngôn ngữ ký hiệu, hiểu hơn về người Điếc và văn hóa Điếc thông qua hoạt động tương tác, thực hành, giao lưu và chia sẻ thực tế.</p>
            </li>
            <li className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-[#f1d577] shrink-0 mt-1">check_circle</span>
              <p className="text-slate-700 leading-relaxed"><strong className="text-[#83daf2] font-bold">Chương trình giáo dục nhận thức về người Điếc và văn hóa Điếc:</strong> Cung cấp kiến thức nền tảng, góp phần thay đổi góc nhìn và xây dựng thái độ tôn trọng khác biệt trong học tập, công việc và đời sống.</p>
            </li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-[#83daf2]/10 to-[#f1d577]/10 p-6 md:p-8 rounded-2xl border-l-4 border-[#83daf2] shadow-inner">
          <h4 className="font-bold text-[#83daf2] flex items-center gap-2 mb-3 text-lg"><span className="material-symbols-outlined text-[#f1d577]">stars</span> Cam kết của SignEdu</h4>
          <p className="text-[#00105b]/80 italic leading-relaxed">
            SignEdu cam kết đồng hành cùng nhà trường, doanh nghiệp và cộng đồng trong việc xây dựng những giải pháp hòa nhập phù hợp, khả thi và có giá trị lâu dài. Chúng tôi không chỉ dừng ở nâng cao nhận thức, mà hướng tới tạo ra những thay đổi có thể áp dụng trong thực tế.
          </p>
        </div>
        <div className="pt-4 flex justify-center md:justify-start">
          <Link href="/contacts" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#f1d577] text-[#3D4DA3] rounded-full font-bold text-base tracking-wide hover:bg-[#e7c760] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 transform active:scale-95">
            Liên hệ hợp tác
          </Link>
        </div>
      </div>
    )
  },
  {
    id: "consulting",
    title: "Tư vấn và triển khai giải pháp hòa nhập",
    shortDesc: "Xây dựng và triển khai chiến dịch CSR/USR, tư vấn tạo dựng môi trường làm việc - học tập bao trùm.",
    image: "/images/ws2.JPG",
    highlights: [
      "Thiết kế chương trình CSR/USR",
      "Tư vấn môi trường bao trùm",
      "Đo lường báo cáo tác động"
    ],
    detailedContent: (
      <div className="space-y-8 font-body text-base md:text-lg">
        <p className="text-slate-700 leading-relaxed text-lg">SignEdu giúp đối tác chuyển hóa giá trị xã hội thành năng lực vận hành thực tế qua 3 hoạt động trọng tâm:</p>
        
        <div>
          <h4 className="font-bold text-[#83daf2] text-xl mb-4 border-b border-slate-100 pb-2">1. Thiết kế chương trình CSR và USR phù hợp</h4>
          <p className="text-slate-700 mb-4 font-medium italic">SignEdu đồng kiến tạo các chương trình dựa trên định hướng của đối tác:</p>
          <ul className="space-y-4">
            <li className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-[#f1d577] shrink-0 mt-1">corporate_fare</span>
              <p className="text-slate-700 leading-relaxed"><strong className="text-[#83daf2] font-bold block mb-1">Trách nhiệm xã hội của Doanh nghiệp (CSR/DEI):</strong> Xây dựng chiến dịch hòa nhập gắn liền với giá trị thương hiệu. Tập trung vào dự án sinh kế và tạo cơ hội thực chất cho người Điếc.</p>
            </li>
            <li className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-[#f1d577] shrink-0 mt-1">school</span>
              <p className="text-slate-700 leading-relaxed"><strong className="text-[#83daf2] font-bold block mb-1">Trách nhiệm xã hội của Trường học (USR):</strong> Lồng ghép trách nhiệm xã hội vào văn hóa học đường, tạo tiền đề định hướng nghề nghiệp hòa nhập cho học sinh, sinh viên.</p>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#83daf2] text-xl mb-4 border-b border-slate-100 pb-2">2. Tư vấn xây dựng môi trường hòa nhập</h4>
          <p className="text-slate-700 mb-4 font-medium italic">Chuẩn hóa quy trình để xóa bỏ rào cản giao tiếp:</p>
          <ul className="space-y-4">
            <li className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-[#f1d577] shrink-0 mt-1">diversity_3</span>
              <p className="text-slate-700 leading-relaxed"><strong className="text-[#83daf2] font-bold block mb-1">Môi trường làm việc:</strong> Tư vấn điều chỉnh quy trình tuyển dụng; đào tạo ngôn ngữ ký hiệu và văn hóa giao tiếp cho nhân sự nòng cốt; thiết lập công cụ hỗ trợ trực quan để tối ưu năng suất.</p>
            </li>
            <li className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-[#f1d577] shrink-0 mt-1">co_present</span>
              <p className="text-slate-700 leading-relaxed"><strong className="text-[#83daf2] font-bold block mb-1">Môi trường giáo dục:</strong> Thiết kế không gian tương tác mở, giúp học sinh nghe và học sinh Điếc kết nối bình đẳng, xóa bỏ sự cô lập.</p>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#83daf2] text-xl mb-4 border-b border-slate-100 pb-2">3. Đo lường và Báo cáo tác động</h4>
          <p className="text-slate-700 mb-4 font-medium italic">Đảm bảo tính minh bạch và hiệu quả bằng các chỉ số cụ thể:</p>
          <div className="grid md:grid-cols-2 gap-4">
             <div className="bg-slate-50 p-6 rounded-2xl border border-[#83daf2]/20">
                <span className="material-symbols-outlined text-[#f1d577] mb-2 text-3xl">bar_chart</span>
                <p className="text-slate-700 leading-relaxed"><strong className="text-[#83daf2] block mb-1">Định lượng:</strong> Thống kê số người tiếp cận, tỷ lệ thay đổi nhận thức và số lượng nhân sự được chuẩn hóa kỹ năng.</p>
             </div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-[#83daf2]/20">
                <span className="material-symbols-outlined text-[#f1d577] mb-2 text-3xl">groups_3</span>
                <p className="text-slate-700 leading-relaxed"><strong className="text-[#83daf2] block mb-1">Định tính:</strong> Đánh giá sự thay đổi văn hóa tổ chức và mức độ hài lòng của cộng đồng người Điếc.</p>
             </div>
          </div>
          <p className="text-slate-700 leading-relaxed mt-4 bg-gradient-to-r from-[#83daf2]/5 to-transparent p-4 rounded-xl border border-dashed border-[#83daf2]"><strong className="text-[#83daf2]">Đầu ra:</strong> Cung cấp báo cáo tác động chuyên nghiệp, báo cáo phát triển bền vững hàng năm của đối tác.</p>
        </div>

        <div className="bg-gradient-to-br from-[#83daf2]/10 to-[#f1d577]/10 p-6 md:p-8 rounded-2xl border-l-4 border-[#83daf2] shadow-inner">
          <h4 className="font-bold text-[#83daf2] flex items-center gap-2 mb-3 text-lg"><span className="material-symbols-outlined text-[#f1d577]">stars</span> Cam kết của SignEdu</h4>
          <p className="text-[#00105b]/80 italic leading-relaxed">
            SignEdu cam kết đồng hành cùng đối tác để kiến tạo hệ sinh thái hòa nhập bền vững. Chúng tôi đảm bảo mọi giải pháp tư vấn đều được thiết kế sát với đặc thù vận hành của đơn vị và được chứng minh bằng các chỉ số tác động định lượng. Chúng tôi không chỉ xây dựng môi trường, chúng tôi chuyển giao năng lực tự vận hành cho đối tác.
          </p>
        </div>
        <div className="pt-4 flex justify-center md:justify-start">
          <Link href="/contacts" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#f1d577] text-[#3D4DA3] rounded-full font-bold text-base tracking-wide hover:bg-[#e7c760] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 transform active:scale-95">
            Liên hệ hợp tác
          </Link>
        </div>
      </div>
    )
  },
  {
    id: "platform",
    title: "Nền tảng số",
    shortDesc: "Cung cấp trải nghiệm học Ngôn ngữ ký hiệu qua video ngắn kết hợp kết nối cộng đồng và dịch vụ.",
    image: "/images/ws3.JPG",
    highlights: [
      "Học Ngôn ngữ ký hiệu qua video ngắn",
      "Tiếp cận văn hóa Điếc thực tế",
      "Kết nối nhanh tới dịch vụ SignEdu"
    ],
    detailedContent: (
      <div className="space-y-6 font-body text-base md:text-lg">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#83daf2]/20 flex flex-col items-center text-center group hover:border-[#83daf2] hover:shadow-[0_10px_30px_rgba(131,218,242,0.15)] transition-all duration-300">
            <div className="w-16 h-16 bg-[#83daf2]/10 text-[#83daf2] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">smart_display</span>
            </div>
            <strong className="text-[#00105b] font-bold mb-3 block group-hover:text-[#83daf2] transition-colors">Học từ vựng qua video ngắn và câu chuyện thực tế</strong>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">Giúp người dùng tiếp cận từ vựng theo cách trực quan, dễ hiểu và dễ ghi nhớ trong ngữ cảnh cụ thể.</p>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#f1d577]/40 flex flex-col items-center text-center group hover:border-[#f1d577] hover:shadow-[0_10px_30px_rgba(241,213,119,0.2)] transition-all duration-300">
             <div className="w-16 h-16 bg-[#f1d577]/10 text-[#b3952f] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl text-[#f1d577]">public</span>
            </div>
            <strong className="text-[#00105b] font-bold mb-3 block group-hover:text-[#f1d577] transition-colors">Tiếp cận kiến thức về người Điếc và văn hóa Điếc</strong>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">Cung cấp những nội dung nền tảng để người học hiểu đúng hơn về cộng đồng người Điếc và cách kết nối phù hợp.</p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#83daf2]/20 flex flex-col items-center text-center group hover:border-[#83daf2] hover:shadow-[0_10px_30px_rgba(131,218,242,0.15)] transition-all duration-300">
             <div className="w-16 h-16 bg-[#83daf2]/10 text-[#83daf2] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">support_agent</span>
            </div>
            <strong className="text-[#00105b] font-bold mb-3 block group-hover:text-[#83daf2] transition-colors">Liên hệ và đăng ký dịch vụ với SignEdu</strong>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">Hỗ trợ người dùng kết nối nhanh với SignEdu để tìm hiểu thông tin, đăng ký workshop hoặc sử dụng dịch vụ.</p>
          </div>
        </div>
        <div className="pt-8 flex justify-center pb-2">
          <div className="relative group/btn">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#f1d577] via-[#fff3c7] to-[#e7c760] rounded-full blur-md opacity-75 group-hover/btn:opacity-100 animate-pulse transition duration-1000"></div>
            <a href="https://app.signedu.info" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden bg-gradient-to-r from-[#e7c760] to-[#f1d577] text-[#3D4DA3] px-10 py-4 rounded-full font-headline font-black text-lg tracking-wide shadow-[0_0_20px_rgba(241,213,119,0.5)] hover:shadow-[0_8px_30px_rgba(241,213,119,0.8)] hover:-translate-y-1 transition-all duration-500 active:translate-y-0 flex items-center gap-2 border-2 border-white/60 group-hover/btn:border-white">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out"></span>
              <span className="relative z-10 drop-shadow-[0_2px_2px_rgba(255,255,255,0.6)]">Trải nghiệm ngay</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
];

export default function ServicesContent() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const activeService = services.find(s => s.id === activeModal);

  return (
    <>
      <section className="py-24 md:py-32 w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center space-y-6 mb-20 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 bg-[#83daf2]/10 text-[#83daf2] rounded-full text-sm font-bold tracking-widest uppercase mb-2 border border-[#83daf2]/20">Dịch vụ cốt lõi</span>
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-[#00105b] leading-tight">
            Chuyển hóa giá trị xã hội thành năng lực vận hành
          </h2>
          <p className="text-lg text-slate-600 font-medium">Bằng chuyên môn và sự thấu cảm, SignEdu cung cấp hệ thống giải pháp toàn diện giúp xóa bỏ rào cản giao tiếp và kiến tạo văn hóa bao trùm.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-14">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(0,16,91,0.06)] hover:shadow-[0_24px_50px_rgba(0,16,91,0.1)] transition-all duration-500 border border-slate-100 hover:-translate-y-2 cursor-pointer h-full"
              onClick={() => setActiveModal(service.id)}
            >
              {/* Image Header */}
              <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
              </div>

              {/* Card Body */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold font-headline text-[#00105b] mb-4 group-hover:text-[#83daf2] transition-colors">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">{service.shortDesc}</p>
                
                {/* 3 Highlights */}
                <ul className="space-y-3 mb-10 pt-6 border-t border-slate-100">
                  {service.highlights.map((hlt, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <span className="material-symbols-outlined text-[#83daf2] text-[18px] shrink-0">task_alt</span>
                      {hlt}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="mt-auto w-full py-4 rounded-full bg-[#83daf2]/10 text-[#83daf2] font-bold text-sm tracking-widest uppercase hover:bg-[#83daf2] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_4px_12px_rgba(131,218,242,0.3)]">
                  Xem chi tiết <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal View */}
      {activeModal && activeService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" aria-modal="true">
           {/* Backdrop */}
           <div 
             className="absolute inset-0 bg-[#00105b]/60 backdrop-blur-sm animate-in fade-in duration-300"
             onClick={() => setActiveModal(null)}
           ></div>
           
           {/* Modal Content */}
           <div className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-in zoom-in-95 fade-in duration-300">
             
             {/* Sticky Header inside modal */}
             <div className="flex items-center justify-between p-6 md:p-8 border-b border-slate-100 shrink-0 bg-white z-10">
                <h2 className="text-2xl md:text-3xl font-headline font-bold text-[#00105b] pr-8">{activeService.title}</h2>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-red-50 hover:text-red-500 transition-colors shrink-0"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
             </div>

             {/* Scrollable Body */}
             <div className="overflow-y-auto p-6 md:p-10 custom-scrollbar">
                {activeService.detailedContent}
             </div>

           </div>
        </div>
      )}
    </>
  );
}
