# Prinz Oil Website

A high-end corporate website for a premium Nigerian oil & energy company. Built with Next.js 14, Tailwind CSS, and Supabase.

## Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Environment Setup:**
    Create a `.env.local` file in the root directory and add your Supabase credentials:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

3.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser.

## Database Setup (Supabase)

1.  Create a new project on [Supabase](https://supabase.com).
2.  Go to the SQL Editor.
3.  Copy and paste the content of `supabase/schema.sql` and run it.
4.  This will create the `team_members` and `page_visits` tables and set up Row Level Security (RLS).
5.  **Authentication:** Go to Authentication -> Users and create an admin user (email/password) to log in to the dashboard.

## Features

-   **Public Pages:** Home, About, Team, Operations (Services).
-   **Admin Dashboard:**
    -   Secure Login.
    -   Visitor Analytics (Overview).
    -   Team Management (Add, Edit, Delete members).
-   **Design:**
    -   Corporate "Billion-Naira" aesthetic.
    -   Mobile-first responsive design.
    -   Glassmorphism effects.

## Project Structure

-   `app/`: Next.js App Router pages.
-   `components/`: Reusable UI components (Navbar, Footer, TeamCard, etc.).
-   `lib/`: Utility functions (Supabase client).
-   `supabase/`: SQL schemas.
