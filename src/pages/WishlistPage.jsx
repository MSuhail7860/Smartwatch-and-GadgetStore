import React from "react";
import { useWishlist } from "../store/wishlistStore";

export const WishlistPage = () => {
    const { wishlist, removeFromWishlist } = useWishlist();

    return (
        <div className="p-10 text-white">
            <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

            {wishlist.length === 0 ? (
                <p>No items added yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {wishlist.map((item) => (
                        <div key={item.id} className="glass-card p-4">
                            <img src={item.image} alt={item.name} className="rounded-xl mb-4" />
                            <h2 className="text-xl font-semibold">{item.name}</h2>
                            <p>${item.price}</p>

                            <button
                                className="btn-primary mt-4"
                                onClick={() => removeFromWishlist(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
