const text = document.querySelector('#text')
const range = document.querySelector('#font-size-control')

range.addEventListener('input', () => {
    let sizeValue = Number(range.value)
    text.style.fontSize = `${sizeValue}px`
})


