const { Pool } = require('pg');

const pool = new Pool({
  user: 'taehoonkim',
  host: 'localhost',
  database: 'photogallery',
  password: null,
  port: 5432,
});

const getImagesForListingId = (listingId, cb) => {
  pool.query(`SELECT * from images where listing_id=${listingId} order by sequence_id`, (err, res) => {
    if (err) cb(err);
    else cb(null, res);
    // pool.end();
  });
};

module.exports = {
  getImagesForListingId,
};
