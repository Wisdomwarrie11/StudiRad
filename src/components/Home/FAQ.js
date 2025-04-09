import React, { useState } from "react";

const faqs = [
  {
    question: "How do I join a course?",
    answer: "Browse available courses, subscribe via bank transfer, and you'll receive a unique class code via email or WhatsApp.",
  },
  {
    question: "Can I learn at my own pace?",
    answer: "Yes! All lessons are accessible 24/7, so you can learn whenever it suits you.",
  },
  {
    question: "Are certificates issued after completion?",
    answer: "Yes, certificates are awarded upon successful course completion and assessments.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section style={{ backgroundColor: "#fff", padding: "50px 20px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px", fontWeight: "bold" }}>
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              backgroundColor: openIndex === index ? "#eaf3f5" : "#f9f9f9",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => toggleFAQ(index)}
          >
            <h5 style={{ margin: 0, fontWeight: "bold" }}>{faq.question}</h5>
            {openIndex === index && (
              <p style={{ marginTop: "10px", color: "#333" }}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
