import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../store/slices/wishlistSlice";
import { Link } from "react-router-dom";
import { ShoppingCart, Trash2 } from "lucide-react";
import { addToCart } from "../store/slices/cartSlice";
import { Button } from "../components/ui/Button";

export const WishlistPage = () => {
    const wishlist = useSelector((state) => state.wishlist.items);
    const dispatch = useDispatch();

    return (
        <div className="container mx-auto px-4 py-10 min-h-[60vh]">
            <h1 className="text-3xl font-bold mb-8 text-white">Your Wishlist ({wishlist.length})</h1>

            {wishlist.length === 0 ? (
                <div className="text-center py-20 bg-white/5 rounded-2xl">
                    <h2 className="text-xl font-bold mb-4">Your wishlist is empty</h2>
                    <p className="text-gray-400 mb-6">Start adding your favorite items!</p>
                    <Link to="/products">
                        <Button>Browse Products</Button>
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlist.map((item) => (
                        <div key={item.id} className="bg-white/5 rounded-2xl p-4 flex gap-4 relative group">
                            <div className="w-24 h-24 bg-white/5 rounded-xl overflow-hidden flex-shrink-0">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-grow">
                                <Link to={`/products/${item.id}`}>
                                    <h3 className="font-bold text-white mb-1 hover:text-accent transition-colors">{item.name}</h3>
                                </Link>
                                <p className="text-accent text-sm font-medium mb-2 uppercase">{item.category}</p>
                                <p className="text-lg font-bold text-white mb-3">${item.price}</p>

                                <div className="flex gap-2">
                                    <Button
                                        size="sm"
                                        onClick={() => dispatch(addToCart(item))}
                                        className="flex items-center gap-2"
                                    >
                                        <ShoppingCart className="w-4 h-4" /> Add to Cart
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                                        onClick={() => dispatch(removeFromWishlist(item.id))}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
