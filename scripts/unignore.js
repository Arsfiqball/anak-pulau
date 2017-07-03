const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve(__dirname, '../.gitignore'), function(err, data) {
  data = data.toString().replace(/#\sdeploy-keep\n([^\n]+)/, '');
  fs.writeFile(path.resolve(__dirname, '../.gitignore'), data, function(err) {
    if (err) {
      console.error(err);
    }
  });
});
