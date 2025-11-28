import React from 'react';
import { ArrowRight, Star, Shield, Truck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { CATEGORIES, PRODUCTS } from '../data/mockData';

export const HomePage = () => {
    const featuredProducts = PRODUCTS.filter(p => p.isFeatured);

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
                                        <HeartIcon />
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
                                        <ActivityIcon />
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
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <Button size="sm" className="rounded-full">Add to Cart</Button>
                                    <Button size="sm" variant="secondary" className="rounded-full px-3">
                                        <EyeIcon className="w-5 h-5" />
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

// Helper Icons
const HeartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
);

const ActivityIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
);

const EyeIcon = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);
