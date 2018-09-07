import React from 'react';
import { Link } from 'react-router-dom';

import BrowseEventCard from './BrowseEventCard';

const BrowseEventList = ({ events, overMarker, onHoverEventCard }) => events.map(event => (
  <Link key={event.id} to={`/event/${event.id}`} style={{ textDecoration: 'none' }}>
    <BrowseEventCard event={event} overMarker={overMarker} onHoverEventCard={onHoverEventCard} />
  </Link>
));

export default BrowseEventList;
