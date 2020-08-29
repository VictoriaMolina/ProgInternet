const axios = require('axios');
const serviceUri = 'https://pokeapi.co/api/v2/pokemon';

async function list(req, res){
    try {
        const response = await axios.get(`${serviceUri}?limit=151&offset=0`);

        const webRes = response ? response.data ? response.data.results ? response.data.results : {} : {}: {};
        console.log(response);

        res.json(webRes);

      } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Web Service Error"
        });
      }
};

async function namePokemon(req, res){
    try {
      const response = await axios.get(`${serviceUri}?limit=151&offset=0`);

      const webRes = response ? response.data ? response.data ? response.data.results : {} : {}: {};
      console.log(response);

     

      res.json(webRes);

    } catch (error) {
      console.log(error);
      res.status(500).json({
          message: "Web Service Error"
      });
    }
}

module.exports = {
    list,
    namePokemon
};