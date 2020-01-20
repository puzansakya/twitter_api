
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tbl_tweets').del()
    .then(function () {
      // Inserts seed entries
      return knex('tbl_users').del()
    });
};
