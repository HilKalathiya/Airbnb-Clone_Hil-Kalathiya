// ============================================================
// STATIC LISTING DATA — Airbnb Clone Implementation
// Source: Reference assets in Public/ directory
// All image paths reference /public assets served by Next.js
// DO NOT use invented or placeholder paths
// ============================================================

// --------------- TYPE DEFINITIONS ---------------

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface LightboxImage extends GalleryImage {
  category: string;
  categoryId: string;
  globalIndex: number;
}

export interface SleepingArrangement {
  name: string;
  description: string;
  image: string;
}

export interface Amenity {
  icon: string; // lucide-react icon name or svg path
  label: string;
  available: boolean; // false = shown crossed out
}

export interface Review {
  id: string;
  reviewerName: string;
  reviewerAvatar: string | null; // null = use initials fallback
  reviewerInitial: string;
  durationOnAirbnb: string;
  date: string;
  rating: number;
  text: string;
  hasShowMore?: boolean;
}

export interface ReviewCategory {
  label: string;
  score: number;
  icon: string; // chip image path
}

export interface ReviewTag {
  label: string;
  count: number;
  chipImage: string; // path to chip image from Chips/
}

export interface CoHost {
  name: string;
  avatar: string | null;
  initial: string;
}

export interface HostInfo {
  name: string;
  avatar: string;
  role: string;
  reviews: number;
  rating: number;
  yearsHosting: number;
  bornIn: string;
  school: string;
  responseRate: string;
  responseTime: string;
  coHosts: CoHost[];
}

export interface PhotoTourSection {
  id: string;
  title: string;
  amenities: string[];
  images: GalleryImage[];
}

export interface SimilarStay {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
}

export interface ListingLocation {
  city: string;
  state: string;
  country: string;
  neighbourhoodHighlight: string;
  exactLocationNote: string;
}

export interface Listing {
  title: string;
  locationLabel: string;
  subtitle: string;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  rating: number;
  reviewCount: number;
  heroGallery: GalleryImage[];
  host: HostInfo;
  keyFeatures: Array<{ icon: string; title: string; description: string }>;
  description: string;
  sleepingArrangements: SleepingArrangement[];
  amenities: Amenity[];
  pricing: {
    pricePerNight: number;
    currency: string;
    currencySymbol: string;
    totalNights: number;
    totalPrice: number;
    checkin: string;
    checkout: string;
    guests: number;
    freeCancellationBefore: string;
  };
  reviewCategories: ReviewCategory[];
  reviewTags: ReviewTag[];
  reviews: Review[];
  location: ListingLocation;
  houseRules: {
    checkin: string;
    checkout: string;
    maxGuests: number;
  };
  cancellationPolicy: string;
  safetyInfo: string[];
  photoTour: PhotoTourSection[];
  similarStays: SimilarStay[];
}

// --------------- ASSET PATHS (VERIFIED) ---------------
// All paths are relative to the /public directory of the Next.js app.
// Assets are copied from AirBnB_Clone/Public/ into airbnb-clone/public/

