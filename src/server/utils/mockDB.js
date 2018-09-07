const fs = require('fs');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const { DB_FILE_PATH } = require('../constants');

module.exports.createMockDB = (data) => {
  if (fs.existsSync(DB_FILE_PATH)) {
    fs.unlinkSync(DB_FILE_PATH);
  }

  const adapter = new FileSync(DB_FILE_PATH);
  const db = low(adapter);
  db.defaults({ events: [], count: 0 }).write();

  data.events.forEach((event) => {
    db.get('events')
      .push(event)
      .write();
    db.update('count', n => n + 1).write();
  });
  console.log('Created mock database.');
};
