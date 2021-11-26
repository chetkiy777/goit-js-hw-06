let value = document.querySelector('#value');
const buttonIncrement = document.querySelector('[data-action="increment"]')
const buttonDecrement = document.querySelector('[data-action="decrement"]')

let counterValue = 0;

// console.log(value)

// console.log(buttonIncrement)

// console.log(buttonDecrement)

// console.log(counterValue)

buttonIncrement.addEventListener('click', () => {
    counterValue += 1
    value.textContent = counterValue
})

buttonDecrement.addEventListener('click', () => {
    counterValue -= 1
    value.textContent = counterValue
})