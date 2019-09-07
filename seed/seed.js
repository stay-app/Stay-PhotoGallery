const loremHipsum = require('lorem-hipsum');
const imageUrls = require('./imageUrls.js')

console.log("Running seed file...")

const mysql = require('mysql');
const config = {
  user: 'root',
  password: 'docker',
  host: 'database',
  database: 'photogallery',
};

const db = mysql.createConnection(config);

db.connect();

console.log(config);
console.log('----------------------------');
console.log('Seed script - connecting to database...');
console.log('----------------------------');


let getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

let insertQueries = [];

for (let listing_id = 1; listing_id < 101; listing_id++) {
  let insertQuery = [];
  let numPhotos = getRandomInt(5, 25);
  for (let sequence_id = 1; sequence_id < numPhotos; sequence_id++) {
    let image_url = imageUrls[getRandomInt(0, imageUrls.length)];
    let caption = loremHipsum({ sentenceLowerBound: 5, sentenceUpperBound: 12 });
    
    insertQuery = [ image_url, sequence_id, caption, listing_id ];
    insertQueries.push(insertQuery);
  }
}

db.query(`INSERT INTO images (image_url, sequence_id, caption, listing_id) values ? `, [insertQueries], (err, res) => {
  if (err) console.log(err);
  else console.log(null, res);
});

db.end();
