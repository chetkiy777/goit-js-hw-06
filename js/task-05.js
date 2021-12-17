const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

input.addEventListener('input', () => {
    let letterCount = input.value.length
    console.log(letterCount)
    output.textContent = letterCount === 0 ? "Anonymous" : input.value
})