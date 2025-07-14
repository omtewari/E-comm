import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const cartItems = useAppSelector((state) => state.cart);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="w-full bg-white border-b shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-blue-600">
        E-Shop
      </Link>

      {/* Links */}
      <div className="flex gap-6 items-center">
        <Link to="/" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">
          About
        </Link>
        <Link to="/checkout" className="relative flex items-center text-gray-700 hover:text-blue-600">
          <ShoppingCart className="w-5 h-5" />
          {totalItems > 0 && (
            <span className="ml-1 text-sm font-semibold text-white bg-blue-600 px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
