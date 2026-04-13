export const metadata = {
  title: "Đối tác - SignEdu",
  description: "Mạng lưới đối tác của SignEdu",
};

export default function PartnersPage() {
  return (
    <>
      {/* Hero & Credibility Section */}
      <section className="relative pt-24 pb-32 overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-headline font-bold text-sm tracking-wide mb-6 uppercase">
                Hệ sinh thái đối tác
              </span>
              <h1 className="text-5xl md:text-6xl font-black font-headline text-on-background leading-[1.1] mb-8 tracking-tighter">
                Kiến tạo tác động <span className="text-[#3D4DA3]">bền vững</span> cho cộng đồng người Điếc.
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl mb-12">
                Chúng tôi tin rằng sự thay đổi lớn bắt đầu từ những cái bắt tay chiến lược. SignEdu đồng hành cùng các tổ chức để phá bỏ rào cản ngôn ngữ và mở rộng cơ hội tiếp cận giáo dục.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 rounded-xl bg-surface-container-low">
                  <div className="text-4xl font-black text-[#3D4DA3] mb-2 font-headline">50+</div>
                  <div className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">
                    Tổ chức giáo dục
                  </div>
                </div>
                <div className="p-6 rounded-xl bg-surface-container-low">
                  <div className="text-4xl font-black text-[#3D4DA3] mb-2 font-headline">15k+</div>
                  <div className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">
                    Học viên hỗ trợ
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2">
                <img
                  className="w-full h-[600px] object-cover"
                  alt="Modern bright corporate office meeting room with diverse team members shaking hands and smiling professionally in soft daylight"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKKbF8vj5a5zBhX3wdq3zB2gjVSgSdqd724BAnxS_B7K5S8j4QauOU9WxAxTUTvnu6FlsrkP0P5hTZziKHRrU5wUeTKfhibRgJTCurOLslkQjAgYnLMWAwPulSsqHrAoTSUXl0JIVhiGbS8rUr5RnEcy-CoAutNWfqzNMZGNRz2C2s3clbXsO-L-6HiNNJaKH9nWMd715F8Z-cc4qt3yK3DyRdrHeKwF291_dGFDjHsPefnAb1Rnu8RdEshllz6ApNJgeXFaYJkbM"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-tertiary-fixed p-8 rounded-2xl shadow-xl max-w-xs -rotate-2">
                <span className="material-symbols-outlined text-tertiary text-4xl mb-4">verified</span>
                <p className="text-tertiary-fixed-dim font-bold text-lg leading-snug">
                  Cam kết minh bạch và hiệu quả trong mọi dự án cộng đồng.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -z-0 opacity-10 pointer-events-none">
          <svg fill="none" height="600" viewBox="0 0 600 600" width="600">
            <circle cx="300" cy="300" fill="url(#paint0_linear)" r="300"></circle>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear" x1="0" x2="600" y1="0" y2="600">
                <stop stopColor="#00687b"></stop>
                <stop offset="1" stopColor="#83daf2"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Partner Logo Grid */}
      <section className="py-24 bg-surface-container-low w-full">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black font-headline text-on-background mb-4 tracking-tight">
              Đối tác chiến lược
            </h2>
            <p className="text-on-surface-variant">
              Hợp tác cùng các thương hiệu dẫn đầu trong lĩnh vực giáo dục và công nghệ.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-0.5 bg-outline-variant/10 rounded-3xl overflow-hidden border border-outline-variant/5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx) => (
              <div key={idx} className="bg-surface p-12 flex items-center justify-center grayscale hover:grayscale-0 hover:bg-surface-container-lowest transition-all duration-500 group">
                <img
                  className="max-h-12 w-auto opacity-60 group-hover:opacity-100 transition-opacity"
                  alt={`Partner logo ${idx + 1}`}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsiuSPrJ9JGvPaLjlml0gD5jM8ajfe-j4YHu1FZbtBkwpdr1pMWjZFiR6gKWEUSTZkfx1xGF2JuISpX42PSbRzWj4wM8imdGA7W4xtaF9APnjzylNpn9LN_vO98a1kUQnBXFUOA9slR3j1PKv7jA18B3Isj0QtWFLcWa7S4S4c3-kyVsUAEtQZFR8nmgZLs8dI7v_Oy9NjIi_fK3XFZ0yGuS_exlrLQmmhk83JGgxBp7ZA_8KFIsrVKNy4tIpck24o7Zc7qzJXJec"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 overflow-hidden bg-surface w-full">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-black font-headline text-on-background mb-8 leading-tight tracking-tight">
                Niềm tin từ<br />Những người đồng hành.
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Sự hài lòng và tác động thực tế của đối tác là thước đo thành công lớn nhất của SignEdu.
              </p>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container hover:text-primary transition-all">
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container hover:text-primary transition-all">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-8">
                {/* Testimonial Card 1 */}
                <div className="p-10 rounded-[2rem] bg-surface-container-lowest shadow-[0_12px_32px_rgba(0,16,91,0.04)] border border-outline-variant/10 relative">
                  <span className="material-symbols-outlined text-6xl text-secondary-container absolute top-6 right-8 opacity-40">
                    format_quote
                  </span>
                  <p className="text-xl font-medium italic text-on-background mb-8 leading-relaxed relative z-10">
                    "SignEdu không chỉ cung cấp giải pháp kỹ thuật, họ mang đến một trái tim thấu cảm. Việc tích hợp ngôn ngữ ký hiệu vào chương trình đào tạo của chúng tôi đã thay đổi hoàn toàn trải nghiệm của học viên người Điếc."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        alt="Portrait of a smiling professional"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7fmhNNuQdnHdoHzJxbqll4JD3hyONzj2Dj4r8h6BFYEigg4po_59DFUK7_W6yL5q_vmEhY8z7ITj_lXJwJarFIYxKliQX3pzPezngKVTDwG-2uhW8YjuCqyhv3o8X3nUTdfhVcJDle648iMDlgwOGPWdHgTjk1qVAxJV9sCo4SNaKLnXAjMz031xduArrDQorCE_U7j7Xy5yuar2Dt9iGLR-FMQqOmAMZXvig58pPNjL-xnEZABXH6WCL4sTDI0a4ZLTmrr7NRf4"
                      />
                    </div>
                    <div>
                      <div className="font-headline font-bold text-on-background text-lg">Nguyễn Minh Tuấn</div>
                      <div className="text-on-surface-variant text-sm">Giám đốc Đào tạo, EduTech Global</div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Card 2 */}
                <div className="p-10 rounded-[2rem] bg-surface-container-lowest shadow-[0_12px_32px_rgba(0,16,91,0.04)] border border-outline-variant/10">
                  <p className="text-xl font-medium italic text-on-background mb-8 leading-relaxed">
                    "Chúng tôi tìm thấy ở SignEdu một đối tác chuyên nghiệp, tận tâm và luôn hướng tới sự đổi mới. Những đóng góp của họ cho cộng đồng là vô cùng quý giá."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        alt="Confident professional woman"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcNR_XM2XCfAiTN3KNdI5obiD64e0WJ6RsNvZJ15JrjEzagEnPWputNw3UCtNVpnx19Wo3IL0b9YXQuNF4jNzC3KMRYiTrafP0jE_r4Fq4dGXo47Fdow7bj29JLPgoaZ6Wwqm0e9LERFjjY1OMIKN87QO2OdWZQ3UIvEH-oR_RdaZrq_4WpGWV5yDqXtrmYB98tFDZA7pSWVdI61J5yqEy2gnJR37MQuMUyWP7N9zts7l5Vo8mjUAq0IvZP8L4xdSpdSqNPtAD1f8"
                      />
                    </div>
                    <div>
                      <div className="font-headline font-bold text-on-background text-lg">Trần Thị Lan Anh</div>
                      <div className="text-on-surface-variant text-sm">Chủ tịch Quỹ Vì Cộng Đồng</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-7xl mx-auto px-8 w-full">
        <div className="rounded-[3rem] bg-[#3D4DA3] text-white p-12 md:p-20 relative overflow-hidden text-center">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black font-headline mb-8 leading-tight">
              Bạn đã sẵn sàng để cùng chúng tôi kiến tạo tương lai?
            </h2>
            <p className="text-white/80 text-lg mb-12">
              Dù bạn là doanh nghiệp, tổ chức phi lợi nhuận hay cơ sở giáo dục, chúng tôi luôn sẵn sàng lắng nghe những ý tưởng hợp tác mới.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/lien-he"
                className="bg-tertiary-fixed text-on-tertiary-fixed px-10 py-5 rounded-full font-headline font-extrabold text-lg flex items-center justify-center hover:bg-tertiary-fixed-dim transition-all active:scale-95 shadow-lg"
              >
                Đăng ký hợp tác ngay
              </a>
              <a
                href="/giai-phap"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center px-10 py-5 rounded-full font-headline font-bold text-lg hover:bg-white/20 transition-all active:scale-95"
              >
                Tìm hiểu thêm về giải pháp
              </a>
            </div>
          </div>
          {/* Abstract CTA Decoration */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-container rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary-container rounded-full opacity-10 blur-3xl"></div>
        </div>
      </section>
    </>
  );
}
