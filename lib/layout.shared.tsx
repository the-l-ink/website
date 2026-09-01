import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, githubUrl } from './shared';
import { Braces } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="link-brand">
          <span className="link-brand-mark" aria-hidden="true">
            <Braces />
          </span>
          {appName}
        </span>
      ),
      transparentMode: 'top',
    },
    links: [
      {
        text: 'Documentation',
        url: '/docs',
        active: 'nested-url',
      },
      {
        text: 'npm',
        url: 'https://www.npmjs.com/org/the-link',
        external: true,
      },
    ],
    githubUrl,
  };
}
