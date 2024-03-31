const { upsertStaticData, upsertEventFixtureData } = require('../src/services/upsertDataService');
const { server } = require('../index');

describe('upsertStaticData', () => {
  test('upsert bootstrap static data', async () => {
    await upsertStaticData();
  });
}, 100000);

describe('upsertEventFixtureData', () => {
  test('upsert event fixture data', async () => {
    const event = 1;
    await upsertEventFixtureData(event);
  });
});

afterAll((done) => {
  server.close(done);
});
