const fs = require('fs');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const { returnEvents } = require('./mockApi');

module.exports.createMockDB = () => {
  const filePath = './src/data/db.json';

  fs.unlinkSync(filePath);

  const adapter = new FileSync(filePath);
  const db = low(adapter);
  db.defaults({ events: [], count: 0 }).write();

  returnEvents()
    .then((response) => {
      response.events.forEach((event) => {
        db.get('events')
          .push(event)
          .write();
        db.update('count', n => n + 1).write();
      });
    })
    .catch(error => console.log(error));

  console.log('Created mock database.');
};
