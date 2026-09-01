import { source } from '@/lib/source';
import type { MetadataRoute } from 'next';

const origin = 'https://the-l.ink';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: origin },
    ...source.getPages().map(page => ({
      url: `${origin}${page.url}`,
    })),
  ];
}
