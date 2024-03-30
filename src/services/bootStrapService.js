const { getFetch } = require('../utils/fetch.util');
const { BOOTSTRAP_STATIC_URL } = require('../config/api.config');
const { prisma } = require('../../index');

const fetchEvent = async () => {
  const bootStrapData = await getFetch(BOOTSTRAP_STATIC_URL)()();

  const eventData = bootStrapData.events.map((data) => {
    return {
      ...data,
      event_id: data.id,
      id: undefined,
    };
  });

  eventData.map(async (data) => {
    try {
      await prisma.event.upsert({
        where: { event_id: data.event_id },
        update: data,
        create: data,
      });
    } catch (error) {
      console.error(`Error upserting event with id ${data.id}:`, error);
    }
  });
};

module.exports = { fetchEvent };
