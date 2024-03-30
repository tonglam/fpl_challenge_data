const { fetchChallengeEvent } = require('../src/services/challegeEvent');

describe('fetchChallengeEvent', () => {
  test('fetches challenge event data and logs it (assuming successful API call)', async () => {
    const res = await fetchChallengeEvent();

    console.log('res:', res);
  });
});
