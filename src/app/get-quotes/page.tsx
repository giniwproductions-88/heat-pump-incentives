import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Find Heat Pump Installers — Coming Soon',
  description:
    'Connect with installers who handle current rebate programs. Feature coming soon.',
};

export default function GetQuotesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🔧</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Coming Soon
          </h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            We're building a way to connect you with installers who are
            experienced with current rebate programs. Check back soon.
          </p>
          <Link href="/" className="btn-primary">
            ← Back to Status Tool
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
