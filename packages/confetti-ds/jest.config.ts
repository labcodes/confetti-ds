import type {Config} from 'jest';

const config: Config = {
  // https://jestjs.io/docs/configuration/#github-actions-reporter
  reporters: [
    ['github-actions', {silent: false}], 'summary'
  ],

  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>/src"],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: ["./setupTests.ts"],
  setupFiles: ["jest-prop-type-error"],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(t|j)sx?$",
  testEnvironment: "jsdom",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  collectCoverageFrom: [
    // The order matters.
    // The negation rules must always come last in the array
    '**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coverageDirectory: "<rootDir>/../../.coverage/",
  // The "maxWorkers" and "maxConcurrency" options values were lowered to
  // prevent excessive use of computational resources
  // that cause other applications to freeze temporarily during testing.
  // on some computers
  // https://jestjs.io/docs/configuration/#maxworkers-number--string
  // The default jest value for maxWorkers is 50%
  maxWorkers: "30%",
  // https://jestjs.io/docs/configuration/#maxconcurrency-number
  // The default jest value for maxConcurrency is 5
  maxConcurrency: 3
};

export default config;
