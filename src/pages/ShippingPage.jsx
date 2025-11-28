export const ShippingPage = () => {
    return (
        <div className="p-10 text-white">
            <h1 className="text-4xl font-bold mb-4">Shipping Information</h1>
            <p className="text-gray-300 mb-6">
                We provide fast, secure, and reliable shipping across India for all smartwatches and gadgets.
            </p>

            <div className="space-y-6">

                {/* Shipping Times */}
                <div className="bg-gray-800 p-5 rounded-xl">
                    <h2 className="text-2xl font-semibold mb-2">⏱ Delivery Time</h2>
                    <p className="text-gray-300">
                        Orders are generally delivered within <strong>3–7 business days</strong> depending on your location.
                    </p>
                </div>

                {/* Order Processing */}
                <div className="bg-gray-800 p-5 rounded-xl">
                    <h2 className="text-2xl font-semibold mb-2">📦 Order Processing</h2>
                    <p className="text-gray-300">
                        All orders are processed within <strong>24–48 hours</strong> on working days (Mon–Sat).
                        You will receive an email or SMS confirmation once your order is shipped.
                    </p>
                </div>

                {/* Tracking */}
                <div className="bg-gray-800 p-5 rounded-xl">
                    <h2 className="text-2xl font-semibold mb-2">🔍 Order Tracking</h2>
                    <p className="text-gray-300">
                        After dispatch, a tracking link will be sent to your registered mobile number or email, allowing you to
                        monitor your shipment in real time.
                    </p>
                </div>

                {/* Shipping Charges */}
                <div className="bg-gray-800 p-5 rounded-xl">
                    <h2 className="text-2xl font-semibold mb-2">💰 Shipping Charges</h2>
                    <p className="text-gray-300">
                        We offer <strong>free shipping</strong> on many products.
                        Some locations or heavy items may include a small delivery fee (displayed during checkout).
                    </p>
                </div>

                {/* Cash on Delivery */}
                <div className="bg-gray-800 p-5 rounded-xl">
                    <h2 className="text-2xl font-semibold mb-2">💵 Cash on Delivery (COD)</h2>
                    <p className="text-gray-300">
                        COD is available in select cities. Availability will be shown at checkout.
                    </p>
                </div>

                {/* Packaging */}
                <div className="bg-gray-800 p-5 rounded-xl">
                    <h2 className="text-2xl font-semibold mb-2">📦 Secure Packaging</h2>
                    <p className="text-gray-300">
                        All products are packed in safe, protective packaging to ensure your smartwatch or gadget arrives damage-free.
                    </p>
                </div>

                {/* Shipping Restrictions */}
                <div className="bg-gray-800 p-5 rounded-xl">
                    <h2 className="text-2xl font-semibold mb-2">🌍 Service Areas</h2>
                    <p className="text-gray-300">
                        We currently ship across all major cities and towns in India.
                        Some remote areas may have extended delivery times.
                    </p>
                </div>
            </div>
        </div>
    );
};
