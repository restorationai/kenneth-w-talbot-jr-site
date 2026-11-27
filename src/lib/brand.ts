// Brand config — hydrated at scaffold time by build_site.py from
// plan-input.json and the client record. All {{TOKENS}} are replaced
// by the scaffold step; this file should not be hand-edited after that.

export const brand = {
  slug: "kenneth-w-talbot-jr",
  displayName: "Veterans Remediation & Restoration",
  // Registered DBA / trade name (backfilled by rename_site_sync.py on old scaffolds).
  dbaName: "Veterans Remediation & Restoration - 24/7 Mold Remediation, Water and Fire Damage Restoration",
  // Brand name as text beside the header logo (Santino 2026-11-21): set
  // ONLY by the rename flow (header_name_rollout.py) from the Citations
  // Building stage on. false = logo only.
  headerName: true,
  shortName: "Veterans Remediation & Restoration",
  legalName: "Veterans Remediation & Restoration",
  domain: "veteransremediation.com",
  canonicalUrl: "https://veteransremediation.com",
  phone: "(337) 344-1248",
  phoneRaw: "+13373441248",
  // Sitewide call-tracking number (2026-08-24). When BOTH fields are set,
  // a tiny inline script in BaseLayout swaps every visible phone mention
  // and tel: link to this number AFTER the page renders. The HTML source,
  // the JSON-LD in schema.ts, and anything crawlers/citation-checkers read
  // keep the canonical NAP number above — humans dial the tracked line,
  // Google sees consistent NAP. Empty = feature off (default at scaffold;
  // filled by the call-tracking provisioning step).
  trackingPhone: "(850) 427-6780",
  trackingPhoneRaw: "+18504276780",
  email: "veteranspcusa@gmail.com",
  hours: "24/7",
  // AVAILABILITY 24/7 (Santino 2026-11-21, scripts/availability.py): calls are
  // answered 24/7 (the AI receptionist), every trade, default true; false only
  // when the client said not to. Separate from the emergency-SERVICE rule
  // (emergency_policy.py, the `hours` gate above). openingHoursSpec = the
  // schema hours (scripts/schema_hours.py): 24/7 when available, else the
  // real Google hours, else none.
  available247: true,
  openingHoursSpec: [{"days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59"}] as { days: string[]; opens: string; closes: string }[],
  foundedYear: "2020",
  primaryCity: "Freeport",
  primaryState: "FL",
  // SERVICE REGION (Santino 2026-11-19): multi-metro clients name the region
  // on every region-wide surface (see src/lib/region.ts); city pages and the
  // address/NAP keep the city. Empty = one-metro client, city wording.
  serviceRegion: "Freeport, FL & the Emerald Coast",
  serviceRegionDetail: "Destin, Niceville, Fort Walton Beach, DeFuniak Springs, Crestview, Santa Rosa Beach",
  // primaryCity/primaryState = the #1 MARKETING city (headlines, coverage
  // copy). addressCity/addressState = where the business PHYSICALLY is.
  // They are usually the same and often diverge (DISS: Farrell PA office,
  // Youngstown OH target) — only the address pair may go in a PostalAddress.
  addressCity: "Freeport",
  addressState: "FL",
  streetAddress: "101 Hydrangea Blvd",
  postalCode: "32439",
  lat: "30.4982516",
  lng: "-86.1360517",
  placeId: "",
  googleCid: "",
  imagesBase: "https://images.veteransremediation.com",
  googleMapsApiKey: "",
  // Analytics — set post-scaffold (scripts/analytics_set.py / create_ga4.py); no-op if empty
  ga4MeasurementId: "",
  clarityProjectId: "",
  logoUrl: "/images/logo.png",
  licenseNumbers: [] as string[],
  licenseAuthority: "Florida Department of Business & Professional Regulation (DBPR)",
  // State license-verification page — the footer links the license number here.
  licenseLookupUrl: "",
  licenseType: "Florida Licensed Mold Assessor & Mold Remediator",
  // Operator-confirmed "licensed & insured" attestation from plan-input.json —
  // lets the TrustStrip show the badge before a license number is on file.
  licensedInsuredAttested: true as boolean,
  certifications: ["OSHA Trained"] as string[],
  trustBadges: ["Veteran Owned & Operated", "Licensed Mold Assessor", "Licensed Mold Remediator", "Licensed & Insured", "Locally Owned & Operated"] as string[],
  jobPhotos: [] as string[],
  sameAsUrls: ["https://veteransremediation.com/", "https://maps.google.com/maps?cid=4562054351657057730", "https://www.bbb.org/us/fl/freeport/profile/water-damage-restoration/veterans-remediation-restoration-0683-90108177", "https://www.houzz.com/hznb/professionals/environmental-services-and-restoration/veterans-remediation-and-restoration-pfvwus-pf~1423217997", "https://homeguide.com/fl/panama-city/water-damage-restoration/veterans-remediation---restoration---24-7-mold-remediation--water-and-fire-damage-restoration-i0H5l0Dsx"] as string[],
  credentials: [{"name": "Contractor License", "kind": "license", "number": "MRSR5711", "authority": "Florida Department of Business & Professional Regulation (DBPR)", "state": "FL", "holder": "company"}, {"name": "OSHA Trained", "kind": "certification", "holder": "company"}] as { name: string; kind: string; number?: string; authority?: string; url?: string; since?: string; state?: string; holder?: string; course?: string }[],
  credentialsLine: [{"text": "Licensed in FL (#MRSR5711)"}, {"text": "OSHA Trained"}] as { text: string; url?: string }[],
  // GBP rating fields — synced from the live Google Business Profile by
  // scripts/sync_brand_reviews.py; never hand-edited (real ratings only).
  gbpRatingValue: "5.0",
  gbpReviewCount: "19",
  gbpReviews: [
    { author: "Taylor", rating: 5, text: "We are very thankful for the professionalism, efficiency, and clear communication demonstrated by Veterans. Would highly recommend working with them!", when: "November 2026" },
    { author: "George", rating: 5, text: "Kenny and the team were exceptional, professional and courteous. They were very responsive and upfront with their pricing and it was a very smooth process in working with them. I would highly recommend them for any remediation work that you need in the future. Very very good job.", when: "November 2026" },
    { author: "Dara", rating: 5, text: "We had a wonderful experience after our bathroom had a leak resulting in mold and needed to be renovated and repaired. The team was quick to respond and help us in a stressful situation. They are honest and transparent. They walked us through the process and the communication was great. Our…", when: "November 2026" },
    { author: "Jacob", rating: 5, text: "Kenny is amazing. Great experience with a Christian brother. He will take care of whatever is needed. You won’t be disappointed.", when: "November 2026" },
    { author: "Jamie", rating: 5, text: "The are absolutely the best people. We trust them to handle everything that is needed. You won’t be disappointed.", when: "November 2026" },
    { author: "Christy", rating: 5, text: "These Guys are top-tier! Veteran owned and operated…. Highly recommend you will not be disappointed!! FIVE STARS!! ✨✨✨✨✨", when: "October 2026" },
  ] as { author: string; rating: number; text: string; when: string }[],
  tagline: "24/7 restoration services in Freeport, FL.",
  ctaLabel: "24/7 Emergency Line",
  // Vertical trade-identity copy — resolved at scaffold time from
  // templates/{vertical}/vertical-tokens.json (see scripts/verticals.py).
  // Components must use these instead of hardcoding a trade phrase.
  tradeNoun: "restoration",
  specialistPhrase: "Damage Restoration Specialists",
  announcementSuffix: "24/7 Emergency Response",
  homeAboutBlurb: "Veterans Remediation & Restoration  serves Freeport and the surrounding FL area with professional damage restoration for homes and businesses. From the first emergency call to the final walkthrough, our team manages the entire recovery, and we answer the phone 24/7, so help is on the way the moment something goes wrong.",
} as const;

export const entityId = `${brand.canonicalUrl}/#identity`;
