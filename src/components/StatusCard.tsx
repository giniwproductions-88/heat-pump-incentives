'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  StateIncentive,
  formatDate,
  isStale,
  getStatusDisplay,
  IncentiveStatus,
} from '@/data/incentives';

interface StatusCardProps {
  incentive: StateIncentive;
}

export default function StatusCard({ incentive }: StatusCardProps) {
  const [displayStatus, setDisplayStatus] = useState<IncentiveStatus>(
    incentive.status
  );
  const [staleWarning, setStaleWarning] = useState(false);

  useEffect(() => {
    // Check staleness on client side
    if (isStale(incentive.lastVerified)) {
      setDisplayStatus('limited');
      setStaleWarning(true);
    }
  }, [incentive.lastVerified]);

  const statusDisplay = getStatusDisplay(displayStatus);
  const formattedDate = formatDate(incentive.lastVerified);

  return (
    <div className="card p-6 sm:p-8 w-full max-w-lg mx-auto">
      {/* Status Badge */}
      <div className="text-center mb-6">
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${statusDisplay.bgClass} mb-4`}
        >
          <span className="text-xl" aria-hidden="true">
            {statusDisplay.emoji}
          </span>
          <span className={`font-bold text-lg ${statusDisplay.colorClass}`}>
            {statusDisplay.label}
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          {incentive.stateName} Heat Pump Rebates
        </h2>
      </div>

      {/* Staleness Warning */}
      {staleWarning && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4 text-sm text-amber-800">
          <span className="font-medium">⚠️ Status may be outdated</span> — last
          verified {formattedDate}
        </div>
      )}

      {/* Summary */}
      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
        {incentive.summary}
      </p>

      {/* Dates */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-sm text-slate-500 mb-6 pb-6 border-b border-slate-100">
        <div>
          <span className="font-medium text-slate-700">As of:</span>{' '}
          {formattedDate}
        </div>
        <div>
          <span className="font-medium text-slate-700">Last verified:</span>{' '}
          {formattedDate}
        </div>
      </div>

      {/* Sources */}
      <div className="mb-6">
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
          Official Sources
        </p>
        <ul className="space-y-1">
          {incentive.sources.map((source, index) => (
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
      </div>

      {/* CTAs */}
      <div className="flex flex-col gap-3">
        <Link href="/states/ca" className="btn-primary w-full text-center">
          See California program details
        </Link>
        <Link href="/get-quotes" className="btn-secondary w-full text-center">
          Find installers who handle current CA rebates
        </Link>
      </div>
    </div>
  );
}
