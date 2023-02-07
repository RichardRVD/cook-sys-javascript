// const lemonade = {
//     lemonJuice: 3,
//     water: 3,
//     sugar: 1.5,
//     iceCubes: 10,

//     calculatePrice(){
//         return (
//             this.lemonJuice * .3 + 
//             this.water * .01 + 
//             this.sugar * .25 + 
//             this.iceCubes * .05 + 
//             .75);
//     },
//     calculatePriceLamda: () => {
//         return (
//             lemonJuice * .3 + 
//             water * .01 + 
//             sugar * .25 + 
//             iceCubes * .05 + 
//             .75);
//     }
// }
// // console.log(lemonade.calculatePrice())
// // console.log(lemonade.calculatePriceLamda())
// function updateLemonade( lemonade, lemonJuice, water, sugar, iceCubes){
//     return {
//         ...lemonade,
//         lemonJuice,
//         water,
//         sugar,
//         iceCubes
//     }    
// }

// const updateLemonade = (
//     { calculatePrice },
//         lemonJuice,
//         water,
//         sugar,
//         iceCubes
//     ) => ({
//         lemonJuice,
//         water,
//         sugar,
//         iceCubes,
//         calculatePrice
//     })

// // console.log(updateLemonade( lemonade, 5, 2.5, 3, 7));
// // console.log({...lemonade, lemonJuice: 5, water: 3, sugar: 6, iceCubes: 8})

// // const numbers = [ 1,2,3,4,5,6,7,8,9,10,[1,2,3]];

// // const numbersCopy = [...numbers];

// // numbersCopy[10][0] = 5;

// // console.log(numbers)
// // console.log(numbersCopy);

// // function add (x, y){
// //     return x + y;
// // }

// const increment = (x) => x + 1
"use strict";