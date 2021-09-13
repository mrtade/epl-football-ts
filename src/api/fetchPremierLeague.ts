import axios from 'axios';

export const findPremierLeague = async () => {
  // TODO: Potentially use .then .catch .finally
  try {
    const premier_league = await axios.get(`http://localhost:3003/epl`);
    const {
      data: { country, name, logo },
    } = premier_league;
    const data = { name, country, logo };
    return data;
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const findPremierLeagueTable = async () => {
  // TODO: Potentially use .then .catch .finally
  try {
    const premier_league_table = await axios.get(
      `http://localhost:3003/epl_table`
    );
    const { data } = premier_league_table;
    return data;
  } catch (err) {
    console.log("Error: ", err);
  }
};
