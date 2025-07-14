import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} from '../redux/slice/cartSlice';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const cartItems = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    // You could save to localStorage or pass via state if needed
    dispatch(clearCart());
    navigate('/order-confirmation', { state: { items: cartItems, total } });
  };

  if (cartItems.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center justify-between gap-4 border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-green-600 font-medium">₹ {item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => dispatch(decreaseQty(item.id))}
              >
                -
              </Button>
              <span className="px-2">{item.quantity}</span>
              <Button
                variant="outline"
                onClick={() => dispatch(increaseQty(item.id))}
              >
                +
              </Button>
            </div>

            <div>
              <Button
                variant="destructive"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Total: ₹ {total.toFixed(2)}</h2>
        <Button onClick={handlePayment}>Make Payment</Button>
      </div>
    </div>
  );
};

export default Checkout;
