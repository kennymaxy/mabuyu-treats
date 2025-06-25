export default function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      {...props}
    >
      <path d="M12 2a2.5 2.5 0 0 1 2.5 2.5c0 3.12-3.12 3.12-3.12 6.24" />
      <path d="M12.5 10.62c0-3.12-3.12-3.12-3.12-6.24A2.5 2.5 0 0 1 12 2" />
      <path d="M12 2a2.5 2.5 0 0 0-2.5 2.5c0 3.12 3.12 3.12 3.12 6.24" />
      <path d="M11.5 10.62c0-3.12 3.12-3.12 3.12-6.24A2.5 2.5 0 0 0 12 2" />
      <path d="M12 12v10" />
      <path d="M12 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="m16 16-3-3" />
      <path d="m8 16 3-3" />
    </svg>
  );
}
