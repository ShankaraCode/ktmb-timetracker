// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom', // For frontend tests
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
      },
    },
  };
  