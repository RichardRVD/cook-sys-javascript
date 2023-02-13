const initialState = {
    lemonJuice: {
        amount: 0,
        max: 8,
        measurement: 'ounces'
    },
    water: {
        amount:0,
        max:8,
        measurement: 'ounces'
    },
    sugar:{
        amount: 0,
        max: 12,
        measurement: 'tablespoons'
    },
    ice: {
        amount: 0,
        max: 15,
        measurement: 'cubes'
    }
}

let state = initialState

    const order = JSON.parse(localStorage.getItem('order'))


    const calcPercent = (amount, max, maxFill = 100) =>
    100 - (amount / max) * maxFill

const updateIngredient = (name, {amount, max, measurement}, calcAmount) => {
    state = {
        ...state,
            [name]: {
                amount:calcAmount(amount, max),
                max,
                measurement
            }
        }
    }

//jquery used to select values from DOM
const render = ({lemonJuice, water, sugar, ice}) => {
    $('#lemonJuice').css('transform',
    `translate(0, ${calcPercent(lemonJuice.amount, lemonJuice.max)}%)`)
    $('#water').css('transform',
    `translate(0, ${calcPercent(water.amount, water.max)}%)`)
    $('#sugar').css('transform',
    `translate(0, ${calcPercent(sugar.amount, sugar.max, 40)}%)`)
    $('#lemonJuiceValue').html(lemonJuice.amount + " " + lemonJuice.measurement)
    $('#waterValue').html(water.amount + " " + water.measurement)
    $('#sugarValue').html(sugar.amount + " " + sugar.measurement)
    $('#iceValue').html(ice.amount + " " + ice.measurement)
}

render(state)

$('.increment').click(event => {
    updateIngredient(event.target.name, state[event.target.name], (amount, max) => amount < max ? amount + 1 : amount)
    render(state)
    $('#lemonadeError').addClass('hidden')


})

$('.decrement').click(event => {
    updateIngredient(event.target.name, state[event.target.name], amount => amount > 0 ? amount - 1 : amount)
    render(state)
})

$('.yellowButton').click(() => {
    if(state.lemonJuice.amount || state.water.amount || state.sugar.amount || state.ice.amount){
        order.lemonades.push({lemonJuice: state.lemonJuice.amount, water: state.water.amount, sugar: state.water.amount, iceCubes: state.ice.amount})
    state = initialState
    render(state)
    } else {
        $('#lemonadeError').removeClass('hidden')
    }
    
})
$('#checkout').click(()=>{
    localStorage.setItem('order', JSON.stringify(order))
    window.location = './cart.html'
})



