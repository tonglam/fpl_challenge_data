const { prisma } = require('../../index');

const upsertEvents = async (bootStrapData) => {
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

const upsertPhase = async (bootStrapData) => {
  const phaseData = bootStrapData.phases.map((data) => {
    return {
      ...data,
      phase_id: data.id,
      id: undefined,
    };
  });

  phaseData.map(async (data) => {
    try {
      await prisma.phase.upsert({
        where: { phase_id: data.phase_id },
        update: data,
        create: data,
      });
    } catch (error) {
      console.error(`Error upserting phase with id ${data.id}:`, error);
    }
  });
};

const upsertTeams = async (bootStrapData) => {
  const teamData = bootStrapData.teams.map((data) => {
    return {
      team_id: data.id,
      team_code: data.code,
      name: data.name,
      short_name: data.short_name,
      id: undefined,
    };
  });

  teamData.map(async (data) => {
    try {
      await prisma.team.upsert({
        where: { team_id: data.team_id },
        update: data,
        create: data,
      });
    } catch (error) {
      console.error(`Error upserting team with id ${data.id}:`, error);
    }
  });
};

const upsertPlayers = async (bootStrapData) => {
  const playerData = bootStrapData.elements.map((data) => {
    return {
      ...data,
      element_id: data.id,
      team_id: data.team,
      id: undefined,
      team: undefined,
    };
  });

  try {
    await prisma.player.deleteMany();
  } catch (error) {
    console.error('Error deleting players:', error);
  }

  try {
    await prisma.player.createMany({
      data: playerData,
    });
  } catch (error) {
    console.error('Error upserting players:', error);
  }
};

const upsertEventFixture = async (fixtureData) => {
  try {
    await prisma.fixture.upsert({
      where: { fixture_id: fixtureData.fixture_id },
      update: fixtureData,
      create: fixtureData,
    });
  } catch (error) {
    console.error(`Error upserting event fixture with id ${fixtureData.fixture_id}:`, error);
  }
};

module.exports = {
  upsertEvents,
  upsertPhase,
  upsertTeams,
  upsertPlayers,
  upsertEventFixture,
};