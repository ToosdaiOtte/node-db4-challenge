
exports.seed = function(knex) {
  return knex('steps').insert([
    {step_number: 1, instructions: 'Empty bag of fritos in oven safe/microwave safe bowl', recipe_id: 1},
    {step_number: 2, instructions: 'Dump 1 can (two depending on preference) of chili on top of Fritos', recipe_id: 1},
    {step_number: 3, instructions: 'Put a few handfuls (till desired amount) of shredded cheese over Fritos and Chili', recipe_id: 1},
    {step_number: 4, instructions: 'Heat in oven or microwave until chili is heated and cheese is melted. Optional: top with bacon, jalapenos, whatever your heart desires. Serve immediately.', recipe_id: 1 },
    {step_number: 1, instructions: 'Preheat griddle to 350 degrees F or or heat a skillet over medium heat. Grease well with butter.', recipe_id: 2 },
    {step_number: 2, instructions: 'Add all ingredients, except the bread, to a blender or to a shallow dish and whisk well to combine.', recipe_id: 2},
    {step_number: 3, instructions: 'Dip bread slices into the egg mixture, dredging them well on both sides, and place on hot, greased skillet', recipe_id: 2},
    {step_number: 4, instructions: 'Cook for a few minutes until bread is golden brown. Flip and cook on the other side the same.', recipe_id: 2},
    {step_number: 5, instructions: 'Remove from pan, server warm with syrup and powdered sugar', recipe_id: 2}

  ]);
};
