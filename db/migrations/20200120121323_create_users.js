exports.up = function (knex, Promise) {
    return knex.schema.createTable('tbl_users', t => {
        t.increments('id')
        t.string('username')
        t.string('password')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('tbl_users')
};