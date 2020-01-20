module.exports = {
    test: {
        client: 'pg',
        connection: 'postgres://localhost/test_db',
        migrations: {
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds/test'
        }
    },
    development: {
        client: 'sqlite3',
        connection: {
            filename: "./mydb.sqlite"
        },
        migrations: {
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds/development'
        },
        useNullAsDefault: true
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds/production'
        }
    }
}