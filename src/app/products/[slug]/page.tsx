'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/use-cart';
import { ShoppingCart, Check, ShieldCheck } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { addToCart } = useCart();
  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="fade-in">
      <section className="relative h-80">
        <Image
          src={product.image}
          alt={`${product.name} background`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </section>

      <section className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 relative">
            <div className="lg:sticky lg:top-24 self-start -mt-40">
              <div className="bg-background rounded-lg shadow-xl p-2">
                 <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={800}
                    className="w-full h-auto object-cover rounded-md"
                    data-ai-hint={product.imageHint}
                  />
              </div>
            </div>

            <div className="mt-8 lg:mt-0 py-8 lg:py-16">
              <h1 className="text-3xl font-bold font-headline sm:text-4xl">
                {product.name}
              </h1>
              <div className="mt-4 flex items-center gap-4">
                <p className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</p>
                <Badge variant={product.spiceLevel === 'Hot' ? 'destructive' : 'secondary'}>
                  {product.spiceLevel} Spice
                </Badge>
              </div>

              <div className="mt-6">
                <p className="text-lg text-muted-foreground">{product.description}</p>
              </div>

              <div className="mt-8">
                <Button size="lg" className="w-full sm:w-auto" onClick={() => addToCart(product)}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </div>
              
              <div className="mt-8">
                 <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Ingredients</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {product.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Origin</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{product.origin}</p>
                      </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-3">
                      <AccordionTrigger>Why You'll Love It</AccordionTrigger>
                      <AccordionContent>
                         <ul className="space-y-4 text-muted-foreground">
                            <li className="flex items-start">
                               <ShieldCheck className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                               <span><strong>Authentic Quality:</strong> Sourced from the best farms and prepared with traditional methods.</span>
                            </li>
                            <li className="flex items-start">
                               <ShieldCheck className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                               <span><strong>Pure & Natural:</strong> No artificial colors, flavors, or preservatives. Just pure, delicious ingredients.</span>
                            </li>
                         </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
