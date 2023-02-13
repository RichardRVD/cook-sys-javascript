const initialState = {
    customer: {
        name: "",
        phoneNumber: ""
    },
    lemonadeStand:{
        name: "Ricky's Lemonade Stand"
    },
    lemonades:[],
    total: 0
}

let order = {
    customer: {
        name: "",
        phoneNumber: ""
    },
    lemonadeStand:{
        name: "Ricky's Lemonade Stand"
    },
    lemonades:[],
    total: 0
}

$('#name').val(order.customer.name)
$('#phoneNumber').val(order.customer.phoneNumber)
$('#lemonadeStand').val(order.lemonadeStand.name)

const resetState = () => {
    order = initialState
}

$('#name').change(event => {
    order = {
        ...order,
        customer: {
            ...order.customer,
            name: event.target.value
        }
    }
    $('#nameError').html('').addClass('hidden')
})
$('#phoneNumber').change(event => {
    order = {
        ...order,
        customer: {
            ...order.customer,
            phoneNumber: event.target.value
        }
    }
    $('#phoneError').html('').addClass('hidden')
})
$('#lemonadeStand').change(event => {
    order = {
        ...order,
        lemonadeStand: {
            ...order.lemonadeStand,
            name: event.target.value
        }
    }
})

$('.yellowButton').click(() => {
    if(order.customer.name && order.customer.phoneNumber){
        localStorage.setItem('order', JSON.stringify(order))
    resetState()
    $('#name').val(order.customer.name)
    $('#phoneNumber').val(order.customer.phoneNumber)
    $('#lemonadeStand').val(order.lemonadeStand.name)
    window.location = './lemonade.html'
    } else {
    if(!order.customer.name){
        $('#nameError').html('Your name is required').removeClass('hidden')
    }
    if(!order.customer.phoneNumber){
        $('#phoneError').html('Your phone number is required').removeClass('hidden')
    }
    }
})