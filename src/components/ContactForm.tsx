"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    service_type: "Nhà trường", // Changed defaults to match the radio buttons
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const { error } = await supabase.from("contacts").insert([formData]);

      if (error) {
        console.error("Supabase insert error:", error);
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccessModal = () => {
    setStatus("idle");
    setFormData({
      name: "",
      email: "",
      organization: "",
      service_type: "Nhà trường",
      message: "",
    });
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {status === "error" && (
          <div className="p-4 bg-red-50 text-red-600 rounded-2xl font-medium flex items-start gap-3 border border-red-100 animate-in fade-in slide-in-from-top-2">
            <span className="material-symbols-outlined mt-0.5">error</span>
            <div>
              <strong className="block mb-1">Gửi không thành công</strong>
              <p className="text-sm">Có lỗi xảy ra kết nối hệ thống. Vui lòng thử lại sau.</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-bold text-[#00105b] ml-1">
              Họ và tên *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ví dụ: Nguyễn Văn A"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#83daf2] focus:ring-4 focus:ring-[#83daf2]/20 text-[#00105b] placeholder:text-slate-400 transition-all outline-none"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-bold text-[#00105b] ml-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@company.com"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#83daf2] focus:ring-4 focus:ring-[#83daf2]/20 text-[#00105b] placeholder:text-slate-400 transition-all outline-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="organization" className="block text-sm font-bold text-[#00105b] ml-1">
            Tổ chức / Đơn vị
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            placeholder="Tên trường học, doanh nghiệp hoặc dự án"
            value={formData.organization}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#83daf2] focus:ring-4 focus:ring-[#83daf2]/20 text-[#00105b] placeholder:text-slate-400 transition-all outline-none"
          />
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-bold text-[#00105b] ml-1">
            Đối tượng
          </label>
          <div className="flex flex-wrap gap-4">
            {["Nhà trường", "Doanh nghiệp", "Cá nhân"].map((type) => (
              <label key={type} className="flex items-center gap-3 cursor-pointer group p-3 pr-5 rounded-xl border border-slate-200 hover:border-[#83daf2] transition-colors has-[:checked]:border-[#83daf2] has-[:checked]:bg-[#83daf2]/5">
                <div className="relative flex items-center justify-center shrink-0">
                  <input
                    type="radio"
                    name="service_type"
                    value={type}
                    checked={formData.service_type === type}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="peer appearance-none w-5 h-5 rounded-full border-2 border-slate-300 checked:border-[#83daf2] transition-all cursor-pointer m-0"
                  />
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-[#83daf2] scale-0 peer-checked:scale-100 transition-transform pointer-events-none"></div>
                </div>
                <span className="text-slate-700 font-medium group-hover:text-[#00105b] peer-checked:text-[#00105b] transition-colors">
                  {type}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-bold text-[#00105b] ml-1">
            Nội dung chi tiết
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Hãy mô tả rõ hơn về yêu cầu tư vấn, chúng tôi sẽ chuẩn bị trước giải pháp phù hợp nhất..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#83daf2] focus:ring-4 focus:ring-[#83daf2]/20 text-[#00105b] placeholder:text-slate-400 resize-none transition-all outline-none"
          ></textarea>
        </div>

        <div className="pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4.5 bg-[#f1d577] text-[#3D4DA3] rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#e7c760] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-wait hover:-translate-y-1 transform active:scale-95 group"
          >
             {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined animate-spin text-[22px]">progress_activity</span>
                Đang xử lý...
              </span>
            ) : (
               <span className="flex items-center gap-3">
                 Gửi yêu cầu tư vấn <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">send</span>
               </span>
            )}
          </button>
        </div>
      </form>

      {/* Success Modal Overlay */}
      {status === "success" && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
           {/* Backdrop */}
           <div 
             className="absolute inset-0 bg-[#00105b]/60 backdrop-blur-sm animate-in fade-in duration-300" 
             onClick={closeSuccessModal}
           ></div>
           
           {/* Modal Card */}
           <div className="relative bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_24px_50px_rgba(0,16,91,0.2)] w-full max-w-md text-center animate-in zoom-in-95 fade-in duration-300 border border-[#83daf2]/20">
              <div className="w-24 h-24 bg-[#83daf2]/10 text-[#83daf2] rounded-full flex items-center justify-center mx-auto mb-8 border border-[#83daf2]/20 shadow-inner">
                 <span className="material-symbols-outlined text-5xl">check_circle</span>
              </div>
              <h3 className="text-3xl font-headline font-bold text-[#00105b] mb-4">Gửi thành công!</h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Cảm ơn bạn đã liên hệ.<br/>Đội ngũ SignEdu đã nhận được yêu cầu và sẽ phản hồi cho bạn trong <strong className="text-[#83daf2]">24–48 giờ</strong> tới.
              </p>
              <button 
                onClick={closeSuccessModal}
                className="w-full py-4 bg-[#83daf2]/10 text-[#83daf2] border border-[#83daf2]/20 font-bold rounded-2xl hover:bg-[#83daf2] hover:text-white transition-colors duration-300 text-lg shadow-sm"
              >
                Đóng
              </button>
           </div>
        </div>
      )}
    </>
  );
}
