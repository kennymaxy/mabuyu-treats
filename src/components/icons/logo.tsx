import Image from 'next/image';

// Assuming you have uploaded a logo.png to your public/images folder.
const logoUrl = "/images/logo.png";

export default function Logo() {
  return (
    <Image
      src={logoUrl}
      alt="Mabuyu Treats"
      width={129}
      height={45}
      className="h-9 w-auto" // Control display size with tailwind
      priority
      data-ai-hint="logo"
    />
  );
}
