const loremHipsum = require('lorem-hipsum');
const pg = require('pg');
const os = require('os');
const pgp = require('pg-promise')();
const imageUrls = require('./imageUrls.js')

const user = os.userInfo().username;
const cn = `postgres://${user}:@localhost:5432/photogallery`;
const db = pgp(cn);

let getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

let insertQueries = [];

for (let listing_id = 1; listing_id < 101; listing_id++) {
  let insertQuery = {};
  let numPhotos = getRandomInt(5, 25);
  for (let sequence_id = 1; sequence_id < numPhotos; sequence_id++) {
    let image_url = imageUrls[getRandomInt(0, imageUrls.length)];
    let caption = loremHipsum({ sentenceLowerBound: 5, sentenceUpperBound: 12 });

    insertQuery = { listing_id, sequence_id, image_url, caption };
    insertQueries.push(insertQuery);
  }
}

const colSet = new pgp.helpers.ColumnSet(['listing_id', 'sequence_id', 'image_url', 'caption'], {table: 'images'});
const query = pgp.helpers.insert(insertQueries, colSet);

db.none(query)
  .then(success => console.log("Inserting seed data..."))
  .catch(err => console.log(err));
