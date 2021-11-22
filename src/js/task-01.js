const categories = document.querySelector('#categories');
const categoriesItem = document.querySelectorAll('.item');

const numberOfCategories = categories.getElementsByTagName('h2').length
console.log('Number of categories: ', numberOfCategories)

const aniamlsEl = categoriesItem[0].querySelector('h2');
const productsEl = categoriesItem[1].querySelector('h2');
const technologieslEl = categoriesItem[2].querySelector('h2');

console.log('Category: ', aniamlsEl.textContent);
console.log('Elements: ', categoriesItem[0].querySelector('ul').children.length);

console.log('Category: ', productsEl.textContent);
console.log('Elements: ', categoriesItem[1].querySelector('ul').children.length);

console.log('Category: ', technologieslEl.textContent);
console.log('Elements: ', categoriesItem[2].querySelector('ul').children.length);