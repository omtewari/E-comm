import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get data passed from checkout page
  const state = location.state as {
    items: {
      id: number;
      title: string;
      price: number;
      quantity: number;
      image: string;
    }[];
    total: number;
  };

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);

  if (!state || !state.items) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold">No order found</h2>
        <Button className="mt-4" onClick={() => navigate('/')}>
          Go to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        🎉 Order Confirmed!
      </h1>
      <p className="mb-6 text-gray-600">
        Your order has been placed successfully and will be delivered by{' '}
        <strong>{deliveryDate.toDateString()}</strong>.
      </p>

      <div className="space-y-4">
        {state.items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h2 className="font-medium">{item.title}</h2>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>
            </div>
            <p className="font-semibold">₹ {item.price * item.quantity}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">Total Paid: ₹ {state.total.toFixed(2)}</h2>
        <Button onClick={() => navigate('/')}>Continue Shopping</Button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
