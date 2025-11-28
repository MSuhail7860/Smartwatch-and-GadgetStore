import { create } from "zustand";

export const useWishlist = create((set) => ({
    wishlist: [],

    addToWishlist: (product) =>
        set((state) => {
            if (state.wishlist.some((p) => p.id === product.id)) return state;
            return { wishlist: [...state.wishlist, product] };
        }),

    removeFromWishlist: (id) =>
        set((state) => ({
            wishlist: state.wishlist.filter((p) => p.id !== id)
        })),
}));
