const axios = require("axios");

async function getJoke() {
  const res = await axios.get(
    'https://icanhazdadjoke.com/', {
     headers: {
      'Accept': 'application/json',
      'User-Agent': 'Writing JavaScript action GitHub Skills course.'
    }
  });
  console.log(res);
  return res.joke;
}

module.exports = getJoke;