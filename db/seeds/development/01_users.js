exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tbl_users').del()
    .then(function () {
      // Inserts seed entries
      return knex('tbl_users').insert([
        {username: 'admin', password: '$2b$10$160NsHN8sgTeaxAKkJL0vOAZMWOpKca1CQO5RNrLzziTOgHLpGskK'},
        {username: 'fodark', password: '$2b$10$160NsHN8sgTeaxAKkJL0vOAZMWOpKca1CQO5RNrLzziTOgHLpGskK'},
        {username: 'john',password: '$2b$10$160NsHN8sgTeaxAKkJL0vOAZMWOpKca1CQO5RNrLzziTOgHLpGskK'},
        {username: 'david', password: '$2b$10$160NsHN8sgTeaxAKkJL0vOAZMWOpKca1CQO5RNrLzziTOgHLpGskK'}
      ]);
    });
};