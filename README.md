# SwipeAttend

SwipeAttend is a lightweight, intuitive attendance tracker designed for educators and administrators. Built with React and Capacitor, it allows users to quickly manage class batches, track student attendance with a dynamic Tinder-like swiping interface, and seamlessly export or import attendance records using Excel.

## Key Features

- **Gesture-Based Attendance**: Quickly mark students as Present, Absent, or Pending by swiping through a beautiful stack of student cards.
- **Two-Way Excel Sync**: 
  - **Export**: Generate comprehensive daily Attendance Sheets organized by month, complete with day-by-day 'P' and 'A' markings. Also supports a Standard Summary export.
  - **Import**: Automatically read student lists, or upload a previously exported Attendance Sheet. The app smartly synchronizes edits—reverse-engineering any manual changes you made in Excel back into the app without creating duplicate records.
- **Detailed Student Reports**: Track individual student performance, daily check-in histories, and overall vitality scores using interactive data visualizations.
- **Offline First**: All data is stored locally on the device, ensuring ultra-fast load times and complete privacy.
- **Cross-Platform**: Built as a responsive PWA that can be natively compiled into iOS or Android applications via Capacitor.

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Native Engine**: Capacitor (Filesystem & Share API)
- **Data Export/Import**: SheetJS (`xlsx`)
