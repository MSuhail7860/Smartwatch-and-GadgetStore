import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { PRODUCTS } from '../data/mockData';

export const ProductDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = PRODUCTS.find(p => p.id === id);
    const [selectedImage, setSelectedImage] = useState(0);
    const [activeTab, setActiveTab] = useState('description');

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Product not found</h2>
                <Link to="/products">
                    <Button>Back to Shop</Button>
                </Link>
            </div>
        );
    }

    // Mock multiple images
    const images = [
        product.image,
        'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&q=80&w=800',
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Image Gallery */}
                <div className="space-y-4">
                    <div className="aspect-square bg-white/5 rounded-2xl overflow-hidden border border-white/10 relative">
                        <img
                            src={images[selectedImage]}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                        {product.isNew && (
                            <Badge className="absolute top-4 left-4 bg-accent text-white border-none">New Arrival</Badge>
                        )}
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`aspect-square rounded-xl overflow-hidden border-2 transition-colors ${selectedImage === index ? 'border-accent' : 'border-transparent hover:border-white/20'
                                    }`}
                            >
                                <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div>
                    <div className="mb-6">
                        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">{product.name}</h1>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-1 text-yellow-400">
                                <Star className="w-5 h-5 fill-current" />
                                <span className="font-bold">{product.rating}</span>
                            </div>
                            <span className="text-gray-400">|</span>
                            <span className="text-gray-400">{product.reviews} Reviews</span>
                            <span className="text-gray-400">|</span>
                            <span className={product.stock > 0 ? 'text-green-400' : 'text-red-400'}>
                                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                            </span>
                        </div>
                        <p className="text-3xl font-bold text-accent">${product.price}</p>
                    </div>

                    <div className="prose prose-invert mb-8">
                        <p className="text-gray-300">
                            Experience the ultimate in wearable technology with the {product.name}.
                            Featuring advanced sensors, long-lasting battery life, and a premium design that fits any style.
                        </p>
                    </div>

                    {/* Specs Preview */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {Object.entries(product.specs).map(([key, value]) => (
                            <div key={key} className="bg-white/5 p-3 rounded-lg border border-white/10">
                                <p className="text-xs text-gray-400 uppercase mb-1">{key}</p>
                                <p className="font-medium text-white">{value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <Button
                            size="lg"
                            className="flex-1 flex items-center justify-center gap-2"
                            onClick={() => dispatch(addToCart(product))}
                            disabled={product.stock === 0}
                        >
                            <ShoppingCart className="w-5 h-5" /> Add to Cart
                        </Button>
                        <Button variant="secondary" size="lg" className="px-4">
                            <Heart className="w-5 h-5" />
                        </Button>
                        <Button variant="secondary" size="lg" className="px-4">
                            <Share2 className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Features */}
                    <div className="space-y-4 border-t border-white/10 pt-6">
                        <div className="flex items-center gap-3 text-gray-300">
                            <Truck className="w-5 h-5 text-accent" />
                            <span>Free shipping on orders over $50</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <Shield className="w-5 h-5 text-accent" />
                            <span>2 Year Official Warranty</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <RotateCcw className="w-5 h-5 text-accent" />
                            <span>30 Days Return Policy</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="border-t border-white/10 pt-12">
                <div className="flex gap-8 border-b border-white/10 mb-8 overflow-x-auto">
                    {['Description', 'Specifications', 'Reviews', 'Q&A'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab.toLowerCase())}
                            className={`pb-4 text-lg font-medium transition-colors relative whitespace-nowrap ${activeTab === tab.toLowerCase()
                                ? 'text-accent'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {tab}
                            {activeTab === tab.toLowerCase() && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                            )}
                        </button>
                    ))}
                </div>

                <div className="min-h-[200px]">
                    {activeTab === 'description' && (
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300 leading-relaxed">
                                The {product.name} is designed to seamlessly integrate into your daily life.
                                Whether you're tracking your fitness goals, staying connected with notifications,
                                or simply enjoying music on the go, this device delivers exceptional performance.
                                Built with premium materials and powered by the latest technology, it's more than just a gadget—it's a lifestyle companion.
                            </p>
                        </div>
                    )}
                    {activeTab === 'specifications' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.entries(product.specs).map(([key, value]) => (
                                <div key={key} className="flex justify-between py-3 border-b border-white/10">
                                    <span className="text-gray-400 capitalize">{key}</span>
                                    <span className="text-white font-medium">{value}</span>
                                </div>
                            ))}
                        </div>
                    )}
                    {activeTab === 'reviews' && (
                        <div className="text-center py-10">
                            <p className="text-gray-400">Reviews coming soon...</p>
                        </div>
                    )}
                    {activeTab === 'q&a' && (
                        <div className="text-center py-10">
                            <p className="text-gray-400">No questions yet. Be the first to ask!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
