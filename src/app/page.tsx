import FaqAccordion from "@/components/FaqAccordion";
import ImageGallery from "@/components/ImageGallery";
import YouTubeScrollPlayer from "@/components/YouTubeScrollPlayer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden bg-white">
        {/* Soft Decorative Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#83daf2]/10 to-[#5FA3AD]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#f1d577]/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content (Left) */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8">
            <span className="inline-block px-5 py-2 w-max bg-[#83daf2]/10 text-[#5FA3AD] border border-[#83daf2]/20 rounded-full text-sm font-bold tracking-widest uppercase">
              CHÀO MỪNG ĐẾN VỚI SIGNEDU
            </span>

            <h1 className="font-headline font-bold text-4xl sm:text-5xl lg:text-[56px] leading-[1.3] text-[#00105b]">
              VÌ MỘT VIỆT NAM <br className="hidden md:block" />
              <span className="text-[#83daf2]">HÒA NHẬP<br />KHÔNG RÀO CẢN</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-[38rem] leading-relaxed font-sans text-justify">
              Với mong muốn đồng hành kiến tạo tác động xã hội thực chất thay vì những hoạt động truyền thông mang tính hình thức, SignEdu nỗ lực xóa bỏ mọi rào cản giao tiếp để xây dựng một cộng đồng thấu cảm bền vững.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/services"
                className="bg-[#83daf2] text-[#00105b] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#6ccbeb] transition-all duration-300 shadow-sm hover:shadow-[0_10px_30px_rgba(131,218,242,0.3)] hover:-translate-y-1 transform active:scale-95 flex items-center gap-2"
              >
                Khám phá giải pháp <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link
                href="/contacts"
                className="bg-transparent border-2 border-[#00105b]/10 text-[#00105b] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:border-[#83daf2] hover:text-[#83daf2] hover:bg-[#83daf2]/5 active:scale-95 flex items-center"
              >
                Hợp tác cùng SignEdu
              </Link>
            </div>
          </div>

          {/* Image (Right) */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Decorative element behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#83daf2] to-[#f1d577] rounded-[2rem] transform translate-x-4 translate-y-4 opacity-20 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-500"></div>

            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,16,91,0.1)] group-hover:shadow-[0_30px_60px_rgba(0,16,91,0.15)] transition-all duration-500 group-hover:-translate-y-2">
              <img
                alt="SignEdu Inclusive Communication"
                className="w-full h-auto object-cover aspect-[4/3] transform group-hover:scale-105 transition-transform duration-700 ease-out"
                src="/images/herosection.jpg"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Left */}
          <div className="relative w-full rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,16,91,0.08)] group">
            <img
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Về SignEdu"
              src="/images/us.jpg"
            />
          </div>
          
          {/* Content Right */}
          <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="space-y-4">
              <span className="inline-block px-5 py-2 bg-[#83daf2]/10 text-[#83daf2] border border-[#83daf2]/20 rounded-full text-sm font-bold tracking-widest uppercase">
                Về SignEdu
              </span>
              <h2 className="font-headline font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#00105b] leading-[1.3] tracking-tight">
                Chúng tôi kiến tạo một xã hội hòa nhập từ những điều nhỏ nhất
              </h2>
            </div>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-sans">
              <p>
                SignEdu lấp đầy khoảng trống hòa nhập cho người Điếc trong giáo dục và doanh nghiệp. Chúng tôi không chỉ hỗ trợ, mà cùng người Điếc đồng kiến tạo giải pháp. Tại đây, nhận thức được chuyển hóa thành năng lực vận hành thực tế và những thay đổi đo lường được.
              </p>
              <p>
                Chúng tôi tin rằng giá trị xã hội và doanh thu bền vững luôn song hành, bởi với SignEdu: Hòa nhập chính là phát triển.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-[#fde181]/50 to-[#f1d577]/40 transition-colors duration-500">
        <div className="max-w-[76rem] mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">

          {/* Left: 16:9 Video Player */}
          <YouTubeScrollPlayer videoId="Nc7e7eM-EHU" />

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
            <div className="flex gap-4 items-start pl-1 md:w-[110%] lg:w-[115%]">
              <span className="material-symbols-outlined text-[#83daf2] text-2xl rotate-180 transform scale-y-[-1] mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                format_quote
              </span>
              <p className="font-headline font-bold text-[18px] text-[#00105b] italic leading-relaxed pt-1">
                "Nơi âm thanh được truyền tải qua ánh mắt và đôi tay."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Activities & Impact Layer */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[78rem] mx-auto space-y-10 md:space-y-14 relative z-10">

          {/* Section Header */}
          <div className="text-center space-y-6 max-w-5xl mx-auto">
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
                  "/images/ws_1.jpg",
                  "/images/ws_2.jpg",
                  "/images/ws_3.jpg"
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
                  "Workshop giúp em hiểu rõ hơn về cách giao tiếp và hòa nhập với người Điếc."
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full overflow-hidden shadow-sm border border-slate-200">
                    <img src="/images/vhat.jpg" alt="Vũ Hồng Anh Thư" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-[15px] text-[#3D4DA3]">Bạn Vũ Hồng Anh Thư</p>
                    <p className="text-xs text-on-surface-variant font-medium mt-0.5">Sinh viên Học viện Báo chí và Tuyên truyền</p>
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
                  src="/images/news.png"
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
            <h2 className="font-headline font-extrabold text-4xl">Câu hỏi thường gặp</h2>
            <p className="text-on-surface-variant">Mọi thông tin bạn cần để bắt đầu đồng hành cùng SignEdu.</p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* Full-width CTA Banner */}
      <section className="relative w-full py-28 md:py-28 flex flex-col items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#83daf2] to-[#5FA3AD] z-0 pointer-events-none"></div>
        {/* Subtle overlay decorative elements */}
        <div
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-10 animate-in fade-in zoom-in-95 duration-1000 fill-mode-both">
          <div className="space-y-6">
            <h2 className="font-headline font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-md">
              Cùng SignEdu xây dựng một Việt Nam hòa nhập
            </h2>
            <p className="text-lg md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto drop-shadow-sm font-medium">
              Hợp tác cùng chúng tôi để tạo ra những thay đổi<br />thực chất và bền vững cho cộng đồng người Điếc.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 lg:py-4 bg-[#f1d577] text-[#3D4DA3] rounded-full font-black text-base lg:text-lg tracking-wide hover:bg-[#1a2352] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 transform active:scale-95 w-full sm:w-auto"
            >
              Liên hệ hợp tác
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 lg:py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/80 rounded-full font-bold text-base lg:text-lg tracking-wide hover:bg-white hover:text-[#5FA3AD] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform active:scale-95 w-full sm:w-auto"
            >
              Tìm hiểu giải pháp
            </Link>
          </div>

          <div className="pt-10 flex flex-col items-center justify-center gap-3 text-white/80 text-sm md:text-base font-medium">
            <p className="flex items-center gap-2 bg-black/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
              <span className="material-symbols-outlined text-[18px] text-[#f1d577]">verified</span>
              Đồng hành cùng đối tác vì môi trường giáo dục & doanh nghiệp bền vững
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-2 opacity-90">
              <a href="mailto:partner@signedu.vn" className="flex items-center gap-2 hover:text-white transition-colors"><span className="material-symbols-outlined text-[18px]">mail</span> signedu2025@gmail.com</a>
              <a href="tel:+84936123456" className="flex items-center gap-2 hover:text-white transition-colors"><span className="material-symbols-outlined text-[18px]">call</span> (+84) 348 325 101</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
