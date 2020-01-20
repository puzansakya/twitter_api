const { Model } = require('objection');
const knex = require('../db/knex')
const User = require('./User')

Model.knex(knex)

class Tweet extends Model {
    static get tableName() {
        return 'tbl_tweets';
    }

    static get relationMappings() {
        return {
            user: {
                modelClass: User,
                relation: Model.BelongsToOneRelation,
                join: {
                    from: 'tbl_tweets.user_id',
                    to: 'tbl_users.id'
                }
            },
        };
    }
}

module.exports = Tweet;