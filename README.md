# CareView — ER Dashboard

A Next.js dashboard for real-time emergency room wait times, built to the CareView design spec.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Data fetching | TanStack Query v5 |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Testing | Vitest + React Testing Library |

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Running Tests

```bash
npm test            # run all tests once
npm run test:watch  # watch mode
```

**14 tests across 3 suites:**
- `StatCard.test.tsx` — rendering, aria-label fallback, aria-live region
- `TriageSteps.test.tsx` — all steps render, semantic list, section heading
- `api.test.ts` — response shape, types, ISO date, triage breakdown fields

## Project Structure

```
├── app/
│   ├── api/wait-times/route.ts   # GET /api/wait-times (mock data)
│   ├── layout.tsx                # Root layout + QueryProvider
│   ├── page.tsx                  # Dashboard page
│   └── providers.tsx             # TanStack QueryClientProvider
├── components/
│   ├── ERDashboard.tsx           # Main dashboard (client component)
│   ├── Navbar.tsx                # Top navigation bar
│   ├── StatCard.tsx              # Reusable stat display card
│   └── TriageSteps.tsx           # 4-step triage process section
├── hooks/
│   └── useWaitTimes.ts           # TanStack Query hook (5m auto-refresh)
└── __tests__/
    ├── StatCard.test.tsx
    ├── TriageSteps.test.tsx
    └── api.test.ts
```

## Key Features

### Auto-refresh
TanStack Query's `refetchInterval: 300_000` polls `/api/wait-times` every 5 min.

### Mock API
`GET /api/wait-times` returns mock data with slight random variation per call to simulate live data. Swap in a real DB/service in `app/api/wait-times/route.ts` when ready — the exported `WaitTimeData` interface keeps the frontend type-safe automatically.

### Accessibility
- Semantic HTML: nav, main, article, section, ol
- aria-label on all interactive elements and landmark regions
- aria-current="page" on the active nav link
- aria-live="polite" + aria-atomic="true" on stat values for screen reader announcements
- role="alert" on the error state
- Full keyboard navigation with visible focus rings (focus-visible:ring-2)

### Responsive Layout
- Stats grid: 1 column on mobile → 2 columns on sm+
- Triage steps: 1 col → 2 col → 4 col
