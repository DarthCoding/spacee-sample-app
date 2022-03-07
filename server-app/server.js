const cors = require('cors');
const express = require('express');
const axios = require('axios').default;

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers';
const API_KEY = 'eX4GvN6eIXfMcuLWU90eDrYPtZe77rOut7zUTY6P';

// App
const app = express();app.use(cors());

app.get('/', async (req, res) => {
  res.send("Server is running.");
});

app.get('/healthcheck', async (req, res) => {
  res.send("Server is Healthy!");
});

app.get('/photos', async (req, res) => {
  let reqURL = `${BASE_URL}/curiosity/photos?earth_date=${req.query.date}&api_key=${API_KEY}`
  const photos = await axios(reqURL)
    .then(res => res.data.photos);
  
  res.send(photos);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);