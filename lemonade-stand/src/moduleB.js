console.log("Running Module B")

const internalVariable = "Hey from module B"

function internalFunction(){
    console.log("Running inside the internal function from module B")
}

module.exports = internalFunction;

console.log("Finished running module B")