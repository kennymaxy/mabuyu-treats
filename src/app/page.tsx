import Hero from '@/components/home/hero';
import ProductList from '@/components/home/product-list';
import Testimonials from '@/components/home/testimonials';

export default function Home() {
  return (
    <div className="fade-in">
      <Hero />
      <ProductList />
      <Testimonials />
    </div>
  );
}
