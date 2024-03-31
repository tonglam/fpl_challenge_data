const { getFetch } = require('../utils/fetch.util');
const { BOOTSTRAP_STATIC_URL, GW_FIXTURE_URL, EVENT_LIVE_URL } = require('../config/api.config');
const {
  upsertEvents,
  upsertPhase,
  upsertTeams,
  upsertPlayers,
  upsertEvnetFixture,
} = require('./upsertDataBaseService');

const upsertStaticData = async () => {
  const bootStrapData = await getFetch(BOOTSTRAP_STATIC_URL)()();
  if (!bootStrapData) {
    console.error('Error fetching bootstrap data');
    return;
  }

  try {
    await upsertEvents(bootStrapData);
  } catch (error) {
    console.error('Error upserting events:', error);
  }

  try {
    await upsertPhase(bootStrapData);
  } catch (error) {
    console.error('Error upserting phase:', error);
  }

  try {
    await upsertTeams(bootStrapData);
  } catch (error) {
    console.error('Error upserting teams:', error);
  }

  try {
    await upsertPlayers(bootStrapData);
  } catch (error) {
    console.error('Error upserting players:', error);
  }
};

const upsertEventFixtureData = async (event) => {
  const fixtureData = await getFetch(GW_FIXTURE_URL)({ event: event })();
  if (!fixtureData) {
    console.error('Error fetching fixture data');
    return;
  }

  try {
    await upsertEvnetFixture(fixtureData);
  } catch (error) {
    console.error('Error upserting fixtures:', error);
  }
};

const upsertAllFixtureData = async () => {
  for (let i = 1; i <= 38; i++) {
    await upsertEventFixtureData(i);
  }
};

const upsertEventLiveData = async (event) => {
  const liveData = await getFetch(EVENT_LIVE_URL)({ event: event })();
  if (!liveData) {
    console.error('Error fetching live data');
    return;
  }

  try {
    await upsertLiveData(liveData);
  } catch (error) {
    console.error('Error upserting live data:', error);
  }
};

module.exports = {
  upsertStaticData,
  upsertEventFixtureData,
  upsertAllFixtureData,
  upsertEventLiveData,
};
