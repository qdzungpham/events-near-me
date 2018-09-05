const express = require('express');
const { getNearEvents } = require('../services/databaseAccess');

const router = express.Router();

router.post('/fetchNearEvents', (req, res) => {
  const data = req.body;
  if (data.userCoords === undefined || data.withinDistance === undefined) {
    return res.json({ error: 'PLease provide all inputs' });
  }

  const events = getNearEvents(data.userCoords, data.withinDistance);
  return res.json({ events });
});

module.exports = router;
