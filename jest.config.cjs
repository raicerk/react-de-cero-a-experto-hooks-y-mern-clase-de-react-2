module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transform: {
      "\\.[js]sx?$": "babel-jest"
    }
}