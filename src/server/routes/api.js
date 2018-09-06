const express = require('express');
const { getNearEvents, getEventDetail } = require('../services/databaseAccess');

const router = express.Router();

router.post('/fetchNearEvents', (req, res) => {
  const data = req.body;
  if (
    data.userCoords === undefined
    || data.withinDistance === undefined
    || data.nEvents === undefined
  ) {
    return res.json({ error: 'PLease provide all inputs' });
  }

  const events = getNearEvents(data.userCoords, data.withinDistance, data.nEvents);
  return res.json({ events });
});

router.get('/fetchEvent/:id', (req, res) => {
  res.json(getEventDetail(req.params.id));
});

module.exports = router;
