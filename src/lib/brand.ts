// Brand config — hydrated at scaffold time by build_site.py from
// plan-input.json and the client record. All {{TOKENS}} are replaced
// by the scaffold step; this file should not be hand-edited after that.

export const brand = {
  slug: "kenneth-w-talbot-jr",
  displayName: "Veterans Remediation & Restoration",
  // Registered DBA / trade name (backfilled by rename_site_sync.py on old scaffolds).
  dbaName: "Veterans Remediation & Restoration - 24/7 Mold Remediation, Water and Fire Damage Restoration",
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
  foundedYear: "2020",
  primaryCity: "Freeport",
  primaryState: "FL",
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
  sameAsUrls: ["https://veteransremediation.com/", "https://www.facebook.com/61592469216690/", "https://www.bbb.org/us/fl/freeport/profile/water-damage-restoration/veterans-remediation-restoration-0683-90108177", "https://www.houzz.com/hznb/professionals/environmental-services-and-restoration/veterans-remediation-and-restoration-pfvwus-pf~1423217997", "https://homeguide.com/fl/panama-city/water-damage-restoration/veterans-remediation---restoration---24-7-mold-remediation--water-and-fire-damage-restoration-i0H5l0Dsx"] as string[],
  // GBP rating fields — synced from the live Google Business Profile by
  // scripts/sync_brand_reviews.py; never hand-edited (real ratings only).
  gbpRatingValue: "5.0",
  gbpReviewCount: "7",
  gbpReviews: [
    { author: "Mallorie", rating: 5, text: "Most hard working and God loving family out there!!", when: "October 2026" },
    { author: "Edward", rating: 5, text: "Fantastic trustworthy Christian based organization. Kenny communicates every step of the way above and beyond expectations. I Highly recommend this locally owned company.", when: "October 2026" },
    { author: "Melissa", rating: 5, text: "Highly recommend Veterans Mold Remediation! They were professional, knowledgeable, and great to work with from start to finish. The team was responsive, thorough, and took the time to explain everything throughout the process. Their attention to detail and commitment to doing the job right really…", when: "October 2026" },
    { author: "Jacob", rating: 5, text: "Very profesional and nice people!", when: "October 2026" },
    { author: "Mike", rating: 5, text: "Professional service second to none!", when: "October 2026" },
    { author: "Brian", rating: 5, text: "⭐⭐⭐⭐⭐ Exceptional Service, Professionalism, and Integrity! Veterans Remediation & Restoration sets the standard for professionalism, integrity, and exceptional customer service! It is refreshing to find a company that understands the importance of doing things right, treating people with respect…", when: "October 2026" },
  ] as { author: string; rating: number; text: string; when: string }[],
  tagline: "24/7 restoration services in Freeport, FL.",
  ctaLabel: "24/7 Emergency Line",
  // Vertical trade-identity copy — resolved at scaffold time from
  // templates/{vertical}/vertical-tokens.json (see scripts/verticals.py).
  // Components must use these instead of hardcoding a trade phrase.
  tradeNoun: "restoration",
  specialistPhrase: "Damage Restoration Specialists",
  announcementSuffix: "24/7 Emergency Response",
  homeAboutBlurb: "Veterans Remediation & Restoration  serves Freeport and the surrounding FL area with professional damage restoration for homes and businesses. From the first emergency call to the final walkthrough, our team manages the entire recovery — and we answer the phone 24/7, so help is on the way the moment something goes wrong.",
} as const;

export const entityId = `${brand.canonicalUrl}/#identity`;
