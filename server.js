const express = require('express');
const axios = require('axios');
const app = express();
const port = 8080 || process.env.PORT;

app.get('/azuga-data', (req, res) => {
  console.log(req);
})

app.listen(port, console.log(`azuga-dev-server is listening on ${port}`));