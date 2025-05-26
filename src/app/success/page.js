"use client";

import { useLanguage } from "@/app/LanguageContext";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa";

const labels = {
  en: {
    success: "SUCCESS!",
    messageLine1: "We have received your request.",
    messageLine2: "Our staff will call you back shortly.",
    ticket: "Ticket ID",
  },
  th: {
    success: "สำเร็จ!",
    messageLine1: "เราได้รับคำขอของคุณแล้ว",
    messageLine2: "เจ้าหน้าที่จะติดต่อกลับโดยเร็วที่สุด",
    ticket: "รหัส Ticket",
  },
};

export default function SuccessPage() {
  const { lang } = useLanguage();
  const t = labels[lang];

  return (
    <div className="bg-white flex flex-col justify-center items-center px-4 py-16 text-center font-sans">
      {/* Success Icon Placeholder */}
      <div className="mb-6">
        <Image
          src="/images/success.png" // Replace this with your real success icon later
          alt="Success Icon"
          width={120}
          height={120}
        />
      </div>

      {/* Success Text */}
      <h1 className="text-xl font-bold text-gray-800 mb-2">{t.success}</h1>
      <p className="text-gray-600 text-sm">{t.messageLine1}</p>
      <p className="text-gray-600 text-sm mb-6">{t.messageLine2}</p>

      {/* Ticket ID */}
      <div className="text-base font-semibold text-gray-900 flex items-center gap-2">
        {t.ticket} : <span className="font-bold">1234567</span>
        <FaRegCopy className="text-blue-300" />
      </div>
    </div>
  );
}
