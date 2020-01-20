const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User')

router.get('/', (req, res) => {
    try {
        console.log('asdf')
        User.query()
            .then(users => {
                res.json(users)
            })
    } catch (error) {
        console.log(error)
    }

})

router.post('/', async (req, res) => {

    try {
        let user = req.body;
        let user_fetched = await User
            .query()
            .first()
            .select('id', 'username')
            .where({ username: user.username })
            .debug(true)


        if (user_fetched) {

            res.status(400).json({
                message: 'User already exist.'
            })
        } else {
            console.log(user)

            let digest = bcrypt.hashSync(user.password, 10)

            let user_create = await User
                .query()
                .insert({
                    username: user.username,
                    password: digest
                })
                .debug(true)

            res.status(200).json({
                data: Object.assign({}, { id: user_create.id, username: user_create.username }),
                message: 'User created successfully.'
            })


        }


    } catch (error) {
        console.log(error)
    }

})


router.post('/login', async (req, res) => {
    console.log('sss')
    /**
     * [x] 1 fetch user by username and password
     * [x] 2 check is obtained user exists or not
     * [x] 3 if exists create jwt and send to client
     * 
     */
    try {
        let user = req.body;
        console.log(user)
        let user_fetched = await User
            .query()
            .first()
            .select('id', 'username', 'password')
            .where({ username: user.username })
            .debug(true)



        if (user_fetched) {

            const match = await bcrypt.compare(user.password, user_fetched.password);

            if (!match) {
                console.log('failed')
                return res.status(400).json({
                    message: 'login failed'
                })
            }


            let token = jwt.sign({
                // exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: user_fetched
            }, 'secret', { expiresIn: 60 * 60 })

            console.log('success')
            res.status(200).json({
                data: {
                    user: user_fetched,
                    token: token
                },
                message: 'login success'
            })
        } else {

            res.status(400).json({
                message: 'User not found'
            })
        }


    } catch (error) {
        console.log(error)
    }

})



module.exports = {
    router: router
}