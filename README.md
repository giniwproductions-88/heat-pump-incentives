# Heat Pump Incentive Status

A PWA-first tool that shows California heat pump incentive status (Open/Limited/Paused) with day-accurate "As of" and "Last verified" timestamps.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Features

- ✅ Real-time status display (Open/Limited/Paused)
- ✅ Day-accurate verification dates
- ✅ Staleness detection (auto-downgrades to "Limited" after 30 days)
- ✅ Mobile-first, PWA-ready
- ✅ Official source links
- ✅ Static explainer pages

## Routes

- `/` — Main status tool (CA only for v0)
- `/states/ca` — California program explainer
- `/about` — Methodology and disclaimer
- `/get-quotes` — Placeholder for installer finder

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Data Model

Incentive data is stored in `src/data/incentives.ts`:

```typescript
{
  stateCode: 'CA',
  stateName: 'California',
  status: 'open' | 'limited' | 'paused',
  lastVerified: 'YYYY-MM-DD',
  summary: string,
  sources: [{ label: string, url: string }]
}
```

## Staleness Rule

If `today - lastVerified > 30 days`:
- Status is forced to "limited"
- Warning is displayed: "Status may be outdated"

This is computed client-side for freshness.

## Updating Status

1. Edit `src/data/incentives.ts`
2. Update `status` and `lastVerified` fields
3. Update `summary` if needed
4. Deploy

## PWA

- Manifest: `public/manifest.webmanifest`
- Icons: `public/icons/` (SVG placeholders - convert to PNG for production)

## Deploy to Vercel

1. Push to GitHub
2. Import repo in Vercel
3. Deploy

## v0 Scope Limits

- California only
- No calculator/savings math
- No login/accounts
- No lead-gen form (placeholder only)
- No database
- No analytics

## Future Roadmap

- [ ] Add more states
- [ ] Add utility-specific breakdowns
- [ ] Email notification for status changes
- [ ] Installer directory integration

---

Built as a comparison site project for tracking incentive availability.
