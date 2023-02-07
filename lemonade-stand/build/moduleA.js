"use strict";

console.log("Running Module A");
require('./moduleB');
var moduleBImports = require('./moduleB');
moduleBImports();
console.log("Finished running module A");