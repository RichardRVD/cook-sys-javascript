const add = (a, b) => a + b;

const curry = (f, arr = []) => (...args) => (
    a => a.length === f.length
    ? f(...a)
    :curry(f, a)
)([...arr, ...args])

const curriedAdd = curry(add)
console.log(curriedAdd(1, 2))

function addition(a,b){
    return a + b;
}
function addShowCurry(a){
    return function(b){
            return a + b        
    }
}
const increment = addShowCurry(1)
const add5 = addShowCurry(5)

console.log(addition(1,2))
console.log(addShowCurry(1)(2))
console.log(increment(10))
console.log(add5(20))

// rest parameters
const f = (num, ...a) => console.log(a)

f(10, 20, 30, 40, 'Hello', true, [1,2,3], {a:'Bye', b:'Hi'})

//Spread args into a function
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
f(...b)