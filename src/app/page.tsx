import FaqAccordion from "@/components/FaqAccordion";

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
              src="https://lh3.googleusercontent.com/aida/ADBb0uj4TtsiMVyA-Upq_AB5bRUV5fhLfHpHMfcixxhOG6-UoPif3fHaIa8SDI6iFpUFk_1nabyCbsLRr75n1FYv6peqHB52BEDwoJXzWCu_-H9mG8zk1gB1pzSNqYhcEqlZfA6ZjQCMBDw0ywPEiR66hMfilAobi9YGhBWJMwclrnQBvrRnyNt05pn9hv4YorlDBBzCaH2zohT40VM-gvAUgwXgOGJLDUCQFKHOPOHQHJK11pjW1zEmfew1yP8NYt1lWqLeLIMIZMVIOg"
            />
          </div>
        </div>
        {/* Content Container overlapping the image */}
        <div className="max-w-7xl mx-auto w-full relative z-10 px-8">
          <div className="max-w-2xl py-20 flex flex-col justify-center space-y-8">
            <span className="text-tertiary font-bold tracking-widest uppercase text-sm">
              CHÀO MỪNG ĐẾN VỚI SIGNEDU
            </span>
            <h1 className="font-headline font-extrabold text-[52px] md:text-[60px] leading-[1.15] text-on-surface">
              Vì Một Việt Nam Hoà Nhập Không Rào Cản
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              SignEdu tiên phong kiến tạo hệ sinh thái giáo dục và giao tiếp số, giúp xóa bỏ khoảng cách giữa người Khiếm thính và cộng đồng thông qua công nghệ ngôn ngữ ký hiệu tiên tiến.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all active:scale-95 shadow-lg shadow-primary/20">
                Khám phá giải pháp
              </button>
              <button className="bg-surface-container-lowest/80 backdrop-blur-sm border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-on-primary transition-all active:scale-95">
                Hợp tác cùng SignEdu
              </button>
            </div>
          </div>
        </div>
        {/* Background Accents */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-tertiary-container/20 rounded-full blur-[60px] -z-10"></div>
      </section>

      {/* Story Section */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover"
                alt="emotional close-up of a person using sign language"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkRGxjLmH5W5eZhFZ4LSq6wpHDixejulT5KyhKzawfTcHLZKhr_N9j2nqhu7iBz_E2zTLFE08Q5NZlE95uFgsCan-BGAVJw_C7JMyWlrVkvozWuO1RzYylA70fAzVLgyY99KyXGSqHBqZAukiIhr_ZkeEVTPl7xmU1OdAtqIAGNd1hATxUijfWGqffye1mZ7AYK0o3UoFkTG69czEioHu3HCljKNB1jHYciu9fQ4WOd1mC481xBCyE4QnPun1LmG97TZZqIjnzqIo"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-tertiary-fixed p-8 rounded-2xl shadow-lg max-w-[240px]">
              <p className="font-bold text-on-tertiary-fixed text-2xl">100,000+</p>
              <p className="text-sm text-on-tertiary-fixed-variant">
                Người khiếm thính được hỗ trợ tiếp cận giáo dục mỗi năm.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="font-headline font-extrabold text-4xl text-on-surface">Câu chuyện của chúng tôi</h2>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
              <p>
                Tại Việt Nam, hàng triệu người Khiếm thính vẫn đang đối mặt với những rào cản vô hình trong học tập và công việc hàng ngày. Sự thiếu hụt các công cụ hỗ trợ ngôn ngữ ký hiệu khiến việc tiếp cận tri thức trở nên khó khăn.
              </p>
              <p>
                SignEdu ra đời với niềm tin rằng mỗi cá nhân đều có quyền được lắng nghe và thấu hiểu. Chúng tôi kết hợp trí tuệ nhân tạo và sự tâm huyết của các chuyên gia ngôn ngữ để xây dựng một thế giới nơi giao tiếp là không giới hạn.
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
      <section className="py-32 px-8 bg-[#fde181]/40 rounded-[3rem] mx-4 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline font-extrabold text-4xl text-on-surface">Tầm nhìn &amp; Sứ mệnh</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-medium">
              Kiến tạo tương lai công nghệ hỗ trợ vì cộng đồng bền vững.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Vision Text Block */}
            <div className="bg-surface-container-lowest/80 backdrop-blur-sm p-10 rounded-[2rem] space-y-4 border border-[#00105b]/5">
              <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-2xl">visibility</span>
              </div>
              <h3 className="font-headline font-bold text-2xl text-on-surface">Tầm nhìn</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Tầm nhìn của SignEdu là trở thành doanh nghiệp xã hội hàng đầu tại Việt Nam trong lĩnh vực cung cấp giải pháp hòa nhập cho người Điếc, đưa hòa nhập từ một giá trị xã hội trở thành năng lực phát triển của giáo dục, doanh nghiệp và cộng đồng.
              </p>
            </div>
            {/* Mission Text Block */}
            <div className="bg-surface-container-lowest/80 backdrop-blur-sm p-10 rounded-[2rem] space-y-4 border border-[#00105b]/5">
              <div className="w-12 h-12 bg-tertiary-container rounded-xl flex items-center justify-center text-tertiary mb-2">
                <span className="material-symbols-outlined text-2xl">flag</span>
              </div>
              <h3 className="font-headline font-bold text-2xl text-on-surface">Sứ mệnh</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Sứ mệnh của SignEdu là giải quyết khoảng trống về hòa nhập với người Điếc thông qua các giải pháp dành cho giáo dục, doanh nghiệp và cộng đồng. Chúng tôi đưa hòa nhập từ nhận thức thành hành động và giá trị bền vững.
              </p>
            </div>
          </div>
          <div className="relative aspect-video max-w-4xl mx-auto rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-2xl border-8 border-surface-container-lowest/30">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="diverse team collaborating"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVa5CJHTy9xhsOOrCl_Li8OaYDt9HjsbJdPQyThVUiMZs2UrD09zD23JfxW61EJVIjC9bN2XFqz7ridfmBYTyvQQWHZVF5Jg66DIlKLVufzAZARbu8hyiDoLV6Gg9GXvqutCfLHGl0iP7fYHb93MYpLTFWz3o5L8juONXUpeMh8-Z8lDx9C_qcTgNohchlCv7eVT5VLUPQqiFEE6101WHBcM7yhIP8G946kCOR_nk6RzPp6uAWgA2PXmwGqxB2ja8F6DKkp47N0mE"
            />
            <div className="absolute inset-0 bg-on-surface/30 flex items-center justify-center group-hover:bg-on-surface/20 transition-colors">
              <div className="w-20 h-20 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  play_arrow
                </span>
              </div>
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
