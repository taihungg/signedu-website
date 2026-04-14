export const metadata = {
  title: "Giải pháp - SignEdu",
  description: "Giải pháp toàn diện của SignEdu",
};

export default function SolutionsPage() {
  return (
    <>
      {/* Intro Section */}
      <section className="relative overflow-hidden py-24 md:py-32 w-full">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
          <div className="md:col-span-7">
            <span className="inline-block text-tertiary font-semibold tracking-wider text-sm mb-6 uppercase">
              Giải pháp Toàn diện
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-background leading-[1.1] tracking-tight mb-8 font-headline">
              Phá bỏ rào cản,<br />
              <span className="text-primary italic">Kiến tạo tương lai.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mb-10">
              Tại SignEdu, chúng tôi không chỉ cung cấp công cụ, chúng tôi xây dựng cầu nối ngôn ngữ. Bằng cách kết hợp công nghệ AI tiên tiến và sự thấu cảm sâu sắc, chúng tôi mang đến những giải pháp thực tế để cộng đồng người Điếc và nghe kém tự tin tỏa sáng trong mọi khía cạnh cuộc sống.
            </p>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                alt="Inclusive education space"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpNvXAYnUyP00PGqwTRZnmMrcrRvLlAZ0scN8pHA9kbXiTASzuc3b4rxwLbFOiUADB818poQuBr7HukBLtWBcaJDmHOzNkFmy06bN5j_ELo3Mr8b8eOHOnBDOJzNc0O2QuLwiwciNQAWvvLf9E83Q5yFnX3RJUG_jqPflzgd4LRDdfnLfsCEUBr3x41WVwOQRORUODKEg2UD6nqu0zFugGpxE9zst9OOtPGeybve1CBnpp4gE_33jrZSxTATSpWx_IeAEUpfKQHZ4"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-tertiary-fixed p-8 rounded-3xl shadow-xl hidden lg:block max-w-[240px]">
              <p className="text-on-tertiary-fixed font-bold leading-tight">
                Môi trường 100% tiếp cận bằng ngôn ngữ ký hiệu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Grid Section */}
      <section className="bg-surface-container-low py-32 rounded-t-[4rem] w-full">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-on-background mb-4 font-headline">Hệ sinh thái SignEdu</h2>
            <div className="h-1.5 w-24 bg-primary-container mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: School */}
            <div className="group bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col h-full hover:-translate-y-4 transition-all duration-500 hover:shadow-[0_12px_32px_rgba(0,16,91,0.06)]">
              <div className="w-16 h-16 bg-primary-container/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-container transition-colors duration-300">
                <span className="material-symbols-outlined text-primary text-4xl">school</span>
              </div>
              <h3 className="text-2xl font-bold text-on-background mb-4 font-headline">Trường học</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8 flex-grow">
                Chương trình giáo dục tích hợp ngôn ngữ ký hiệu, giúp học sinh tiếp cận kiến thức công bằng và hứng khởi qua các nền tảng học tập tương tác.
              </p>
              <a className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all" href="#truong-hoc-detail">
                <span>Xem chi tiết</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>

            {/* Card 2: Enterprise */}
            <div className="group bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col h-full hover:-translate-y-4 transition-all duration-500 hover:shadow-[0_12px_32px_rgba(0,16,91,0.06)]">
              <div className="w-16 h-16 bg-secondary-container/30 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary-container transition-colors duration-300">
                <span className="material-symbols-outlined text-secondary text-4xl">corporate_fare</span>
              </div>
              <h3 className="text-2xl font-bold text-on-background mb-4 font-headline">Doanh nghiệp</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8 flex-grow">
                Giải pháp tuyển dụng và đào tạo nhân sự người Điếc, cùng các dịch vụ chuyển đổi môi trường làm việc bao trùm cho doanh nghiệp hiện đại.
              </p>
              <a className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all" href="#doanh-nghiep-detail">
                <span>Xem chi tiết</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>

            {/* Card 3: Individual */}
            <div className="group bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col h-full hover:-translate-y-4 transition-all duration-500 hover:shadow-[0_12px_32px_rgba(0,16,91,0.06)]">
              <div className="w-16 h-16 bg-tertiary-container/30 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-tertiary-container transition-colors duration-300">
                <span className="material-symbols-outlined text-tertiary text-4xl">person_celebrate</span>
              </div>
              <h3 className="text-2xl font-bold text-on-background mb-4 font-headline">Cá nhân</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8 flex-grow">
                Các khóa học kỹ năng, ứng dụng dịch thuật thời gian thực và cộng đồng kết nối dành riêng cho cá nhân khao khát phát triển bản thân.
              </p>
              <a className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all" href="#ca-nhan-detail">
                <span>Xem chi tiết</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <div className="space-y-32 py-32 w-full">
        {/* School Details */}
        <section className="max-w-7xl mx-auto px-8 scroll-mt-32" id="truong-hoc-detail">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">school</span>
                </div>
                <h2 className="text-3xl font-bold text-on-background uppercase tracking-tight font-headline">Giải pháp Trường học</h2>
              </div>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                Chúng tôi kiến tạo môi trường giáo dục không rào cản, nơi mọi học sinh Điếc đều có cơ hội phát huy tối đa tiềm năng thông qua ngôn ngữ mẹ đẻ của mình. Bằng cách số hóa nội dung và cung cấp công cụ hỗ trợ giáo viên, SignEdu đang thay đổi cách thế giới dạy và học.
              </p>
              <div className="space-y-4 mb-8">
                <h4 className="font-bold text-primary text-lg">Các giải pháp cụ thể:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary shrink-0">check_circle</span>
                    <span className="text-on-surface-variant">Số hóa học liệu sang Ngôn ngữ ký hiệu (NNKH)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary shrink-0">check_circle</span>
                    <span className="text-on-surface-variant">Nền tảng học trực tuyến tương tác</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary shrink-0">check_circle</span>
                    <span className="text-on-surface-variant">Tập huấn NNKH cho đội ngũ giáo viên</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary shrink-0">check_circle</span>
                    <span className="text-on-surface-variant">Xây dựng thư viện video bài giảng đa phương thức</span>
                  </li>
                </ul>
              </div>
              <div className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary">
                <p className="text-on-surface font-medium italic">
                  "Cam kết: Mang đến sự công bằng trong tiếp cận kiến thức, giúp 100% học sinh Điếc tự tin nắm vững chương trình học phổ thông."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                alt="Classroom for deaf students"
                className="w-full h-[400px] object-cover rounded-3xl deaf-friendly-shadow"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD75Gj7Ph-BkgKE3RYpSKlZErh-9Xx1WSc2CbBHR_6gaDnbCRt1OiBWisPKSx94C19LlGYfSOmGmBYCizzBx2RuLbVceD_pqCaXcm8-ztAOIM_iWFHtg7kZbuwpxd_x4Vh55YNC5DrXPEEpiu46Kh4SWticjODeAEoRzXSi5L3ulHZ3OD_1djOefSsswkv4aCFKPuCKoZirf_cf16OgBJq67TbV77zbgJQjLsOchJBdSSx5WJypWHjuA5Bg3Q6W15oVcUwYCdTqHI0"
              />
            </div>
          </div>
        </section>

        {/* Enterprise Details */}
        <section className="bg-surface-container/30 py-32" id="doanh-nghiep-detail">
          <div className="max-w-7xl mx-auto px-8 scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  alt="Inclusive corporate meeting"
                  className="w-full h-[400px] object-cover rounded-3xl deaf-friendly-shadow"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoXnPzGA5YB4RJWm7NRZoo9a6b396giGozmQsyJaS7DdB54jvi-NZhu6L9wDBwQkW1hIJEchlGl2wXKgpg85-MG_G4MH2Eh558wpwWRO9Eq8mynoctiykDciLPlFoG9Evs5FLgnbdxhSbql4mqM5bE8Uu6jVrVYX-UieGrcckU2NrvfQqaPdMduyjaKtvQDEl4dpP1MFsMAbiX3wuMyADX4jeLFOkWa9geHHxax-k93bN9zrTJFNzF_mokI1a93PfICyfVEeU7QPk"
                />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">corporate_fare</span>
                  </div>
                  <h2 className="text-3xl font-bold text-on-background uppercase tracking-tight font-headline">Giải pháp Doanh nghiệp</h2>
                </div>
                <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                  SignEdu đồng hành cùng doanh nghiệp xây dựng văn hóa làm việc đa dạng và bao trùm (D&I). Chúng tôi cung cấp quy trình tuyển dụng chuẩn hóa và các công cụ hỗ trợ giao tiếp hàng ngày, giúp nhân sự người Điếc hòa nhập nhanh chóng và đóng góp hiệu quả.
                </p>
                <div className="space-y-4 mb-8">
                  <h4 className="font-bold text-secondary text-lg">Các giải pháp cụ thể:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                      <span className="text-on-surface-variant">Tư vấn quy trình tuyển dụng bao trùm</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                      <span className="text-on-surface-variant">Đào tạo văn hóa giao tiếp với người Điếc</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                      <span className="text-on-surface-variant">Giải pháp dịch thuật ký hiệu qua video (VRS)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                      <span className="text-on-surface-variant">Hỗ trợ kỹ thuật tại nơi làm việc</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary/5 p-6 rounded-2xl border-l-4 border-secondary">
                  <p className="italic text-on-surface font-medium">
                    "Cam kết: Tối ưu hóa năng suất lao động của người Điếc và kiến tạo môi trường làm việc không khoảng cách cho mọi nhân viên."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Individual Details */}
        <section className="max-w-7xl mx-auto px-8 scroll-mt-32" id="ca-nhan-detail">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-tertiary-container rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary">person_celebrate</span>
                </div>
                <h2 className="text-3xl font-bold text-on-background uppercase tracking-tight font-headline">Giải pháp Cá nhân</h2>
              </div>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                Tự do ngôn ngữ là tự do phát triển. Chúng tôi cung cấp các khóa học kỹ năng mềm, ngoại ngữ và công nghệ được thiết kế dành riêng cho người dùng NNKH. Với ứng dụng di động thông minh, người Điếc có thể chủ động trong mọi tình huống giao tiếp đời thường.
              </p>
              <div className="space-y-4 mb-8">
                <h4 className="font-bold text-tertiary text-lg">Các giải pháp cụ thể:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                    <span className="text-on-surface-variant">App dịch thuật AI thời gian thực</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                    <span className="text-on-surface-variant">Khóa học kỹ năng nghề nghiệp bằng NNKH</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                    <span className="text-on-surface-variant">Cộng đồng kết nối việc làm và chia sẻ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                    <span className="text-on-surface-variant">Dịch vụ phiên dịch ký hiệu theo yêu cầu</span>
                  </li>
                </ul>
              </div>
              <div className="bg-tertiary/5 p-6 rounded-2xl border-l-4 border-tertiary">
                <p className="italic text-on-surface font-medium">
                  "Cam kết: Đồng hành cùng từng cá nhân trong hành trình tự lập, tự tin và tự chủ cuộc sống."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                alt="Deaf individual using smart device"
                className="w-full h-[400px] object-cover rounded-3xl deaf-friendly-shadow"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqd78EpaT6m1lxFjRB-xIoxmHbUpbdUkfrL1gwKm70zWwkimTaBL945CGhT--zaXcwFJKUSPclY0thJGGOZvjZH-ymYBnohBk9j-6Q9MFfGY_nAXCKylzdqwCDEddiOViPQl8I74v7dO1JG6SK6zzMDgi7IbI4AIhwuqm0nZ-6OUXP4vjiA2r0YEOaY9x35XUx_c4rjgiW6jm4ZAsesA3nmtl_UCqDBjQdKzQlC86pOsMmuMIdTvQUEHz-DJrLHRBKN9V_PZQFAjQ"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Final Call to Action Section */}
      <section className="py-32 px-8 w-full">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Abstract visual element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#3D4DA3]/30 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-on-primary mb-6 relative z-10 font-headline">
            Sẵn sàng để bắt đầu hành trình bao trùm?
          </h2>
          <p className="text-primary-fixed-dim text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Hãy để SignEdu đồng hành cùng bạn trong việc xây dựng một môi trường không khoảng cách. Đội ngũ tư vấn của chúng tôi luôn sẵn sàng hỗ trợ.
          </p>
          <div className="relative z-10">
            <a
              href="/lien-he"
              className="inline-flex bg-tertiary-fixed text-on-tertiary-fixed hover:bg-tertiary-fixed-dim px-10 py-5 rounded-full font-bold text-lg active:scale-95 transition-all shadow-lg items-center gap-3 mx-auto"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                mail
              </span>
              Liên hệ với chúng tôi
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
