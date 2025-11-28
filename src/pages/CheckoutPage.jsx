import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, CreditCard, Truck, ArrowLeft } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/slices/cartSlice';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';

export const CheckoutPage = () => {
    const [step, setStep] = useState(1);
    const { items, total } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        // Simulate order placement
        setTimeout(() => {
            dispatch(clearCart());
            navigate('/account?tab=orders');
        }, 1500);
    };

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
                <Link to="/products">
                    <Button>Back to Shop</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                {/* Steps */}
                <div className="flex justify-between items-center mb-12 relative">
                    <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-white/10 -z-10" />
                    {[
                        { num: 1, label: 'Shipping', icon: Truck },
                        { num: 2, label: 'Payment', icon: CreditCard },
                        { num: 3, label: 'Review', icon: CheckCircle },
                    ].map((s) => (
                        <div key={s.num} className={`flex flex-col items-center gap-2 bg-primary px-4 ${step >= s.num ? 'text-accent' : 'text-gray-500'}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= s.num ? 'border-accent bg-accent/10' : 'border-gray-600 bg-primary'}`}>
                                <s.icon className="w-5 h-5" />
                            </div>
                            <span className="font-medium text-sm">{s.label}</span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        {step === 1 && (
                            <Card className="p-6 animate-fade-in-up">
                                <h2 className="text-xl font-bold text-white mb-6">Shipping Address</h2>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input label="First Name" placeholder="John" />
                                        <Input label="Last Name" placeholder="Doe" />
                                    </div>
                                    <Input label="Email" type="email" placeholder="john@example.com" />
                                    <Input label="Address" placeholder="123 Tech Street" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input label="City" placeholder="San Francisco" />
                                        <Input label="Postal Code" placeholder="94105" />
                                    </div>
                                    <Input label="Phone" placeholder="+1 (555) 000-0000" />

                                    <div className="pt-4 flex justify-end">
                                        <Button onClick={() => setStep(2)}>Continue to Payment</Button>
                                    </div>
                                </form>
                            </Card>
                        )}

                        {step === 2 && (
                            <Card className="p-6 animate-fade-in-up">
                                <h2 className="text-xl font-bold text-white mb-6">Payment Method</h2>
                                <div className="space-y-4">
                                    <div className="p-4 border border-accent bg-accent/10 rounded-xl flex items-center gap-4 cursor-pointer">
                                        <div className="w-6 h-6 rounded-full border-2 border-accent flex items-center justify-center">
                                            <div className="w-3 h-3 rounded-full bg-accent" />
                                        </div>
                                        <CreditCard className="w-6 h-6 text-accent" />
                                        <span className="font-medium text-white">Credit / Debit Card</span>
                                    </div>

                                    <div className="p-4 border border-white/10 rounded-xl flex items-center gap-4 cursor-pointer hover:bg-white/5 transition-colors">
                                        <div className="w-6 h-6 rounded-full border-2 border-gray-500" />
                                        <span className="font-medium text-white">PayPal</span>
                                    </div>

                                    <div className="pt-4 space-y-4">
                                        <Input label="Card Number" placeholder="0000 0000 0000 0000" />
                                        <div className="grid grid-cols-2 gap-4">
                                            <Input label="Expiry Date" placeholder="MM/YY" />
                                            <Input label="CVC" placeholder="123" />
                                        </div>
                                        <Input label="Cardholder Name" placeholder="John Doe" />
                                    </div>

                                    <div className="pt-4 flex justify-between">
                                        <Button variant="ghost" onClick={() => setStep(1)}>Back</Button>
                                        <Button onClick={() => setStep(3)}>Review Order</Button>
                                    </div>
                                </div>
                            </Card>
                        )}

                        {step === 3 && (
                            <Card className="p-6 animate-fade-in-up">
                                <h2 className="text-xl font-bold text-white mb-6">Review Order</h2>
                                <div className="space-y-4 mb-6">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex gap-4 items-center">
                                            <div className="w-16 h-16 bg-white/5 rounded-lg overflow-hidden">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-grow">
                                                <h4 className="font-medium text-white">{item.name}</h4>
                                                <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
                                            </div>
                                            <p className="font-bold text-white">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-white/10 pt-4 space-y-2">
                                    <div className="flex justify-between text-gray-400">
                                        <span>Subtotal</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-400">
                                        <span>Shipping</span>
                                        <span>Free</span>
                                    </div>
                                    <div className="flex justify-between text-xl font-bold text-white pt-2">
                                        <span>Total</span>
                                        <span>${(total * 1.08).toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="pt-6 flex justify-between">
                                    <Button variant="ghost" onClick={() => setStep(2)}>Back</Button>
                                    <Button onClick={handlePlaceOrder} className="w-full ml-4">Place Order</Button>
                                </div>
                            </Card>
                        )}
                    </div>

                    <div className="lg:col-span-1">
                        <Card className="p-6 sticky top-24">
                            <h3 className="text-lg font-bold text-white mb-4">Order Summary</h3>
                            <div className="flex justify-between text-gray-400 mb-2">
                                <span>Items ({items.reduce((acc, i) => acc + i.quantity, 0)})</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-400 mb-4">
                                <span>Shipping</span>
                                <span className="text-green-400">Free</span>
                            </div>
                            <div className="border-t border-white/10 pt-4">
                                <div className="flex justify-between text-lg font-bold text-white">
                                    <span>Total</span>
                                    <span>${(total * 1.08).toFixed(2)}</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
