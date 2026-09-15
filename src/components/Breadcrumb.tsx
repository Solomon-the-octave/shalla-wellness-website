import Link from "next/link";

export default function Breadcrumb({ current, center = false }: { current: string; center?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={`mb-6 flex text-sm ${center ? "justify-center" : ""}`}>
      <ol className="inline-flex items-center gap-2 rounded-full border border-line bg-card/70 px-4 py-1.5 text-muted backdrop-blur">
        <li>
          <Link href="/" className="transition hover:text-brand">
            Home
          </Link>
        </li>
        <li aria-hidden className="text-accent">/</li>
        <li aria-current="page" className="font-medium text-ink">
          {current}
        </li>
      </ol>
    </nav>
  );
}
