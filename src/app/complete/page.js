"use client";

import { useLanguage } from "../LanguageContext";
import { useState } from "react";
import Image from "next/image";

const labels = {
  en: {
    title: (id) => <>Has request {id} been completed?</>,
    requestedBy: "Request Owner",
    complete: "Task Complete",
    issues: "No, There are issues",
    reviewTitle: "Your review matters",
    reviewPrompt: "How was the service?",
    rejectPrompt: "What did you dislike about the work?",
    done: "Done",
    commentPlaceholder: "Tell us more (Optional)",
  },
  th: {
    title: (id) => <>คำขอหมายเลข {id} เสร็จสิ้นหรือไม่?</>,
    requestedBy: "ผู้แจ้งปัญหา",
    complete: "งานเสร็จสิ้น",
    issues: "ยังมีปัญหา",
    reviewTitle: "รีวิวของคุณสำคัญ",
    reviewPrompt: "บริการเป็นอย่างไร?",
    rejectPrompt: "คุณไม่พอใจอะไร?",
    done: "เสร็จสิ้น",
    commentPlaceholder: "บอกเพิ่มเติม (ไม่บังคับ)",
  },
};

const ratingLabels = ["Bad", "Decent", "Satisfactory", "Good", "Excellent"];
const feedbackTags = ["Good Service", "Good Punctuality", "Good Hygienic"];

export default function ConfirmCompletion() {
  const { lang } = useLanguage();
  const t = labels[lang];
  const ticketId = "1234567";
  const contactName = "#Fill_contact person Name";
  const datetime = "18:15 22/12/21";

  const [selectedAction, setSelectedAction] = useState(null); // 'complete' | 'issue'
  const [rating, setRating] = useState(0); // 0 = no rating
  const [selectedTags, setSelectedTags] = useState([]);
  const [comment, setComment] = useState("");

  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmitReview = () => {
    const payload = {
      rating,
      tags: selectedTags,
      comment,
    };
    console.log("Review Submitted:", payload);
    // TODO: Send to backend
  };

  return (
    <div className="bg-white flex flex-col justify-center items-center pt-8 px-4 text-center font-sans">
      {/* Title */}
      <h1 className="text-lg font-semibold text-gray-900 mb-4">
        {t.title(<span className="text-blue-600">{ticketId}</span>)}
      </h1>

      {/* Requested By */}
      <div className="flex justify-between items-center text-xs mb-8 w-full max-w-xs mx-auto">
        <span className="font-semibold text-xs">{t.requestedBy}</span>
        <div className="text-right">
          <span className="text-gray-500">{contactName}</span>
          <span className="ml-2 text-gray-400">{datetime}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full max-w-xs space-y-3 mb-6">
        <button
          onClick={() => setSelectedAction("complete")}
          className={`w-full py-3 bg-black text-white text-sm font-medium rounded-xl hover:bg-gray-900 transition
    ${selectedAction === "complete" ? "outline outline-2 outline-blue-500" : ""}
  `}
        >
          {t.complete}
        </button>
        <button
          onClick={() => setSelectedAction("issue")}
          className={`w-full py-3 border border-gray-300 text-gray-800 text-sm font-medium rounded-xl hover:bg-gray-100 transition
    ${selectedAction === "issue" ? "outline outline-2 outline-blue-500" : ""}
  `}
        >
          {t.issues}
        </button>
      </div>

      {/* Conditional Review Form when "Task Complete" */}
      {selectedAction === "complete" && (
        <div className="w-full max-w-xs bg-gray-50 p-4 rounded-2xl">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/technician.png"
              alt="Technician"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>

          <h2 className="font-semibold text-sm mb-1">{t.reviewTitle}</h2>
          <p className="text-xs text-gray-600 mb-3">
            {t.reviewPrompt}
            <br />
            from #Fillname #Surname
          </p>

          {/* Star Rating */}
          <div className="flex justify-center mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className="text-2xl mx-0.5"
              >
                {star <= rating ? "⭐" : "☆"}
              </button>
            ))}
          </div>

          {rating > 0 && (
            <p className="text-sm font-medium mb-4">
              {ratingLabels[rating - 1]}
            </p>
          )}

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {feedbackTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`px-3 py-1 text-xs rounded-full border ${
                  selectedTags.includes(tag)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-gray-100 text-gray-600 border-gray-300"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Comment Box */}
          <textarea
            placeholder={t.commentPlaceholder}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
            className="w-full text-sm border rounded-lg p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>
      )}
      {/* Conditional Issues Form when "No, There are issues" */}
      {selectedAction === "issue" && (
        <div className="w-full max-w-xs bg-gray-50 p-4 rounded-2xl">
          <h2 className="font-semibold text-sm mb-1">{t.reviewTitle}</h2>
          <p className="text-xs text-gray-600 mb-4">{t.rejectPrompt}</p>

          {/* Issue Reasons */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {[
              "reason#1",
              "reason#2",
              "reason#3",
              "reason#4",
              "reason#5",
              "reason#6",
            ].map((reason, index) => (
              <button
                key={index}
                onClick={() =>
                  setSelectedTags((prev) =>
                    prev.includes(reason)
                      ? prev.filter((t) => t !== reason)
                      : [...prev, reason]
                  )
                }
                className={`px-3 py-1 text-xs rounded-full border transition ${
                  selectedTags.includes(reason)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-gray-100 text-gray-600 border-gray-300"
                }`}
              >
                {reason}
              </button>
            ))}
          </div>

          {/* Comment Box */}
          <textarea
            placeholder={t.commentPlaceholder}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
            className="w-full text-sm border rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>
      )}
      {selectedAction && (
        <button
          onClick={handleSubmitReview}
          className="w-full bg-black text-white py-3 rounded-xl text-sm font-medium mt-6"
        >
          {t.done}
        </button>
      )}
    </div>
  );
}
