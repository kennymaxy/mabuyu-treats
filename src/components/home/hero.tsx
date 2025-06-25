import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-primary/30 z-10" />
      <Image
        src="https://placehold.co/1800x1200.png"
        alt="A vibrant spread of spices on a coastal background"
        fill
        className="object-cover"
        priority
        data-ai-hint="coastal spices"
      />
      <div className="relative z-20 container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-headline font-bold text-background sm:text-5xl md:text-6xl lg:text-7xl !leading-tight tracking-tighter"
             style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
            Authentic Coastal Delights
          </h1>
          <p className="text-lg text-background/90 md:text-xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            Savor the sun-kissed flavors of the coast. Handcrafted spices and delicacies, rich in tradition.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg">
              <Link href="#products">Explore Our Collection</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
