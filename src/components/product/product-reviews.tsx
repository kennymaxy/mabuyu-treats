
'use client';

import { useState } from 'react';
import type { Product, Review } from '@/lib/types';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Star } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { format } from 'date-fns';
import { sendReviewEmail } from '@/ai/flows/send-review-email';

const reviewSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  rating: z.coerce.number().min(1, { message: 'Please select a rating.' }).max(5),
  comment: z.string().min(10, { message: 'Comment must be at least 10 characters.' }),
});

type ReviewFormValues = z.infer<typeof reviewSchema>;

interface ProductReviewsProps {
  product: Product;
}

export default function ProductReviews({ product }: ProductReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>(product.reviews);
  const [hoverRating, setHoverRating] = useState(0);
  const { toast } = useToast();

  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: { name: '', rating: 0, comment: '' },
  });

  const onSubmit: SubmitHandler<ReviewFormValues> = async (data) => {
    const newReview: Review = {
      id: `review-${product.id}-${Date.now()}`,
      ...data,
      date: new Date().toISOString(),
    };
    
    // NOTE: In a real application, you would send this to a backend server
    // to be persisted in a database. For this prototype, we'll just add it 
    // to the local state, and it will be lost on page refresh.
    setReviews([newReview, ...reviews]);

    try {
        await sendReviewEmail({ ...data, productName: product.name });
    } catch (error) {
        console.error("Failed to send review email:", error);
        // This is non-critical, so we don't show an error to the user.
    }
    
    form.reset();
    toast({
        title: 'Review Submitted!',
        description: "Thank you for your feedback."
    })
  };

  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[1][0]}`;
    }
    return names[0][0];
  }

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Leave a Review</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
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
                  <FormLabel>Your Review</FormLabel>
                  <FormControl>
                    <Textarea placeholder="What did you think of the product?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={form.formState.isSubmitting}>
              Submit Review
            </Button>
          </form>
        </Form>
      </div>

      <Separator />

      <div className="space-y-6">
        <h3 className="text-lg font-medium">Customer Reviews</h3>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={review.id}>
              <div className="flex items-start gap-4">
                <Avatar>
                   <AvatarImage src={`https://api.dicebear.com/8.x/initials/svg?seed=${review.name}`} alt={review.name} />
                  <AvatarFallback>{getInitials(review.name)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{format(new Date(review.date), "dd MMM, yyyy")}</p>
                  </div>
                   <div className="flex items-center gap-0.5 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4"
                        fill={i < review.rating ? 'hsl(var(--primary))' : 'hsl(var(--muted))'}
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{review.comment}</p>
                </div>
              </div>
              {index < reviews.length - 1 && <Separator className="mt-6" />}
            </div>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">No reviews yet. Be the first one!</p>
        )}
      </div>
    </div>
  );
}
