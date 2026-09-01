import Link from 'next/link';
import {
  ArrowRight,
  Braces,
  Cable,
  GitFork,
  Layers3,
  Network,
  Package,
  Radio,
  Route,
  Waypoints,
} from 'lucide-react';

const packages = [
  {
    name: 'Core',
    packageName: '@the-link/core',
    description: 'Links, tunnels, synchronized properties, codecs, and decorators.',
    icon: Braces,
  },
  {
    name: 'Client',
    packageName: '@the-link/client',
    description: 'Browser requests over HTTP and live subscriptions over WebSocket.',
    icon: Radio,
  },
  {
    name: 'Server',
    packageName: '@the-link/server',
    description: 'Hono routes and an independent link for every connected client.',
    icon: Network,
  },
  {
    name: 'React',
    packageName: '@the-link/react',
    description: 'Lifecycle-safe hooks for tunnels and synchronized properties.',
    icon: Layers3,
  },
  {
    name: 'Process',
    packageName: '@the-link/process',
    description: 'The same event contract across Node.js process IPC.',
    icon: Cable,
  },
  {
    name: 'Tab',
    packageName: '@the-link/tab',
    description: 'Structured-clone messaging between same-origin browser tabs.',
    icon: Waypoints,
  },
];

export default function HomePage() {
  return (
    <div className="link-home">
      <div className="link-hero link-shell">
        <div className="link-hero-copy">
          <div className="link-eyebrow">
            <span />
            The transport-neutral routing graph
          </div>
          <h1>One contract.<br />Every boundary.</h1>
          <p>
            Route calls, events, and synchronized values through the browser,
            server, processes, React, and tabs without changing the model that
            carries them.
          </p>
          <div className="link-actions">
            <Link href="/docs" className="link-button link-button-primary">
              Read the documentation
              <ArrowRight />
            </Link>
            <a
              href="https://github.com/the-l-ink"
              className="link-button"
              target="_blank"
              rel="noreferrer"
            >
              <GitFork />
              GitHub
            </a>
          </div>
          <div className="link-facts" aria-label="The Link facts">
            <span><strong>1</strong> routing graph</span>
            <span><strong>4</strong> ordered phases</span>
            <span><strong>6</strong> focused packages</span>
          </div>
        </div>

        <div className="link-code" aria-label="Tunnel code example">
          <div className="link-code-bar">
            <span><i /><i /><i /></span>
            tunnel.ts
            <Package />
          </div>
          <pre><code><span className="code-keyword">import</span> {'{ Tunnel }'} <span className="code-keyword">from</span>{' '}
<span className="code-string">&quot;@the-link/core&quot;</span>

<span className="code-keyword">const</span> traffic = <span className="code-keyword">new</span> Tunnel()

traffic.subscribe(<span className="code-string">&quot;sum&quot;</span>, (left, right) =&gt; {'{'}
  <span className="code-keyword">return</span> left + right
{'}'})

<span className="code-keyword">const</span> total = <span className="code-keyword">await</span>{' '}
  traffic.publishFirst(<span className="code-string">&quot;sum&quot;</span>, <span className="code-number">20</span>, <span className="code-number">22</span>)</code></pre>
          <div className="link-code-result">
            <span><Route /> result</span>
            <strong>42</strong>
          </div>
        </div>
      </div>

      <div className="link-mechanism">
        <div className="link-shell">
          <div className="link-section-heading">
            <span>THE MECHANISM</span>
            <h2>Events move through a deliberate sequence.</h2>
            <p>Every publish is observable, composable, and able to return results.</p>
          </div>
          <div className="link-phases">
            {[
              ['01', 'Intercept', 'Transform or reject the payload before it reaches a handler.'],
              ['02', 'Subscribe', 'Run exact-event handlers and collect their returned values.'],
              ['03', 'Forward', 'Route matching prefixes and rewrite the event namespace.'],
              ['04', 'Finalize', 'Transform the complete result set before it returns.'],
            ].map(([number, title, description]) => (
              <div className="link-phase" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="link-packages link-shell">
        <div className="link-section-heading">
          <span>THE ECOSYSTEM</span>
          <h2>Use only the boundary you need.</h2>
          <p>Each package owns one responsibility and shares the same Core contract.</p>
        </div>
        <div className="link-package-grid">
          {packages.map((item) => {
            const Icon = item.icon;

            return (
              <Link href={`/docs/packages/${item.name.toLowerCase()}`} className="link-package" key={item.name}>
                <Icon />
                <div>
                  <h3>{item.name}</h3>
                  <code>{item.packageName}</code>
                  <p>{item.description}</p>
                </div>
                <ArrowRight />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="link-cta link-shell">
        <div>
          <span>START WITH THE PRIMITIVE</span>
          <h2>Install Core. Build the graph.</h2>
        </div>
        <code>npm install @the-link/core</code>
        <Link href="/docs/getting-started" className="link-button link-button-primary">
          Get started
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
