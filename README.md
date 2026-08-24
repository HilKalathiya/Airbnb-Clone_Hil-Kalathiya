# Airbnb Clone — Take-Home Task

## Overview
This project is an original, desktop-focused recreation of an Airbnb listing page. It was built from scratch without copying the reference site's source code. The implementation accurately matches the visual geometries, typography, and interactive behaviors observed in the reference, adhering strictly to the constraints of the take-home task.

## Reference
*Reference URL provided by the recruiter.*

## Tech Stack
- **Framework**: Next.js (App Router)
- **Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS & Inline CSS for strict geometry constraints
- **Icons**: Lucide React

## Implemented Views
- **Listing Page**: Complete main layout, strictly adhering to a 1120px max-width container and corresponding multi-column grids.
- **Photo Tour**: Full-screen modal with masonry-style grid gallery structure.
- **Lightbox**: Dedicated full-screen modal featuring isolated image focus, counter tracking, and navigation.

## Implemented Features
- **Sticky Navigation**: Scroll-aware header with dynamic intersection observer triggers that snap into view after scrolling past the hero section.
- **Hero Gallery**: Interactive 5-image mosaic with hover states and a "Show all photos" action trigger.
- **Photo Tour**: Context-aware masonry photo layout overlay.
- **Lightbox**: Cross-linked from both the Hero Gallery and Photo Tour.
- **Previous/Next Navigation**: Native carousel scrolling using CSS `overflow-x: auto` with hidden scrollbars for clean UI.
- **Amenities Modal**: Centered modal implementing full interactive component boundaries (`use client`).
- **Calendar**: Complete mock visual structure for the booking calendar.
- **Booking Sidebar**: Sticky desktop widget with exact `#E31C5F` gradient interactive buttons.
- **Reviews Section**: Symmetrical column-based layout utilizing project avatars.
- **Location Section**: Synthetically engineered CSS-only gradient static map avoiding heavy external API dependencies.
- **Host Section**: Two-column precision layout with overlapping verification badges and strict metric columns.
- **Things to Know**: Symmetrical 3-column footer array.
- **More Stays**: Interactive, strictly dimensioned horizontal carousel showing precisely 5 visible cards.

## Running Locally

To run the project on your local machine:

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:3000`.

## Validation

The project passes strict static analysis and builds cleanly without RSC boundary errors:

```bash
npm run type-check  # PASS
npm run lint        # PASS
npm run build       # PASS
```

## AI Development Workflow
This project was implemented autonomously using an AI assistant over multiple chunks.
The complete sequence of prompts mapping the chronological workflow is located in:
`ai-workflow/prompts.md`

## Architecture
A high-level production-scale architecture diagram of a vacation-rental marketplace is available at:
`architecture/airbnb-marketplace-architecture.md` (Mermaid format, convertible to PDF).
