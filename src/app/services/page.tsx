import ServicesContent from "./ServicesContent";

export const metadata = {
  title: "Dịch vụ - SignEdu",
  description: "Dịch vụ toàn diện của SignEdu",
};

export default function SolutionsPage() {
  return (
    <>
      {/* Intro Section */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20 w-full bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8 w-full text-center">
          <span className="inline-block text-[#83daf2] font-black tracking-widest text-sm mb-6 uppercase border border-[#83daf2]/30 px-6 py-2 rounded-full bg-[#83daf2]/10">
            Giải pháp chuyên sâu
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#00105b] leading-[1.1] tracking-tight mb-8 font-headline max-w-4xl mx-auto">
            Hòa nhập thực chất,<br />
            <span className="text-[#3D4DA3] italic">Phát triển bền vững.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#00105b]/70 leading-relaxed max-w-2xl mx-auto">
            Khám phá các chương trình giáo dục, tư vấn doanh nghiệp và nền tảng công nghệ giúp thu hẹp khoảng cách giao tiếp và kiến tạo cộng đồng thực sự bình đẳng.
          </p>
        </div>
      </section>

      {/* Main Services Module */}
      <ServicesContent />
      
    </>
  );
}
