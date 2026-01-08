export type StateCode = 'CA';

export type IncentiveStatus = 'open' | 'limited' | 'paused';

export interface Source {
  label: string;
  url: string;
}

export interface StateIncentive {
  stateCode: StateCode;
  stateName: string;
  status: IncentiveStatus;
  lastVerified: string; // YYYY-MM-DD format
  summary: string;
  sources: Source[];
}

export const incentives: Record<StateCode, StateIncentive> = {
  CA: {
    stateCode: 'CA',
    stateName: 'California',
    status: 'limited',
    lastVerified: '2026-01-05',
    summary:
      'California heat pump rebates are currently limited and vary by region. As of January 5, 2026, some state and utility-run programs remain active, but funding caps, pauses, or waitlists apply in many areas. Availability depends on where you live and which utility serves your home.',
    sources: [
      {
        label: 'California Energy Commission',
        url: 'https://www.energy.ca.gov/',
      },
    ],
  },
};

// Utility functions

/**
 * Format date string to "Month Day, Year" format.
 * Uses UTC to prevent server/client timezone drift.
 */
export function formatDate(dateString: string): string {
  const date = new Date(`${dateString}T00:00:00Z`);
  return date.toLocaleDateString('en-US', {
    timeZone: 'UTC',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Calculate days since verification date.
 * Uses UTC to prevent timezone drift between server/client.
 * Returns 0 if date is in the future (clock skew protection).
 */
export function getDaysSinceVerification(lastVerified: string): number {
  const verified = new Date(`${lastVerified}T00:00:00Z`);
  const now = new Date();
  const todayUTC = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );
  const diffMs = todayUTC.getTime() - verified.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays); // Clamp to prevent negative values
}

/**
 * Check if verification is stale (> 30 days old).
 * Exactly 30 days = not stale.
 */
export function isStale(lastVerified: string): boolean {
  return getDaysSinceVerification(lastVerified) > 30;
}

export function getStatusDisplay(status: IncentiveStatus): {
  label: string;
  emoji: string;
  colorClass: string;
  bgClass: string;
} {
  switch (status) {
    case 'open':
      return {
        label: 'Open',
        emoji: '🟢',
        colorClass: 'text-green-700',
        bgClass: 'bg-green-100',
      };
    case 'limited':
      return {
        label: 'Limited / Region-Dependent',
        emoji: '🟡',
        colorClass: 'text-yellow-800',
        bgClass: 'bg-yellow-100',
      };
    case 'paused':
      return {
        label: 'Paused / Closed',
        emoji: '🔴',
        colorClass: 'text-red-700',
        bgClass: 'bg-red-100',
      };
    default: {
      // Exhaustiveness check - TypeScript will error if a case is missed
      const _exhaustive: never = status;
      return _exhaustive;
    }
  }
}
