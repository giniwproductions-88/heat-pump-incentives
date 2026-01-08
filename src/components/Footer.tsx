import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 text-slate-400">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Disclaimer */}
        <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
          <p className="text-xs leading-relaxed">
            This tool summarizes publicly available information and may not
            reflect real-time program changes. Always confirm availability with
            official program administrators before applying.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Status Tool
          </Link>
          <Link href="/states/ca" className="hover:text-white transition-colors">
            California
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About & Methodology
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Heat Pump Incentive Status. Not
          affiliated with any government agency.
        </p>
      </div>
    </footer>
  );
}
