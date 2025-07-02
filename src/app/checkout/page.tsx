'use client';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Truck } from 'lucide-react';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function CheckoutPage() {
  const { cartItems, cartTotal } = useCart();
  const [shippingCost, setShippingCost] = useState(100.00);
  
  const shippingOptions = [
    { label: "Pickup in Ngara (Free)", value: 0 },
    { label: "Nairobi CBD", value: 100 },
    { label: "Nairobi Suburbs", value: 150 },
    { label: "Up-Country (Outside Nairobi)", value: 300 },
  ];

  const tax = cartTotal * 0.16; // Calculate 16% VAT for accounting
  const totalForCustomer = cartTotal + shippingCost; // Total shown to customer
  const totalForAccounting = cartTotal + shippingCost + tax; // Total for WhatsApp message

  const handleCheckout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const shippingInfo = {
        firstName: formData.get('first-name') as string,
        lastName: formData.get('last-name') as string,
        address: formData.get('address') as string,
        city: formData.get('city') as string,
    };

    const orderItems = cartItems.map(item => 
      `- ${item.product.name} (Qty: ${item.quantity}) - Ksh ${(item.product.price * item.quantity).toFixed(2)}`
    ).join('\n');

    const selectedShippingOption = shippingOptions.find(opt => opt.value === shippingCost);

    let message = `Hello Mabuyu Treats, I'd like to place an order:\n\n`;
    message += `${orderItems}\n\n`;
    message += `Subtotal: Ksh ${cartTotal.toFixed(2)}\n`;
    message += `Shipping (${selectedShippingOption?.label || 'N/A'}): Ksh ${shippingCost.toFixed(2)}\n`;
    message += `Taxes (16%): Ksh ${tax.toFixed(2)}\n`;
    message += `*Total: Ksh ${totalForAccounting.toFixed(2)}*\n\n`;
    message += `My shipping details:\n`;
    message += `Name: ${shippingInfo.firstName} ${shippingInfo.lastName}\n`;
    message += `Address: ${shippingInfo.address}, ${shippingInfo.city}\n\n`;
    message += `Please confirm my order. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    
    // IMPORTANT: Replace this with your actual WhatsApp number
    const phoneNumber = '254713022208'; 
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 fade-in">
       <div className="text-center mb-10">
          <h1 className="text-3xl font-bold font-headline sm:text-4xl">Checkout</h1>
        </div>
        <Card className="mb-8 bg-secondary/50 border-primary/20">
            <CardHeader className="flex-row items-center gap-4">
                <Truck className="h-8 w-8 text-primary" />
                <div>
                    <CardTitle>Pickup Available</CardTitle>
                    <CardDescription>Pickup in Ngara at Fabric movie shop</CardDescription>
                </div>
            </CardHeader>
        </Card>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Shipping Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form id="checkout-form" onSubmit={handleCheckout} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" name="first-name" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" name="last-name" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" name="address" placeholder="123 Spice Lane" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" name="city" placeholder="Flavor Town" required />
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {cartItems.map(item => (
                  <li key={item.product.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Image src={item.product.image} alt={item.product.name} width={64} height={64} className="rounded-md" data-ai-hint={item.product.imageHint} />
                      <div>
                        <p className="font-medium">{item.product.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-medium">Ksh {(item.product.price * item.quantity).toFixed(2)}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t pt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="shipping-option">Shipping Option</Label>
                  <Select
                    onValueChange={(value) => setShippingCost(parseFloat(value))}
                    defaultValue={shippingCost.toString()}
                  >
                    <SelectTrigger id="shipping-option" className="w-full">
                      <SelectValue placeholder="Select delivery option" />
                    </SelectTrigger>
                    <SelectContent>
                      {shippingOptions.map((option) => (
                        <SelectItem key={option.label} value={option.value.toString()}>
                          {`${option.label} - Ksh ${option.value.toFixed(2)}`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between"><span>Subtotal</span><span>Ksh {cartTotal.toFixed(2)}</span></div>
                    <div className="flex justify-between text-muted-foreground"><span>Shipping</span><span>Ksh {shippingCost.toFixed(2)}</span></div>
                    <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2"><span>Total</span><span>Ksh {totalForCustomer.toFixed(2)}</span></div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
               <Button type="submit" form="checkout-form" className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white" size="lg" disabled={cartItems.length === 0}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-5 w-5"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Place Order on WhatsApp
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
