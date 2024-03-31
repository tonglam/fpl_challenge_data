const { prisma, logger } = require('../../index');
const { player_value_change_type_enum } = require('../constant');
const { currentEvent } = require('../utils/fpl.util');

const upsertEvent = async (bootStrapData) => {
  const eventData = bootStrapData.events.map((data) => {
    return {
      ...data,
      event_id: data.id,
      id: undefined,
    };
  });

  try {
    await prisma.event.deleteMany();
  } catch (error) {
    logger.error(`Error deleting event: ${error.message}`);
  }

  try {
    await prisma.event.createMany({
      data: eventData,
    });
  } catch (error) {
    logger.error(`Error upserting event: ${error.message}`);
  }
};

const upsertPhase = async (bootStrapData) => {
  const phaseData = bootStrapData.phases.map((data) => {
    return {
      ...data,
      phase_id: data.id,
      id: undefined,
    };
  });

  try {
    await prisma.phase.deleteMany();
  } catch (error) {
    logger.error(`Error deleting phase: ${error.message}`);
  }

  try {
    await prisma.phase.createMany({
      data: phaseData,
    });
  } catch (error) {
    logger.error(`Error upserting phase: ${error.message}`);
  }
};

const upsertTeam = async (bootStrapData) => {
  const teamData = bootStrapData.teams.map((data) => {
    return {
      team_id: data.id,
      team_code: data.code,
      name: data.name,
      short_name: data.short_name,
      id: undefined,
    };
  });

  try {
    await prisma.team.deleteMany();
  } catch (error) {
    logger.error(`Error deleting team: ${error.message}`);
  }

  try {
    await prisma.team.createMany({
      data: teamData,
    });
  } catch (error) {
    logger.error(`Error upserting team: ${error.message}`);
  }
};

const upsertPlayer = async (bootStrapData) => {
  const playerData = bootStrapData.elements.map((data) => {
    return {
      element_id: data.id,
      element_code: data.code,
      price: data.now_cost,
      start_price: data.cost_change_start,
      element_type: data.element_type,
      first_name: data.first_name,
      second_name: data.second_name,
      web_name: data.web_name,
      team_id: data.team,
    };
  });

  try {
    await prisma.player.deleteMany();
  } catch (error) {
    logger.error(`Error deleting player: ${error.message}`);
  }

  try {
    await prisma.player.createMany({
      data: playerData,
    });
  } catch (error) {
    logger.error(`Error upserting player: ${error.message}`);
  }
};

