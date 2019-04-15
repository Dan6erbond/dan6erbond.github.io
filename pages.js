const fs = require('fs');

fs.readdir(__dirname, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});
