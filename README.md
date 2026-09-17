# AttendIQ — Student Attendance Tracker & Goal Planner

> **Set your timetable once. Mark attendance in one tap. Know exactly where you stand and what you need to do to reach your goal.**

AttendIQ is a student-only personal attendance tracking and goal-management web application built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Firebase (Authentication & Cloud Firestore)**.

The interface faithfully reproduces the **Academic Precision** design system and screens generated in **Stitch MCP**, eliminating all legacy college reconciliation concepts in favor of a fast, student-first workflow.

---

## Key Features

1. **One-Tap Attendance Logging**
   - Tap `✓ Mark Present` to log attendance in less than a second.
   - Immediate optimistic UI update with real-time recalculation of overall %, subject rates, streaks, and safe buffers.
   - Support for `✕ Absent` and `⊘ Cancelled` (cancelled classes are strictly excluded from the denominator without breaking streaks).

2. **Weekly Recurring Timetable Engine**
   - Enter your weekly schedule once (Monday through Saturday).
   - Automatically projects recurring classes across the entire semester until final examination dates.
   - Individual single-occurrence exceptions (moving, cancelling, or adding substitute classes) without modifying recurring templates.

3. **Deterministic Mathematical Engine**
   - Attendance Rate: $\frac{\text{Present}}{\text{Eligible}} \times 100$ where $\text{Eligible} = \text{Present} + \text{Absent}$.
   - **Attendance Buffer (Safe Cuts)**: Computes the exact number of classes you can miss while staying above your institutional floor (e.g. 75%).
   - **Recovery Calculator**: Calculates minimum required classes to reach your personal target (e.g. 85%) before final exams or sessional tests.
   - **Next Class Simulator**: Side-by-side projection comparing standing if you attend vs if you miss.
   - **"What If I Miss Tomorrow?" Sandbox**: Instant impact projection for upcoming sessions.

4. **Mid-Semester Historical Aggregate Backfill**
   - Allows students starting mid-term to enter past conducted, present, absent, and cancelled counts with live validation ($P + A + C = \text{Conducted}$).
   - Integrates historical counts with live daily tracking without creating artificial past calendar events.

5. **Milestone Targets & Sessional Support**
   - Goal planning for **Sessionals (Mid-Semesters)** as well as **Final Examinations**.
   - Dual-track progress bars: Institutional Minimum (75%) vs Personal Goal (85%).

6. **Student Notification Center**
   - Streak milestone celebrations (3-class, 5-class, 10-class runs).
   - Critical deficit warnings with fastest recovery paths.
   - Buffer status alerts (zero college reconciliation).

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (with Stitch Academic Precision design tokens)
- **Backend & Auth**: Firebase Auth & Cloud Firestore (with offline persistence)
- **Deployment**: Vercel ready

---

## Getting Started

### 1. Prerequisites
- Node.js 18+ or 20+
- npm

### 2. Environment Configuration
Copy `.env.example` to `.env.local` and add your Firebase credentials:

```bash
cp .env.example .env.local
```

```text
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 3. Install Dependencies & Run Locally
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment to Vercel

1. Push your code to a GitHub repository.
2. In the [Vercel Dashboard](https://vercel.com/), click **Add New Project** and import the repository.
3. Add the `NEXT_PUBLIC_FIREBASE_*` environment variables in the Project Settings.
4. Click **Deploy**.

---

## Firestore Security Rules

To ensure strict user data isolation, deploy the included `firestore.rules`:

```bash
firebase deploy --only firestore:rules
```

Rules guarantee that authenticated users can only access their own documents (`/users/{userId}/**`).
