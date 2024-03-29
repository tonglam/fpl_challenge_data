module.exports = {
  BOOTSTRAP_STATIC_URL: 'https://fplchallenge.premierleague.com/api/bootstrap-static/',
  ENTRY_URL: (entry) => `https://fplchallenge.premierleague.com/api/entry/${entry}/`,
  USER_PICK_URL: (entry, event) =>
    `https://fplchallenge.premierleague.com/api/entry/${entry}/event/${event}/picks/`,
  USER_TRANSFERS_URL: (entry) =>
    `https://fplchallenge.premierleague.com/api/entry/${entry}/transfers/`,
  LEAGUE_URL: (league_id, page) =>
    `https://fplchallenge.premierleague.com/api/leagues-classic/${league_id}/standings/?page_standings=${page}/`,
};
