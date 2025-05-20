import { Fee } from "@shared/schema";

export const staticFees: Fee[] = [
  {
    id: 1,
    title: "Junior Secondary",
    subtitle: "Grades 7-9",
    amount: 250000,
    period: "year",
    features: [
      "All core academic subjects",
      "Textbooks and learning materials",
      "Access to library and computer lab",
      "Basic extracurricular activities",
      "School uniform (initial set)"
    ],
    isPopular: false
  },
  {
    id: 2,
    title: "Senior Secondary",
    subtitle: "Grades 10-12",
    amount: 320000,
    period: "year",
    features: [
      "All core academic subjects",
      "Advanced science lab sessions",
      "Career counseling and university preparation",
      "Extended library and computer access",
      "School uniform (initial set)",
      "Educational field trips"
    ],
    isPopular: true
  },
  {
    id: 3,
    title: "Boarding Option",
    subtitle: "Additional Fee",
    amount: 180000,
    period: "year",
    features: [
      "Accommodation in school dormitory",
      "Three nutritious meals daily",
      "Evening supervised study sessions",
      "Weekend recreational activities",
      "24-hour supervision and security"
    ],
    isPopular: false
  }
];

export const paymentOptions = [
  "Annual payment (5% discount if paid in full before semester starts)",
  "Semester payment (payable at beginning of each semester)",
  "Quarterly payment plan (small administrative fee applies)",
  "Scholarships available for qualifying students"
];

export const additionalCosts = [
  "School bus service: KSh 45,000/year (depends on distance)",
  "Additional uniform sets: KSh 12,000 per set",
  "Optional international educational trips: Varies by destination",
  "Specialized extracurricular activities: KSh 5,000-20,000 per semester"
];
