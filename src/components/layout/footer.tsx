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
                <a href="mailto:mabuyutreats@gmail.com" className="hover:text-primary">
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
              <Link
                href="https://www.tiktok.com/@mabuyutreats1?_t=ZM-8xfFKCAoSVs&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary"
                  fill="currentColor"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.97-6.46-2.97-1.6-1.97-2.29-4.66-1.95-7.34.31-2.48 1.94-4.6 4.02-5.85 2.09-1.26 4.64-1.42 6.91-.45.39.17.69.48.96.76-1.01.02-2.02.01-3.04.02-1.16-.01-2.32.02-3.48-.02-1.04-.03-2.08.19-3.02.65-.95.45-1.78 1.16-2.39 2.05-.59.87-1 1.9-1.15 2.99-.17 1.25-.09 2.53.22 3.75.29 1.17.84 2.26 1.63 3.19.78.91 1.77 1.63 2.89 2.13 1.11.49 2.3.73 3.51.72 1.29-.01 2.57-.28 3.74-.81 1.17-.53 2.2-1.32 2.99-2.3.78-.97 1.32-2.11 1.58-3.32.22-1.02.3-2.06.26-3.1v-3.32c-.21.1-.42.2-.64.29-.98.37-2.04.53-3.08.38-1.15-.17-2.25-.66-3.16-1.44-.92-.78-1.63-1.8-2.07-2.95-.42-1.11-.56-2.3-.4-3.5.14-1.07.52-2.1.9-3.02.4-1.02 1.05-1.9 1.84-2.64.79-.73 1.74-1.28 2.76-1.6.4-.12.81-.21 1.22-.26Z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
