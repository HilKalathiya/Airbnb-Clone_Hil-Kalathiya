# AI-Assisted Development Workflow

## Initial Project Planning
**Prompt:** "Audit the reference screenshots. Create a master plan mapping out the Airbnb listing layout into manageable chunks, defining the global typography, geometry, and color tokens."

## CHUNK 1 & 2 — Global Config & Scaffold
**Prompt:** "Initialize the Next.js project layout and import the Airbnb Cereal VF font. Create the foundational global CSS file containing the primary layout variables. Stub out the page container with a max-width of 1120px."

## CHUNK 3 — Header
**Prompt:** "Implement the sticky top Header. It must span full width but contain the inner logo, search bar, and user profile controls within the 1120px page container. Ensure the right-side host menu matches the reference spacing."

## CHUNK 4 — Hero / Gallery
**Prompt:** "Build the Hero Title and 5-image mosaic Gallery. The gallery must be 1120px wide with a 12px border radius. Implement the grid layout strictly according to the provided forensic geometry. Do not use random Tailwind spacing; adhere exactly to the pixel measurements."

## CHUNK 4.2 — Scroll-State Navigation
**Prompt:** "Implement the secondary sticky navigation bar that appears only after scrolling past the Hero gallery. It must contain the anchor links (Photos, Amenities, Reviews, Location) on the left, and a condensed booking widget (price, rating, reserve button) on the right."

## CHUNK 5 — Photo Tour
**Prompt:** "Build the Photo Tour modal. It must overtake the screen and render a masonry-style image grid sorted by rooms, matching the provided screenshot. Implement the sticky header with the close button."

## CHUNK 6 — Lightbox
**Prompt:** "Build the Lightbox modal. It should display a single large image in the center, a top header with a counter (e.g., 1 / 44), and chevron navigation controls on the sides. Make it accessible via the 'Show all photos' button in the Hero gallery."

## CHUNK 7 — Main Listing Content / Booking Layout
**Prompt:** "Create the primary two-column layout for the listing content. The left column must be exactly 652px wide, containing the title, guest favorite badge, host summary, sleeping section, and amenities. Set a 96px gap to the right column, which will house the Booking Sidebar."

## CHUNK 8 — Reviews
**Prompt:** "Implement the Reviews section. Recreate the 1120px wide grid containing the rating badges and review cards. Remove all visible scrollbars on the filter pills using CSS. Strictly align typography weights to match the reference."

## CHUNK 9 — Location
**Prompt:** "Implement the Location section. Construct a purely CSS-based static map using linear and radial gradients to avoid injecting external dependencies like Google Maps or Mapbox. Ensure the property marker and custom map controls (Search, Zoom) are positioned absolutely over the gradient canvas."

## CHUNK 10 — Host Section
**Prompt:** "Implement the 'Meet your host' section. Establish the complex left/right layout (340px / 732px) and meticulously stack the host metrics inside the left card. Align the 8 co-host avatars in a 3-column CSS Grid."

## CHUNK 11 — Things to Know
**Prompt:** "Implement the 'Things to know' footer section. Create a rigid 3-column grid mapping the Cancellation Policy, House Rules, and Safety warnings with corresponding Lucide SVG icons."

## CHUNK 12 — More Stays Nearby
**Prompt:** "Implement the 'More stays nearby' carousel. The 1120px container must perfectly fit exactly 5 cards of 208px each separated by 20px gaps. Hook up the chevron controls to scroll the hidden overflow horizontally."

## Final Visual Audit / Cleanup
**Prompt:** "Run a final audit on the codebase. Identify any placeholder files, dead code, unused UI components, and RSC client boundary issues. Strip all placeholders and ensure `npm run type-check` and `npm run build` pass completely."
