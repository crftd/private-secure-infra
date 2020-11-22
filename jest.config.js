module.exports = {
  globals: {
    'ts-jest': {
      compiler: 'ttypescript',
    },
  },
  setupFiles: [
    '<rootDir>setup.jest.ts',
  ],
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
