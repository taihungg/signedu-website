export const metadata = {
  title: "Thông tin khác - SignEdu",
  description: "Tài nguyen, thông tin phụ huynh và hệ sinh thái cộng đồng của SignEdu",
};

export default function OtherInfoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-tertiary font-bold tracking-widest text-xs uppercase mb-4 block">
              KHO TÀI LIỆU & CỘNG ĐỒNG
            </span>
            <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-on-surface leading-[1.1] mb-6 tracking-tight">
              Kiến tạo thế giới <span className="text-primary italic">không rào cản</span>
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl mb-8">
              Khám phá nguồn tài nguyên giáo dục chuyên sâu, các sáng kiến cộng đồng và hệ sinh thái kết nối cộng đồng Người Điếc tại Việt Nam.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-tertiary-fixed text-on-tertiary-fixed px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all">
                Tìm hiểu ngay
              </button>
              <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-bold hover:bg-opacity-80 transition-all">
                Tải tài liệu (PDF)
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover"
                alt="Modern office setting with diverse people using sign language, soft natural morning light, inclusive and collaborative atmosphere"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALRgD3-s1MHnd7Q05D3K6P6uHvVQ2_bgGn0sm5XBEB8yWgytCdnx7lELP_IZMnS4QssRo-kpYpbPUoYX0wmNeU8zVF_JpvHHcGKGHijsTbvaGIFaPaW6o31YX1A78ug3TM7x35XxlTg-tN1yvzxcbds9IzZO7bQicCEhvHv4pJwCLl7PCBFmnN_cHHbTSE0vk9N1wTorjk7NSArRlEu5cM56yBJv7B1lWFb7kAn3PykSWkpjhhtBsKN-eHjnzwhZLNwCKISgoUFcY"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl shadow-xl max-w-[200px] border border-outline-variant/15">
              <p className="text-primary font-bold text-3xl mb-1">500+</p>
              <p className="text-on-surface-variant text-sm font-medium">Video học thuật miễn phí cho cộng đồng</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Community Initiatives */}
      <section className="bg-surface-container-low py-32 px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-4">Sáng kiến cộng đồng</h2>
              <p className="text-on-surface-variant text-lg">Những bước chân đầu tiên trong hành trình thay đổi nhận thức xã hội.</p>
            </div>
            <div className="hidden md:block">
              <button className="flex items-center gap-2 text-primary font-bold">
                Xem tất cả dự án <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_12px_32px_rgba(0,16,91,0.06)] transition-all duration-300 group">
              <div className="h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Close up of two hands communicating using sign language outdoors in a sunlit garden, focus on finger gestures"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd7dHF1G1fAyAhhsaauWUCIycMNorExr6ClIoN_HpQQBipSKMQEnKpJf8RyyFRFn47WL_YHBIZbUw8l97LdsT_oUCx9lJmax0ZIx6_trPfJ99OaiJ8seYPqx8sWmq1nemF0WecAylolUgEZCnQFteW_9Db8atBx2oIOJ5UkolB7XeYWcZ--k5R24lQkFjhcbzLvrdjyMRNYvEK7kimZ_ximHhRh2c7dGQz2YeN5Xg090u1SMYjkNK8U89i9uzh-T8CxQm2i2rPWFI"
                />
              </div>
              <div className="p-8">
                <span className="text-tertiary font-bold text-xs uppercase tracking-widest bg-tertiary-container/30 px-3 py-1 rounded-full">
                  Giáo dục
                </span>
                <h3 className="text-xl font-headline font-bold text-on-surface mt-4 mb-3">Lớp học ký hiệu miễn phí</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Chuỗi workshop trực tuyến và trực tiếp giúp xóa nhòa khoảng cách giao tiếp giữa người nghe và người Điếc.
                </p>
                <a className="text-primary font-bold text-sm inline-flex items-center gap-1 group/link" href="#">
                  Xem chi tiết <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">chevron_right</span>
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_12px_32px_rgba(0,16,91,0.06)] transition-all duration-300 group">
              <div className="h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Group of students working together on a collaborative project in a modern library space with laptops"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ6WlexyzOX_YsnFUMyXPSwxZysdF6gF-sIiUXOhUOt_grcWCH5S3OSthdzHVWAnX7gdU0ggZ_thksW2v2rOAF3ggC-q7daSLiIu7akeb1HZrzELogj3p7bKX0RUBIiPG1ZKmBw5SIx7K_yTU6SgFgcyqRvm2fJulcpOOIQqop0wJYtftg9t6b0sVfqpRA9xQLVhrVqZFNvz-xoo1fVrnjDoS3ClgujHAb2QQbimruhPu5kk7IC7Ud8POhCTs7pYhVxq9aiFouP9s"
                />
              </div>
              <div className="p-8">
                <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary-container/30 px-3 py-1 rounded-full">
                  Công nghệ
                </span>
                <h3 className="text-xl font-headline font-bold text-on-surface mt-4 mb-3">Ứng dụng Sign-Bridge</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Dự án phát triển AI nhận diện ngôn ngữ ký hiệu thời gian thực để hỗ trợ giao dịch ngân hàng và y tế.
                </p>
                <a className="text-primary font-bold text-sm inline-flex items-center gap-1 group/link" href="#">
                  Xem chi tiết <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">chevron_right</span>
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_12px_32px_rgba(0,16,91,0.06)] transition-all duration-300 group">
              <div className="h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Professional workshop setting with a presenter at a flip chart and an attentive audience"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJqVgBshdryMvCLj6BhgCrKbBFZldVemoC3LVtQgrTaehowQJoJp_4dcSngIQQyCrPvf9721p_IR48-E7YiLy6U07eLpgGKqvIvlMlCyG05-jKavQ2j2CbNywUvEX321KQ9kN9GNZYNRvw-rwa8q19NNeeG4Ll5JtILXzxbY_V5Z4CPWMynLGZjXU04vGCe9lGJ9WT9HsKyyqTJpsuuu0IWLF59ki9ZcVWVfJGPLHpYvjcb9iYKHSxZcs5KHgTHGMJdTVpa4q6tds"
                />
              </div>
              <div className="p-8">
                <span className="text-secondary font-bold text-xs uppercase tracking-widest bg-secondary-container px-3 py-1 rounded-full">
                  Nghề nghiệp
                </span>
                <h3 className="text-xl font-headline font-bold text-on-surface mt-4 mb-3">Hướng nghiệp & Kỹ năng</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Kết nối các doanh nghiệp với nhân lực người Điếc tài năng, cung cấp các khóa đào tạo kỹ năng mềm.
                </p>
                <a className="text-primary font-bold text-sm inline-flex items-center gap-1 group/link" href="#">
                  Xem chi tiết <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">chevron_right</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Deaf Resources (Bento Grid) */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-16 text-center">Tài nguyên hữu ích</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          <div className="md:col-span-2 md:row-span-2 bg-[#83daf2] rounded-3xl p-10 flex flex-col justify-between text-on-primary group cursor-pointer relative overflow-hidden">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-5xl mb-6">menu_book</span>
              <h3 className="text-3xl font-headline font-bold mb-4">Từ điển Ký hiệu học thuật</h3>
              <p className="text-primary-container text-lg max-w-md">
                Tra cứu hơn 2,000 thuật ngữ khoa học, kinh tế và công nghệ được chuyển ngữ sang ngôn ngữ ký hiệu Việt Nam.
              </p>
            </div>
            <button className="relative z-10 self-start mt-8 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white/30 transition-all">
              Truy cập ngay <span className="material-symbols-outlined">launch</span>
            </button>
            {/* Background Decoration */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl transition-transform group-hover:scale-125"></div>
          </div>
          <div className="md:col-span-2 bg-surface-container-high rounded-3xl p-8 flex items-center gap-8 border border-outline-variant/10">
            <div className="flex-1">
              <h4 className="text-xl font-headline font-bold text-on-surface mb-2">Cẩm nang cho Phụ huynh</h4>
              <p className="text-on-surface-variant text-sm mb-4">
                Hướng dẫn cách đồng hành cùng con em là người Điếc trong quá trình phát triển tự nhiên.
              </p>
              <a className="text-primary font-bold text-sm" href="#">
                Tải xuống PDF
              </a>
            </div>
            <span className="material-symbols-outlined text-[#83daf2] text-5xl opacity-30">family_restroom</span>
          </div>
          <div className="bg-tertiary-container/30 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
            <span className="material-symbols-outlined text-4xl text-tertiary mb-3">video_library</span>
            <h4 className="font-headline font-bold text-on-surface">Video bài giảng</h4>
            <p className="text-xs text-on-surface-variant mt-1">120+ khóa học</p>
          </div>
          <div className="bg-secondary-container rounded-3xl p-8 flex flex-col justify-center items-center text-center">
            <span className="material-symbols-outlined text-4xl text-on-secondary-container mb-3">campaign</span>
            <h4 className="font-headline font-bold text-on-surface">Tin tức & Sự kiện</h4>
            <p className="text-xs text-on-surface-variant mt-1">Cập nhật hàng tuần</p>
          </div>
        </div>
      </section>

      {/* Section 3: Social Impact Ecosystem */}
      <section className="bg-[#00105b] py-32 px-8 overflow-hidden w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <span className="text-secondary-fixed font-bold tracking-widest text-xs uppercase mb-4 block">
              HỆ SINH THÁI
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white mb-8 leading-tight">
              Mạng lưới Tác động Xã hội bền vững
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <span className="material-symbols-outlined text-primary-fixed">hub</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">Kết nối Đa phương</h4>
                  <p className="text-white/60 leading-relaxed">
                    Chúng tôi không làm việc đơn độc. SignEdu là cầu nối giữa Chính phủ, Doanh nghiệp và các Tổ chức phi chính phủ.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-tertiary/20 flex items-center justify-center shrink-0 border border-tertiary/30">
                  <span className="material-symbols-outlined text-tertiary-fixed">diversity_3</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">Cộng đồng là Trọng tâm</h4>
                  <p className="text-white/60 leading-relaxed">
                    Mọi quyết định và sản phẩm đều được lấy ý kiến từ chính những người Điếc để đảm bảo tính thực tiễn cao nhất.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            {/* Impact Map Visual */}
            <div className="relative w-full aspect-video bg-white/5 rounded-[2.5rem] p-10 border border-white/10 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-6 h-full">
                <div className="flex flex-col justify-center gap-8">
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/5 hover:bg-white/15 transition-all">
                    <p className="text-white/50 text-xs uppercase font-bold mb-1">Đối tác Doanh nghiệp</p>
                    <p className="text-white text-2xl font-headline font-bold">15+</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/5 hover:bg-white/15 transition-all">
                    <p className="text-white/50 text-xs uppercase font-bold mb-1">Trường đại học</p>
                    <p className="text-white text-2xl font-headline font-bold">08</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="w-48 h-48 rounded-full border-2 border-dashed border-primary/40 flex items-center justify-center animate-pulse">
                    <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-primary-fixed font-bold text-4xl">45k</p>
                        <p className="text-white/60 text-[10px] uppercase font-bold">Tương tác</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Light Leak */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-8 text-center max-w-4xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-on-surface mb-6">
          Bạn muốn cùng chúng tôi thay đổi tương lai?
        </h2>
        <p className="text-on-surface-variant text-lg mb-10">
          Bất kể bạn là một cá nhân, một tổ chức hay một doanh nghiệp, chúng tôi luôn trân trọng sự đồng hành của bạn.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
            Đăng ký làm Tình nguyện viên
          </button>
          <button className="bg-surface-container-high text-on-surface px-10 py-4 rounded-full font-bold hover:bg-surface-container-highest transition-all">
            Gửi yêu cầu hợp tác
          </button>
        </div>
      </section>
    </>
  );
}
