"use client";

import { useLanguage } from "./LanguageContext";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const labels = {
  en: {
    name: "Name of contact person",
    phone: "Phone No.",
    email: "Email",
    issueType: "Type of Issue",
    issueDetail: "Issue Detail",
    addPhoto: "Add Photo",
    submit: "Submit",
    select: "Select...",
    mechanical: "Mechanical",
    electrical: "Electrical",
    software: "Software",
    required: "*",
  },
  th: {
    name: "ชื่อผู้ติดต่อ",
    phone: "เบอร์โทรศัพท์",
    email: "อีเมล",
    issueType: "ประเภทปัญหา",
    issueDetail: "รายละเอียดปัญหา",
    addPhoto: "เพิ่มรูปภาพ",
    submit: "ส่ง",
    select: "เลือก...",
    mechanical: "เครื่องกล",
    electrical: "ไฟฟ้า",
    software: "ซอฟต์แวร์",
    required: "*",
  },
};

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    issueType: "",
    detail: "",
  });
  const { lang } = useLanguage();

  const t = labels[lang];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      <main className="p-4 max-w-sm mx-auto">
        {/* Product Card */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
          <Image
            src="/images/coffee-maker.jpg"
            alt="Coffee Maker"
            width={400}
            height={300}
            className="w-full object-cover h-48"
          />
          <div className="p-4">
            <h1 className="font-semibold text-lg text-gray-900 mb-2">
              Valdus Trevor 40 Coffee Maker
            </h1>
            <div className="text-sm text-gray-600 space-y-1">
              <div className="flex justify-between">
                <span>Serial Number</span>
                <span>1108-000-6456</span>
              </div>
              <div className="flex justify-between">
                <span>Model</span>
                <span>Trevor C40</span>
              </div>
              <div className="flex justify-between">
                <span>Warranty Status</span>
                <span className="flex items-center text-green-600">
                  <span className="h-5 w-5 mr-1">✔️</span>
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t.name} <span className="text-red-500">{t.required}</span>
            </label>
            <input
              type="text"
              placeholder={t.name}
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t.phone} <span className="text-red-500">{t.required}</span>
            </label>
            <input
              type="tel"
              placeholder={t.phone}
              value={form.phone}
              onChange={(e) =>
                setForm((f) => ({ ...f, phone: e.target.value }))
              }
              className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t.email} <span className="text-red-500">{t.required}</span>
            </label>
            <input
              type="email"
              placeholder="yourname@email.com"
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
              className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:outline-none"
            />
          </div>

          {/* Issue Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t.issueType} <span className="text-red-500">{t.required}</span>
            </label>
            <div className="relative mt-1">
              <select
                value={form.issueType}
                onChange={(e) =>
                  setForm((f) => ({ ...f, issueType: e.target.value }))
                }
                className="block w-full appearance-none rounded-lg border-2 border-gray-300 bg-white p-3 pr-10 focus:outline-none"
              >
                <option value="">{t.select}</option>
                <option value="mechanical">{t.mechanical}</option>
                <option value="electrical">{t.electrical}</option>
                <option value="software">{t.software}</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400">
                ▼
              </span>
            </div>
          </div>

          {/* Issue Detail */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t.issueDetail}
            </label>
            <textarea
              rows={4}
              maxLength={1000}
              placeholder={t.issueDetail}
              value={form.detail}
              onChange={(e) =>
                setForm((f) => ({ ...f, detail: e.target.value }))
              }
              className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:outline-none"
            />
            <div className="text-xs text-gray-400 text-right mt-1">
              {form.detail.length}/1000
            </div>
          </div>

          {/* Add Photo */}
          <div>
            <div className="mt-1 flex h-32 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
              <div className="text-center">
                <span className="mx-auto h-6 w-6 text-gray-400">🖼️</span>
                <p className="mt-1 text-sm text-gray-600">{t.addPhoto}</p>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black py-4 rounded-lg text-center text-white"
          >
            {t.submit}
          </button>
        </form>
      </main>
      {/* Navigation Buttons */}
      <div className="py-8">
        <p className="text-sm text-center">
          Temporary nav buttons to see other pages I made
        </p>
        <div className="flex gap-2 mt-4">
          <Link
            href="/success"
            className="w-full text-center px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200 transition font-medium"
          >
            Success Page
          </Link>
          <Link
            href="/complete"
            className="w-full text-center px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200 transition font-medium"
          >
            Complete Page
          </Link>
        </div>
      </div>
      {/* End of natigation buttons */}
    </div>
  );
}
