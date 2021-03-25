module.exports = {
  'setupFilesAfterEnv': ['<rootDir>/jest.setup.js'],
  'testPathIgnorePatterns': ['<rootDir>/.idea/', '<rootDir>/node_modules/'],
  'moduleNameMapper': {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1'
  }
}