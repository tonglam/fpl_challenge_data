const { fetchChallengeEvent } = require('../src/services/challegeEvent');

describe('fetchChallengeEvent', () => {
  test('fetches challenge event data and logs it (assuming successful API call)', async () => {
    const consoleLogMock = jest.spyOn(console, 'log'); // Mock console.log for testing

    await fetchChallengeEvent();

    expect(console.log).toHaveBeenCalled();

    consoleLogMock.mockRestore();
  });
});
