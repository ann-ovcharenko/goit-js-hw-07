const categoriesList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesList.length}`);
for (const category of categoriesList) {
  const categoryTitle = category.querySelector(".item-caption").textContent;
  const categoryItems = category.querySelectorAll(".item-list-entry");
  const numberOfItems = categoryItems.length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${numberOfItems}`);
}
