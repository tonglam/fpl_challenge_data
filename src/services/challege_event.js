const { getFetch } = require('../utils/fetch');
const { BOOTSTRAP_STATIC_URL } = require('../config/api.config');

const fetchChallengeEvent = async () => {
  try {
    const getChallangeEvent = getFetch(BOOTSTRAP_STATIC_URL)()();
    const res = await getChallangeEvent;

    console.log(res);
  } catch (error) {
    console.error('Error fetching challenge event:', error);
  }
};

module.exports = fetchChallengeEvent;