const upsertPlayerStat = async (bootStrapData) => {
  const playerData = bootStrapData.elements.map((data) => {
    return {
      event_id: currentEvent(),
      element_id: data.id,
      can_transact: data.can_transact,
      chance_of_playing_next_round: data.chance_of_playing_next_round,
      chance_of_playing_this_round: data.chance_of_playing_this_round,
      cost_change_event: data.cost_change_event,
      cost_change_event_fall: data.cost_change_event_fall,
      cost_change_start: data.cost_change_start,
      cost_change_start_fall: data.cost_change_start_fall,
      dreamteam_count: data.dreamteam_count,
      element_type: data.element_type,
      ep_next: data.ep_next,
      ep_this: data.ep_this,
      event_points: data.event_points,
      form: data.form,
      in_dreamteam: data.in_dreamteam,
      news: data.news,
      news_added: data.news_added,
      now_cost: data.now_cost,
      photo: data.photo,
      points_per_game: data.points_per_game,
      selected_by_percent: data.selected_by_percent,
      special: data.special,
      squad_number: data.squad_number,
      status: data.status,
      team_id: data.team,
      total_points: data.total_points,
      transfers_in: data.transfers_in,
      transfers_in_event: data.transfers_in_event,
      transfers_out: data.transfers_out,
      transfers_out_event: data.transfers_out_event,
      value_form: data.value_form,
      value_season: data.value_season,
      minutes: data.minutes,
      goals_scored: data.goals_scored,
      assists: data.assists,
      clean_sheets: data.clean_sheets,
      goals_conceded: data.goals_conceded,
      own_goals: data.own_goals,
      penalties_saved: data.penalties_saved,
      penalties_missed: data.penalties_missed,
      yellow_cards: data.yellow_cards,
      red_cards: data.red_cards,
      saves: data.saves,
      bonus: data.bonus,
      bps: data.bps,
      influence: data.influence,
      creativity: data.creativity,
      threat: data.threat,
      ict_index: data.ict_index,
      starts: data.starts,
      expected_goals: data.expected_goals,
      expected_assists: data.expected_assists,
      expected_goal_involvements: data.expected_goal_involvements,
      expected_goals_conceded: data.expected_goals_conceded,
      influence_rank: data.influence_rank,
      influence_rank_type: data.influence_rank_type,
      creativity_rank: data.creativity_rank,
      creativity_rank_type: data.creativity_rank_type,
      threat_rank: data.threat_rank,
      threat_rank_type: data.threat_rank_type,
      ict_index_rank: data.ict_index_rank,
      ict_index_rank_type: data.ict_index_rank_type,
      corners_and_indirect_freekicks_order: data.corners_and_indirect_freekicks_order,
      corners_and_indirect_freekicks_text: data.corners_and_indirect_freekicks_text,
      direct_freekicks_order: data.direct_freekicks_order,
      direct_freekicks_text: data.direct_freekicks_text,
      penalties_order: data.penalties_order,
      penalties_text: data.penalties_text,
      expected_goals_per_90: data.expected_goals_per_90,
      saves_per_90: data.saves_per_90,
      expected_assists_per_90: data.expected_assists_per_90,
      expected_goal_involvements_per_90: data.expected_goal_involvements_per_90,
      expected_goals_conceded_per_90: data.expected_goals_conceded_per_90,
      goals_conceded_per_90: data.goals_conceded_per_90,
      now_cost_rank: data.now_cost_rank,
      now_cost_rank_type: data.now_cost_rank_type,
      form_rank: data.form_rank,
      form_rank_type: data.form_rank_type,
      points_per_game_rank: data.points_per_game_rank,
      points_per_game_rank_type: data.points_per_game_rank_type,
      selected_rank: data.selected_rank,
      selected_rank_type: data.selected_rank_type,
      starts_per_90: data.starts_per_90,
      clean_sheets_per_90: data.clean_sheets_per_90,
    };
  });

  try {
    await prisma.playerStat.deleteMany();
  } catch (error) {
    logger.error(`Error deleting player stat: ${error.message}`);
  }

  try {
    await prisma.playerStat.createMany({
      data: playerData,
    });
  } catch (error) {
    logger.error(`Error upserting player stat: ${error.message}`);
  }
};

const upsertPlayerValue = async (bootStrapData) => {
  const playerData = bootStrapData.elements.map((data) => {
    return {
      element_id: data.id,
      element_type: data.element_type,
      event_id: data.event,
      value: data.value,
      last_value: data.value,
      change_date: data.value,
      change_type: player_value_change_type_enum.Start,
    };
  });

  try {
    await prisma.playerValue.upsert({
      where: { element_id: playerData.element_id, event_id: playerData.event },
      update: playerData,
      create: playerData,
    });
  } catch (error) {
    logger.error(`Error upserting player value: ${error.message}`);
  }

  // try {
  //   await prisma.playerValue.deleteMany();
  // } catch (error) {
  //   logger.error('Error deleting player value:', error);
  // }

  // try {
  //   await prisma.playerValue.createMany({
  //     data: playerData,
  //   });
  // } catch (error) {
  //   logger.error('Error upserting player value:', error);
  // }
};

const upsertEventFixture = async (fixtureData) => {
  try {
    await prisma.fixture.upsert({
      where: { fixture_id: fixtureData.fixture_id },
      update: fixtureData,
      create: fixtureData,
    });
  } catch (error) {
    logger.error(`Error upserting fixture: ${error.message}`);
  }
};

module.exports = {
  upsertEvent,
  upsertPhase,
  upsertTeam,
  upsertPlayer,
  upsertPlayerStat,
  upsertPlayerValue,
  upsertEventFixture,
};
