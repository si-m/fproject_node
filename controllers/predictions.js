import Applicant from '../models/applicant'
import config       from 'config'
const client = new Twitter(config.get('TWITTER_CONFIG'))

exports.hashtag = (req, res, next) => {
	client.get('search/tweets', {q: '#messi', lang: 'es', count:10}, function(error, tweets, response) {
   console.log(tweets.statuses.map((raw_tweet) => raw_tweet.text));
  })
}

exports.text = (req, res, next) => {
	console.log(req)
}

let _jsonError = (res, err, status) => { res.json({ message: err.message, status: status }) }
