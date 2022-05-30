const { build } = require("../dist/Front.js");
const fs = require("fs");

build(fs.readFileSync('./tests/test.yaml', 'utf8'), function (item, on) {
    console.log(item);
    console.log(on);
});