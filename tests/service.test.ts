const { fetchChallengeEvent } = require('../src/services/challege_event');
const { describe, expect, it } = require('vitest');

describe('fetchChallengeEvent', () => {
  it('should fetch challenge event', async () => {
    const data = await fetchChallengeEvent();
    expect(data).toBeDefined();
  });
});
