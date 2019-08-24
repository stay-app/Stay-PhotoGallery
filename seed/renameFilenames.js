// renames all photos to add "jpg" as the extension
const fs = require('fs');

fs.readdir('./images', (err, files) => {
  if (err) console.log(err);
  else {
    for (var i = 0; i < files.length; i += 1) {
      fs.rename(`./images/${files[i]}`, `./images/${files[i]}.jpg`, (err, success) => {
        if (err) console.log(err);
        else console.log(success);
      });
    }
  }
});
