import Vorpal from 'vorpal'
import { readAllFiles,  createLemonadesArray, createOrderObject, createQuestionsArry, calculateLemonadePrice, promptIngredientQuestions, writeOrderToFile, addPriceToLemonades } from './lib'
const vorpal = Vorpal()

vorpal
    .command('hello <name> [number]', 'Prints hello <name> to the console')
    .option('-f --file', 'Provide a file name')
    .action(function(args, callback){
        if(args.options.file){
            this.log('I see you want to make a file.')
        }
        this.log(`Hello ${args.name}, should I call you at ${args.number}`)
        callback()
    })

vorpal.command(
    'createOrder <name> <phoneNumber>', 
    'Create an oder and saves it as a JSON file.'
)
.action(function({name, phoneNumber}){
    return this.prompt({
        type: 'number',
        name: 'numLemonades',
        default: 1,
        message: "How many lemonades would you like to order?"
    })
    .then(createQuestionsArry)
    .then(promptIngredientQuestions(this))
    .then(createLemonadesArray) // [[key, idx, value], [key, idx, value]]
    .then(addPriceToLemonades)
    .then(createOrderObject(name, phoneNumber))
    .then(writeOrderToFile)
})

vorpal
.command('getOrders <lemonadeStand>',
    'Get all orders for the given lemonade stand')
.action(function ({ lemonadeStand }, callback) {
    const orders = readAllFiles(lemonadeStand)
    this.log(`There are ${orders.length} orders at ${lemonadeStand}`)
    for( let order of orders) {
        this.log(`Total Price: ${order.total}`)
        this.log(`Lemonades:`)
        this.log(order.lemonades)
        this.log(`Customer:`)
        this.log(order.customer)
    }
    callback()
})

vorpal.delimiter('lemonade-stand$').show()