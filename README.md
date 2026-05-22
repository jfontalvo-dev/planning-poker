

# Planning Poker

**Live:** [poker-sprint.vercel.app](https://poker-sprint.vercel.app)

Real-time Planning Poker for Scrum teams. No sign-up required — create a room, share the code, and start estimating.

Built with **Next.js 16**, **React 19**, **TypeScript**, **Socket.IO**, **Zustand**, **Tailwind CSS 4** and **Framer Motion**.

## Features

- **Real-time voting** via WebSockets (Socket.IO)
- **Room management** — create or join with a 6-char code
- **Roles** — Admin, User, and Observer mode
- **Card sets** — Fibonacci, short sequence, or fully custom
- **Live stats** — min, average, and max shown on reveal
- **Round poker table** — users positioned around a circular table (up to 20)
- **Timer** — configurable countdown per estimation round
- **Card set editor** — admins can customize values with duplicate validation
- **Vote locking** — votes are blocked once cards are revealed
- **Auto-reconnect** — session persisted in localStorage
- **Guest access** — quick join flow for unauthenticated users
- **Responsive** — mobile-first with horizontal card scrolling
- **Animated UI** — smooth transitions powered by Framer Motion

## Architecture

### Overview

```
Client (Next.js 16 / React 19)  ←──Socket.IO──→  Server (Express + Socket.IO)
       │                                                    │
   Zustand Store                                   In-memory Map<Room>
```

The frontend is a Next.js app using the App Router. The backend is a standalone Express server handling all real-time events through Socket.IO. Room state is kept in-memory on the server and synchronized to clients via events.

### Project Structure

```
planning-poker/
├── app/                        # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx                # → Home view
│   ├── not-found.tsx           # → NotFound view
│   └── room/[id]/page.tsx      # → Room view
│
├── views/                      # Feature-based view modules
│   ├── Home/
│   │   ├── index.tsx           # Composes landing page sections
│   │   ├── components/         # HeroSection, FeaturesSection, CTAFormSection,
│   │   │                       # HowItWorksSection, Footer, JoinModal, etc.
│   │   ├── hooks/              # useLandingForm, useRoomCreation
│   │   ├── types/
│   │   └── utils/              # Animation variants, FEATURES, STEPS
│   │
│   ├── Room/
│   │   ├── index.tsx           # Composes Header, Sidebar, VotingArea, CardSelector
│   │   ├── components/         # Header, Sidebar, VotingArea, CardSelector,
│   │   │                       # CardSetModal, UserPopup, TimerPopup, TimerDisplay
│   │   ├── hooks/              # useRoom, useHeader, useVotingArea, useCardSelector,
│   │   │                       # useCardSetModal, useSidebar, useTimer, useTimerPopup,
│   │   │                       # useUserPopup, useGuestAccess
│   │   ├── types/
│   │   └── utils/              # Constants, positioning helpers, animation variants
│   │
│   ├── Guest/
│   │   ├── index.tsx
│   │   ├── components/         # GuestForm, GuestHeader, GuestInfoBox
│   │   ├── hooks/              # useGuestForm
│   │   └── types/
│   │
│   └── NotFound/
│       └── index.tsx
│
├── server/
│   └── index.ts                # Express + Socket.IO server (port 3001)
│
├── store/
│   └── roomStore.ts            # Zustand store (room, currentUser, votes)
│
├── lib/
│   ├── types/
│   │   ├── index.ts            # Room, User, Vote, CardSet, SocketEvents
│   │   └── alerts.ts           # Alert system types
│   └── utils.ts
│
├── hooks/                      # Shared hooks (useLocalStorage, useSocket, useAlert)
├── contexts/                   # AlertContext
└── components/                 # Shared components (AlertManager)
```

Each view follows the same internal pattern: `components/`, `hooks/`, `types/`, and `utils/` co-located with the view's `index.tsx`.

### Data Flow

1. **useRoom** hook connects to the Socket.IO server and syncs all events to the Zustand store.
2. Components read from `useRoomStore` and dispatch actions via socket emissions.
3. The server validates events, mutates in-memory room state, and broadcasts updates.
4. `useLocalStorage` persists the user session for auto-reconnect.

### Key Data Models

| Model | Fields |
|-------|--------|
| `Room` | `id`, `adminId`, `users[]`, `votes[]`, `revealed`, `cardSet`, timestamps |
| `User` | `id`, `name`, `role` (admin / user), `isObserver`, `joinedAt` |
| `Vote` | `userId`, `value`, `timestamp` |
| `CardSet` | `type` (fibonacci / short / custom), `values: number[]` |

## Socket.IO Events

| Client → Server | Description |
|-----------------|-------------|
| `create-room` | Create a new room |
| `join-room` | Join an existing room (max 20 users) |
| `vote` | Submit a vote (blocked if revealed) |
| `reveal-votes` | Reveal all votes (admin only) |
| `reset-votes` | Reset round (admin only) |
| `update-cards` | Change the card set (admin only) |
| `toggle-observer` | Toggle observer mode |
| `update-user-name` | Change display name |
| `leave-room` | Leave the room (admin transfers on leave) |
| `close-room` | Close the room (admin only) |
| `timer-start` / `timer-stop` | Control the timer |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
git clone <repository-url>
cd planning-poker
npm install
```

### Run

Start both the frontend and the backend:

```bash
# Terminal 1 — Next.js dev server (http://localhost:3000)
npm run dev

# Terminal 2 — Socket.IO server (http://localhost:3001)
npm run server
```

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3001` | Socket.IO server port |
| `CORS_ORIGIN` | `http://localhost:3000` | Allowed frontend origin |
| `NEXT_PUBLIC_SOCKET_URL` | `http://localhost:3001` | Socket URL used by the client |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS 4, Framer Motion |
| State | Zustand |
| Real-time | Socket.IO |
| Server | Express 5 |
| Language | TypeScript 5 |
| Icons | Lucide React |

## License

MIT

