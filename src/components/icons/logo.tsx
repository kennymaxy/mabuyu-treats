import Image from 'next/image';

// The user-provided logo image will be uploaded and this URL will be replaced by the system.
const logoUrl = "https://storage.googleapis.com/maker-studio-project-images-prod/v1-36451631520-6d05f32a-57b1-4d10-9c16-86c8a2b5e28a.png";

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
