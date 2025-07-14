import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { ShoppingCart } from 'lucide-react';
const Navbar = () => {
    const cartItems = useAppSelector((state) => state.cart);
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    return (_jsxs("nav", { className: "w-full bg-white border-b shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-50", children: [_jsx(Link, { to: "/", className: "text-xl font-bold text-blue-600", children: "E-Shop" }), _jsxs("div", { className: "flex gap-6 items-center", children: [_jsx(Link, { to: "/", className: "text-gray-700 hover:text-blue-600", children: "Home" }), _jsx(Link, { to: "/about", className: "text-gray-700 hover:text-blue-600", children: "About" }), _jsxs(Link, { to: "/checkout", className: "relative flex items-center text-gray-700 hover:text-blue-600", children: [_jsx(ShoppingCart, { className: "w-5 h-5" }), totalItems > 0 && (_jsx("span", { className: "ml-1 text-sm font-semibold text-white bg-blue-600 px-2 py-0.5 rounded-full", children: totalItems }))] })] })] }));
};
export default Navbar;
