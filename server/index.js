const express = require('express');
const db = require('../database/index.js');

const app = express();

app.use(express.static('./public'));

const port = process.env.PORT || 3000;

// get listing images for a given listing id
app.get('/api/images/:listingid', (req, res) => {
  db.getImagesForListingId(1, (err, queryResults) => {
    if (err) console.log(err);
    else res.send(queryResults.rows);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
