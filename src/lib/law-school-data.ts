// Law School Data
// T14 Law Schools with admissions statistics

export interface LawSchool {
  id: string;
  name: string;
  shortName: string;
  location: string;
  ranking: number;
  medianLSAT: number;
  lsatRange: [number, number]; // 25th-75th percentile
  medianGPA: number;
  gpaRange: [number, number]; // 25th-75th percentile
  acceptanceRate: number;     // percentage
  classSize: number;
  tuition: number;            // per year
  employmentRate: number;     // percentage employed 10 months after graduation
  barPassRate: number;        // percentage
  website: string;
  color: string;              // For UI display
}

// T14 Law Schools (2024 data)
export const T14_SCHOOLS: LawSchool[] = [
  {
    id: "yale",
    name: "Yale Law School",
    shortName: "Yale",
    location: "New Haven, CT",
    ranking: 1,
    medianLSAT: 175,
    lsatRange: [173, 177],
    medianGPA: 3.94,
    gpaRange: [3.86, 3.99],
    acceptanceRate: 4.1,
    classSize: 200,
    tuition: 71425,
    employmentRate: 98.5,
    barPassRate: 98.2,
    website: "https://law.yale.edu",
    color: "#00356b",
  },
  {
    id: "stanford",
    name: "Stanford Law School",
    shortName: "Stanford",
    location: "Stanford, CA",
    ranking: 2,
    medianLSAT: 174,
    lsatRange: [171, 176],
    medianGPA: 3.93,
    gpaRange: [3.84, 3.98],
    acceptanceRate: 6.9,
    classSize: 180,
    tuition: 69015,
    employmentRate: 97.8,
    barPassRate: 97.5,
    website: "https://law.stanford.edu",
    color: "#8c1515",
  },
  {
    id: "harvard",
    name: "Harvard Law School",
    shortName: "Harvard",
    location: "Cambridge, MA",
    ranking: 3,
    medianLSAT: 174,
    lsatRange: [172, 176],
    medianGPA: 3.92,
    gpaRange: [3.83, 3.97],
    acceptanceRate: 10.1,
    classSize: 565,
    tuition: 70430,
    employmentRate: 97.2,
    barPassRate: 97.8,
    website: "https://hls.harvard.edu",
    color: "#a51c30",
  },
  {
    id: "chicago",
    name: "University of Chicago Law School",
    shortName: "Chicago",
    location: "Chicago, IL",
    ranking: 4,
    medianLSAT: 174,
    lsatRange: [171, 176],
    medianGPA: 3.92,
    gpaRange: [3.79, 3.97],
    acceptanceRate: 13.2,
    classSize: 200,
    tuition: 70995,
    employmentRate: 96.5,
    barPassRate: 97.1,
    website: "https://www.law.uchicago.edu",
    color: "#800000",
  },
  {
    id: "columbia",
    name: "Columbia Law School",
    shortName: "Columbia",
    location: "New York, NY",
    ranking: 5,
    medianLSAT: 174,
    lsatRange: [172, 176],
    medianGPA: 3.91,
    gpaRange: [3.81, 3.96],
    acceptanceRate: 12.8,
    classSize: 430,
    tuition: 72360,
    employmentRate: 97.1,
    barPassRate: 96.8,
    website: "https://www.law.columbia.edu",
    color: "#b9d9eb",
  },
  {
    id: "nyu",
    name: "New York University School of Law",
    shortName: "NYU",
    location: "New York, NY",
    ranking: 6,
    medianLSAT: 173,
    lsatRange: [170, 175],
    medianGPA: 3.91,
    gpaRange: [3.79, 3.96],
    acceptanceRate: 15.4,
    classSize: 465,
    tuition: 70434,
    employmentRate: 96.8,
    barPassRate: 96.5,
    website: "https://www.law.nyu.edu",
    color: "#57068c",
  },
  {
    id: "penn",
    name: "University of Pennsylvania Carey Law School",
    shortName: "Penn",
    location: "Philadelphia, PA",
    ranking: 7,
    medianLSAT: 173,
    lsatRange: [170, 175],
    medianGPA: 3.91,
    gpaRange: [3.76, 3.96],
    acceptanceRate: 13.5,
    classSize: 250,
    tuition: 69238,
    employmentRate: 95.8,
    barPassRate: 95.9,
    website: "https://www.law.upenn.edu",
    color: "#011f5b",
  },
  {
    id: "virginia",
    name: "University of Virginia School of Law",
    shortName: "UVA",
    location: "Charlottesville, VA",
    ranking: 8,
    medianLSAT: 172,
    lsatRange: [169, 174],
    medianGPA: 3.90,
    gpaRange: [3.74, 3.95],
    acceptanceRate: 14.2,
    classSize: 330,
    tuition: 66000,
    employmentRate: 95.2,
    barPassRate: 95.5,
    website: "https://www.law.virginia.edu",
    color: "#232d4b",
  },
  {
    id: "berkeley",
    name: "UC Berkeley School of Law",
    shortName: "Berkeley",
    location: "Berkeley, CA",
    ranking: 9,
    medianLSAT: 171,
    lsatRange: [168, 173],
    medianGPA: 3.85,
    gpaRange: [3.72, 3.93],
    acceptanceRate: 16.8,
    classSize: 310,
    tuition: 57614,
    employmentRate: 94.5,
    barPassRate: 94.8,
    website: "https://www.law.berkeley.edu",
    color: "#003262",
  },
  {
    id: "michigan",
    name: "University of Michigan Law School",
    shortName: "Michigan",
    location: "Ann Arbor, MI",
    ranking: 10,
    medianLSAT: 171,
    lsatRange: [168, 173],
    medianGPA: 3.86,
    gpaRange: [3.72, 3.93],
    acceptanceRate: 17.5,
    classSize: 335,
    tuition: 64826,
    employmentRate: 94.2,
    barPassRate: 94.5,
    website: "https://michigan.law.umich.edu",
    color: "#00274c",
  },
  {
    id: "duke",
    name: "Duke University School of Law",
    shortName: "Duke",
    location: "Durham, NC",
    ranking: 11,
    medianLSAT: 171,
    lsatRange: [168, 173],
    medianGPA: 3.85,
    gpaRange: [3.70, 3.93],
    acceptanceRate: 16.2,
    classSize: 225,
    tuition: 68138,
    employmentRate: 93.8,
    barPassRate: 94.2,
    website: "https://law.duke.edu",
    color: "#012169",
  },
  {
    id: "northwestern",
    name: "Northwestern Pritzker School of Law",
    shortName: "Northwestern",
    location: "Chicago, IL",
    ranking: 12,
    medianLSAT: 171,
    lsatRange: [167, 173],
    medianGPA: 3.86,
    gpaRange: [3.68, 3.94],
    acceptanceRate: 17.8,
    classSize: 225,
    tuition: 67824,
    employmentRate: 93.5,
    barPassRate: 93.8,
    website: "https://www.law.northwestern.edu",
    color: "#4e2a84",
  },
  {
    id: "cornell",
    name: "Cornell Law School",
    shortName: "Cornell",
    location: "Ithaca, NY",
    ranking: 13,
    medianLSAT: 171,
    lsatRange: [167, 173],
    medianGPA: 3.85,
    gpaRange: [3.67, 3.93],
    acceptanceRate: 18.5,
    classSize: 200,
    tuition: 67824,
    employmentRate: 93.2,
    barPassRate: 93.5,
    website: "https://www.lawschool.cornell.edu",
    color: "#b31b1b",
  },
  {
    id: "georgetown",
    name: "Georgetown University Law Center",
    shortName: "Georgetown",
    location: "Washington, DC",
    ranking: 14,
    medianLSAT: 170,
    lsatRange: [166, 172],
    medianGPA: 3.82,
    gpaRange: [3.62, 3.92],
    acceptanceRate: 18.8,
    classSize: 560,
    tuition: 66954,
    employmentRate: 92.8,
    barPassRate: 93.2,
    website: "https://www.law.georgetown.edu",
    color: "#041e42",
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getSchoolById(id: string): LawSchool | undefined {
  return T14_SCHOOLS.find((s) => s.id === id);
}

export function getSchoolsByRanking(ascending = true): LawSchool[] {
  return [...T14_SCHOOLS].sort((a, b) =>
    ascending ? a.ranking - b.ranking : b.ranking - a.ranking
  );
}

export function getSchoolsByLSAT(ascending = false): LawSchool[] {
  return [...T14_SCHOOLS].sort((a, b) =>
    ascending ? a.medianLSAT - b.medianLSAT : b.medianLSAT - a.medianLSAT
  );
}

export function getSchoolsByGPA(ascending = false): LawSchool[] {
  return [...T14_SCHOOLS].sort((a, b) =>
    ascending ? a.medianGPA - b.medianGPA : b.medianGPA - a.medianGPA
  );
}

export function getSchoolsByAcceptanceRate(ascending = true): LawSchool[] {
  return [...T14_SCHOOLS].sort((a, b) =>
    ascending ? a.acceptanceRate - b.acceptanceRate : b.acceptanceRate - a.acceptanceRate
  );
}

// ============================================
// DISPLAY HELPERS
// ============================================

export function formatTuition(tuition: number): string {
  return `$${tuition.toLocaleString()}`;
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

export function formatGPA(gpa: number): string {
  return gpa.toFixed(2);
}

export function getLSATRangeString(school: LawSchool): string {
  return `${school.lsatRange[0]}-${school.lsatRange[1]}`;
}

export function getGPARangeString(school: LawSchool): string {
  return `${school.gpaRange[0].toFixed(2)}-${school.gpaRange[1].toFixed(2)}`;
}
