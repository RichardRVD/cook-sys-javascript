import fs from 'fs'
import { dirname } from 'path'

const curry = (f, arr = []) => (...args) => (
    a => a.length === f.length
    ? f(...a)
    :curry(f, a)
)([...arr, ...args])

//Transducer: transformer => reducer => reducer
export const map = f => reducer => (acc, curr, idx, arr) => reducer(acc, f(curr, idx), idx, arr)

export const calculateLemonadePrice = lemonade => {
    let result = .75
    for (let key in lemonade) {
        switch (key) {
            case "lemonJuice":
                result += lemonade[key] * .3
                break
            case "water":
                result += lemonade[key] * .01
                break
            case "sugar":
                result += lemonade[key] * .2
                break
            case "iceCubes":
                result += lemonade[key] * .05
                break
            default:
                break
        }
    }
    return result;
}
const calculateOrderTotal = ( lemonades ) => {
    let result = 0;
    for (let lemonade of lemonades) {
        result += lemonade.price
    }
    return result;
}
export const writeFileSync = (fileName, order) => {
    fs.writeFileSync(fileName, JSON.stringify(order))
}

export const readAllFiles = dirName => {
    const orders = []
    for (let name of fs.readdirSync(dirName)) {
        orders.push(JSON.parse(fs.readFileSync(dirName + '/' + name)))
    }
    return orders
}

export const buildQuestionArray = (val, i) => [
    
    {
        type: 'number',
        name: `lemonJuice${i + 1}`,
        message: `How many cups of lemon juice do you want in lemonade ${i + 1}?`
    },
    {
        type: 'number',
        name: `water${i + 1}`,
        message: `How many cups of water do you want in lemonade ${i + 1}?`
    },
    {
        type: 'number',
        name: `sugar${i + 1}`,
        message: `How many cups of sugar do you want in lemonade ${i + 1}?`
    },
    {
        type: 'number',
        name: `iceCubes${i + 1}`,
        message: `How many ice cubes do you want in lemonade ${i + 1}?`
    }
]

export const createLemonade = curry((response, curr, i) => ({
    lemonJuice: Number.parseInt(response['lemonJuice' + (i + 1)]),
    water: Number.parseInt(response['water' + (i + 1)]),
    sugar: Number.parseInt(response['sugar' + (i + 1)]),
    iceCubes: Number.parseInt(response['iceCubes' + (i + 1)])
}))
export const addLemonadeToOrder = (acc, curr) => ({
    ...acc,
    lemonades: [...acc.lemonades, { ...curr, price: calculateLemonadePrice(curr) }]
})
export const updateOrderTotal = (order) => ({
    ...order,
    total: calculateOrderTotal(order.lemonades)
})

// { lemonJuice0: '4', water0: '4', sugar0: '4', iceCubes0: '10', lemonJuice1: '4', water1: '4', sugar1: '1', iceCubes1: '10'} 
// => [{lemonJuice: 4, water: 4, sugar: 4, iceCubes: 10}, {lemonJuice: 4, water: 4, sugar: 4, iceCubes: 10}]

// split: (a: ([key: string, val: string])=> [string, string]) => [string, string, string]
export const split = ([key, val]) => [key.split(/(\d+)/), val] //['lemonJuice' , '0', " "]

// parseNums: ([[key: 'lemonJuice', idx : string], val: string]) =>[string, number, number]
export const parseNums = ([[key, idx], val]) => [key, Number.parseInt(idx), Number.parseInt(val)] 

export const makeLemonades = (acc, [key, idx, val]) => acc[idx] ? (acc[idx][key] = val) && acc : [...acc, { [key]: val}]

// (...reducers) => reducer => reducer
export const compose = (...fns) => x => fns.reduceRight((y,f) => f(y), x)

export const createLemonadesArray = response => 
Object.entries(response).reduce(compose(map(split), map(parseNums))(makeLemonades), [])

export const createQuestionsArry = ({numLemonades}) => 
[...Array(Number.parseInt(numLemonades))].flatMap(buildQuestionArray)

export const promptIngredientQuestions = (command) => questions => command.prompt(questions)

export const addPriceToLemonades = lemonadesWithoutPrice => lemonadesWithoutPrice.map(lemonade => ({...lemonade, price: calculateLemonadePrice(lemonade)}))

export const createOrderObject = (name, phoneNumber) => lemonades => ({
    customer: {
        name,
        phoneNumber,
    },
    lemonadeStand: {
        name: "Rickys Lemonade Stand"
    },
    lemonades,
    total: lemonades.reduce((acc, curr) => acc + curr.price, 0)
})

export const writeOrderToFile = order => writeFileSync(
    order.lemonadeStand.name + "/" + order.customer.name + '.json',
    order
)
