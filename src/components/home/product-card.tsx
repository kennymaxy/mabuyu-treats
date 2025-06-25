'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/hooks/use-cart';
import { ShoppingCart } from 'lucide-react';
import React from 'react';

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false, ...props }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1" {...props}>
      <Link href={`/products/${product.slug}`} className="group">
        <div className="overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={product.imageHint}
            priority={priority}
          />
        </div>
        <CardHeader>
          <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
          <CardDescription className="h-10">{product.description.substring(0, 60)}...</CardDescription>
        </CardHeader>
      </Link>
      <CardContent className="flex-grow">
        <p className="text-2xl font-bold">Ksh {product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={() => addToCart(product)}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
