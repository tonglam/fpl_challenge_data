const { getFetch } = require('../utils/fetch.util');
const { BOOTSTRAP_STATIC_URL } = require('../config/api.config');
const { prisma } = require('../../index');

const fetchChallengeEvent = async () => {
  const challegeEvevtData = await getFetch(BOOTSTRAP_STATIC_URL)()();

  createdEvent = '1';

  // const createdEvent = await prisma.challengeEvent.create({
  //   data: challegeEvevtData,
  // });

  console.log('Challenge event inserted into MongoDB:', createdEvent);

  return createdEvent;
};

module.exports = { fetchChallengeEvent };
