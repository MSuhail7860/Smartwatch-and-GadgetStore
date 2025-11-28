import smartwatchImg from '../assets/categories/smartwatches.jpg';
import earbudsImg from '../assets/categories/earbuds.jpg';
import fitnessImg from '../assets/categories/fitness.jpg';
import accessoriesImg from '../assets/categories/accessories.jpg';

import nebulaWatchImg from '../assets/products/nebula-watch-ultra.jpg';
import sonicBudsImg from '../assets/products/sonic-buds-pro.jpg';
import fitTrackImg from '../assets/products/fittrack-x5.jpg';
import titaniumStrapImg from '../assets/products/titanium-link-strap.jpg';
import galaxyWatchImg from '../assets/products/galaxy-watch-6.jpg';
import pixelBudsImg from '../assets/products/pixel-buds-a-series.jpg';

export const CATEGORIES = [
    { id: 'smartwatches', name: 'Smartwatches', image: smartwatchImg },
    { id: 'earbuds', name: 'Earbuds', image: earbudsImg },
    { id: 'fitness', name: 'Fitness Bands', image: fitnessImg },
    { id: 'accessories', name: 'Accessories', image: accessoriesImg },
];

export const PRODUCTS = [
    {
        id: '1',
        name: 'Nebula Watch Ultra',
        price: 299,
        category: 'smartwatches',
        brand: 'Nebula',
        image: nebulaWatchImg,
        rating: 4.8,
        reviews: 124,
        stock: 15,
        specs: {
            battery: '48h',
            screen: '1.9" AMOLED',
            waterproof: 'IP68',
            compatibility: 'iOS & Android',
        },
        isNew: true,
        isFeatured: true,
    },
    {
        id: '2',
        name: 'Sonic Buds Pro',
        price: 149,
        category: 'earbuds',
        brand: 'Sonic',
        image: sonicBudsImg,
        rating: 4.6,
        reviews: 89,
        stock: 30,
        specs: {
            battery: '24h with case',
            waterproof: 'IPX4',
            compatibility: 'Universal',
        },
        isFeatured: true,
    },
    {
        id: '3',
        name: 'FitTrack X5',
        price: 89,
        category: 'fitness',
        brand: 'FitTrack',
        image: fitTrackImg,
        rating: 4.5,
        reviews: 210,
        stock: 50,
        specs: {
            battery: '7 days',
            screen: '0.95" OLED',
            waterproof: '5ATM',
            compatibility: 'iOS & Android',
        },
    },
    {
        id: '4',
        name: 'Titanium Link Strap',
        price: 49,
        category: 'accessories',
        brand: 'Nebula',
        image: titaniumStrapImg,
        rating: 4.7,
        reviews: 45,
        stock: 20,
        specs: {
            compatibility: 'Nebula Watch Series',
        },
    },
    {
        id: '5',
        name: 'Galaxy Watch 6',
        price: 349,
        category: 'smartwatches',
        brand: 'Samsung',
        image: galaxyWatchImg,
        rating: 4.9,
        reviews: 320,
        stock: 10,
        specs: {
            battery: '40h',
            screen: '1.5" Super AMOLED',
            waterproof: 'IP68',
            compatibility: 'Android',
        },
        isFeatured: true,
    },
    {
        id: '6',
        name: 'Pixel Buds A-Series',
        price: 99,
        category: 'earbuds',
        brand: 'Google',
        image: pixelBudsImg,
        rating: 4.4,
        reviews: 150,
        stock: 40,
        specs: {
            battery: '24h',
            waterproof: 'IPX4',
            compatibility: 'Android',
        },
    },
];
