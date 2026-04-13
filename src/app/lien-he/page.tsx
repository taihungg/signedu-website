import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Liên hệ - SignEdu",
  description: "Trang liên hệ SignEdu",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-24 pb-12 px-8 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <span className="text-tertiary font-semibold tracking-wider text-sm uppercase mb-4 block">
            Kết nối cùng chúng tôi
          </span>
          <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-on-background tracking-tight mb-6">
            Mọi khoảng cách đều có thể <span className="text-primary italic">thu hẹp.</span>
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
            Chúng tôi luôn sẵn sàng lắng nghe các ý tưởng, phản hồi và cơ hội hợp tác để cùng nhau kiến tạo một cộng đồng không rào cản cho người Khiếm thính.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="pb-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Contact Form Sidebar/Info */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h3 className="font-bold text-on-background">Email hỗ trợ</h3>
                  <p className="text-on-surface-variant">hello@signedu.vn</p>
                  <p className="text-on-surface-variant">support@signedu.vn</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h3 className="font-bold text-on-background">Điện thoại</h3>
                  <p className="text-on-surface-variant">+84 (24) 3456 7890</p>
                  <p className="text-on-surface-variant">Thứ 2 - Thứ 6: 08:00 - 17:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 className="font-bold text-on-background">Văn phòng</h3>
                  <p className="text-on-surface-variant">Tầng 12, Tòa nhà Innovation</p>
                  <p className="text-on-surface-variant">Quận Cầu Giấy, Hà Nội, Việt Nam</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative w-full aspect-square rounded-[1.5rem] overflow-hidden shadow-sm bg-surface-container">
              <img
                className="w-full h-full object-cover grayscale opacity-60"
                alt="Modern minimalist 3D map illustration showing an urban district with soft blue and white building blocks"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7TMj23qQ4YOI5u-Xl8Nu9eX7AJ0bfEBy2NE8smDbB8s_rERhXyaLDF8cV280NCQ9RZKffWakph0TS781PoDDjmP1tTaZ6ek8SCri_uxOffbiyYjwM0kgYkFBx1eF6mH-SflAeOJkbml2SnVsqaSYYsuptX8-6-l36VPNzen9VQIO-u8j40gUcQkuUDSQSlDAUN2dxGBOCJfTVPigPchoST9m2QrUceBX8nIKB3iIYfXJzDwGCnd98YJFe0zfKbKbDmbIO5vm_J7M"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary text-on-primary p-4 rounded-full shadow-lg">
                  <span className="material-symbols-outlined">push_pin</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8 bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] shadow-[0_12px_32px_rgba(0,16,91,0.04)]">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ CTA Section */}
      <section className="bg-surface-container-low py-24 px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headline font-bold mb-6">Bạn có thắc mắc khác?</h2>
          <p className="text-on-surface-variant mb-10 text-lg">
            Tìm hiểu thêm các câu hỏi thường gặp về cách SignEdu vận hành và các gói giải pháp cho giáo dục.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
          >
            Xem trung tâm hỗ trợ <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </section>
    </>
  );
}
