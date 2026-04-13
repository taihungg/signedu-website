import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f4f2ff] w-full rounded-t-[1.5rem] mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8 py-20 font-body text-sm leading-relaxed">
        <div className="space-y-6">
          <div className="text-xl font-bold text-[#00105b]">SignEdu</div>
          <p className="text-[#00105b]/70">
            Nền tảng công nghệ hỗ trợ người Khiếm thính hàng đầu tại Việt Nam.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-80">
              public
            </span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-80">
              mail
            </span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-80">
              call
            </span>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-[#00105b]">Về chúng tôi</h4>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="text-[#00105b]/70 hover:text-[#00687b] transition-colors">
                Câu chuyện thương hiệu
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#00105b]/70 hover:text-[#00687b] transition-colors">
                Đội ngũ sáng lập
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#00105b]/70 hover:text-[#00687b] transition-colors">
                Báo chí &amp; Truyền thông
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-[#00105b]">Hỗ trợ</h4>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="text-[#00105b]/70 hover:text-[#00687b] transition-colors">
                Trung tâm trợ giúp
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#00105b]/70 hover:text-[#00687b] transition-colors">
                Chính sách bảo mật
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#00105b]/70 hover:text-[#00687b] transition-colors">
                Điều khoản sử dụng
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-[#00105b]">Bản tin</h4>
          <p className="text-[#00105b]/70">
            Đăng ký để nhận thông tin mới nhất về các hoạt động cộng đồng.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email của bạn"
              className="bg-surface-container-highest border-none rounded-full px-4 py-2 w-full focus:ring-2 focus:ring-primary/40 text-on-surface"
            />
            <button className="bg-primary text-on-primary p-2 rounded-full flex items-center justify-center hover:opacity-90 transition-all">
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-on-surface/5 text-center text-[#00105b]/50">
        © 2024 SignEdu. All rights reserved. Tactile Clarity for the Deaf Community.
      </div>
    </footer>
  );
}
