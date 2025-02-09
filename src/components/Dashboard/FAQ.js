// src/components/FAQs.js

import React from 'react';

const faqs = [
  {
    question: "What is included in the Diamond Package?",
    answer: "The Diamond Package includes access to all courses, one-on-one mentoring, and exclusive materials."
  },
  {
    question: "Can I upgrade my package later?",
    answer: "Yes, you can upgrade your package at any time through your account settings."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with your purchase."
  }
];

const FAQs = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <div className="list-group">
        {faqs.map((faq, index) => (
          <div className="list-group-item" key={index}>
            <h5>{faq.question}</h5>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
