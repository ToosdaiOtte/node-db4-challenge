const db = require('../data/db-config.js');

function getRecipes() {
    return db
        .select('*')
        .from('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipe_ingredients')
      .join('ingredients', 'recipe_ingredients.ingredient_id', 'ingredients.id')
      .select('recipe_ingredients.quantity', 'ingredients.ingredient')
      .where({ 'recipe_ingredients.recipe_id' : recipe_id });
  }

  function getInstructions(recipe_id) {
    return db('steps')
      .where({  recipe_id });
  }

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}