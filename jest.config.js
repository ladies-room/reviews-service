module.exports = {
  setupFiles: [
      '<rootDir>/client/tests/setupTests.js',
  ],
  transform: {
      '^.+\\.jsx?$': 'babel-jest',
  },
};