import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-slate-900 hover:text-brand-600 transition-colors"
        >
          <span className="text-2xl" aria-hidden="true">
            🌡️
          </span>
          <span className="hidden sm:inline">Heat Pump Incentives</span>
          <span className="sm:hidden">HP Incentives</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link
            href="/states/ca"
            className="text-slate-600 hover:text-brand-600 transition-colors"
          >
            California
          </Link>
          <Link
            href="/about"
            className="text-slate-600 hover:text-brand-600 transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
