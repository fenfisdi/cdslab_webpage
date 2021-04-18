module.exports = {
  'setupFilesAfterEnv': ['<rootDir>/jest.setup.js'],
  'testPathIgnorePatterns': ['<rootDir>/.idea/', '<rootDir>/node_modules/'],
  'moduleNameMapper': {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    '^@actions/(.*)$': '<rootDir>/src/actions/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@httpClient/(.*)$': '<rootDir>/src/httpClient/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1'
  }
}