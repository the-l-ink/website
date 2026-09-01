import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-24 sm:py-32">
      <p className="mb-4 text-sm text-fd-muted-foreground">
        Composable bidirectional event routing
      </p>

      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
        The Link
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-fd-muted-foreground">
        One communication contract across browser, server, process, React, and
        tab boundaries.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/docs"
          className="rounded-md bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground"
        >
          Documentation
        </Link>
        <a
          href="https://github.com/the-l-ink"
          className="rounded-md border px-4 py-2 text-sm font-medium"
        >
          GitHub
        </a>
      </div>
    </main>
  );
}
