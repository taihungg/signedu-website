import FaqAccordion from "@/components/FaqAccordion";
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
                    Tầm nhìn của SignEdu là trở thành doanh nghiệp xã hội hàng đầu tại Việt Nam trong lĩnh vực cung cấp giải pháp hòa nhập cho người Điếc, đưa hòa nhập từ một giá trị xã hội trở thành năng lực phát triển của giáo dục, doanh nghiệp và cộng đồng.
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
                    Sứ mệnh của SignEdu là giải quyết khoảng trống về hòa nhập với người Điếc thông qua các giải pháp dành cho giáo dục, doanh nghiệp và cộng đồng. Chúng tôi đưa hòa nhập từ nhận thức thành hành động và giá trị bền vững.
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

      {/* Highlight Activities */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="font-headline font-extrabold text-4xl">Hoạt động nổi bật</h2>
              <p className="text-on-surface-variant">Những dấu ấn SignEdu đã để lại trên hành trình kết nối.</p>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">
                Báo chí nói về chúng tôi
              </span>
              <div className="flex gap-6 opacity-60">
                <img
                  className="h-8 grayscale"
                  alt="news outlet logo"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCycZKDo2iy_gTijEtPcgNkboltipX3U1iRs1kzegKV84nNYV6_zMKQ_AI_SPV02jaMKBzntEszD2YszkrPXVxAFMBkOLBeoxW2bTrGbrSYVhlxKvTZqi30v3WFOksnaByBb928MlCz_xD1il_2U91WLpBLTuMNoCW0wg8af94m3oDMOUDuXaf8NsFVH6G0-75eQqy-9W4jidFT79qUBNmZUBEToHG4QlfU58Kv3Sqv9qcpavieOfFFxT5_C8zN72xs_ZOX8xtgcDk"
                />
                <img
                  className="h-8 grayscale"
                  alt="tech journal logo"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoptvRLVuaYFcHoSvJxUPPk6khyacRfOZEK-Ul67w2kwVE6gDubtvslPoaIo1VjzZjCc5BS2p9zSBbWDQWP15EkewSOue61VIIiRSOr-98O5g39CsctX9Z66f3GsKlIarH1CNMTKvw11JH62PF_0GQt61QCHTk4jcwLV-WjpKiAh7F9UA0R4eh_ui2Upmd7hH2ZafLEpTgp9V9TB_Q0qBv4M4OEzIo2Q8bcg6NYfZihhPJ0Q6oaHzH-JfQY6cOzPrsPh6ah3FVMBU"
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Activity Card 1 */}
            <div className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-outline-variant/10">
              <div className="h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="hands communicating"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkRGxjLmH5W5eZhFZ4LSq6wpHDixejulT5KyhKzawfTcHLZKhr_N9j2nqhu7iBz_E2zTLFE08Q5NZlE95uFgsCan-BGAVJw_C7JMyWlrVkvozWuO1RzYylA70fAzVLgyY99KyXGSqHBqZAukiIhr_ZkeEVTPl7xmU1OdAtqIAGNd1hATxUijfWGqffye1mZ7AYK0o3UoFkTG69czEioHu3HCljKNB1jHYciu9fQ4WOd1mC481xBCyE4QnPun1LmG97TZZqIjnzqIo"
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full">
                  GIÁO DỤC
                </div>
                <h4 className="font-headline font-bold text-xl">Dự án "Chữ ký yêu thương"</h4>
                <p className="text-on-surface-variant text-sm line-clamp-2">
                  Chuỗi workshop giảng dạy ngôn ngữ ký hiệu cơ bản cho hơn 500 sinh viên tại TP.HCM.
                </p>
              </div>
            </div>
            {/* Activity Card 2 */}
            <div className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-outline-variant/10">
              <div className="h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="tech professionals"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFWfU5gEfFHCQ9Zzi2UIwL-owDBzS0WRFqumQmlri_a52TBoyFS27617TVp7CMF2Bw6ry35_3CBHb1kAStn9zigyXmisLzSSDcw8J6hyyH8BXN5ETUSb5EkElOLn-qA7xKR9m7auYOJX6DAAqsNgcdctCqV-iD_b6EEXzFSLedmOnD8a9Vv36U5xxWWYGAGHmFdp7qxDjRTIbfeBEutLik5pSy3WPshRnW2i6i97pQNnBaKxe9QHzuc-8uTdzwGD-wG0iiXc_omFs"
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="inline-block px-3 py-1 bg-primary-container text-on-primary-container text-xs font-bold rounded-full">
                  CÔNG NGHỆ
                </div>
                <h4 className="font-headline font-bold text-xl">Ra mắt AI Sign-Translator 2.0</h4>
                <p className="text-on-surface-variant text-sm line-clamp-2">
                  Nâng cấp thuật toán nhận diện cử chỉ với độ chính xác lên đến 98% trong thời gian thực.
                </p>
              </div>
            </div>
            {/* Activity Card 3 */}
            <div className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-outline-variant/10">
              <div className="h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt="happy crowd event"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_sWKLHzKxUbUPtchwfHgCDcRz4wXJxaSTZyOueGXi3-Ixif98wEO9mM_qhuvbGGsfC895hgg7YdAK07diZI2uYwXyKV0_VsKRBZZ3Du7Oe9XLMurCrBPuujg5g2WM9Xns0COTbWCcjNsHZsWvCU5TVKpY1wp253zkIHjVI4JV3CQ73e187EOiZz4gxAqHmxvkj-pVuKDoG6kop-xzpKmuyzYijfjghwVD2QqaoNJgOGejQsVn7VIF44u31g6INvtvtYy_YVkU7dM"
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container text-xs font-bold rounded-full">
                  CỘNG ĐỒNG
                </div>
                <h4 className="font-headline font-bold text-xl">Ngày hội Hòa nhập Toàn quốc</h4>
                <p className="text-on-surface-variant text-sm line-clamp-2">
                  Sự kiện quy mô lớn kết nối doanh nghiệp và ứng viên khiếm thính tài năng.
                </p>
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
