import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { incentives, formatDate } from '@/data/incentives';

export const metadata: Metadata = {
  title: 'California Heat Pump Rebates — 2026 Status',
  description:
    'Current status of California heat pump rebates and incentives. What changed with the federal tax credit and what programs remain available.',
};

export default function CaliforniaPage() {
  const ca = incentives.CA;
  const formattedDate = formatDate(ca.lastVerified);

  return (
    <>
      <Header />
      <main className="flex-1 px-4 py-8 sm:py-12">
        <article className="max-w-2xl mx-auto">
          <header className="mb-8">
            <p className="text-brand-600 font-medium mb-2">State Guide</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              California Heat Pump Rebates — 2026 Status
            </h1>
            <p className="text-slate-600 leading-relaxed">
              A summary of where California heat pump incentives stand as of{' '}
              {formattedDate}, and what you need to know.
            </p>
          </header>

          <div className="prose prose-slate max-w-none">
            {/* What Changed */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                What Changed
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <p className="text-amber-800 text-sm">
                  <strong>Important:</strong> The federal 25C heat pump tax
                  credit expired December 31, 2025. This was a key incentive
                  that many Californians combined with state and utility
                  rebates.
                </p>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                With the federal credit no longer available for new
                installations, the landscape has shifted. State and
                utility-specific programs now carry more weight—but many of
                these have their own caps, waitlists, or eligibility
                requirements.
              </p>
            </section>

            {/* Why CA Varies */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Why Availability Varies by Region
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                California's incentive landscape is fragmented. Availability
                depends on:
              </p>
              <ul className="space-y-2 text-slate-600 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 mt-1">•</span>
                  <span>
                    <strong>Your utility provider</strong> — PG&E, SCE, SDG&E,
                    and municipal utilities each run their own programs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 mt-1">•</span>
                  <span>
                    <strong>Program funding status</strong> — Many programs have
                    annual caps and may pause when funds run out
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 mt-1">•</span>
                  <span>
                    <strong>Income requirements</strong> — Some programs (like
                    IRA-funded HEEHRA rebates) are income-qualified
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 mt-1">•</span>
                  <span>
                    <strong>Equipment type</strong> — Air-source, ground-source,
                    and heat pump water heaters may have separate programs
                  </span>
                </li>
              </ul>
            </section>

            {/* What This Tool Does */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                What This Tool Does (and Doesn't Do)
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">
                    ✓ What we do
                  </h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Summarize current public program status</li>
                    <li>• Link to official sources</li>
                    <li>• Update when programs change</li>
                    <li>• Flag when information may be stale</li>
                  </ul>
                </div>
                <div className="bg-slate-100 border border-slate-200 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-700 mb-2">
                    ✗ What we don't do
                  </h3>
                  <ul className="text-slate-600 text-sm space-y-1">
                    <li>• Guarantee your eligibility</li>
                    <li>• Calculate exact rebate amounts</li>
                    <li>• Process applications</li>
                    <li>• Replace official program guidance</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Sources */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Official Sources
              </h2>
              <p className="text-slate-600 text-sm mb-4">
                For the most current and accurate information, check these
                official resources:
              </p>
              <ul className="space-y-2 mb-4">
                {ca.sources.map((source, index) => (
                  <li key={index}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link text-sm inline-flex items-center gap-1"
                    >
                      {source.label}
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 text-xs">
                Additional programs may be available through investor-owned utilities (PG&E, SCE, SDG&E), municipal utility districts, and state-administered IRA programs (HEEHRA).
              </p>
            </section>

            {/* CTA */}
            <section className="bg-slate-100 rounded-xl p-6 text-center">
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                Check Current Status
              </h2>
              <p className="text-slate-600 text-sm mb-4">
                Because California rebates change by utility and funding status, the fastest way to know what applies right now is to check the live status tool.
              </p>
              <Link href="/" className="btn-primary">
                View Status Tool →
              </Link>
            </section>
          </div>

          <footer className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-xs text-slate-500">
              Last updated: {formattedDate}
            </p>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}
