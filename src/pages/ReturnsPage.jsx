export function ReturnsPage() {
    return (
        <div className="p-10 text-white">
            <h1 className="text-4xl font-bold mb-4">Returns & Exchanges</h1>
            <p className="text-gray-300 mb-6">
                We want you to have a smooth shopping experience. If you're not satisfied, eligible items can be returned or exchanged easily.
            </p>

            <div className="space-y-6">

                {/* Return Timeline */}
                <div className="bg-gray-800 p-5 rounded-xl">
                    <h2 className="text-2xl font-semibold mb-2">⏳ Return Window</h2>
                    <p className="text-gray-300">
                        You can return or exchange products within <strong>7 days</strong> of delivery for:
                        <br />• Defective items
                        <br />• Wrong product received
                        <br />• Damaged product (must report within 48 hours)
                    </p>
                </div>

                {/* Conditions */}
                <div className="bg-gray-800 p-5 rounded-xl">
                    <h2 className="text-2xl font-semibold mb-2">📌 Return Eligibility</h2>
                    <p className="text-gray-300">
                        For a successful return, the product must be:
                        <br />• In unused condition
                        <br />• With original box & accessories
                        <br />• With tags, manuals & charger (if applicable)
                        <br />• Not physically damaged by the customer
                    </p>
                </div>

                {/* Non-Returnable Items */}
                <div className="bg-gray-800 p-5 rounded-xl">
                    <h2 className="text-2xl font-semibold mb-2">❌ Non-Returnable Items</h2>
                    <p className="text-gray-300">
                        The following items cannot be returned:
                        <br />• Used or damaged products
                        <br />• Opened earphones/earbuds (hygiene reasons)
                        <br />• Items with missing accessories
                        <br />• Products damaged due to misuse
                    </p>
                </div>

                {/* Exchange Policy */}
                <div className="bg-gray-800 p-5 rounded-xl">
                    <h2 className="text-2xl font-semibold mb-2">🔄 Exchange Policy</h2>
                    <p className="text-gray-300">
                        Exchanges are allowed for:
                        <br />• Size/strap issues (for straps)
                        <br />• Manufacturing defects
                        <br />• Wrong product shipped
                    </p>
                </div>

                {/* Refund Details */}
                <div className="bg-gray-800 p-5 rounded-xl">
                    <h2 className="text-2xl font-semibold mb-2">💳 Refund Process</h2>
                    <p className="text-gray-300">
                        Refunds are processed within <strong>3–7 business days</strong> after inspection.
                        <br />Refund mode:
                        <br />• UPI / Bank Transfer
                        <br />• Original payment method (if applicable)
                    </p>
                </div>

                {/* How to request return */}
                <div className="bg-gray-800 p-5 rounded-xl">
                    <h2 className="text-2xl font-semibold mb-2">🧾 How to Request a Return</h2>
                    <p className="text-gray-300">
                        You can request a return easily through:
                        <br />• Your Account → Orders → Request Return
                        <br />• Emailing customer support
                        <br />• WhatsApp/Phone support
                    </p>
                </div>

                {/* IMPORTANT Notice */}
                <div className="bg-gray-800 p-5 rounded-xl">
                    <h2 className="text-2xl font-semibold mb-2">⚠ Important</h2>
                    <p className="text-gray-300">
                        Products damaged by customer handling are not covered under return or warranty.
                        We recommend recording an unboxing video as proof in case of issues.
                    </p>
                </div>

            </div>
        </div>
    );
}
