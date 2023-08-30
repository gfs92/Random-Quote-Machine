const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin"
  );
  next();
});

app.get("/api/random", async (req, res) => {
  try {
    const response = await axios.get("https://ultima.rest/api/random");
    res.json(response.data);
  } catch (error) {
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
