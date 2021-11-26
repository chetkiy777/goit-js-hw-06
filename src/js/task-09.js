const changeColorBtn = document.querySelector('.change-color')
const colorOutput = document.querySelector('.color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = () => {
 
  document.body.style.backgroundColor = getRandomHexColor()
   colorOutput.textContent = getRandomHexColor()
}

changeColorBtn.addEventListener('click', () => changeColor())