import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/Home/Home.tsx
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getCategories, getProducts, getProductsByCategory, } from '../redux/slice/productSlice';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
const Home = () => {
    const dispatch = useAppDispatch();
    const { items: products, categories } = useAppSelector((state) => state.products);
    const [selectedCategory, setSelectedCategory] = useState('all');
    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProducts());
    }, [dispatch]);
    useEffect(() => {
        if (selectedCategory === 'all') {
            dispatch(getProducts());
        }
        else {
            dispatch(getProductsByCategory(selectedCategory));
        }
    }, [selectedCategory, dispatch]);
    return (_jsxs("div", { className: "flex flex-col md:flex-row gap-6 p-6", children: [_jsxs("aside", { className: "md:w-1/4 border-r pr-4", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "Categories" }), _jsxs(RadioGroup, { defaultValue: "all", onValueChange: (value) => setSelectedCategory(value), className: "flex flex-col gap-3", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { value: "all", id: "all" }), _jsx(Label, { htmlFor: "all", children: "All" })] }), categories.map((cat) => (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { value: cat, id: cat }), _jsx(Label, { htmlFor: cat, children: cat.charAt(0).toUpperCase() + cat.slice(1) })] }, cat)))] })] }), _jsx("section", { className: "flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: products.map((product) => (_jsx(Card, { className: "cursor-pointer transition-transform hover:scale-[1.02]", children: _jsx(CardContent, { className: "p-4", children: _jsxs(Link, { to: `/product/${product.id}`, target: "_blank", rel: "noopener noreferrer", className: "flex flex-col items-center gap-2", children: [_jsx("img", { src: product.image, alt: product.title, className: "h-40 object-contain" }), _jsx("h3", { className: "text-sm font-medium text-center line-clamp-2", children: product.title }), _jsxs("p", { className: "font-semibold text-green-600", children: ["\u20B9 ", product.price] })] }) }) }, product.id))) })] }));
};
export default Home;
