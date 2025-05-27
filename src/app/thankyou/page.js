"use client";

import { useLanguage } from "../LanguageContext";
import Image from "next/image";

const labels = {
  en: {
    title: "Thank You",
    messageLine1: "We have received your feedback.",
    messageLine2: "Thank you for helping us improve our service.",
  },
  th: {
    title: "ขอบคุณ",
    messageLine1: "เราได้รับความคิดเห็นของคุณแล้ว",
    messageLine2: "ขอบคุณที่ช่วยให้เราพัฒนาการบริการให้ดียิ่งขึ้น",
  },
};

export default function ThankYouPage() {
  const { lang } = useLanguage();
  const t = labels[lang];

  return (
    <div className="bg-white flex flex-col justify-center items-center px-4 py-16 text-center font-sans">
      {/* Thank You Illustration */}
      <div className="mb-8">
        <Image
          src="/images/thankyou.jpg"
          alt="Thank You Illustration"
          width={200}
          height={200}
        />
      </div>

      {/* Thank You Message */}
      <h1 className="text-xl font-bold text-gray-800 mb-2">{t.title}</h1>
      <p className="text-gray-600 text-sm mb-2">{t.messageLine1}</p>
      <p className="text-gray-600 text-xs">{t.messageLine2}</p>
    </div>
  );
}
