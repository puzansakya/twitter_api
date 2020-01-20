exports.up = function (knex, Promise) {
    return knex.schema.createTable('tbl_tweets', t => {
        t.increments('id')
        t.text('tweet')
        t.integer('user_id').references('id').inTable('tbl_users')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('tbl_tweets')
};