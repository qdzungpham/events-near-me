const { returnEvents } = require('../mockApi');

describe('mockApi', () => {
  it('returns events', () => {
    expect(returnEvents().events).toHaveLength(14);
  });
});
