const loremHipsum = require('lorem-hipsum');

let getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const imageUrls = [];
const strChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];

// for now, generate random string to mimic image urls
for (let i = 0; i < 100; i++) {
  imageUrls[i] = Math.floor(Math.random(0, 1) * 100) + '\n'
                 strChoices[getRandomInt(0, strChoices.length)];
}

let insertQueries = [];

for (let listing_id = 1; listing_id < 101; listing_id++) {
  let insertQuery = {};
  let numPhotos = getRandomInt(5, 25);
  for (let sequence_id = 1; sequence_id < numPhotos; sequence_id++) {
    let image_url = getRandomInt(0, imageUrls.length);
    let caption = loremHipsum({ sentenceLowerBound: 5, sentenceUpperBound: 12 });

    insertQuery = { listing_id, sequence_id, image_url, caption };
    insertQueries.push(insertQuery);
  }
}

console.log(insertQueries);