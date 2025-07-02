import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Wanjiku K.',
    avatar: 'WK',
    image: 'https://via.placeholder.com/100x100.png',
    title: 'Incredible Flavors!',
    review: "The Tasty Korosho is my new addiction! I've never tasted cashews this good. The spice level is perfect and the quality is outstanding. Will be ordering again!",
  },
  {
    name: 'Nasra A.',
    avatar: 'NA',
    image: 'https://via.placeholder.com/100x100.png',
    title: 'A Taste of Home',
    review: "Mabuyu Treats' Achari blend transported me right back to my grandmother's kitchen. It's authentic, aromatic, and has elevated my cooking immensely.",
  },
  {
    name: 'Cherono T.',
    avatar: 'CT',
    image: 'https://via.placeholder.com/100x100.png',
    title: 'Absolutely Delicious',
    review: "The Korosho Butter is divine. It's so creamy and has just the right amount of salt. I put it on everything from toast to apple slices. Highly recommend!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-secondary py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-headline sm:text-4xl">From Our Coastal Community</h2>
          <p className="mt-4 text-lg text-muted-foreground">Hear what people are saying about our authentic flavors.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint="portrait person" />
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">&ldquo;{testimonial.review}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
