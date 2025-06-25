import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutSuccessPage() {
    return (
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh]">
            <Card className="max-w-lg text-center fade-in">
                <CardHeader>
                    <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                        <CheckCircle className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="mt-4 font-headline text-2xl">Order Placed Successfully!</CardTitle>
                    <CardDescription>Thank you for your purchase.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        We've received your order and are getting it ready for you. A confirmation email has been sent to your inbox.
                    </p>
                    <Button asChild className="mt-6">
                        <Link href="/">Continue Shopping</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
