module.exports = {
  BOOTSTRAP_STATIC_URL: `https://fplchallenge.premierleague.com/api/bootstrap-static/`,
  GW_BOOTSTRAP_URL: (event) =>
    `https://fplchallenge.premierleague.com/api/bootstrap-static/${event}`,
  GW_FIXTURE_URL: (event) => `https://fplchallenge.premierleague.com/api/fixtures/?event=${event}`,
  ELEMENT_SUMMARY_URL: (element) =>
    `https://fplchallenge.premierleague.com/api/element-summary/${element}/`,
  ENTRY_URL: (entry, event, phase) =>
    `https://fplchallenge.premierleague.com/api/entry/${entry}/?event=${event}&phase=${phase}`,
  USER_PICK_URL: (entry, event) =>
    `https://fplchallenge.premierleague.com/api/entry/${entry}/event/${event}/picks/`,
  USER_TRANSFERS_URL: (entry) =>
    `https://fplchallenge.premierleague.com/api/entry/${entry}/transfers/`,
  LEAGUE_URL: (league_id, page, phase) =>
    `https://fplchallenge.premierleague.com/api/leagues-classic/${league_id}/standings/?page_standings=${page}&phase=${phase}`,
};
