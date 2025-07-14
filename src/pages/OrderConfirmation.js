import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const OrderConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // Get data passed from checkout page
    const state = location.state;
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5);
    if (!state || !state.items) {
        return (_jsxs("div", { className: "p-6 text-center", children: [_jsx("h2", { className: "text-xl font-semibold", children: "No order found" }), _jsx(Button, { className: "mt-4", onClick: () => navigate('/'), children: "Go to Home" })] }));
    }
    return (_jsxs("div", { className: "p-6 max-w-5xl mx-auto", children: [_jsx("h1", { className: "text-3xl font-bold text-green-600 mb-4", children: "\uD83C\uDF89 Order Confirmed!" }), _jsxs("p", { className: "mb-6 text-gray-600", children: ["Your order has been placed successfully and will be delivered by", ' ', _jsx("strong", { children: deliveryDate.toDateString() }), "."] }), _jsx("div", { className: "space-y-4", children: state.items.map((item) => (_jsxs("div", { className: "flex items-center justify-between border-b pb-4", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("img", { src: item.image, alt: item.title, className: "w-16 h-16 object-contain" }), _jsxs("div", { children: [_jsx("h2", { className: "font-medium", children: item.title }), _jsxs("p", { className: "text-sm text-gray-500", children: ["Quantity: ", item.quantity] })] })] }), _jsxs("p", { className: "font-semibold", children: ["\u20B9 ", item.price * item.quantity] })] }, item.id))) }), _jsxs("div", { className: "mt-6 flex justify-between items-center", children: [_jsxs("h2", { className: "text-xl font-bold", children: ["Total Paid: \u20B9 ", state.total.toFixed(2)] }), _jsx(Button, { onClick: () => navigate('/'), children: "Continue Shopping" })] })] }));
};
export default OrderConfirmation;
