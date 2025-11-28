import React, { useState } from "react";

export const FaqPage = () => {
    const faqs = [
        {
            question: "What types of smartwatches do you offer?",
            answer:
                "We offer fitness bands, calling smartwatches, AMOLED display watches, sports watches, and premium models."
        },
        {
            question: "Are your smartwatches compatible with all smartphones?",
            answer:
                "Most of our smartwatches support both Android and iOS. Compatibility details are provided on each product page."
        },
        {
            question: "Do your smartwatches support Bluetooth calling?",
            answer:
                "Yes, many of our watches come with Bluetooth calling, built-in microphone, and speaker."
        },
        {
            question: "How long does the battery last?",
            answer:
                "Battery life ranges from 5–15 days depending on usage and model."
        },
        {
            question: "Do your products come with warranty?",
            answer:
                "All products include a manufacturer warranty ranging from 6 months to 1 year."
        },
        {
            question: "How do I receive updates and new features?",
            answer:
                "Smartwatch updates are delivered through the companion app available on the Play Store/App Store."
        },
        {
            question: "How can I track my order?",
            answer:
                "Once shipped, you will receive an SMS/email with live tracking details."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="p-10 text-white">
            <h1 className="text-4xl font-bold mb-4">FAQs</h1>
            <p className="mb-6 text-gray-300">Common questions about our products and services.</p>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-xl p-4 cursor-pointer transition"
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">{faq.question}</h2>
                            <span className="text-2xl">{openIndex === index ? "-" : "+"}</span>
                        </div>

                        {openIndex === index && (
                            <p className="mt-3 text-gray-300">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
