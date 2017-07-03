const osm = require('../build/osmjs/osm');
const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve(__dirname, '../build/osmdata/osm.json'), function(err, data) {
  osm.parse(data)
    .then(osm.getNames)
    .then(names => console.log(JSON.stringify(names, null, "  ")));
});
