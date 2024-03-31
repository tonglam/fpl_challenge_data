const { describe, test, afterAll } = require('@jest/globals');
const { server } = require('../index');
const { upsertStaticData } = require('../src/services/upsertDataService');

describe('upsertStaticData', () => {
  test('upsert bootstrap static data', async () => {
    await upsertStaticData();
  });
}, 100000);

// describe('upsertEventFixtureData', () => {
//   test('upsert event fixture data', async () => {
//     const event = 1;
//     await upsertEventFixtureData(event);
//   });
// });

afterAll((done) => {
  server.close(done);
});
