// npm - global command, comes with node
// npm --version

// local dependency - use it only in this par ticular projects
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manuel approach (create package.json in the root, create properties e.t.c)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require("lodash");
const items = [1, [(2)[(3, [4])]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
