"use client";

import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

const faqs: FaqItemProps[] = [
  {
    question: "Câu 1: SignEdu có phải tổ chức phi lợi nhuận không?",
    answer:
      "Không. SignEdu không phải là tổ chức phi lợi nhuận; SignEdu phát triển theo mô hình doanh nghiệp xã hội, vừa tạo tác động xã hội, vừa tạo doanh thu để duy trì và mở rộng giải pháp một cách bền vững.",
  },
  {
    question: "Câu 2: SignEdu hỗ trợ doanh nghiệp triển khai CSR/DEI như thế nào?",
    answer:
      "SignEdu hỗ trợ doanh nghiệp triển khai CSR/DEI bằng cách biến cam kết hòa nhập thành những thay đổi cụ thể trong con người, dịch vụ và quy trình. Cụ thể, chúng tôi giúp doanh nghiệp đào tạo đội ngũ hiểu đúng về người Điếc và cách giao tiếp phù hợp; rà soát các điểm chạm dịch vụ để tăng khả năng tiếp cận cho khách hàng người Điếc; đồng thời hỗ trợ xây dựng môi trường làm việc cởi mở hơn nếu doanh nghiệp muốn tuyển dụng hoặc làm việc với người Điếc. Nhờ đó, ESG/DEI không chỉ dừng ở thông điệp truyền thông, mà trở thành năng lực phục vụ, năng lực vận hành và tác động cụ thể có thể đo lường.",
  },
  {
    question: "Câu 3: Ai tham gia xây dựng nội dung và trực tiếp triển khai chương trình?",
    answer:
      "Nội dung của SignEdu được xây dựng với sự tham gia của cộng đồng người Điếc nhằm bảo đảm tính chính xác, phù hợp và tôn trọng bản sắc văn hóa Điếc. Trong quá trình triển khai, chúng tôi kết hợp cùng các cộng sự người Điếc và những người có chuyên môn liên quan để mang đến trải nghiệm học tập chân thực, gần gũi và có giá trị thực tiễn.",
  },
  {
    question: "Câu 4: Doanh nghiệp có thể yêu cầu thiết kế chương trình đào tạo riêng không?",
    answer:
      "Có. SignEdu sẵn sàng thiết kế chương trình đào tạo riêng cho từng doanh nghiệp dựa trên nhu cầu, đối tượng tham gia và mục tiêu triển khai cụ thể. Mỗi chương trình đều được điều chỉnh để phù hợp với bối cảnh vận hành thực tế, giúp doanh nghiệp nhận được giá trị thiết thực và tạo ra giá trị ứng dụng cao nhất.",
  },
  {
    question: "Câu 5: Sau workshop, học sinh và sinh viên có thể được hỗ trợ thực hành ngôn ngữ ký hiệu ra sao?",
    answer:
      "Có. Sau workshop, học sinh và sinh viên có thể tiếp tục luyện tập trên website của SignEdu thông qua việc đọc các câu chuyện về người Điếc và học từ vựng ngôn ngữ ký hiệu ngay trong ngữ cảnh. Cách tiếp cận này giúp người học không chỉ ghi nhớ từ vựng tốt hơn, mà còn hiểu thêm về cộng đồng người Điếc.",
  },
];

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4" id="faq-accordion">
      {faqs.map((faq, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={index}
            className={`bg-surface-container-lowest rounded-2xl border border-outline-variant/10 transition-all duration-300 overflow-hidden ${
              isActive ? "shadow-md border-[#83daf2]/50" : "shadow-sm hover:shadow"
            }`}
          >
            <button
              className="w-full p-6 text-left flex gap-4 justify-between items-center group focus:outline-none cursor-pointer"
              onClick={() => toggleFaq(index)}
              aria-expanded={isActive}
            >
              <span className={`font-bold text-lg md:text-xl transition-colors duration-300 ${isActive ? "text-[#3D4DA3]" : "text-[#00105b]"}`}>
                {faq.question}
              </span>
              <span 
                className={`material-symbols-outlined transition-transform duration-300 ${isActive ? "rotate-180 text-[#83daf2]" : "text-[#3D4DA3]/40"}`}
              >
                expand_more
              </span>
            </button>
            <div 
              className={`grid transition-all duration-300 ease-in-out ${
                isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 text-on-surface-variant leading-relaxed text-[15px] md:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
