// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];

// const listRef = document.querySelector('#ingredients');

// const elements = ingredients.map(ingredient =>{
//   const itemRef = document.createElement('li');
//   itemRef.textContent = ingredient;
//   itemRef.classList.add('item');

//   return itemRef;
// })

// const elements = [];

// ingredients.forEach(ingredient => {
//   ingredient = document.createElement('li');
//   ingredientItemRef.textContent = ingredients
//   ingredientItemRef.classList.add('item');
//   // console.log(ingredientItemRef);
//   elements.push(ingredientItemRef);
// })
// console.log(elements);

// const listRef = document.querySelector('#ingredients');

// listRef.append(...elements);
// console.log(listRef);

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.map(el => {
  const itemRef = document.createElement('li');
  itemRef.classList.add('item');
  itemRef.textContent = el;

  return itemRef;
});

console.log(elements);

const listRef = document.querySelector('#ingredients');
listRef.append(...elements);
