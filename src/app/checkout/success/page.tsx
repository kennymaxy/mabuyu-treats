
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

const reviewSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }).optional(),
  rating: z.coerce.number().min(1, { message: 'Please select a rating.' }).max(5),
  comment: z.string().min(10, { message: 'Comment must be at least 10 characters.' }),
});

type ReviewFormValues = z.infer<typeof reviewSchema>;

export default function CheckoutSuccessPage() {
    const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);
    const [hoverRating, setHoverRating] = useState(0);
    const { toast } = useToast();

    const form = useForm<ReviewFormValues>({
        resolver: zodResolver(reviewSchema),
        defaultValues: { name: '', rating: 0, comment: '' },
    });

    const onSubmit: SubmitHandler<ReviewFormValues> = (data) => {
        // In a real application, you would send this to a backend server.
        console.log('Site review submitted:', data);
        
        toast({
            title: 'Feedback Submitted!',
            description: "Thank you for sharing your thoughts.",
        });
        
        setIsReviewSubmitted(true);
        form.reset();
    };

    return (
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh]">
            <Card className="max-w-lg w-full text-center fade-in">
                <CardHeader>
                    <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                        <CheckCircle className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="mt-4 font-headline text-2xl">
                        {isReviewSubmitted ? 'Thank You for Your Feedback!' : 'Order Placed Successfully!'}
                    </CardTitle>
                    <CardDescription>
                         {isReviewSubmitted ? 'We appreciate you helping us improve.' : 'We hope you enjoyed your shopping experience.'}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {isReviewSubmitted ? (
                         <div className="space-y-4">
                            <p className="text-muted-foreground">
                                Your feedback has been received. We're always working to make Mabuyu Treats better!
                            </p>
                            <Button asChild className="mt-6">
                                <Link href="/">Continue Shopping</Link>
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-6 text-left">
                            <p className="text-center text-muted-foreground">
                                How was your shopping experience? Let us know!
                            </p>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Your Name (Optional)</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="e.g. Jane Doe" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="rating"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Your Rating</FormLabel>
                                                <FormControl>
                                                    <div className="flex items-center gap-1">
                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                            <Star
                                                                key={star}
                                                                className="w-6 h-6 cursor-pointer transition-colors"
                                                                fill={
                                                                    (hoverRating || field.value) >= star
                                                                    ? 'hsl(var(--primary))'
                                                                    : 'hsl(var(--muted))'
                                                                }
                                                                strokeWidth={0}
                                                                onMouseEnter={() => setHoverRating(star)}
                                                                onMouseLeave={() => setHoverRating(0)}
                                                                onClick={() => field.onChange(star)}
                                                            />
                                                        ))}
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="comment"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Your Feedback</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Tell us about your experience..." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="flex flex-col sm:flex-row gap-2 pt-4">
                                         <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
                                            Submit Feedback
                                        </Button>
                                        <Button asChild variant="outline" className="w-full">
                                            <Link href="/">Skip & Continue Shopping</Link>
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
