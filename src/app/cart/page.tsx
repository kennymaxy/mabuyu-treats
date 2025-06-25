import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 fade-in">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-2xl">
            <ShoppingCart />
            Shopping Cart
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              Your shopping cart is now conveniently located in the sheet accessible from the cart icon in the header.
            </p>
            <p className="text-muted-foreground mb-6">
              Ready to complete your purchase?
            </p>
            <Button asChild>
                <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
        </CardContent>
      </Card>
    </div>
  );
}
