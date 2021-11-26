const input = document.querySelector('input[data-length]')
let dataLength = input.getAttribute('data-length')

const addValid = () => {
    if (input.classList.contains('invalid')) {
        input.classList.replace('invalid', 'valid')
    }
    input.classList.add('valid')
}

const addInvalid = () => {
    if (input.classList.contains('valid')) {
        input.classList.replace('valid', 'invalid')
    }
    input.classList.add('invalid')
}


input.addEventListener('blur', () => {
   input.value.split('').length == input.getAttribute('data-length') ? addValid() : addInvalid()
 })
