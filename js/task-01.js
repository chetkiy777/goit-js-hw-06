const categoriesItem = document.querySelectorAll('.item');

console.log('Number of categories: ', document.querySelectorAll('h2').length)

const animalsCategory = document.querySelectorAll('h2')[0]
const productsCategory = document.querySelectorAll('h2')[1]
const technologiesCategory = document.querySelectorAll('h2')[2]


console.log('Category: ', animalsCategory.textContent)
console.log('Elements: ', categoriesItem[0].querySelectorAll('li').length);

console.log('Category: ', productsCategory.textContent)
console.log('Elements: ', categoriesItem[1].querySelectorAll('li').length);

console.log('Category: ', technologiesCategory.textContent)
console.log('Elements: ', categoriesItem[2].querySelectorAll('li').length);

