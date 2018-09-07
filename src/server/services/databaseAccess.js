const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const distance = require('@turf/distance');
const turf = require('@turf/helpers');
const { DB_FILE_PATH } = require('../constants');

module.exports.getNearEvents = (userCoords, withinDistance, nEvents) => {
  const adapter = new FileSync(DB_FILE_PATH);
  const db = low(adapter);
  let events = db
    .get('events')
    .orderBy('dateTime')
    .value();

  events = events.map((event) => {
    const from = turf.point(userCoords);
    const to = turf.point(event.coords);
    return {
      id: event.id,
      title: event.title,
      dateTime: event.dateTime,
      image: event.image,
      location: event.location,
      coords: event.coords,
      distance: distance.default(from, to)
    };
  });

  events = events.filter(
    event => event.distance <= withinDistance && new Date(event.dateTime) >= new Date(Date.now())
  );

  return events.length <= nEvents ? events : events.slice(0, nEvents);
};

module.exports.getEventDetail = (id) => {
  const adapter = new FileSync(DB_FILE_PATH);
  const db = low(adapter);
  return db
    .get('events')
    .find({ id })
    .value();
};
