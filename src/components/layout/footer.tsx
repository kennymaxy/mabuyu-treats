import { Instagram, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid gap-8 text-center md:grid-cols-3 md:text-left">
          <div>
            <h3 className="font-headline text-lg font-semibold mb-2">Mabuyu Treats</h3>
            <p className="text-sm text-muted-foreground" suppressHydrationWarning>
              &copy; {new Date().getFullYear()} Mabuyu Treats. All rights reserved.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center justify-center gap-2 md:justify-start">
                <Phone className="h-4 w-4" />
                <a href="tel:0713022208" className="hover:text-primary">
                  0713022208
                </a>
              </li>
              <li className="flex items-center justify-center gap-2 md:justify-start">
                <Mail className="h-4 w-4" />
                <a href="mailto:wawerajacque95@gmail.com" className="hover:text-primary">
                  wawerajacque95@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex items-center justify-center gap-4 md:justify-start">
              <Link
                href="https://www.instagram.com/mabuyutreats"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
