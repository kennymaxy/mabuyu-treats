'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '../ui/input';

export default function CartSheet() {
  const { itemCount, cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingBag className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {itemCount}
            </span>
          )}
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        {cartItems.length > 0 ? (
          <div className="flex h-full flex-col justify-between">
            <div className="mt-8 flex-1 overflow-y-auto">
              <ul role="list" className="-my-6 divide-y divide-border">
                {cartItems.map(item => (
                  <li key={item.product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-border">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        width={96}
                        height={96}
                        className="h-full w-full object-cover object-center"
                        data-ai-hint={item.product.imageHint}
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-foreground">
                          <h3>
                            <Link href={`/products/${item.product.slug}`}>{item.product.name}</Link>
                          </h3>
                          <p className="ml-4">Ksh {(item.product.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center">
                          <label htmlFor={`quantity-${item.product.id}`} className="sr-only">Quantity</label>
                          <Input
                            id={`quantity-${item.product.id}`}
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))}
                            className="w-16 h-8 text-center"
                          />
                        </div>
                        <div className="flex">
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.product.id)}
                            className="font-medium text-primary hover:text-primary/80"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-border px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-foreground">
                <p>Subtotal</p>
                <p>Ksh {cartTotal.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <Button asChild className="w-full">
                  <Link href="/checkout">Checkout</Link>
                </Button>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-muted-foreground">
                <p>
                  or{' '}
                  <SheetTrigger asChild>
                    <button type="button" className="font-medium text-primary hover:text-primary/80">
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </SheetTrigger>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-4">
            <ShoppingBag className="h-16 w-16 text-muted-foreground" />
            <p className="text-muted-foreground">Your cart is empty.</p>
            <SheetTrigger asChild>
              <Button asChild>
                 <Link href="/#products">Start Shopping</Link>
              </Button>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
