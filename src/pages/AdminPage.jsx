import React, { useState } from 'react';
import { BarChart3, Package, Users, ShoppingBag, Plus, Edit, Trash2 } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import { PRODUCTS } from '../data/mockData';

export const AdminPage = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [products, setProducts] = useState(PRODUCTS);

    const stats = [
        { label: 'Total Sales', value: '$12,450', icon: BarChart3, color: 'text-accent' },
        { label: 'Total Orders', value: '156', icon: ShoppingBag, color: 'text-blue-400' },
        { label: 'Products', value: products.length, icon: Package, color: 'text-purple-400' },
        { label: 'Customers', value: '89', icon: Users, color: 'text-green-400' },
    ];

    const handleDeleteProduct = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
                <Card className="w-full lg:w-64 p-4 h-fit">
                    <h2 className="text-xl font-bold text-white mb-6 px-2">Admin Panel</h2>
                    <nav className="space-y-2">
                        {[
                            { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
                            { id: 'products', label: 'Products', icon: Package },
                            { id: 'orders', label: 'Orders', icon: ShoppingBag },
                            { id: 'users', label: 'Users', icon: Users },
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
                    </nav>
                </Card>

                {/* Content */}
                <div className="flex-grow">
                    {activeTab === 'dashboard' && (
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold text-white">Dashboard Overview</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {stats.map((stat) => (
                                    <Card key={stat.label} className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                                                <stat.icon className="w-6 h-6" />
                                            </div>
                                            <Badge variant="success">+12%</Badge>
                                        </div>
                                        <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                                    </Card>
                                ))}
                            </div>

                            <Card className="p-6">
                                <h3 className="text-lg font-bold text-white mb-6">Recent Orders</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b border-white/10 text-gray-400 text-sm">
                                                <th className="pb-4">Order ID</th>
                                                <th className="pb-4">Customer</th>
                                                <th className="pb-4">Date</th>
                                                <th className="pb-4">Status</th>
                                                <th className="pb-4 text-right">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-white">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <tr key={i} className="border-b border-white/5 last:border-none">
                                                    <td className="py-4">#ORD-2024-{100 + i}</td>
                                                    <td className="py-4">Customer {i}</td>
                                                    <td className="py-4">Mar {10 + i}, 2024</td>
                                                    <td className="py-4"><Badge variant="success">Completed</Badge></td>
                                                    <td className="py-4 text-right">$129.00</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Card>
                        </div>
                    )}

                    {activeTab === 'products' && (
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold text-white">Products</h2>
                                <Button className="flex items-center gap-2">
                                    <Plus className="w-4 h-4" /> Add Product
                                </Button>
                            </div>

                            <div className="flex gap-4 mb-6">
                                <Input placeholder="Search products..." className="max-w-md" />
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {products.map((product) => (
                                    <Card key={product.id} className="p-4 flex items-center gap-4">
                                        <div className="w-16 h-16 bg-white/5 rounded-lg overflow-hidden flex-shrink-0">
                                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-white">{product.name}</h4>
                                            <p className="text-sm text-gray-400 capitalize">{product.category} • Stock: {product.stock}</p>
                                        </div>
                                        <div className="text-right mr-4">
                                            <p className="font-bold text-white">${product.price}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                                                <Edit className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-red-400 hover:text-red-300"
                                                onClick={() => handleDeleteProduct(product.id)}
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
