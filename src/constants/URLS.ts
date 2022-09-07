const CLIENT = process.env.IS_STORYBOOK_ENV ? "http://localhost:6006" : process.env.URL_CLIENT;
const FIGMA_BASE = "https://www.figma.com/file/p8V2utLD1a3oN9ujXemCug/Resume";

const URLS = {
  CLIENT,
  FIGMA: {
    COLORS: `${FIGMA_BASE}?node-id=8%3A2`,
    CONTACTS: `${FIGMA_BASE}?node-id=50%3A4966`,
    EDUCATION_HEADER: `${FIGMA_BASE}?node-id=83%3A509`,
    EXPERIENCE_HEADER: `${FIGMA_BASE}?node-id=54%3A139`,
    ICONS: `${FIGMA_BASE}?node-id=142%3A484`,
    MAIN_SECTION_HEADER: `${FIGMA_BASE}?node-id=37%3A7`,
    PAGE_HEADER: `${FIGMA_BASE}?node-id=10%3A2`,
    PILL: `${FIGMA_BASE}?node-id=50%3A20524`,
    PILLS_SECTION: `${FIGMA_BASE}?node-id=174%3A942`,
    PROJECTS_HEADER: `${FIGMA_BASE}?node-id=65%3A216`,
    SIDE_SECTION_HEADER: `${FIGMA_BASE}?node-id=46%3A44`,
    TYPOGRAPHY: `${FIGMA_BASE}?node-id=108%3A399`,
  },
  ASSETS: {
    SVGS: {
      EMAIL: `${CLIENT}/SVGs/email.svg`,
      GITHUB: `${CLIENT}/SVGs/github.svg`,
      HACKERRANK: `${CLIENT}/SVGs/hackerrank.svg`,
      LINKEDIN: `${CLIENT}/SVGs/linkedin.svg`,
      MOBILE: `${CLIENT}/SVGs/mobile.svg`,
      STAR: `${CLIENT}/SVGs/star.svg`,
    },
  },
} as const;

export { URLS };

