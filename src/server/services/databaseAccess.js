const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const distance = require('@turf/distance');
const turf = require('@turf/helpers');

const adapter = new FileSync('./src/server/data/db.json');
const db = low(adapter);

module.exports.getNearEvents = (userCoords, withinDistance) => {
  let events = db.get('events').value();

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

  events = events.filter(event => event.distance < withinDistance);

  return events;
};

// console.log(getNearEvents([-27.4797707, 153.035123], 100));
