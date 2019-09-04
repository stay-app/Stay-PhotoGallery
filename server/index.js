const express = require('express');
const db = require('../database/index.js');

const app = express();

app.use(express.static('./public'));

app.get('/main.js', () => {
  app.status(200).sendFile('../public/main.js');
});

app.get('/', () => {
  app.status(200).sendFile('../public/index.html');
});

// get listing images for a given listing id
app.get('/api/images/:listingid', (req, res) => {
  db.getImagesForListingId(req.params.listingid, (err, queryResults) => {
    if (err) console.log(err);
    else res.status(200).send(queryResults.rows);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
