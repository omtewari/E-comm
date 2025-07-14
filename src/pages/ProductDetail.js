import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/products';
import { useAppDispatch } from '../redux/hooks';
import { addToCart } from '../redux/slice/cartSlice';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const loadProduct = async () => {
            const res = await fetchProductById(id);
            setProduct(res.data);
        };
        loadProduct();
    }, [id]);
    const handleAddToCart = () => {
        if (!product)
            return;
        dispatch(addToCart({ ...product, quantity }));
        alert('Product added to cart!');
    };
    if (!product)
        return _jsx("p", { className: "p-6", children: "Loading product..." });
    return (_jsx("div", { className: "p-6 flex justify-center", children: _jsxs(Card, { className: "max-w-3xl w-full flex flex-col md:flex-row gap-6", children: [_jsx("div", { className: "flex-1 flex justify-center items-center p-4", children: _jsx("img", { src: product.image, alt: product.title, className: "h-64 object-contain" }) }), _jsxs(CardContent, { className: "flex-1 space-y-4 py-6", children: [_jsx("h1", { className: "text-xl font-bold", children: product.title }), _jsx("p", { className: "text-gray-600", children: product.description }), _jsxs("p", { className: "text-2xl font-semibold text-green-600", children: ["\u20B9 ", product.price] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { htmlFor: "quantity", className: "block text-sm font-medium", children: "Quantity" }), _jsxs(Select, { onValueChange: (val) => setQuantity(Number(val)), defaultValue: "1", children: [_jsx(SelectTrigger, { className: "w-24", children: _jsx(SelectValue, { placeholder: "Qty" }) }), _jsx(SelectContent, { children: [1, 2, 3, 4, 5].map((num) => (_jsx(SelectItem, { value: num.toString(), children: num }, num))) })] })] }), _jsx(Button, { onClick: handleAddToCart, className: "mt-4", children: "Add to Cart" })] })] }) }));
};
export default ProductDetail;
