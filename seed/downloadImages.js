// one-time script to download 100 dummy pictures from Unsplash.
const axios = require('axios');
const download = require('image-downloader');
const API_KEYS = require('./config.js');

// get an array of image urls to download
const imageUrls = [];

axios({
  method: 'get',
  url: 'https://api.unsplash.com/search/photos?query=apartment&orientation=landscape&per_page=100',
  headers: {
    'Authorization': `Client-ID ${API_KEYS.CLIENT_KEY}`,
  },
})
  .then((response) => {
    const results = response.data.results;
    for (let i = 0; i < results.length; i += 1) {
      imageUrls.push(results[i].urls.regular);
    }
    console.log('Done getting image urls!');
    console.log(imageUrls);

    imageUrls.forEach((imageUrl, idx) => {
      download.image({
        url: imageUrl,
        dest: './images',
      })
        .then(({ filename }) => {
          console.log(`Image ${idx} saved to: ${filename}`);
        })
        .catch((err) => console.error(err));
    });
  })
  .catch((err) => console.log(err));
