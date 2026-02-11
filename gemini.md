# Project Context: Prinz Oil Website

## Project Overview
Prinz Oil is a high-end, modern corporate website designed to showcase a premium Nigerian oil & energy company. The project aims to convey trust, authority, and scale, similar to major industry players like Dangote Group or NNPC.

## Core Features

### 1. Public Pages (Client-Facing)
- **Home Page**:
    - **Hero Section**: Large bold headline, subtext, CTA buttons ("About Us", "Our Operations"), background imagery with subtle motion.
    - **Who We Are**: Short intro, link to About page.
    - **What We Do**: Grid/cards for Oil Exploration, Energy Distribution, Refining & Logistics, Strategic Partnerships.
    - **Leadership Preview**: CEO card + executive members.
    - **Why Choose Prinz Oil**: Trust, compliance, sustainability, innovation.
    - **Footer**: Company info, social links, contact, copyright.
- **About Page**: Company overview (mission, vision, values), history timeline, sustainability & compliance.
- **Team Page**: Grid layout of team members (Image, Name, Role, Description, Socials).
- **Operations / Services Page**: Detailed explanation of operations.

### 2. Admin Dashboard (Protected Access - Internal Use Only)
- **Dashboard Home**: Visitor analytics (Total visits, Daily visits, Page views).
- **Team Management**:
    - Add, Edit, Delete team members.
    - Fields: Name, Role/Title, Description, Profile Image, Social Links.
- **Content Control**: Edit homepage texts and About page content.

## Technical Requirements
- **Frontend**: Next.js (React).
- **Styling**: Tailwind CSS.
- **Backend/Database**: Supabase (PostgreSQL, Auth).
- **Authentication**: Supabase Auth (Admin only).

## Design Aesthetic
- **Style**: High-end corporate, minimalist, glassmorphism (subtle).
- **Colors**:
    - Primary: Deep Navy / Dark Charcoal (Blue shade).
    - Accent: Orange/Yellow (Oil/Energy feel).
    - Backgrounds: White & Soft Gray.
- **Typography**: Modern sans-serif, bold headings.
- **Responsiveness**: Mobile-first, fully responsive.

## Developer Notes
- **Supabase**: Schemas stored in `supabase/` folder.
- **State Management**: React State / Context.
- **Icons**: Lucide React or similar.