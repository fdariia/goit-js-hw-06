const categoriesItemsRef = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesItemsRef.length);

categoriesItemsRef.forEach(category => {
    console.log('Category:', category.querySelector('h2').textContent);
    console.log('Elements:', category.querySelectorAll('li').length);
})
