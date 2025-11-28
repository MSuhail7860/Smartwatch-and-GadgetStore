import React from 'react';

export const AboutPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-white mb-6">About GadgetStore</h1>
            <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 mb-4">
                    Welcome to GadgetStore, your premier destination for the latest and greatest in wearable technology.
                    We are passionate about bringing you the most cutting-edge smartwatches, earbuds, and fitness trackers
                    to enhance your digital lifestyle.
                </p>
                <p className="text-lg text-gray-300 mb-4">
                    Founded in 2023, our mission is to make premium technology accessible to everyone.
                    We carefully curate our collection to ensure that every product meets our high standards
                    for quality, performance, and style.
                </p>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Values</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Innovation: We stay ahead of the curve to bring you the newest tech.</li>
                    <li>Quality: We only stock products from trusted brands.</li>
                    <li>Customer Service: Your satisfaction is our top priority.</li>
                </ul>
            </div>
        </div>
    );
};
