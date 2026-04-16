import FaqAccordion from "@/components/FaqAccordion";
import ImageGallery from "@/components/ImageGallery";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden bg-surface-container-lowest">
        {/* Background Image with broad fade */}
        <div className="absolute top-0 right-0 w-full md:w-[70%] h-full z-0 overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 15%, black 45%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 15%, black 45%)",
            }}
          >
            <img
              alt="SignEdu Hero Image"
              className="w-full h-full object-cover"
              src="/images/hero.jpg"
            />
          </div>
        </div>
        {/* Content Container overlapping the image */}
        <div className="max-w-7xl mx-auto w-full relative z-10 px-8">
          <div className="max-w-2xl py-20 flex flex-col justify-center space-y-8">
            <span className="text-tertiary font-bold tracking-widest uppercase text-sm">
              CHÀO MỪNG ĐẾN VỚI SIGNEDU
            </span>
            <h1 className="font-headline font-extrabold text-[50px] md:text-[40px] leading-[1.15] text-on-surface">
              VÌ MỘT VIỆT NAM <br />HOÀ NHẬP KHÔNG RÀO CẢN
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-[38rem] leading-relaxed text-justify">
              Với mong muốn đồng hành kiến tạo tác động xã hội thực chất thay vì những hoạt động truyền thông mang tính hình thức, SignEdu nỗ lực xóa bỏ mọi rào cản giao tiếp để xây dựng một cộng đồng thấu cảm bền vững.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/solutions"
                className="bg-primary border-2 border-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-surface-container-lowest/90 hover:text-primary hover:shadow-2xl hover:shadow-primary/35 active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
              >
                Khám phá giải pháp
              </Link>
              <Link
                href="/contacts"
                className="bg-surface-container-lowest/80 backdrop-blur-sm border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-primary hover:text-on-primary hover:shadow-2xl hover:shadow-primary/30 active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
              >
                Hợp tác cùng SignEdu
              </Link>
            </div>
          </div>
        </div>
        {/* Background Accents */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-tertiary-container/20 rounded-full blur-[60px] -z-10"></div>
      </section>

      {/* Story Section */}
      <section className="py-30 px-8 bg-surface">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-16 items-center">
          <div className="relative w-full">
            <div className="grid grid-cols-12 grid-rows-12 gap-3 sm:gap-4 h-[30rem] md:h-[34rem] lg:h-[38rem]">
              <div className="col-span-8 row-span-12 rounded-[1.75rem] overflow-hidden shadow-xl shadow-primary/10">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  alt="people communicating through sign language"
                  src="/images/8tt.jpg"
                />
              </div>
              <div className="col-span-4 row-span-6 rounded-[1.25rem] overflow-hidden shadow-lg shadow-primary/10">
                <img
                  className="w-full h-full object-cover object-[62%_center] transition-transform duration-700 hover:scale-105"
                  alt="close-up hands using sign language"
                  src="/images/8tt.jpg"
                />
              </div>
              <div className="col-span-4 row-span-6 rounded-[1.25rem] overflow-hidden shadow-lg shadow-primary/10">
                <img
                  className="w-full h-full object-cover object-[42%_center] transition-transform duration-700 hover:scale-105"
                  alt="community learning sign language"
                  src="/images/8tt.jpg"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-4 bg-tertiary-fixed p-7 rounded-2xl shadow-lg max-w-[220px]">
              <p className="font-bold text-on-tertiary-fixed text-2xl">100,000+</p>
              <p className="text-sm text-on-tertiary-fixed-variant">
                Người khiếm thính được hỗ trợ tiếp cận giáo dục mỗi năm.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="font-headline font-extrabold text-4xl text-on-surface">Về chúng tôi</h2>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed text-justify">
              <p>
                Mô hình SignEdu đi thẳng vào một khoảng trống còn bỏ ngỏ: năng lực hòa nhập với người Điếc trong giáo dục, dịch vụ và môi trường làm việc. Chúng tôi không nhìn người Điếc như đối tượng cần được hỗ trợ, mà là những cộng sự cùng thiết kế giải pháp, cùng tham gia kiến tạo nên những mô hình hòa nhập có tính ứng dụng thực tế. Với SignEdu, tác động xã hội không dừng ở những hoạt động nâng cao nhận thức đơn lẻ, mà được chuyển hóa thành hành động, thành năng lực vận hành và thành những thay đổi có thể đo lường trong nhà trường, tổ chức và cộng đồng; đó là sản phẩm cốt lõi, là giá trị tạo khác biệt và cũng là động lực tạo doanh thu bền vững. Đồng thời, chúng tôi theo đuổi một hướng đi rõ ràng: gắn giá trị xã hội với tính bền vững của mô hình, để hòa nhập không đứng ngoài phát triển, mà trở thành một phần của phát triển.
              </p>
              <p>
                Hành trình này không chỉ của riêng SignEdu, mà gắn liền với sự phát triển và hòa nhập của xã hội. Những chuyển động của xã hội, từ nhu cầu hòa nhập trong giáo dục, dịch vụ đến môi trường làm việc, cũng là nền tảng để chúng tôi định hình cách phát triển và theo đuổi những đóng góp dài hạn cho cộng đồng người Điếc. Bởi với chúng tôi, hòa nhập là phát triển.
              </p>
            </div>
            <div className="pt-4">
              <a className="inline-flex items-center gap-2 text-primary font-bold hover:underline" href="#">
                Tìm hiểu thêm về hành trình <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-[#fde181]/50 to-[#f1d577]/40 transition-colors duration-500">
        <div className="max-w-[76rem] mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          
          {/* Left: 16:9 Video Player */}
          <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#3D4DA3]/10 bg-[#00105b] order-2 lg:order-1">
            <video 
              autoPlay 
              muted 
              loop 
              controls
              controlsList="nodownload"
              playsInline
              className="w-full h-full object-cover opacity-90 transition-opacity hover:opacity-100 duration-500"
            >
              <source src="/videos/vision_mission.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Right: Content */}
          <div className="space-y-10 order-1 lg:order-2 px-2 lg:px-0">
            <h2 className="font-headline font-extrabold text-[42px] leading-tight text-[#00105b] max-w-[20ch]">
              Tầm nhìn & Sứ mệnh
            </h2>
            
            <div className="space-y-8">
              {/* Vision Item */}
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-[52px] h-[52px] bg-white rounded-2xl flex items-center justify-center text-[#83daf2] shadow-sm">
                  <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    visibility
                  </span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-xl text-[#00105b]">Tầm nhìn</h3>
                  <p className="text-on-surface-variant text-[15.5px] leading-relaxed mt-2 text-justify">
                    SignEdu đặt mục tiêu trở thành doanh nghiệp xã hội hàng đầu tại Việt Nam trong lĩnh vực cung cấp giải pháp hòa nhập cho người Điếc, đưa hòa nhập từ một giá trị xã hội trở thành năng lực phát triển của giáo dục, doanh nghiệp và cộng đồng.
                  </p>
                </div>
              </div>

              {/* Mission Item */}
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-[52px] h-[52px] bg-white rounded-2xl flex items-center justify-center text-[#83daf2] shadow-sm">
                  <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    rocket_launch
                  </span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-xl text-[#00105b]">Sứ mệnh</h3>
                  <p className="text-on-surface-variant text-[15.5px] leading-relaxed mt-2 text-justify">
                    SignEdu ra đời nhằm giải quyết khoảng trống về hòa nhập với người Điếc thông qua các giải pháp dành cho giáo dục, doanh nghiệp và cộng đồng. Chúng tôi đưa hòa nhập từ nhận thức thành hành động và giá trị bền vững.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-[#00105b]/15 rounded-full" />

            {/* Quote Block */}
            <div className="flex gap-4 items-start pl-1">
              <span className="material-symbols-outlined text-[#83daf2] text-2xl rotate-180 transform scale-y-[-1] mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                format_quote
              </span>
              <p className="font-headline font-bold text-[18px] text-[#00105b] italic leading-relaxed pt-1">
                "Nơi âm thanh được truyền tải qua ánh mắt và đôi bàn tay."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Activities & Impact Layer */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[78rem] mx-auto space-y-10 md:space-y-14 relative z-10">
          
          {/* Section Header */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="font-headline font-extrabold text-[36px] md:text-[44px] text-[#00105b] leading-tight">
              Dấu ấn từ những bước đầu tiên
            </h2>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
              Dù mới bắt đầu, SignEdu đã tạo ra những tác động tích cực và nhận được sự ghi nhận từ cộng đồng.
            </p>
          </div>

          {/* Activity Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
            
            {/* Card 1 - Workshop */}
            <div className="group bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(0,16,91,0.04)] hover:shadow-[0_24px_50px_rgba(0,16,91,0.08)] hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500 overflow-hidden flex flex-col border border-slate-100">
              <ImageGallery 
                images={[
                  "/images/ws1.JPG",
                  "/images/ws2.JPG",
                  "/images/ws3.JPG"
                ]}
                badge={
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#f1d577] text-[#3D4DA3] text-xs font-black uppercase tracking-wider rounded-xl shadow-lg border border-white/40">
                    <span className="material-symbols-outlined text-[16px]">newspaper</span>
                    Được báo chí đưa tin
                  </span>
                }
              />
              <div className="p-8 md:p-10 flex flex-col flex-grow space-y-8">
                <div className="space-y-4">
                  <h3 className="font-headline font-bold text-2xl text-[#00105b] group-hover:text-[#3D4DA3] transition-colors duration-300">Workshop về hòa nhập cho người Điếc</h3>
                  <p className="text-on-surface-variant line-clamp-2 leading-relaxed text-[15px]">
                    Sự kiện đầu tiên đánh dấu bước tiến trong việc nâng cao kỹ năng giao tiếp cơ bản và lan tỏa văn hóa hòa nhập.
                  </p>
                </div>
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#3D4DA3]/5 flex items-center justify-center text-[#3D4DA3]">
                      <span className="material-symbols-outlined text-[20px]">group</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#3D4DA3] text-[17px] leading-none">42</p>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant/70 mt-1.5">Tham gia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#3D4DA3]/5 flex items-center justify-center text-[#3D4DA3]">
                      <span className="material-symbols-outlined text-[20px]">touch_app</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#3D4DA3] text-[17px] leading-none">41K+</p>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant/70 mt-1.5">Tương tác</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#3D4DA3]/5 flex items-center justify-center text-[#3D4DA3]">
                      <span className="material-symbols-outlined text-[20px]">person_add</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#3D4DA3] text-[17px] leading-none">65%</p>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant/70 mt-1.5">Chưa theo dõi</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#3D4DA3]/5 flex items-center justify-center text-[#3D4DA3]">
                      <span className="material-symbols-outlined text-[20px]">handshake</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#3D4DA3] text-[17px] leading-none">1</p>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant/70 mt-1.5">Đối tác</p>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-center gap-3 bg-[#e8f6ed] p-3.5 rounded-xl border border-[#c4ead1] mt-2">
                    <div className="w-8 h-8 rounded-full bg-[#c4ead1] flex items-center justify-center text-[#1e6938]">
                      <span className="material-symbols-outlined text-[18px]">sentiment_very_satisfied</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#1e6938] text-sm leading-none">99% Phản hồi tích cực</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Card 2 - Talkshow */}
            <div className="group bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(0,16,91,0.04)] hover:shadow-[0_24px_50px_rgba(0,16,91,0.08)] hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500 overflow-hidden flex flex-col border border-slate-100">
              <ImageGallery 
                images={[
                  "/images/ts1.jpg",
                  "/images/ts2.jpg",
                  "/images/ts3.jpg"
                ]}
                badge={
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#e8f6ed] text-[#1e6938] text-xs font-black uppercase tracking-wider rounded-xl shadow-lg border border-white/40">
                    <span className="material-symbols-outlined text-[16px]">stars</span>
                    Phản hồi tích cực
                  </span>
                }
              />
              <div className="p-8 md:p-10 flex flex-col flex-grow space-y-8">
                <div className="space-y-4">
                  <h3 className="font-headline font-bold text-2xl text-[#00105b] group-hover:text-[#3D4DA3] transition-colors duration-300">Talkshow về giao tiếp không rào cản</h3>
                  <p className="text-on-surface-variant line-clamp-2 leading-relaxed text-[15px]">
                    Thảo luận chuyên sâu về các rào cản vô hình và giải pháp công nghệ kết nối hiện đại cùng các chuyên gia hàng đầu.
                  </p>
                </div>
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#3D4DA3]/5 flex items-center justify-center text-[#3D4DA3]">
                      <span className="material-symbols-outlined text-[20px]">group</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#3D4DA3] text-[17px] leading-none">63</p>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant/70 mt-1.5">Tham gia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#3D4DA3]/5 flex items-center justify-center text-[#3D4DA3]">
                      <span className="material-symbols-outlined text-[20px]">touch_app</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#3D4DA3] text-[17px] leading-none">54K+</p>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant/70 mt-1.5">Tương tác</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#3D4DA3]/5 flex items-center justify-center text-[#3D4DA3]">
                      <span className="material-symbols-outlined text-[20px]">person_add</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#3D4DA3] text-[17px] leading-none">74%</p>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant/70 mt-1.5">Chưa theo dõi</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#3D4DA3]/5 flex items-center justify-center text-[#3D4DA3]">
                      <span className="material-symbols-outlined text-[20px]">handshake</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#3D4DA3] text-[17px] leading-none">8</p>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant/70 mt-1.5">Đối tác</p>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-center gap-3 bg-[#e8f6ed] p-3.5 rounded-xl border border-[#c4ead1] mt-2">
                    <div className="w-8 h-8 rounded-full bg-[#c4ead1] flex items-center justify-center text-[#1e6938]">
                      <span className="material-symbols-outlined text-[18px]">sentiment_very_satisfied</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#1e6938] text-sm leading-none">99% Phản hồi tích cực</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Social Proof Layer: Testimonials & Media */}
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8">
            
            {/* Micro Social Proof Testimonial */}
            <div className="bg-[#f1d577]/15 rounded-[2rem] p-8 md:p-10 border border-[#f1d577]/40 flex flex-col justify-center relative overflow-hidden group">
              <span className="material-symbols-outlined absolute -top-4 -right-2 text-[#f1d577]/30 text-[180px] -rotate-12 select-none group-hover:scale-110 transition-transform duration-700">format_quote</span>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-[#3D4DA3] text-5xl mb-4 opacity-40">format_quote</span>
                <p className="font-headline italic text-[#00105b] text-xl leading-relaxed">
                  "Workshop giúp chúng tôi hiểu rõ hơn về cách giao tiếp và hòa nhập với người Điếc."
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full overflow-hidden shadow-sm border border-slate-200 p-2 flex items-center justify-center">
                     <span className="material-symbols-outlined text-slate-300">person</span>
                  </div>
                  <div>
                    <p className="font-bold text-[15px] text-[#3D4DA3]">Bạn Vũ Hồng Anh Thư</p>
                    <p className="text-xs text-on-surface-variant font-medium mt-0.5">Sinh viên Học viên Báo chí và Tuyên truyền</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Media Mention Banner */}
            <div className="bg-[#83daf2] rounded-[2rem] flex flex-col md:flex-row items-stretch text-white overflow-hidden relative shadow-2xl shadow-[#3D4DA3]/20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#83daf2]/30 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
              
              {/* Image filling the entire left side perfectly (1/4 width) */}
              <div className="relative w-full md:w-[30%] min-h-[240px] flex-shrink-0 overflow-hidden group">
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Thumbnail"
                  src="/images/ws4.PNG"
                />
              </div>
              
              {/* Padded Text Content Area (3/4 width) */}
              <div className="flex-grow flex flex-col justify-center p-8 md:p-10 lg:p-12 space-y-6 relative z-10 text-center md:text-left w-full md:w-[70%]">
                <p className="text-[17px] md:text-xl font-medium leading-relaxed italic text-white/95">
                  "SignEdu mang đến một cách tiếp cận đột phá, biến hòa nhập thành hành động thực tiễn cho doanh nghiệp và giáo dục."
                </p>
                <div className="pt-2">
                  <a href="https://baoquocte.vn/gop-phan-nang-cao-nhan-thuc-ve-ngon-ngu-ky-hieu-trong-moi-truong-giao-duc-334578.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#f1d577] text-[#3D4DA3] rounded-full font-black text-sm uppercase tracking-wider hover:bg-white transition-colors duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transform active:translate-y-0 w-fit">
                    Đọc bài viết <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-8 bg-surface-container-low">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline font-extrabold text-4xl">Giải đáp thắc mắc</h2>
            <p className="text-on-surface-variant">Mọi thông tin bạn cần để bắt đầu đồng hành cùng SignEdu.</p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center text-on-primary">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img
              className="w-full h-full object-cover"
              alt="abstract flowing blue gradient"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWgQSJGQAoTeYgFj_01M2EpxxfDB-yOR69wMwcSgJYS1n9CDZsRwbGquAwxq7ku5MBX9FUMbyrZkXWXGbsyyYtXBdPYu-Ym_74if5h9ruDy2JdskTOKlsgELcVFW6C_8LAQwcIAWqnnBMMHWH6aTcZtINiSloR_ZTYDO_kzF0kurPF51Gwoso6leUsjcYhq6VTxuXcrJ4c1JYrFThvreiL95SLOQHP0ZedhqFoTryGAgA8pSVKH3LlAN-pu64FWWCMfcilGi8UGJ4"
            />
          </div>
          <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl leading-tight">
              Mỗi hành động nhỏ, một thay đổi lớn lao.
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Hãy cùng chúng tôi kiến tạo một xã hội Việt Nam nơi âm thanh không còn là rào cản duy nhất của sự thấu hiểu.
            </p>
            <div className="pt-6">
              <button className="bg-[#fde181] text-on-tertiary-fixed px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform active:scale-95 shadow-2xl cursor-pointer">
                Liên hệ hợp tác ngay
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
