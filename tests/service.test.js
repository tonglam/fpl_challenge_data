const { fetchBootStrap } = require('../src/services/bootStrapService');
const { server } = require('../index');

describe('fetchEvent', () => {
  test('fetches event data', async () => {
    await fetchBootStrap();
  });
}, 30000);

afterAll((done) => {
  server.close(done);
});
