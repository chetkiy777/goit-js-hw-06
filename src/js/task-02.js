const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainer = document.querySelector('#ingredients');

const makeItem = (itemsArray) => {
  return itemsArray.map(item => {
    const itemElem = document.createElement('li');
    itemElem.innerHTML = item;
    itemElem.classList.add('item');
    ingredientsContainer.append(itemElem);
    return ingredientsContainer.append(itemElem);
    })  
}

makeItem(ingredients);