const IMG = {
  // --- Hero Gallery (5 images, matched to reference screenshot) ---
  // Hero (left large): jacuzzi/lounge area shot from above
  hero: '/images/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg',
  // Top-right pair
  gallery2: '/images/cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg', // outdoor seating close-up
  gallery3: '/images/30ad93b2-293f-494d-b645-626303c6cb93.jpeg', // jacuzzi top view
  // Bottom-right pair
  gallery4: '/images/dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg', // bedroom
  gallery5: '/images/42befad7-fb29-473d-91db-b03e7a544d1d.jpeg', // aerial building exterior

  // --- Sleeping Arrangement Cards ---
  bedroom: '/images/3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg',
  livingRoom: '/images/ddc853d7-e658-405c-bedc-8f31106c447e.jpeg',

  // --- Avatars (VERIFIED filenames in Public/avatars/) ---
  hostAvatar: '/avatars/host.jpeg',
  coHost1: '/avatars/co1.jpg',
  coHost2: '/avatars/co2.jpg',
  coHost3: '/avatars/co3.jpg',
  rev1: '/avatars/rev1.jpeg',
  rev2: '/avatars/rev2.jpeg',
  rev3: '/avatars/rev3.jpeg',
  rev4: '/avatars/rev4.jpeg',
  rev5: '/avatars/rev5.jpeg',

  // --- UI Elements (VERIFIED filenames in Public/ui/) ---
  laurelLeft: '/ui/laurel-left.png',
  laurelRight: '/ui/laurel-right.png',
  discountTag: '/ui/discount.svg',
  searchbarHouse: '/ui/searchbar-house.png',

  // --- Review Chips (VERIFIED filenames in Public/Chips/) ---
  chipComfort: '/chips/comfort.png',
  chipAccuracy: '/chips/accuracy.png',
  chipHotTub: '/chips/hot-tub.png',
  chipCondition: '/chips/condition.png',
  chipHospitality: '/chips/hospitality.png',
  chipCleanliness: '/chips/cleanliness.png',
  chipAmenities: '/chips/amenities.png',
  chipLocation: '/chips/location.png',

  // --- Similar Stays (VERIFIED filenames in Public/similar/) ---
  similar1: '/similar/s1.jpeg',
  similar2: '/similar/s2.jpeg',
  similar3: '/similar/s3.jpeg',
  similar4: '/similar/s4.jpeg',
  similar5: '/similar/s5.jpeg',
  similar6: '/similar/s6.jpeg',

  // --- Full Property Image Set (all 43 JPEGs for Photo Tour) ---
  // Living Room 1
  lr1_1: '/images/34529829-a971-44d3-ac2f-90ea3678a34d.jpeg',
  lr1_2: '/images/929545d3-e241-46c0-8a70-c24531ce7b54.jpeg',
  lr1_3: '/images/5b856fde-a393-41bf-b373-c9d02e64221f.jpeg',
  // Living Room 2 (jacuzzi lounge)
  lr2_1: '/images/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg',
  lr2_2: '/images/cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg',
  lr2_3: '/images/3c6e6809-1bb1-47a6-8e24-aff593e1c28f.jpeg',
  lr2_4: '/images/48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg',
  lr2_5: '/images/4fede77d-7a71-446f-89e3-263af937f3fa.jpeg',
  lr2_6: '/images/608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg',
  lr2_7: '/images/30ad93b2-293f-494d-b645-626303c6cb93.jpeg',
  // Full Kitchen
  kitchen_1: '/images/ddc853d7-e658-405c-bedc-8f31106c447e.jpeg',
  kitchen_2: '/images/5adfdf3e-d497-4efc-ab8c-fc559dab311e.jpeg',
  // Bedroom
  bed_1: '/images/dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg',
  bed_2: '/images/3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg',
  bed_3: '/images/153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg',
  bed_4: '/images/1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg',
  bed_5: '/images/f1da1c3d-0d10-481e-9b63-c71f9073f30b.jpeg',
  bed_6: '/images/97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg',
  // Full Bathroom
  bath_1: '/images/9be71047-fc52-438a-9270-75cb470f6752.jpeg',
  bath_2: '/images/79f59adb-5a5f-4d6c-8109-1f01f4ca0d03.jpeg',
  bath_3: '/images/b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg',
  bath_4: '/images/862d936c-0f34-4e50-af87-b519e2781d19.jpeg',
  // Gym
  gym_1: '/images/9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg',
  gym_2: '/images/246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg',
  gym_3: '/images/56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg',
  // Exterior
  ext_1: '/images/42befad7-fb29-473d-91db-b03e7a544d1d.jpeg',
  ext_2: '/images/5adfdf3e-d497-4efc-ab8c-fc559dab311e.jpeg',
  ext_3: '/images/23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg',
  ext_4: '/images/f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg',
  ext_5: '/images/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg',
  // Pool
  pool_1: '/images/0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg',
  pool_2: '/images/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg',
  pool_3: '/images/67c61c6f-6260-4809-9510-0360e58a345d.jpeg',
  // Additional Photos
  add_1: '/images/8eb65a8b-e795-4870-b141-6f63b1be24ae.jpeg',
  add_2: '/images/fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg',
  add_3: '/images/79addceb-8c2d-419b-80ff-e29af426a94c.jpeg',
  add_4: '/images/a45feaa2-b607-4092-83ac-5fd4b2894959.jpeg',
  add_5: '/images/a74e3c0b-3188-4442-9146-1cd4d6ea45df.jpeg',
  add_6: '/images/70325367-cbae-4993-b560-18cd3f6edd53.jpeg',
  add_7: '/images/9642a60d-e9de-4e1a-89c2-9ebd230f4a74.jpeg',
  add_8: '/images/f19d8c0a-1d88-42a4-9218-686d4f0db7e4.jpeg',
  add_9: '/images/fe37b80e-da8a-4225-b27b-dfbb5d763c01.jpeg',
  add_10: '/images/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg',
};

