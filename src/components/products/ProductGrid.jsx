import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';


export const ProductGrid = ({ products }) => {
    const dispatch = useDispatch();

    if (products.length === 0) {
        return (
            <div className="flex-grow flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">No products found</h3>
                    <p className="text-gray-400">Try adjusting your filters or search query.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <Card key={product.id} hoverEffect className="group flex flex-col">
                        <div className="aspect-square relative overflow-hidden rounded-t-2xl bg-white/5">
                            {product.isNew && (
                                <Badge className="absolute top-4 left-4 z-10 bg-accent text-white border-none">New</Badge>
                            )}
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Button
                                    onClick={() => dispatch(addToCart(product))}
                                    className="rounded-full flex items-center gap-2"
                                >
                                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                                </Button>
                            </div>
                        </div>

                        <div className="p-5 flex flex-col flex-grow">
                            <div className="mb-2">
                                <p className="text-xs text-accent font-medium mb-1 uppercase tracking-wider">{product.category}</p>
                                <Link to={`/products/${product.id}`}>
                                    <h3 className="text-lg font-bold text-white hover:text-accent transition-colors line-clamp-1">{product.name}</h3>
                                </Link>
                            </div>

                            <div className="flex items-center gap-1 mb-4">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                <span className="text-sm font-medium text-gray-300">{product.rating}</span>
                                <span className="text-xs text-gray-500">({product.reviews})</span>
                            </div>

                            <div className="mt-auto flex items-center justify-between">
                                <span className="text-xl font-bold text-white">${product.price}</span>
                                {product.stock < 5 && (
                                    <span className="text-xs text-red-400 font-medium">Only {product.stock} left!</span>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};
