import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';

export const CartPage = () => {
    const { items, total } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Trash2 className="w-10 h-10 text-gray-500" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
                <p className="text-gray-400 mb-8">Looks like you haven't added anything yet.</p>
                <Link to="/products">
                    <Button size="lg">Start Shopping</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {items.map((item) => (
                        <Card key={item.id} className="p-4 flex gap-4 items-center">
                            <div className="w-24 h-24 bg-white/5 rounded-lg overflow-hidden flex-shrink-0">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-white">{item.name}</h3>
                                    <button
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                        className="text-gray-500 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                                <p className="text-accent font-medium mb-4">${item.price}</p>

                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1">
                                        <button
                                            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                                            className="p-1 hover:bg-white/10 rounded transition-colors"
                                            disabled={item.quantity <= 1}
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                                        <button
                                            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                                            className="p-1 hover:bg-white/10 rounded transition-colors"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <Card className="p-6 sticky top-24">
                        <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>

                        <div className="space-y-4 mb-6 border-b border-white/10 pb-6">
                            <div className="flex justify-between text-gray-300">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-300">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between text-gray-300">
                                <span>Tax (Estimate)</span>
                                <span>${(total * 0.08).toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="flex justify-between text-xl font-bold text-white mb-8">
                            <span>Total</span>
                            <span>${(total * 1.08).toFixed(2)}</span>
                        </div>

                        <div className="space-y-4">
                            <div className="flex gap-2">
                                <Input placeholder="Promo Code" />
                                <Button variant="secondary">Apply</Button>
                            </div>

                            <Link to="/checkout" className="block">
                                <Button className="w-full flex items-center justify-center gap-2">
                                    Proceed to Checkout <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};
