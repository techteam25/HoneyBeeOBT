// jest.config.mjs
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {

  testEnvironment: "jest-environment-jsdom",
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/pages/_app.tsx',
    '!src/pages/_document.tsx',
    '!src/pages/workflow/test.tsx',
],
  //to enable test console warns remove the --silent flag in the package.json
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig;
