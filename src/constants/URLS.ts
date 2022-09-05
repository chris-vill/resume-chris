const URLS = {
  CLIENT: process.env.IS_STORYBOOK_ENV ? "http://localhost:6006" : process.env.URL_CLIENT,
} as const;

export { URLS };

