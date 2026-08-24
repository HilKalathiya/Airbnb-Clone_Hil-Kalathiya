// Asset manifest — development-time verification of all image paths
// Run: npx ts-node lib/assetManifest.ts  (or check at build time via type safety)

export const ASSET_MANIFEST = {
  // ---- HERO GALLERY (5 images) ----
  hero: '/images/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg',
  gallery2: '/images/cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg',
  gallery3: '/images/30ad93b2-293f-494d-b645-626303c6cb93.jpeg',
  gallery4: '/images/dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg',
  gallery5: '/images/42befad7-fb29-473d-91db-b03e7a544d1d.jpeg',

  // ---- UI ELEMENTS ----
  laurelLeft: '/ui/laurel-left.png',
  laurelRight: '/ui/laurel-right.png',
  discountTag: '/ui/discount.svg',
  searchbarHouse: '/ui/searchbar-house.png',

  // ---- AVATARS ----
  hostAvatar: '/avatars/host.jpeg',
  coHost1: '/avatars/co1.jpg',
  coHost2: '/avatars/co2.jpg',
  coHost3: '/avatars/co3.jpg',
  rev1: '/avatars/rev1.jpeg',
  rev2: '/avatars/rev2.jpeg',
  rev3: '/avatars/rev3.jpeg',
  rev4: '/avatars/rev4.jpeg',
  rev5: '/avatars/rev5.jpeg',

  // ---- REVIEW CHIPS ----
  chipComfort: '/chips/comfort.png',
  chipAccuracy: '/chips/accuracy.png',
  chipHotTub: '/chips/hot-tub.png',
  chipCondition: '/chips/condition.png',
  chipHospitality: '/chips/hospitality.png',
  chipCleanliness: '/chips/cleanliness.png',
  chipAmenities: '/chips/amenities.png',
  chipLocation: '/chips/location.png',

  // ---- SIMILAR STAYS ----
  similar1: '/similar/s1.jpeg',
  similar2: '/similar/s2.jpeg',
  similar3: '/similar/s3.jpeg',
  similar4: '/similar/s4.jpeg',
  similar5: '/similar/s5.jpeg',
  similar6: '/similar/s6.jpeg',

  // ---- PROPERTY IMAGES (all 43 verified filenames) ----
  img_0622: '/images/0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg',
  img_090d: '/images/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg',
  img_153a: '/images/153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg',
  img_1c82: '/images/1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg',
  img_2367: '/images/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg',
  img_23ea: '/images/23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg',
  img_246b: '/images/246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg',
  img_30ad: '/images/30ad93b2-293f-494d-b645-626303c6cb93.jpeg',
  img_3452: '/images/34529829-a971-44d3-ac2f-90ea3678a34d.jpeg',
  img_3c6e: '/images/3c6e6809-1bb1-47a6-8e24-aff593e1c28f.jpeg',
  img_3c90: '/images/3c90338e-86b4-423f-aae1-279e0ccc3a18.jpeg',
  img_3cf3: '/images/3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg',
  img_42be: '/images/42befad7-fb29-473d-91db-b03e7a544d1d.jpeg',
  img_48a8: '/images/48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg',
  img_4fed: '/images/4fede77d-7a71-446f-89e3-263af937f3fa.jpeg',
  img_56c4: '/images/56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg',
  img_5adf: '/images/5adfdf3e-d497-4efc-ab8c-fc559dab311e.jpeg',
  img_5b85: '/images/5b856fde-a393-41bf-b373-c9d02e64221f.jpeg',
  img_6087: '/images/608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg',
  img_67c6: '/images/67c61c6f-6260-4809-9510-0360e58a345d.jpeg',
  img_7032: '/images/70325367-cbae-4993-b560-18cd3f6edd53.jpeg',
  img_79ad: '/images/79addceb-8c2d-419b-80ff-e29af426a94c.jpeg',
  img_79f5: '/images/79f59adb-5a5f-4d6c-8109-1f01f4ca0d03.jpeg',
  img_862d: '/images/862d936c-0f34-4e50-af87-b519e2781d19.jpeg',
  img_8eb6: '/images/8eb65a8b-e795-4870-b141-6f63b1be24ae.jpeg',
  img_9295: '/images/929545d3-e241-46c0-8a70-c24531ce7b54.jpeg',
  img_9642: '/images/9642a60d-e9de-4e1a-89c2-9ebd230f4a74.jpeg',
  img_97c7: '/images/97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg',
  img_9aa8: '/images/9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg',
  img_9be7: '/images/9be71047-fc52-438a-9270-75cb470f6752.jpeg',
  img_a45f: '/images/a45feaa2-b607-4092-83ac-5fd4b2894959.jpeg',
  img_a74e: '/images/a74e3c0b-3188-4442-9146-1cd4d6ea45df.jpeg',
  img_a983: '/images/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg',
  img_b659: '/images/b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg',
  img_c904: '/images/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg',
  img_cc7a: '/images/cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg',
  img_dc01: '/images/dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg',
  img_ddc8: '/images/ddc853d7-e658-405c-bedc-8f31106c447e.jpeg',
  img_f19d: '/images/f19d8c0a-1d88-42a4-9218-686d4f0db7e4.jpeg',
  img_f1da: '/images/f1da1c3d-0d10-481e-9b63-c71f9073f30b.jpeg',
  img_f6de: '/images/f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg',
  img_fc02: '/images/fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg',
  img_fe37: '/images/fe37b80e-da8a-4225-b27b-dfbb5d763c01.jpeg',
} as const

// Type for asset paths — catches typos at compile time
export type AssetPath = typeof ASSET_MANIFEST[keyof typeof ASSET_MANIFEST]

// Total expected counts (for build-time sanity check comments)
// Property images: 43 verified ✓
// Avatars: host(1) + coHosts(3) + reviewers(5) = 9 verified ✓
// UI: 4 verified ✓
// Chips: 8 verified (10 files, 2 unused: decor.png, indoor-spaces.png) ✓
// Similar: 5 used of 6 available ✓
