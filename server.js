const express = require('express');
const axios = require('axios');
const app = express();
const port = 8080 || process.env.PORT;
const AZUGA_URL = 'https://api.azuga.com/azuga-ws/v1/live/location.json'
const API_KEY = "YWY5M2M2MTQtYjExYi00YWZkLTlhOWItM2E5NzVlY2IzNGVl"

app.use(express.json());

app.get('/azuga-data', (req, res) => {
  axios({
    method: 'get',
    url: AZUGA_URL,
    headers: {
      'Authorization': `${API_KEY}`
    }
  }).then(response => { 
    console.log(response.data);
    res.json(response.data);
  })
})

app.listen(port, console.log(`azuga-dev-server is listening on port: ${port}`));