'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import AddToCartButton from './add-to-cart-button';

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false, ...props }: ProductCardProps) {

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1" {...props}>
      <Link href={`/products/${product.slug}`} className="group block overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={product.imageHint}
          priority={priority}
        />
      </Link>
      <CardHeader>
        <CardTitle className="font-headline text-xl">
           <Link href={`/products/${product.slug}`} className="hover:underline">
            {product.name}
          </Link>
        </CardTitle>
        <CardDescription className="h-10">{product.description.substring(0, 60)}...</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-2xl font-bold">Ksh {product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter>
        <AddToCartButton product={product} />
      </CardFooter>
    </Card>
  );
}
