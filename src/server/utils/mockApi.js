// SOURCE: https://github.com/wolskis/GO1-Front-End-Test/blob/master/api/mockApi.js

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generateFutureDate() {
  return new Date(Date.now() + getRandomInt(10) * 60 * 60 * 24 * 1000).toISOString();
}

module.exports.returnEvents = () => {
  const data = {
    events: [
      {
        id: '1',
        title: 'Event Title A',
        dateTime: generateFutureDate(),
        image: 'http://via.placeholder.com/100x100',
        availSeats: '128',
        location: 'Brisbane',
        coords: [-27.4697707, 153.025123],
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: '2',
        title: 'Event Title B',
        dateTime: generateFutureDate(),
        image: 'http://via.placeholder.com/100x100',
        availSeats: '128',
        location: 'Brisbane',
        coords: [-27.4797707, 153.025123],
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: '3',
        title: 'Event Title C',
        dateTime: generateFutureDate(),
        image: 'http://via.placeholder.com/100x100',
        availSeats: '128',
        location: 'Brisbane',
        coords: [-27.4897707, 153.025123],
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: '4',
        title: 'Event Title D',
        dateTime: generateFutureDate(),
        image: 'http://via.placeholder.com/100x100',
        availSeats: '128',
        location: 'Brisbane',
        coords: [-27.4697707, 153.025123],
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: '5',
        title: 'Event Title E',
        dateTime: generateFutureDate(),
        image: 'http://via.placeholder.com/100x100',
        availSeats: '128',
        location: 'Brisbane',
        coords: [-27.4597707, 153.025123],
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: '6',
        title: 'Event Title F',
        dateTime: generateFutureDate(),
        image: 'http://via.placeholder.com/100x100',
        availSeats: '128',
        location: 'Brisbane',
        coords: [-27.4497707, 153.025123],
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: '7',
        title: 'Event Title G',
        dateTime: generateFutureDate(),
        image: 'http://via.placeholder.com/100x100',
        availSeats: '128',
        location: 'Brisbane',
        coords: [-27.4697707, 153.015123],
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: '8',
        title: 'Event Title H',
        dateTime: generateFutureDate(),
        image: 'http://via.placeholder.com/100x100',
        availSeats: '128',
        location: 'Brisbane',
        coords: [-27.4697707, 153.035123],
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: '9',
        title: 'Event Title I',
        dateTime: generateFutureDate(),
        image: 'http://via.placeholder.com/100x100',
        availSeats: '128',
        location: 'Brisbane',
        coords: [-27.4797707, 153.035123],
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: '10',
        title: 'Event Title J',
        dateTime: generateFutureDate(),
        image: 'http://via.placeholder.com/100x100',
        availSeats: '128',
        location: 'Brisbane',
        coords: [-27.4497707, 153.045123],
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: '11',
        title: 'Event Title Sydney',
        dateTime: generateFutureDate(),
        image: 'http://via.placeholder.com/100x100',
        availSeats: '128',
        location: 'Sydney',
        coords: [-33.8688, 151.2093],
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: '12',
        title: 'Event Title Sydney 2',
        dateTime: generateFutureDate(),
        image: 'http://via.placeholder.com/100x100',
        availSeats: '128',
        location: 'Sydney',
        coords: [-33.8688, 151.2043],
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: '13',
        title: 'Event Title Melbourne',
        dateTime: generateFutureDate(),
        image: 'http://via.placeholder.com/100x100',
        availSeats: '128',
        location: 'Sydney',
        coords: [-33.8688, 151.2043],
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: '14',
        title: 'Event Title Melbourne 2',
        dateTime: generateFutureDate(),
        image: 'http://via.placeholder.com/100x100',
        availSeats: '128',
        location: 'Sydney',
        coords: [-33.8688, 151.2043],
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    ]
  };

  const delay = time => result => new Promise(resolve => setTimeout(() => resolve(result), time));

  return Promise.resolve(data)
    .then(delay(1500))
    .then(result => result);
};
