exports.up = function(knex, Promise) {
    return knex.schema.createTable("player", function(table) {
        table.increments();
        table.string("name");
        table.string('country');
        table.integer('age');
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("player")
}
