
exports.seed = function(knex) {
  return knex('recipe_ingredients').insert([
    {recipe_id: 1, ingredient_id: 1, quantity: 1},
    {recipe_id: 1, ingredient_id: 2, quantity: '1 or 2'},
    {recipe_id: 1, ingredient_id: 3, quantity: '1.5 cups'},
    {recipe_id: 2, ingredient_id: 4, quantity: 4},
    {recipe_id: 2, ingredient_id: 5, quantity: '2/3 cup'},
    {recipe_id: 2, ingredient_id: 6, quantity: '1/4 cup'},
    {recipe_id: 2, ingredient_id: 7, quantity: '1/4 cup'},
    {recipe_id: 2, ingredient_id: 8, quantity: '1/4 teaspoon'},
    {recipe_id: 2, ingredient_id: 9, quantity: '1 tsp'},
    {recipe_id: 2, ingredient_id: 10, quantity: '1 tsp'},
    {recipe_id: 2, ingredient_id: 11, quantity: 8},
  ]);
};
