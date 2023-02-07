console.log("Running module b")

export const moduleBVariable = "named variable from module b"

export const moduleBVariable2 = 50;

export function moduleBFunction(){
    console.log("Running from module b")
}

export default{
    a: moduleBVariable,
    b: moduleBVariable2,
    c: moduleBFunction
}

console.log("Finish running module b")