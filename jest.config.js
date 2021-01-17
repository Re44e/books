module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",

  // Stop running tests after `n` failures
  bail: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/*spec.ts?(x)"],

  // The directory where Jest should output its coverage files
  coverageDirectory: "__tests__/coverage",
  preset: "ts-jest",
};
