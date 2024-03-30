const { fetchEvent } = require('../src/services/bootStrapService');
const { server } = require('../index');

describe('fetchEvent', () => {
  test('fetches event data', async () => {
    const res = await fetchEvent();

    console.log('res:', res);
  });
});

afterAll((done) => {
  server.close(done);
});
