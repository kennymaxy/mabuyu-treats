
'use client';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Loader2, Truck, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const checkoutSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'Town is required'),
  apartment: z.string().optional(),
  houseNumber: z.string().optional(),
  deliveryInstructions: z.string().optional(),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const router = useRouter();
  
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      apartment: '',
      houseNumber: '',
      deliveryInstructions: '',
    },
  });

  const { formState: { isSubmitting } } = form;

  const tax = cartTotal * 0.16;
  const totalForCustomer = cartTotal;
  const totalForAccounting = cartTotal + tax;

  const onSubmit = (data: CheckoutFormValues) => {
    const orderItems = cartItems.map(item => 
      `- ${item.product.name} (Qty: ${item.quantity}) - Ksh ${(item.product.price * item.quantity).toFixed(2)}`
    ).join('\n');

    let message = `Hello Mabuyu Treats, I'd like to place an order:\n\n`;
    message += `${orderItems}\n\n`;
    message += `Subtotal: Ksh ${cartTotal.toFixed(2)}\n`;
    message += `Shipping: TBD with rider\n`;
    message += `Taxes (16%): Ksh ${tax.toFixed(2)}\n`;
    message += `*Total (excluding delivery): Ksh ${totalForCustomer.toFixed(2)}*\n\n`;
    message += `My shipping details:\n`;
    message += `Name: ${data.firstName} ${data.lastName}\n`;
    message += `Address: ${data.address}, ${data.city}\n`;
    if (data.apartment) {
      message += `Apartment: ${data.apartment}\n`;
    }
    if (data.houseNumber) {
      message += `House No: ${data.houseNumber}\n`;
    }
    if (data.deliveryInstructions) {
      message += `Instructions: ${data.deliveryInstructions}\n`;
    }
    message += `\nPlease confirm my order. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '254713022208'; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    clearCart();
    router.push('/checkout/success');
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 fade-in">
       <div className="text-center mb-10">
          <h1 className="text-3xl font-bold font-headline sm:text-4xl">Checkout</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Shipping Information</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form id="checkout-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address / Street</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Spice Lane" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="apartment"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Apartment Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Spice Towers" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="houseNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>House Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Apt 4B" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Town</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Nairobi" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="deliveryInstructions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Delivery Instructions</FormLabel>
                        <FormControl>
                          <Textarea placeholder="E.g. Leave at the reception with the guard." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
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
                <Card className="bg-secondary/50 border-primary/20">
                    <CardHeader className="flex-row items-start gap-4 p-4">
                        <Truck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <CardTitle className="text-base">Delivery Instructions</CardTitle>
                            <CardDescription className="text-sm">
                              Please note that delivery is paid to the rider, as per the agreement between the client and the rider.
                            </CardDescription>
                        </div>
                    </CardHeader>
                </Card>

                <div className="space-y-2 pt-4">
                    <div className="flex justify-between"><span>Subtotal</span><span>Ksh {cartTotal.toFixed(2)}</span></div>
                    <div className="flex justify-between text-muted-foreground"><span>Shipping</span><span>Paid to rider</span></div>
                    <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2"><span>Total (Excl. Delivery)</span><span>Ksh {totalForCustomer.toFixed(2)}</span></div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
               <Button type="submit" form="checkout-form" className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white" size="lg" disabled={cartItems.length === 0 || isSubmitting}>
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
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
                )}
                {isSubmitting ? 'Placing Order...' : 'Place Order on WhatsApp'}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
