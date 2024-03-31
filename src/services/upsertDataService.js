const { logger } = require('../../index');
const { BOOTSTRAP_STATIC_URL, GW_FIXTURE_URL, EVENT_LIVE_URL } = require('../config/api.config');
const { getFetch } = require('../utils/fetch.util');
const {
  // upsertEvent,
  // upsertPhase,
  // upsertTeam,
  // upsertPlayer,
  upsertPlayerStat,
  upsertEvnetFixture,
} = require('./upsertDataBaseService');

const upsertStaticData = async () => {
  const bootStrapData = await getFetch(BOOTSTRAP_STATIC_URL)()();
  if (!bootStrapData) {
    console.error('Error fetching bootstrap data');
    return;
  }

  // try {
  //   await upsertEvent(bootStrapData);
  // } catch (error) {
  //   logger.error(`Error upserting event: ${error.message}`);
  // }

  // try {
  //   await upsertPhase(bootStrapData);
  // } catch (error) {
  //   logger.error(`Error upserting phase: ${error.message}`);
  // }

  // try {
  //   await upsertTeam(bootStrapData);
  // } catch (error) {
  //   logger.error(`Error upserting team: ${error.message}`);
  // }

  // try {
  //   await upsertPlayer(bootStrapData);
  // } catch (error) {
  //   logger.error(`Error upserting player: ${error.message}`);
  // }

  try {
    await upsertPlayerStat(bootStrapData);
  } catch (error) {
    logger.error(`Error upserting player stat: ${error.message}`);
  }
};

const upsertEventFixtureData = async (event) => {
  const fixtureData = await getFetch(GW_FIXTURE_URL)({ event: event })();
  if (!fixtureData) {
    logger.error('Error fetching fixture data');
    return;
  }

  try {
    await upsertEvnetFixture(fixtureData);
  } catch (error) {
    logger.error(`Error upserting fixtures: ${error.message}`);
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
    logger.error('Error fetching live data');
    return;
  }

  // try {
  //   await upsertLiveData(liveData);
  // } catch (error) {
  //   logger.error(`Error upserting live data: ${error.message}`);
  // }
};

module.exports = {
  upsertStaticData,
  upsertEventFixtureData,
  upsertAllFixtureData,
  upsertEventLiveData,
};
