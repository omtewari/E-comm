import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/products';
import { useAppDispatch } from '../redux/hooks';
import { addToCart } from '../redux/slice/cartSlice';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadProduct = async () => {
      const res = await fetchProductById(id!);
      setProduct(res.data);
    };

    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    dispatch(addToCart({ ...product, quantity }));
    alert('Product added to cart!');
  };

  if (!product) return <p className="p-6">Loading product...</p>;

  return (
    <div className="p-6 flex justify-center">
      <Card className="max-w-3xl w-full flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex justify-center items-center p-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-64 object-contain"
          />
        </div>
        <CardContent className="flex-1 space-y-4 py-6">
          <h1 className="text-xl font-bold">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600">₹ {product.price}</p>

          <div className="space-y-2">
            <label htmlFor="quantity" className="block text-sm font-medium">
              Quantity
            </label>
            <Select onValueChange={(val) => setQuantity(Number(val))} defaultValue="1">
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Qty" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button onClick={handleAddToCart} className="mt-4">
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetail;