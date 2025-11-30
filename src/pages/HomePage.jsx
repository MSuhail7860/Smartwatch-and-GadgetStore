import React from 'react';
import { ArrowRight, Star, Shield, Truck, CheckCircle, Heart, Activity, Eye } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '../store/slices/wishlistSlice';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { CATEGORIES, PRODUCTS } from '../data/mockData';

export const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const wishlistItems = useSelector((state) => state.wishlist.items);
    const featuredProducts = PRODUCTS.filter(p => p.isFeatured);

    const isInWishlist = (productId) => wishlistItems.some(item => item.id === productId);

    const toggleWishlist = (e, product) => {
        e.preventDefault();
        e.stopPropagation();
        if (isInWishlist(product.id)) {
            dispatch(removeFromWishlist(product.id));
        } else {
            dispatch(addToWishlist(product));
        }
    };

    return (
        <div className="space-y-20 pb-20">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light z-0" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay z-0" />

                <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-fade-in-up">
                        <Badge variant="default" className="bg-accent/10 text-accent border-accent/20 px-4 py-1 text-sm">
                            New Arrival
                        </Badge>
                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                            The Future on <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
                                Your Wrist
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-lg">
                            Experience the next generation of smart technology. Seamless connectivity, advanced health tracking, and premium design.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/products">
                                <Button size="lg" className="group">
                                    Shop Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link to="/about">
                                <Button variant="secondary" size="lg">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative lg:h-[600px] flex items-center justify-center">
                        <div className="relative w-full max-w-md aspect-square animate-float">
                            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
                            <img
                                src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=800"
                                alt="Smartwatch"
                                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                            />

                            {/* Floating Cards */}
                            <Card className="absolute -right-4 top-20 p-4 w-48 animate-pulse-slow">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                                        <Heart className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Heart Rate</p>
                                        <p className="text-lg font-bold">72 BPM</p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="absolute -left-4 bottom-20 p-4 w-48 animate-pulse-slow delay-700">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                        <Activity className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Steps</p>
                                        <p className="text-lg font-bold">8,432</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
                    <p className="text-gray-400">Explore our wide range of premium gadgets</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CATEGORIES.map((category) => (
                        <Link to={`/products?category=${category.id}`} key={category.id} className="group">
                            <Card className="h-64 relative overflow-hidden group-hover:border-accent/50 transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                    <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                                    <span className="text-accent text-sm font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                        Explore <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Products */}
            <section className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Trending Now</h2>
                        <p className="text-gray-400">Top rated products chosen by our customers</p>
                    </div>
                    <Link to="/products">
                        <Button variant="ghost" className="hidden md:flex">
                            View All <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map((product) => (
                        <Card key={product.id} hoverEffect className="group relative">
                            <div className="aspect-square relative overflow-hidden rounded-t-2xl bg-white/5">
                                {product.isNew && (
                                    <Badge className="absolute top-4 left-4 z-10 bg-accent text-white border-none">New</Badge>
                                )}
                                <button
                                    onClick={(e) => toggleWishlist(e, product)}
                                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-colors"
                                >
                                    <Heart
                                        className={`w-5 h-5 transition-colors ${isInWishlist(product.id)
                                            ? "fill-red-500 text-red-500"
                                            : "text-white"
                                            }`}
                                    />
                                </button>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-4 z-20">
                                    <Button
                                        size="sm"
                                        className="rounded-full shadow-lg"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            dispatch(addToCart(product));
                                        }}
                                    >
                                        Add to Cart
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="secondary"
                                        className="rounded-full px-3 shadow-lg"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            navigate(`/products/${product.id}`);
                                        }}
                                    >
                                        <Eye className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <p className="text-sm text-accent font-medium mb-1 capitalize">{product.category}</p>
                                        <h3 className="text-lg font-bold text-white">{product.name}</h3>
                                    </div>
                                    <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-lg">
                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        <span className="text-sm font-medium">{product.rating}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-2xl font-bold text-white">${product.price}</span>
                                    <span className="text-sm text-gray-400">{product.reviews} reviews</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link to="/products">
                        <Button variant="ghost">
                            View All <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Features / Why Choose Us */}
            <section className="bg-white/5 py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Official Warranty</h3>
                            <p className="text-gray-400">All products come with a minimum 1-year official manufacturer warranty.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent">
                                <Truck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Fast Shipping</h3>
                            <p className="text-gray-400">Free express shipping on orders over $50. Track your package in real-time.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Authentic Products</h3>
                            <p className="text-gray-400">100% genuine products sourced directly from top global brands.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Helper Icons removed as we are using lucide-react icons now
