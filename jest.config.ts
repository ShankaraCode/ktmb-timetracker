import type {Config} from 'jest';

const config: Config = {
  collectCoverageFrom: [
    '**/*.{ts,js,jsx}',
    '!**/node_modules/**',
    '!**/res/**',
    '!**/dist/**',
  ],
};

export default config;