function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesContainer = document.querySelector('#boxes')
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')
const input = document.querySelector('input[type="number"]')
let amount = 0

const createBoxes = () => {
  amount = input.value
  for (let i = 0; i < amount; i += 1) {
    // let height =  `${30 + i * 10 }`  + 'px'
    // let width = `${30 + i * 10 }` + 'px'
    const div = document.createElement('div')
    div.classList.add('box')
    div.style.background = getRandomHexColor()
    div.style.height = `${30 + i * 10}` + 'px'
    div.style.width = div.style.height
    // div.style.width = `${30 + i * 10}` + 'px'
    
    boxesContainer.append(div)
    console.log(div)
  }
}

// Добавляем 
createBtn.addEventListener('click', () => createBoxes())


// Удаляем всех детей из boxesContainer
destroyBtn.addEventListener('click', () => {
  boxesContainer.innerHTML = ''
  })