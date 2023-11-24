const categoriesElements = document.querySelector('#categories');
const categories = Array.from(categoriesElements.children);
console.log("Number of categories: ", categories.length);

categories.forEach((category) => {
    const name = category.firstElementChild;
    console.log('Category: ', name.textContent);
    const items = category.lastElementChild.children;
    console.log('Elements: ', items.length);
});