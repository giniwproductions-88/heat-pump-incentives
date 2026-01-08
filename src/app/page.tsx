import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StatusCard from '@/components/StatusCard';
import { incentives } from '@/data/incentives';

export default function HomePage() {
  const caIncentive = incentives.CA;

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 sm:py-12">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            Heat Pump Incentive Status
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            Current rebate availability for California
          </p>
        </div>

        <StatusCard incentive={caIncentive} />

        <p className="text-xs text-slate-500 mt-8 max-w-md text-center">
          This tool checks publicly available program data. Status may change
          without notice.
        </p>
      </main>
      <Footer />
    </>
  );
}
