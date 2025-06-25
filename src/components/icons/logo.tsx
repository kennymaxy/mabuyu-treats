import Image from 'next/image';

// The user-provided logo image will be uploaded and this URL will be replaced by the system.
const logoUrl = "https://placehold.co/129x45.png";

export default function Logo() {
  return (
    <Image
      src={logoUrl}
      alt="Mabuyu Treats"
      width={129}
      height={45}
      className="h-9 w-auto" // Control display size with tailwind
      priority
    />
  );
}
