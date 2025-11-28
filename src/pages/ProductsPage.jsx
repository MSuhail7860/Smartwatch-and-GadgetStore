import React, { useState, useMemo } from 'react';
import { FilterSidebar } from '../components/products/FilterSidebar';
import { ProductGrid } from '../components/products/ProductGrid';
import { PRODUCTS } from '../data/mockData';

export const ProductsPage = () => {
    const [filters, setFilters] = useState({
        search: '',
        categories: [],
        brands: [],
        minPrice: 0,
        maxPrice: 1000,
    });

    const filteredProducts = useMemo(() => {
        return PRODUCTS.filter(product => {
            // Search
            if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) {
                return false;
            }
            // Categories
            if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
                return false;
            }
            // Brands
            if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
                return false;
            }
            // Price
            if (product.price < filters.minPrice || product.price > filters.maxPrice) {
                return false;
            }
            return true;
        });
    }, [filters]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                <FilterSidebar filters={filters} setFilters={setFilters} />

                <div className="flex-grow">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-white">
                            All Products <span className="text-gray-500 text-lg font-normal">({filteredProducts.length})</span>
                        </h1>

                        <select className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-accent">
                            <option value="featured">Featured</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="newest">Newest Arrivals</option>
                        </select>
                    </div>

                    <ProductGrid products={filteredProducts} />
                </div>
            </div>
        </div>
    );
};
