import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import './site.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'The Link',
    template: '%s · The Link',
  },
  description:
    'Composable bidirectional event routing across browser, server, process, React, and tab boundaries.',
  metadataBase: new URL('https://the-l.ink'),
  openGraph: {
    type: 'website',
    siteName: 'The Link',
    title: 'The Link',
    description:
      'One communication contract across browser, server, process, React, and tab boundaries.',
    images: [
      {
        url: '/og.png',
        width: 1792,
        height: 937,
        alt: 'A routing graph connecting several runtime boundaries',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Link',
    description:
      'One communication contract across browser, server, process, React, and tab boundaries.',
    images: ['/og.png'],
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
