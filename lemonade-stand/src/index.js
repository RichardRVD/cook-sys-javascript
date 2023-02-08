import Vorpal from 'vorpal'
import { writeFileSync, readAllFiles, buildQuestionArray, createLemonadeObject, addLemonadeToOrder, createLemonade, updateOrderTotal} from './lib'
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
vorpal.command('createOrder <name> <phoneNumber>', 'Create an oder and saves it as a JSON file.').action(function(args, callback){
    

    this.prompt({
        type: 'number',
        name: 'numLemonades',
        default: 1,
        message: "How many lemonades would you like to order?"
    }, ({numLemonades}) => { 

        
        const questions = [...Array(Number.parseInt(numLemonades))].flatMap(buildQuestionArray)
        // build up an array as we loop over the number of lemonades a customer wants
        // for (let i = 1; i <= Number.parseInt(numLemonades); i++){
        //     questions = buildQuestionArray(questions, i);
        // }
        this.prompt(questions, response => {
            // let order = {
            //     total:0,
            //     lemonades: [],
            //     customer : {
            //     name: args.name,
            //     phoneNumber: args.phoneNumber
            //     },
            //     lemonadeStand: {
            //         name: "Rickys lemonade stand"
            //     }
            // }

            // for(let i = 1; i <= numLemonades; i++){
            //     order = updateOrderTotal(
            //         addLemonadeToOrder(order, createLemonade(response, i))
            //         )
            // }
            const order = updateOrderTotal([...Array(Number.parseInt(numLemonades))].map(createLemonade(response)).reduce(addLemonadeToOrder, {
                    total:0,
                    lemonades: [],
                    customer : {
                    name: args.name,
                    phoneNumber: args.phoneNumber
                    },
                    lemonadeStand: {
                        name: "Rickys lemonade stand"
                    }
                }))

            writeFileSync(order.lemonadeStand.name + '/' + order.customer.name + '.json', order)
            callback()
            })
        })
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