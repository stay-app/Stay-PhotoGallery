const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
// app.use(express.static('./public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8000");
  next();
});


// app.get('/bundle.js', () => {
//   app.status(200).sendFile('../public/bundle.js');
// });

// app.get('/', () => {
//   app.status(200).sendFile('../public/index.html');
// });

// get listing images for a given listing id
app.get('/api/images/:listingid', (req, res) => {
  db.getImagesForListingId(req.params.listingid, (err, queryResults) => {
    if (err) console.log(err);
    else res.status(200).send(queryResults.rows);
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
