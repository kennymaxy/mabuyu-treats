import { products } from '@/lib/products';
import ProductCard from './product-card';

export default function ProductList() {
  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-headline sm:text-4xl">Explore Our Coastal Collection</h2>
          <p className="mt-4 text-lg text-muted-foreground">Handpicked and handcrafted, bringing the taste of the coast to your kitchen.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product}
              priority={index < 4}
              style={{ animationDelay: `${index * 100}ms` }}
              className="fade-in"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
