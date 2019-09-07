const mysql = require('mysql2');

// docker
const db = mysql.createConnection({
  user: 'root',
  password: 'docker',
  host: 'database',
  database: 'photogallery',
});

// local dev
// const db = mysql.createConnection({
//   user: 'root',
//   host: 'localhost',
//   database: 'photogallery',
// });

db.connect();

const getImagesForListingId = (listingId, cb) => {
  db.query(`SELECT * from images where listing_id=${listingId} order by sequence_id`, (err, res) => {
    if (err) cb(err);
    else cb(null, res);
  });
};

module.exports = {
  getImagesForListingId,
};
