
exports.up = function (knex) {
    return knex.schema
        .createTable('events', tbl => {
            tbl.increments();

            tbl.string('name', 128).notNullable().unique();
        })
        .createTable('guests', tbl => {
            tbl.increments();

            tbl.string('firstName', 128).notNullable();
            tbl.string('lastName', 128).notNullable();
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('guests')
        .dropTableIfExists('events');
};
