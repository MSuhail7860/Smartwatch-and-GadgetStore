import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export const Footer = () => {
    return (
        <footer className="bg-primary-dark border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                                <span className="text-primary font-bold">G</span>
                            </div>
                            GadgetStore
                        </Link>
                        <p className="text-gray-400 mb-6">
                            Your one-stop destination for the latest smartwatches, earbuds, and premium tech accessories.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link to="/products" className="text-gray-400 hover:text-accent transition-colors">Shop All</Link></li>
                            <li><Link to="/products?category=smartwatches" className="text-gray-400 hover:text-accent transition-colors">Smartwatches</Link></li>
                            <li><Link to="/products?category=earbuds" className="text-gray-400 hover:text-accent transition-colors">Earbuds</Link></li>
                            <li><Link to="/products?category=accessories" className="text-gray-400 hover:text-accent transition-colors">Accessories</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
                        <ul className="space-y-4">
                            <li><Link to="/contact" className="text-gray-400 hover:text-accent transition-colors">Contact Us</Link></li>
                            <li><Link to="/faq" className="text-gray-400 hover:text-accent transition-colors">FAQs</Link></li>
                            <li><Link to="/shipping" className="text-gray-400 hover:text-accent transition-colors">Shipping Info</Link></li>
                            <li><Link to="/returns" className="text-gray-400 hover:text-accent transition-colors">Returns & Exchanges</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Stay Updated</h3>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest tech news and exclusive deals.</p>
                        <form className="space-y-4">
                            <div className="relative">
                                <Input placeholder="Enter your email" className="pl-10" />
                                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                            </div>
                            <Button className="w-full">Subscribe</Button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2024 GadgetStore. All rights reserved.</p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
