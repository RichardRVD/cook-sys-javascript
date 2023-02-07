console.log("Running Module A");

require('./moduleB')

const moduleBImports = require('./moduleB')

moduleBImports();

console.log("Finished running module A")