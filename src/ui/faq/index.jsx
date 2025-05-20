import { useState } from "react";

const faqs = [
  { question: "How does the modular pricing work?", answer: "Modular pricing allows you to only pay for the features you need, customizing your plan based on your usage." },
  { question: "Can I switch between plans?", answer: "Yes, you can switch plans at any time from your account settings." },
  { question: "What happens after my free trial ends?", answer: "You'll be prompted to choose a plan to continue using the service. No charges until you confirm." },
  { question: "How do AI credits work?", answer: "AI credits are used when you access certain features. Each plan includes a specific number of credits." },
  { question: "Do you offer discounts for annual billing?", answer: "Yes, we offer a 20% discount on annual plans compared to monthly billing." }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 font-heading">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto text-left space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 py-3">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-[20px] flex justify-between items-center text-gray-700 font-medium text-left font-heading"
            >
              {faq.question}
              <span className="text-[16px]">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-4 text-2xl text-black text-[16px] font-body">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 space-y-4">
        <h3 className="text-xl font-semibold mb-4 font-heading">Ready to transform your workflow?</h3>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg font-semibold">
          Start Your Free Trial
        </button>
        <p className="text-xls text-gray-500 mt-2">No credit card required. Cancel anytime.</p>
      </div>
    </div>
  );
};

export default FAQSection;
