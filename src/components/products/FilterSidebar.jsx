import React from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export const FilterSidebar = ({ filters, setFilters }) => {
    return (
        <div className="w-full lg:w-64 flex-shrink-0 space-y-8">
            {/* Search */}
            <div>
                <h3 className="text-lg font-bold text-white mb-4">Search</h3>
                <Input
                    placeholder="Search products..."
                    value={filters.search}
                    onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                />
            </div>

            {/* Categories */}
            <div>
                <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
                <div className="space-y-2">
                    {['Smartwatches', 'Earbuds', 'Fitness Bands', 'Accessories'].map((category) => (
                        <label key={category} className="flex items-center gap-2 cursor-pointer group">
                            <input
                                type="checkbox"
                                className="w-4 h-4 rounded border-gray-600 text-accent focus:ring-accent bg-transparent"
                                checked={filters.categories.includes(category.toLowerCase())}
                                onChange={(e) => {
                                    const newCategories = e.target.checked
                                        ? [...filters.categories, category.toLowerCase()]
                                        : filters.categories.filter((c) => c !== category.toLowerCase());
                                    setFilters({ ...filters, categories: newCategories });
                                }}
                            />
                            <span className="text-gray-400 group-hover:text-white transition-colors">{category}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div>
                <h3 className="text-lg font-bold text-white mb-4">Price Range</h3>
                <div className="flex items-center gap-2">
                    <Input
                        type="number"
                        placeholder="Min"
                        className="w-20"
                        value={filters.minPrice}
                        onChange={(e) => setFilters({ ...filters, minPrice: Number(e.target.value) })}
                    />
                    <span className="text-gray-400">-</span>
                    <Input
                        type="number"
                        placeholder="Max"
                        className="w-20"
                        value={filters.maxPrice}
                        onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
                    />
                </div>
            </div>

            {/* Brands */}
            <div>
                <h3 className="text-lg font-bold text-white mb-4">Brands</h3>
                <div className="space-y-2">
                    {['Nebula', 'Samsung', 'Google', 'Sonic', 'FitTrack'].map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                            <input
                                type="checkbox"
                                className="w-4 h-4 rounded border-gray-600 text-accent focus:ring-accent bg-transparent"
                                checked={filters.brands.includes(brand)}
                                onChange={(e) => {
                                    const newBrands = e.target.checked
                                        ? [...filters.brands, brand]
                                        : filters.brands.filter((b) => b !== brand);
                                    setFilters({ ...filters, brands: newBrands });
                                }}
                            />
                            <span className="text-gray-400 group-hover:text-white transition-colors">{brand}</span>
                        </label>
                    ))}
                </div>
            </div>

            <Button
                variant="outline"
                className="w-full"
                onClick={() => setFilters({ search: '', categories: [], brands: [], minPrice: 0, maxPrice: 1000 })}
            >
                Reset Filters
            </Button>
        </div>
    );
};
