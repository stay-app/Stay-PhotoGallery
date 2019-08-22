const loremHipsum = require('lorem-hipsum');

let getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const imageUrls = [];
const strChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];

// generate arr of random str (for now) to mimic image urls
for (let i = 0; i < 100; i++) {
  imageUrls[i] = Math.floor(Math.random(0, 1) * 100) +
                 strChoices[getRandomInt(0, strChoices.length)];
}

let insertQueryObj = {};

// for loop for x insert statements (n photos for each listingId)
for (let listingId = 1; listingId < 101; listingId++) {
  let numPhotos = getRandomInt(5, 25);
  for (let seqId = 1; seqId < numPhotos; seqId++) {
    let photoUrl = getRandomInt(0, imageUrls.length);
    let caption = loremHipsum({ sentenceLowerBound: 5, sentenceUpperBound: 12 });
    console.log(listingId, seqId, photoUrl, caption);
  }
}