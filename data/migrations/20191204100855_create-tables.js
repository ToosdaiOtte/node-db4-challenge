
exports.up = function(knex) {
  return (
      knex.schema
        .createTable('recipes', table => {
            table.increments();
            table.string('name', 255).notNullable().unique();
        })
        .createTable('steps', table => {
            table.increments();
            table.integer('step_number').notNullable();
            table.string('instructions', 1500).notNullable();
            table.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes').onDelete('CASCADE').onUpdate('CASCADE');
        })
        .createTable('ingredients', table => {
            table.increments();
            table.string('ingredient', 255).notNullable();
        })
        .createTable('recipe_ingredients', table => {
            table.increments();
            table.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes').onDelete('CASCADE').onUpdate('CASCADE');
            table.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredients').onDelete('CASCADE').onUpdate('CASCADE');
            table.float('quantity').notNullable();
            table.unique(['recipe_id', 'ingredient_id'])
        })
  )
};

exports.down = function(knex) {
  return (
      knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
  )
};
