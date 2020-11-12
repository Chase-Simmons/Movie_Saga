const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  // Add query to get all genres
  const queryText = 'SELECT * FROM "genres" ORDER BY "id";';
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('Error while on [get] of [genre.router.js]', err);
      res.sendStatus(500);
    });
});

module.exports = router;
