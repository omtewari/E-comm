// src/pages/Home/Home.tsx
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  getCategories,
  getProducts,
  getProductsByCategory,
} from '../redux/slice/productSlice';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useAppDispatch();
  const { items: products, categories } = useAppSelector((state) => state.products);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory === 'all') {
      dispatch(getProducts());
    } else {
      dispatch(getProductsByCategory(selectedCategory));
    }
  }, [selectedCategory, dispatch]);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Sidebar */}
      <aside className="md:w-1/4 border-r pr-4">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <RadioGroup
          defaultValue="all"
          onValueChange={(value) => setSelectedCategory(value)}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all">All</Label>
          </div>
          {categories.map((cat) => (
            <div key={cat} className="flex items-center space-x-2">
              <RadioGroupItem value={cat} id={cat} />
              <Label htmlFor={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</Label>
            </div>
          ))}
        </RadioGroup>
      </aside>

      {/* Products Grid */}
      <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="cursor-pointer transition-transform hover:scale-[1.02]">
            <CardContent className="p-4">
              <Link to={`/product/${product.id}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 object-contain"
                />
                <h3 className="text-sm font-medium text-center line-clamp-2">{product.title}</h3>
                <p className="font-semibold text-green-600">₹ {product.price}</p>
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Home;
