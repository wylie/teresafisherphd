export const siteMetadata = {
  title: "Teresa Fisher, PhD.",
  homeTitle: "Teresa Fisher, PhD. | Asheville Therapy & Consultation",
  description:
    "Therapy, consultation, and mental health services by Teresa Fisher, PhD. in Asheville, NC. LGBTQ+ affirming, trauma-informed, and relational care.",
  llmsDescription:
    "A private psychology practice in Asheville, NC offering therapy, consultation, and mental health services.",
  url: "https://teresafisherphd.com",
  ownerName: "Teresa Fisher, PhD.",
  legalName: "Teresa Fisher, PhD. PLLC",
  jobTitle: "Psychologist",
  organizationName: "Milkweed Mental Health",
  email: "teresa@teresafisherphd.com",
  telephone: "+18282762290",
  phoneDisplay: "(828) 276-2290",
  sameAs: ["https://www.linkedin.com/in/teresa-fisher-phd/"],
  officeLocations: [
    {
      streetAddress: "9 SW Pack Sq. Suite 204 E1-A",
      addressLocality: "Asheville",
      addressRegion: "NC",
      postalCode: "28801",
      addressCountry: "US",
      display: "9 SW Pack Sq., Suite 204 E1-A, Asheville, NC 28801",
      displayLines: ["9 SW Pack Sq.", "Suite 204 E1-A", "Asheville, NC 28801"],
      geoUrl: "geo:35.594844,-82.551677",
    },
  ],
  services: [
    "Individual Therapy",
    "EMDR",
    "Supervision & Consultation",
    "Community Outreach",
  ],
  intendedAudience: [
    "Adults seeking individual therapy",
    "People seeking EMDR as part of ongoing therapy or as a shorter focused treatment",
    "Clinicians working toward licensure as a psychologist or seeking clinical consultation",
    "Groups and organizations seeking mental health workshops or outreach",
  ],
};

export const pageMetadata = [
  {
    path: "/",
    title: "Home",
    metaTitle: siteMetadata.homeTitle,
    description: siteMetadata.description,
  },
  {
    path: "/about/who-am-i/",
    title: "Who Am I?",
    metaTitle: "Who Am I? | Teresa Fisher, PhD.",
    description:
      "Learn about Teresa Fisher, PhD.—her background, values, and approach to therapy and consultation.",
    section: "About",
  },
  {
    path: "/about/my-approach/",
    title: "My Approach",
    metaTitle: "My Approach | Teresa Fisher, PhD.",
    description:
      "Discover Teresa Fisher, PhD.'s client-centered, relational, and trauma-informed approach to therapy.",
    section: "About",
  },
  {
    path: "/about/education-and-training/",
    title: "Education & Training",
    metaTitle: "Education & Training | Teresa Fisher, PhD.",
    description:
      "Education, licensure, and professional training of Teresa Fisher, PhD., licensed psychologist in NC and MA.",
    section: "About",
  },
  {
    path: "/services/individual-therapy/",
    title: "Individual Therapy",
    metaTitle: "Individual Therapy | Teresa Fisher, PhD.",
    description:
      "Individual therapy for adults in Asheville, NC. Support for anxiety, depression, life transitions, and more.",
    section: "Services",
  },
  {
    path: "/services/emdr/",
    title: "EMDR Therapy",
    metaTitle: "EMDR Therapy | Teresa Fisher, PhD.",
    description:
      "EMDR therapy for trauma and distressing memories. Evidence-based treatment by Teresa Fisher, PhD.",
    section: "Services",
  },
  {
    path: "/services/supervision-and-consultation/",
    title: "Supervision & Consultation",
    metaTitle: "Supervision & Consultation | Teresa Fisher, PhD.",
    description:
      "Clinical supervision and consultation for psychologists and therapists. Developmental, ethical, and supportive.",
    section: "Services",
  },
  {
    path: "/services/community-outreach/",
    title: "Community Outreach",
    metaTitle: "Community Outreach | Teresa Fisher, PhD.",
    description:
      "Workshops and outreach for organizations and groups. Stress management, communication, and creative growth.",
    section: "Services",
  },
  {
    path: "/rates-and-insurance/",
    title: "Rates & Insurance",
    metaTitle: "Rates & Insurance | Teresa Fisher, PhD.",
    description:
      "Rates, insurance, and sliding scale information for therapy and consultation with Teresa Fisher, PhD.",
  },
  {
    path: "/contact/",
    title: "Contact",
    metaTitle: "Contact | Teresa Fisher, PhD.",
    description:
      "Contact Teresa Fisher, PhD. to schedule a consultation or ask questions about therapy and services.",
  },
] as const;

export const importantPages = pageMetadata;

const normalizePath = (path: string) => (path.endsWith("/") ? path : `${path}/`);

export const getPageMetadata = (path: string) =>
  pageMetadata.find((page) => page.path === normalizePath(path));
