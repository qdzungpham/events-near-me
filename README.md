# events-near-me
A simple application to retrieve, filter and display training events based on user's location and the current date.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run tests on watch mode
npm run test:watch

# Produce code coverage report
npm run coverage
```

## The Back End
A Node.js and Express backend exposes 2 routes. 

/fetchNearEvents is a POST request that take 3 arguments: userCoords (user's coordinates), withinDistance (max distance to search for events) and nEvents (number of events that are wanted to return). This route replies with the list of nEvents events that within the withinDistance and after the current Date, which is sorted by Date of the event.

/fetchEvent/:id is a GET request that returns full detail of the event based on the id.

The back-end server also updates the event database every hour.

## The Font End
A React-Redux application that has two main pages.

Browse page shows a list of 5 events near user's location ordered from soonest to latest and a map that shows the locations of the events on map. User can mouse over the event card to zoom the location of the event on map, or mouse over the event's marker to highlight the corresponding event card. User can click on the event card to go the Event Detail page.

Event Detail page simply details the full event's information.

## Development
In development mode, a webpack dev server serves the font end code, a node server using nodemon which helps automatically restarting the server.

This development environment is configured with Airbnb's ESLint rules and formatted through prettier.

## Testing
Jest is used as the testing framework and together with Enzyme to test the components.

## Production/Deployment

In production mode, there is only one server running. The bundled static files will be served by the Node.js/Express application.

Docker was used to package up the application. The app can be easily deployed by pulling the container image via https://hub.docker.com/r/qdzungpham/events-near-me/
