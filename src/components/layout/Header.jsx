import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X, Heart } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../../store/slices/cartSlice';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { cn } from '../../utils/cn';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                        <span className="text-primary font-bold">G</span>
                    </div>
                    GadgetStore
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link>
                    <Link to="/products" className="text-gray-300 hover:text-accent transition-colors">Shop</Link>
                    <Link to="/about" className="text-gray-300 hover:text-accent transition-colors">About</Link>
                    <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">Contact</Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:block w-64">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search gadgets..."
                                className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-accent/50 transition-colors"
                            />
                            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                        </div>
                    </div>

                    <button className="p-2 text-gray-300 hover:text-white transition-colors relative">
                        <Heart className="w-6 h-6" />
                    </button>

                    <Link
                        to="/cart"
                        className="p-2 text-gray-300 hover:text-white transition-colors relative"
                    >
                        <ShoppingCart className="w-6 h-6" />
                        {totalItems > 0 && (
                            <span className="absolute top-0 right-0 w-5 h-5 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </Link>

                    <Link to="/account" className="hidden md:block">
                        <Button variant="ghost" size="sm" className="!px-2">
                            <User className="w-6 h-6" />
                        </Button>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-300 hover:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-primary border-t border-white/10 p-4 absolute w-full">
                    <nav className="flex flex-col gap-4">
                        <Link to="/" className="text-gray-300 hover:text-accent" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/products" className="text-gray-300 hover:text-accent" onClick={() => setIsMenuOpen(false)}>Shop</Link>
                        <Link to="/about" className="text-gray-300 hover:text-accent" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link to="/contact" className="text-gray-300 hover:text-accent" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        <div className="pt-4 border-t border-white/10">
                            <Link to="/account" className="flex items-center gap-2 text-gray-300 hover:text-accent" onClick={() => setIsMenuOpen(false)}>
                                <User className="w-5 h-5" /> Account
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};
