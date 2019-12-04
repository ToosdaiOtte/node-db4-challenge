
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {ingredient: 'Fritos'},
    {ingredient: 'Can(s) of Chili'},
    {ingredient: 'Shredded Fiesta Blend Cheese'},
    {ingredient: 'eggs'},
    {ingredient: 'milk'},
    {ingredient: 'all-purpose flour'},
    {ingredient: 'granulated sugar'},
    {ingredient: 'salt'},
    {ingredient: 'ground cinnamon'},
    {ingredient: 'vanilla extract'},
    {ingredient: 'slices of bread'}
  ]);
};
