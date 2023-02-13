const order = JSON.parse(localStorage.getItem('order'))

const calculateLemonadePrice = ({lemonJuice, water, sugar, iceCubes}) => 
(lemonJuice * .3 + 
sugar * .25 + 
water * .01 + 
iceCubes *.05 + .75).toFixed(2)

order.lemonades = order.lemonades.map(lemonade => ({
    ...lemonade, 
    price: calculateLemonadePrice(lemonade)
}))