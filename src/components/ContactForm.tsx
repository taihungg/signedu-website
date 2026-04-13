"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    service_type: "school", // default value matches one of the radio buttons
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
        setFormData({
          name: "",
          email: "",
          organization: "",
          service_type: "school",
          message: "",
        });
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      {status === "success" && (
        <div className="p-4 bg-primary-container text-on-primary-container rounded-xl font-medium">
          Cảm ơn bạn! Lời nhắn của bạn đã được gửi thành công.
        </div>
      )}
      {status === "error" && (
        <div className="p-4 bg-error-container text-on-error-container rounded-xl font-medium">
          Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-semibold text-on-surface ml-1">
            Họ và tên
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nguyễn Văn A"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-5 py-4 rounded-xl bg-surface-container border-none focus:ring-2 focus:ring-primary/40 text-on-surface placeholder:text-outline"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-semibold text-on-surface ml-1">
            Email
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
            className="w-full px-5 py-4 rounded-xl bg-surface-container border-none focus:ring-2 focus:ring-primary/40 text-on-surface placeholder:text-outline"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="organization" className="block text-sm font-semibold text-on-surface ml-1">
          Tổ chức / Đơn vị (Tùy chọn)
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          placeholder="Tên công ty hoặc trường học"
          value={formData.organization}
          onChange={handleChange}
          disabled={isSubmitting}
          className="w-full px-5 py-4 rounded-xl bg-surface-container border-none focus:ring-2 focus:ring-primary/40 text-on-surface placeholder:text-outline"
        />
      </div>

      <div className="space-y-3">
        <label className="block text-sm font-semibold text-on-surface ml-1">
          Loại dịch vụ cần tư vấn
        </label>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input
                type="radio"
                name="service_type"
                value="school"
                checked={formData.service_type === "school"}
                onChange={handleChange}
                disabled={isSubmitting}
                className="peer appearance-none w-5 h-5 rounded-full border-2 border-outline-variant checked:border-primary transition-all"
              />
              <div className="absolute w-2.5 h-2.5 rounded-full bg-primary scale-0 peer-checked:scale-100 transition-transform"></div>
            </div>
            <span className="text-on-surface-variant group-hover:text-primary transition-colors">
              Trường học
            </span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input
                type="radio"
                name="service_type"
                value="business"
                checked={formData.service_type === "business"}
                onChange={handleChange}
                disabled={isSubmitting}
                className="peer appearance-none w-5 h-5 rounded-full border-2 border-outline-variant checked:border-primary transition-all"
              />
              <div className="absolute w-2.5 h-2.5 rounded-full bg-primary scale-0 peer-checked:scale-100 transition-transform"></div>
            </div>
            <span className="text-on-surface-variant group-hover:text-primary transition-colors">
              Doanh nghiệp
            </span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input
                type="radio"
                name="service_type"
                value="individual"
                checked={formData.service_type === "individual"}
                onChange={handleChange}
                disabled={isSubmitting}
                className="peer appearance-none w-5 h-5 rounded-full border-2 border-outline-variant checked:border-primary transition-all"
              />
              <div className="absolute w-2.5 h-2.5 rounded-full bg-primary scale-0 peer-checked:scale-100 transition-transform"></div>
            </div>
            <span className="text-on-surface-variant group-hover:text-primary transition-colors">
              Cá nhân
            </span>
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-semibold text-on-surface ml-1">
          Lời nhắn
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Hãy cho chúng tôi biết bạn đang quan tâm đến giải pháp nào..."
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
          className="w-full px-5 py-4 rounded-xl bg-surface-container border-none focus:ring-2 focus:ring-primary/40 text-on-surface placeholder:text-outline resize-none"
        ></textarea>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-10 py-5 bg-primary text-on-primary rounded-full font-bold flex items-center justify-center gap-3 hover:bg-surface-tint transition-all shadow-lg active:scale-95 group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>{isSubmitting ? "Đang gửi..." : "Gửi tin nhắn ngay"}</span>
          {!isSubmitting && (
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              send
            </span>
          )}
        </button>
        <p className="mt-4 text-xs text-on-surface-variant text-center md:text-left">
          Chúng tôi cam kết bảo mật thông tin của bạn theo{" "}
          <a href="#" className="underline font-medium">
            Chính sách quyền riêng tư
          </a>
          .
        </p>
      </div>
    </form>
  );
}
