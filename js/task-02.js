const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientsContainer = document.querySelector('#ingredients');
 
ingredients.map(item => {
  const newElem = document.createElement('li')
  newElem.classList.add('item')
  newElem.innerText = item
  ingredientsContainer.append(newElem)
})


// const makeItem = (itemsArray) => {
//   return itemsArray.map(item => {
//     const itemElem = document.createElement('li');
//     itemElem.innerHTML = item;
//     itemElem.classList.add('item');
//     ingredientsContainer.append(itemElem);
//     return ingredientsContainer.append(itemElem);
//     })  
// }

// makeItem(ingredients);