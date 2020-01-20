const express = require('express')
const router = express.Router()
const check = require('../middlewares/checkauth');

const Tweet = require('../models/Tweet')

router.get('/', async (req, res) => {
    //const user = req['user'];
  //  if (!user) {
    //    res.status(400).json({ status: 400, message: 'user not found' });
  //  } else {
       // console.log(user)
        try {
            let tweet_fetched = await Tweet
                .query()
                .withGraphFetched('user')
                .debug(true);

            res.status(200).json(tweet_fetched)
        } catch (error) {
            console.log(error)
        }

  //  }

})

router.post('/', check.check, async (req, res) => {
    const user = req['user'];
    if (!user) {
        res.status(400).json({ status: 400, message: 'user not found' });
    } else {

        try {
            let tweet = req.body;
            let tweet_create = await Tweet
                .query()
                .insert({
                    tweet: tweet.tweet,
                    user_id: user.data.id
                })
                .debug(true)

            res.status(200).json({
                data: tweet_create,
                message: 'Tweet created successfully.'
            })

        } catch (error) {
            console.log(error)
        }
    }


})

module.exports = {
    router: router
}