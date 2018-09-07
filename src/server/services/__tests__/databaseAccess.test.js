const { getNearEvents, getEventDetail } = require('../databaseAccess');

describe('getNearEvents', () => {
  it('gets 5 near events', () => {
    const events = getNearEvents([-27.4797707, 153.025123], 100, 5);
    expect(events).toHaveLength(5);
  });
  it('gets 3 near events', () => {
    const events = getNearEvents([-27.4797707, 153.025123], 100, 3);
    expect(events).toHaveLength(3);
  });
});

describe('getNearEvent', () => {
  it('gets Event detail', () => {
    expect(getEventDetail('1')).toHaveProperty('title', 'Event Title A');
  });
});
