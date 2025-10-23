const axios = require("axios");

const options = {
  method: 'get',
  url: 'https://icanhazdadjoke.com',
  headers: {
    'Accept': 'application/json',
    'User-Agent': 'Writing JavaScript action GitHub Skills course.',
  }
};

async function getJoke() {
  const res = await axios(options);
  return res.joke;
}

module.exports = getJoke;