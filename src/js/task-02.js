const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((item) => {
  const ingredientList = document.querySelector("#ingredients");
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = item;
  ingredientList.append(ingredientItem);
});
