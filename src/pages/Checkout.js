import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { increaseQty, decreaseQty, removeFromCart, clearCart, } from '../redux/slice/cartSlice';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
    const cartItems = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const handlePayment = () => {
        // You could save to localStorage or pass via state if needed
        dispatch(clearCart());
        navigate('/order-confirmation', { state: { items: cartItems, total } });
    };
    if (cartItems.length === 0) {
        return (_jsx("div", { className: "p-6 text-center text-gray-500", children: "Your cart is empty." }));
    }
    return (_jsxs("div", { className: "p-6 max-w-5xl mx-auto", children: [_jsx("h1", { className: "text-2xl font-bold mb-6", children: "Checkout" }), _jsx("div", { className: "space-y-6", children: cartItems.map((item) => (_jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4 border-b pb-4", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("img", { src: item.image, alt: item.title, className: "w-20 h-20 object-contain" }), _jsxs("div", { children: [_jsx("h2", { className: "font-semibold", children: item.title }), _jsxs("p", { className: "text-green-600 font-medium", children: ["\u20B9 ", item.price] })] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Button, { variant: "outline", onClick: () => dispatch(decreaseQty(item.id)), children: "-" }), _jsx("span", { className: "px-2", children: item.quantity }), _jsx(Button, { variant: "outline", onClick: () => dispatch(increaseQty(item.id)), children: "+" })] }), _jsx("div", { children: _jsx(Button, { variant: "destructive", onClick: () => dispatch(removeFromCart(item.id)), children: "Remove" }) })] }, item.id))) }), _jsxs("div", { className: "mt-6 flex justify-between items-center", children: [_jsxs("h2", { className: "text-xl font-semibold", children: ["Total: \u20B9 ", total.toFixed(2)] }), _jsx(Button, { onClick: handlePayment, children: "Make Payment" })] })] }));
};
export default Checkout;
