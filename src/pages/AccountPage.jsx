import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Package, User, Settings, LogOut, Heart } from 'lucide-react';
import { loginStart, loginSuccess, logout } from '../store/slices/authSlice';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const AccountPage = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(true);
    const [activeTab, setActiveTab] = useState('orders');

    const handleAuth = (e) => {
        e.preventDefault();
        dispatch(loginStart());
        // Simulate API call
        setTimeout(() => {
            dispatch(loginSuccess({
                id: '1',
                name: 'John Doe',
                email: 'john@example.com',
                role: 'user'
            }));
        }, 1000);
    };

    if (!isAuthenticated) {
        return (
            <div className="container mx-auto px-4 py-20 flex justify-center items-center min-h-[60vh]">
                <Card className="w-full max-w-md p-8">
                    <h2 className="text-2xl font-bold text-white mb-2 text-center">
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                    </h2>
                    <p className="text-gray-400 text-center mb-8">
                        {isLogin ? 'Enter your credentials to access your account' : 'Sign up to start shopping'}
                    </p>

                    <form onSubmit={handleAuth} className="space-y-4">
                        {!isLogin && <Input label="Full Name" placeholder="John Doe" />}
                        <Input label="Email" type="email" placeholder="john@example.com" />
                        <Input label="Password" type="password" placeholder="••••••••" />

                        <Button className="w-full mt-4">
                            {isLogin ? 'Sign In' : 'Sign Up'}
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-accent hover:underline text-sm"
                        >
                            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
                        </button>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
                <Card className="w-full lg:w-64 p-4 h-fit">
                    <div className="flex items-center gap-4 mb-8 px-2">
                        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-xl">
                            {user?.name.charAt(0)}
                        </div>
                        <div>
                            <h3 className="font-bold text-white">{user?.name}</h3>
                            <p className="text-xs text-gray-400">{user?.email}</p>
                        </div>
                    </div>

                    <nav className="space-y-2">
                        {[
                            { id: 'orders', label: 'My Orders', icon: Package },
                            { id: 'wishlist', label: 'Wishlist', icon: Heart },
                            { id: 'profile', label: 'Profile Settings', icon: Settings },
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === item.id ? 'bg-accent text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <item.icon className="w-5 h-5" />
                                <span className="font-medium">{item.label}</span>
                            </button>
                        ))}
                        <button
                            onClick={() => dispatch(logout())}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors mt-8"
                        >
                            <LogOut className="w-5 h-5" />
                            <span className="font-medium">Sign Out</span>
                        </button>
                    </nav>
                </Card>

                {/* Content */}
                <div className="flex-grow">
                    {activeTab === 'orders' && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-white mb-6">Order History</h2>
                            {[1, 2].map((order) => (
                                <Card key={order} className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <p className="text-sm text-gray-400">Order #ORD-2024-{order}34</p>
                                            <p className="text-sm text-gray-400">Placed on March {10 + order}, 2024</p>
                                        </div>
                                        <Badge variant="success">Delivered</Badge>
                                    </div>
                                    <div className="border-t border-white/10 py-4">
                                        <div className="flex gap-4 items-center">
                                            <div className="w-16 h-16 bg-white/5 rounded-lg overflow-hidden">
                                                <img src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=800" alt="Product" className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-white">Nebula Watch Ultra</h4>
                                                <p className="text-sm text-gray-400">Qty: 1</p>
                                            </div>
                                            <div className="ml-auto">
                                                <p className="font-bold text-white">$299.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center pt-4 border-t border-white/10">
                                        <Button variant="outline" size="sm">View Details</Button>
                                        <p className="font-bold text-white">Total: $299.00</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )}

                    {activeTab === 'wishlist' && (
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">My Wishlist</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Mock Wishlist Items */}
                                <Card className="p-4">
                                    <div className="flex gap-4">
                                        <div className="w-20 h-20 bg-white/5 rounded-lg overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800" alt="Product" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-white">Sonic Buds Pro</h4>
                                            <p className="text-accent font-bold">$149.00</p>
                                            <Button size="sm" className="mt-2">Add to Cart</Button>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    )}

                    {activeTab === 'profile' && (
                        <Card className="p-6 max-w-xl">
                            <h2 className="text-2xl font-bold text-white mb-6">Profile Settings</h2>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <Input label="First Name" defaultValue="John" />
                                    <Input label="Last Name" defaultValue="Doe" />
                                </div>
                                <Input label="Email" type="email" defaultValue="john@example.com" disabled />
                                <Input label="Phone" defaultValue="+1 (555) 123-4567" />
                                <Button className="mt-4">Save Changes</Button>
                            </form>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};
