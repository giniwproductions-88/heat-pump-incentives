import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About & Methodology — Heat Pump Incentive Status',
  description:
    'How we track heat pump rebate availability and our methodology for verifying program status.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 px-4 py-8 sm:py-12">
        <article className="max-w-2xl mx-auto">
          <header className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              About This Tool
            </h1>
            <p className="text-slate-600 leading-relaxed">
              We built this tool to help homeowners quickly understand whether
              heat pump incentives are currently available in their state.
            </p>
          </header>

          <div className="prose prose-slate max-w-none">
            {/* Why This Exists */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Why This Exists
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Heat pump incentive programs are notoriously confusing. They
                come from multiple sources (federal, state, utility, local),
                change frequently, and often have funding caps that cause
                programs to pause unexpectedly.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We wanted a simple, honest answer to: "Can I even get a rebate
                right now?" — without wading through outdated articles or
                complex eligibility calculators.
              </p>
            </section>

            {/* Methodology */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Our Methodology
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                We track program status through:
              </p>
              <ul className="space-y-3 text-slate-600 text-sm sm:text-base mb-4">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-brand-600 mt-0.5">1.</span>
                  <span>
                    <strong>Official program websites</strong> — We check state
                    energy offices, utility program pages, and federal DOE
                    announcements
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-brand-600 mt-0.5">2.</span>
                  <span>
                    <strong>Public announcements</strong> — Press releases about
                    program launches, pauses, or funding exhaustion
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-brand-600 mt-0.5">3.</span>
                  <span>
                    <strong>Manual verification</strong> — We periodically
                    confirm program availability and update our status
                  </span>
                </li>
              </ul>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Each status shows a "Last verified" date so you know how recent
                our information is. If data is more than 30 days old, we flag it
                as potentially stale.
              </p>
            </section>

            {/* Status Definitions */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Status Definitions
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <span className="text-xl">🟢</span>
                  <div>
                    <p className="font-semibold text-green-800">Open</p>
                    <p className="text-green-700 text-sm">
                      Programs are actively accepting applications with no known
                      funding caps or waitlists.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg">
                  <span className="text-xl">🟡</span>
                  <div>
                    <p className="font-semibold text-yellow-800">
                      Limited / Region-Dependent
                    </p>
                    <p className="text-yellow-700 text-sm">
                      Some programs are available, but with restrictions —
                      funding caps, waitlists, regional variations, or partial
                      availability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                  <span className="text-xl">🔴</span>
                  <div>
                    <p className="font-semibold text-red-800">Paused / Closed</p>
                    <p className="text-red-700 text-sm">
                      Major programs are not currently accepting applications.
                      This may be temporary (funding pause) or permanent
                      (program ended).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Limitations */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Limitations
              </h2>
              <div className="bg-slate-100 rounded-lg p-4">
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>
                    • We cannot guarantee eligibility — programs have income
                    limits, equipment requirements, and other criteria
                  </li>
                  <li>
                    • Status can change daily — funding may run out or programs
                    may reopen between our updates
                  </li>
                  <li>
                    • We focus on major programs — some local utility or
                    municipal programs may not be reflected
                  </li>
                  <li>
                    • This is not financial advice — always verify with official
                    sources before making decisions
                  </li>
                </ul>
              </div>
            </section>

            {/* Disclaimer */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Disclaimer
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-amber-800 text-sm leading-relaxed">
                  This tool summarizes publicly available information and may
                  not reflect real-time program changes. Always confirm
                  availability with official program administrators before
                  applying. We are not affiliated with any government agency,
                  utility company, or incentive program.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Corrections & Updates
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                If you notice outdated information or have a correction, we want
                to hear from you. Accurate information helps everyone.
              </p>
            </section>

            {/* CTA */}
            <section className="bg-slate-100 rounded-xl p-6 text-center">
              <Link href="/" className="btn-primary">
                Check Current Status →
              </Link>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
