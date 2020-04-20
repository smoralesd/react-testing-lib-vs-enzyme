module.exports = {
  roots: ["src/"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["<rootDir>/src/**/*.test.(ts|tsx|js)"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageReporters: ["lcov", "text"],
  setupFiles: ["./jest-setup.ts"],
};
