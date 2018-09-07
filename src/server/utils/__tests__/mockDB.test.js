const fs = require('fs');
const { createMockDB } = require('../mockDB');
const { returnEvents } = require('../mockApi');
const { DB_FILE_PATH } = require('../../constants');

describe('createMockDB', () => {
  it('creates mock database', () => {
    createMockDB(returnEvents());
    expect(fs.existsSync(DB_FILE_PATH)).toBe(true);
  });
});
