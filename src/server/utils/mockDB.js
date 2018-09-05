const fs = require('fs');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const { returnEvents } = require('./mockApi');

const createMockDB = () => {
  const filePath = './src/server/data/db.json';

  fs.unlinkSync(filePath);

  const adapter = new FileSync(filePath);
  const db = low(adapter);
  db.defaults({ movies: [], count: 0 }).write();
};

createMockDB();
