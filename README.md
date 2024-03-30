# Overall

Fpl-challenge-data fetches data from the Fantasy Challenge Premier League servers, cleans and transforms the data, and then stores it in MongoDB and Redis.

# Tech Stack

- Node.js
- Express.js
- Jest
- Prisma
- MongoDB
- Pino
- Node-cron
- Node-fetch
- Eslint && Prettier

# Fantansy Challenge Endpoints

- Bootstrap-static: https://fplchallenge.premierleague.com/api/bootstrap-static/

- Gameweek Bootstrap: https://fplchallenge.premierleague.com/api/bootstrap-static/%s

- Gameweek Fixture: https://fplchallenge.premierleague.com/api/fixtures/?event=%s

- Element Summary: https://fplchallenge.premierleague.com/api/element-summary/%s/

- Entry: https://fplchallenge.premierleague.com/api/entry/%s/?event=%s&phase=%s

- User Picks: https://fplchallenge.premierleague.com/api/entry/%s/event/%s/picks/

- User Transfers: https://fplchallenge.premierleague.com/api/entry/%s/transfers/

- League: https://fplchallenge.premierleague.com/api/leagues-classic/%s/standings/?page_standings=%s&phase=%s

# REST API