// --------------- LISTING DATA ---------------

export const listing: Listing = {
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
  locationLabel: 'Candolim, Goa, India',
  subtitle: 'Entire serviced apartment in Candolim, India',
  guests: 3,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  rating: 4.95,
  reviewCount: 19,

  heroGallery: [
    { src: IMG.hero, alt: 'Private jacuzzi lounge with rattan furniture and mood lighting' },
    { src: IMG.gallery2, alt: 'Outdoor seating area with rattan chairs and tropical plants' },
    { src: IMG.gallery3, alt: 'Private jacuzzi top view with wooden surround' },
    { src: IMG.gallery4, alt: 'Bedroom with double bed and warm ambient lighting' },
    { src: IMG.gallery5, alt: 'Aerial view of Amor de Goa building exterior' },
  ],

  host: {
    name: 'Mirashya Homes',
    avatar: IMG.hostAvatar,
    role: 'Host',
    reviews: 1463,
    rating: 4.68,
    yearsHosting: 2,
    bornIn: 'the 80s',
    school: 'NICMAR GOA',
    responseRate: '100%',
    responseTime: 'within an hour',
    coHosts: [
      { name: 'Sharath', avatar: IMG.coHost1, initial: 'S' },
      { name: 'Aman Dev Pahwa', avatar: IMG.coHost2, initial: 'A' },
      { name: 'Maria Karen Priyanka', avatar: IMG.coHost3, initial: 'M' },
      { name: 'Simran', avatar: null, initial: 'S' },
      { name: 'Pallavi', avatar: null, initial: 'P' },
      { name: 'Sanyukta', avatar: null, initial: 'S' },
      { name: 'Shruti', avatar: null, initial: 'S' },
      { name: 'Amisha', avatar: null, initial: 'A' },
    ],
  },

  keyFeatures: [
    {
      icon: 'outdoor',
      title: 'Outdoor entertainment',
      description: 'The pool and alfresco dining are great for summer trips.',
    },
    {
      icon: 'fan',
      title: 'Designed for staying cool',
      description: 'Beat the heat with the A/C and ceiling fan.',
    },
    {
      icon: 'key',
      title: 'Self check-in',
      description: 'You can check in with the building staff.',
    },
  ],

  description:
    '🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 📡, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖, popular cafés, restaurants, and nightlife 🍹, it\'s your perfect holiday retreat.',

  sleepingArrangements: [
    {
      name: 'Bedroom',
      description: '1 double bed',
      image: IMG.bedroom,
    },
    {
      name: 'Living room',
      description: '1 sofa',
      image: IMG.livingRoom,
    },
  ],

  amenities: [
    { icon: 'kitchen', label: 'Kitchen', available: true },
    { icon: 'wifi', label: 'Wifi', available: true },
    { icon: 'briefcase', label: 'Dedicated workspace', available: true },
    { icon: 'car', label: 'Free parking on premises', available: true },
    { icon: 'waves', label: 'Pool', available: true },
    { icon: 'hot-tub', label: 'Hot tub', available: true },
    { icon: 'paw-print', label: 'Pets allowed', available: true },
    { icon: 'camera', label: 'Exterior security cameras on property', available: true },
    { icon: 'smoke-detector', label: 'Carbon monoxide alarm', available: false },
    { icon: 'flame', label: 'Smoke alarm', available: false },
  ],

  pricing: {
    pricePerNight: 5700,
    currency: 'INR',
    currencySymbol: '₹',
    totalNights: 5,
    totalPrice: 28499,
    checkin: '10/18/2026',
    checkout: '10/23/2026',
    guests: 2,
    freeCancellationBefore: '17 October',
  },

  reviewCategories: [
    { label: 'Cleanliness', score: 5.0, icon: IMG.chipCleanliness },
    { label: 'Accuracy', score: 5.0, icon: IMG.chipAccuracy },
    { label: 'Check-in', score: 5.0, icon: IMG.chipCondition },
    { label: 'Communication', score: 5.0, icon: IMG.chipHospitality },
    { label: 'Location', score: 4.8, icon: IMG.chipLocation },
    { label: 'Value', score: 4.8, icon: IMG.chipAmenities },
  ],

  reviewTags: [
    { label: 'Comfort', count: 6, chipImage: IMG.chipComfort },
    { label: 'Accuracy', count: 5, chipImage: IMG.chipAccuracy },
    { label: 'Hot tub', count: 5, chipImage: IMG.chipHotTub },
    { label: 'Condition', count: 4, chipImage: IMG.chipCondition },
    { label: 'Hospitality', count: 8, chipImage: IMG.chipHospitality },
    { label: 'Cleanliness', count: 4, chipImage: IMG.chipCleanliness },
    { label: 'Amenities', count: 2, chipImage: IMG.chipAmenities },
  ],

  reviews: [
    {
      id: 'r1',
      reviewerName: 'Amit',
      reviewerAvatar: null,
      reviewerInitial: 'A',
      durationOnAirbnb: '2 months on Airbnb',
      date: '1 week ago',
      rating: 5,
      text: 'Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.',
    },
    {
      id: 'r2',
      reviewerName: 'Aheesh',
      reviewerAvatar: IMG.rev1,
      reviewerInitial: 'A',
      durationOnAirbnb: '3 years on Airbnb',
      date: '2 weeks ago',
      rating: 5,
      text: 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.',
      hasShowMore: true,
    },
    {
      id: 'r3',
      reviewerName: 'Samiksha',
      reviewerAvatar: IMG.rev2,
      reviewerInitial: 'S',
      durationOnAirbnb: '8 months on Airbnb',
      date: 'May 2026',
      rating: 5,
      text: 'the host nitish was really great help',
    },
    {
      id: 'r4',
      reviewerName: 'Vedant',
      reviewerAvatar: null,
      reviewerInitial: 'V',
      durationOnAirbnb: '4 years on Airbnb',
      date: 'May 2026',
      rating: 5,
      text: 'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....',
      hasShowMore: true,
    },
    {
      id: 'r5',
      reviewerName: 'Vaibhav S',
      reviewerAvatar: IMG.rev3,
      reviewerInitial: 'V',
      durationOnAirbnb: '3 years on Airbnb',
      date: 'May 2026',
      rating: 5,
      text: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.",
    },
    {
      id: 'r6',
      reviewerName: 'Mohd',
      reviewerAvatar: IMG.rev4,
      reviewerInitial: 'M',
      durationOnAirbnb: '5 years on Airbnb',
      date: 'May 2026',
      rating: 5,
      text: 'Great place. Exactly as described in the listing.',
    },
  ],

  location: {
    city: 'Candolim',
    state: 'Goa',
    country: 'India',
    neighbourhoodHighlight:
      'Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.',
    exactLocationNote: 'Exact location will be provided after booking.',
  },

  houseRules: {
    checkin: 'Check-in after 2:00 pm',
    checkout: 'Checkout before 11:00 am',
    maxGuests: 3,
  },

  cancellationPolicy:
    'Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund. Review this host\'s full policy for details.',

  safetyInfo: [
    'Carbon monoxide alarm not reported',
    'Smoke alarm not reported',
    'Exterior security cameras on property',
  ],

  photoTour: [
    {
      id: 'living-room-1',
      title: 'Living room 1',
      amenities: ['Sofa', 'Air conditioning', 'Ceiling fan', 'TV'],
      images: [
        { src: IMG.lr1_1, alt: 'Living room 1 main view' },
        { src: IMG.lr1_2, alt: 'Living room 1 alternate view' },
        { src: IMG.lr1_3, alt: 'Living room 1 with dining area' },
      ],
    },
    {
      id: 'living-room-2',
      title: 'Living room 2',
      amenities: ['Ceiling fan', 'Hot tub'],
      images: [
        { src: IMG.lr2_1, alt: 'Jacuzzi lounge wide angle' },
        { src: IMG.lr2_2, alt: 'Outdoor seating' },
        { src: IMG.lr2_3, alt: 'Alternate lounge view' },
        { src: IMG.lr2_4, alt: 'Lounge from above' },
        { src: IMG.lr2_5, alt: 'Night lounge view' },
        { src: IMG.lr2_6, alt: 'Lounge overview' },
        { src: IMG.lr2_7, alt: 'Jacuzzi close-up' },
      ],
    },
    {
      id: 'full-kitchen',
      title: 'Full kitchen',
      amenities: [
        'Freezer', 'Fridge', 'Blender', 'Cooker', 'Cooking basics',
        'Kettle', 'Microwave', 'Toaster', 'Wine glasses', 'Coffee',
        'Crockery and cutlery',
      ],
      images: [
        { src: IMG.kitchen_1, alt: 'Kitchen with appliances' },
        { src: IMG.kitchen_2, alt: 'Kitchen counter and dining' },
      ],
    },
    {
      id: 'bedroom',
      title: 'Bedroom',
      amenities: [
        'Double bed', 'Air conditioning', 'Bed linen', 'Ceiling fan',
        'Clothes storage', 'Cot', 'Hangers', 'Iron', 'Room-darkening blinds',
        'Cleaning available during stay', 'Cleaning products',
        'Long-term stays allowed', 'Private entrance', 'Wifi',
      ],
      images: [
        { src: IMG.bed_1, alt: 'Bedroom main view' },
        { src: IMG.bed_2, alt: 'Bedroom angle 2' },
        { src: IMG.bed_3, alt: 'Bedroom angle 3' },
        { src: IMG.bed_4, alt: 'Bedroom doorway' },
        { src: IMG.bed_5, alt: 'Bedroom corner' },
        { src: IMG.bed_6, alt: 'Bedroom with AC' },
      ],
    },
    {
      id: 'full-bathroom',
      title: 'Full bathroom',
      amenities: ['Hot water', 'Shower', 'Shampoo', 'Hair dryer', 'Towels'],
      images: [
        { src: IMG.bath_1, alt: 'Bathroom main view' },
        { src: IMG.bath_2, alt: 'Bathroom sink' },
        { src: IMG.bath_3, alt: 'Bathroom shower' },
        { src: IMG.bath_4, alt: 'Bathroom amenities' },
      ],
    },
    {
      id: 'gym',
      title: 'Gym',
      amenities: ['Exercise equipment'],
      images: [
        { src: IMG.gym_1, alt: 'Gym equipment' },
        { src: IMG.gym_2, alt: 'Gym alternate view' },
        { src: IMG.gym_3, alt: 'Gym overview' },
      ],
    },
    {
      id: 'exterior',
      title: 'Exterior',
      amenities: [],
      images: [
        { src: IMG.ext_1, alt: 'Aerial exterior' },
        { src: IMG.ext_2, alt: 'Building side view' },
        { src: IMG.ext_3, alt: 'Bird\'s eye view' },
        { src: IMG.ext_4, alt: 'Building front' },
        { src: IMG.ext_5, alt: 'Building overview' },
      ],
    },
    {
      id: 'pool',
      title: 'Pool',
      amenities: ['Pool'],
      images: [
        { src: IMG.pool_1, alt: 'Pool top-down view' },
        { src: IMG.pool_2, alt: 'Pool from balcony' },
        { src: IMG.pool_3, alt: 'Pool area overview' },
      ],
    },
    {
      id: 'additional-photos',
      title: 'Additional photos',
      amenities: [],
      images: [
        { src: IMG.add_1, alt: 'Common lounge area' },
        { src: IMG.add_2, alt: 'Common area' },
        { src: IMG.add_3, alt: 'Additional view' },
        { src: IMG.add_4, alt: 'Additional view 2' },
        { src: IMG.add_5, alt: 'Additional amenity space' },
        { src: IMG.add_6, alt: 'Additional area 3' },
        { src: IMG.add_7, alt: 'Additional area 4' },
        { src: IMG.add_8, alt: 'Additional area 5' },
        { src: IMG.add_9, alt: 'Additional area 6' },
        { src: IMG.add_10, alt: 'Additional area 7' },
      ],
    },
  ],

  similarStays: [
    {
      id: 'ss1',
      title: 'Beautiful Studio with a view to die for',
      image: IMG.similar1,
      price: 23600,
      rating: 4.91,
    },
    {
      id: 'ss2',
      title: 'NAQAB - 1bhk with private pool',
      image: IMG.similar2,
      price: 42218,
      rating: 4.95,
    },
    {
      id: 'ss3',
      title: 'Greentique Luxury Flat with plunge pool, Calangute',
      image: IMG.similar3,
      price: 44506,
      rating: 4.94,
    },
    {
      id: 'ss4',
      title: 'The Tropical Studio | 5 mins to Beach',
      image: IMG.similar4,
      price: 22824,
      rating: 4.96,
    },
    {
      id: 'ss5',
      title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute',
      image: IMG.similar5,
      price: 39942,
      rating: 4.95,
    },
  ],
};

// Canonical array of 43 images used globally for Lightbox and metadata mapping
export const globalImages: LightboxImage[] = [];
let _globalIndex = 0;
for (const section of listing.photoTour) {
  for (const image of section.images) {
    globalImages.push({
      ...image,
      category: section.title,
      categoryId: section.id,
      globalIndex: _globalIndex++,
    });
  }
}
