import config       from 'config'
import Twitter from 'twitter'
const client = new Twitter(config.get('TWITTER_CONFIG'))

exports.tweets = (req, res, next) => {
	const {q} = req.query
	if(!q)
	 	_jsonError(res, { message: "Bad request, no hashtag query." }, 400)

	client.get('search/tweets', {q: q, lang: 'es', count:10}, (error, tweets, response) => {
  	res.json(tweets.statuses.map((raw_tweet) => raw_tweet.text))
  })
}

exports.text = (req, res, next) => {
	const {text} = req.query
	if(!text)
	 	_jsonError(res, { message: "Bad request, no text query." }, 400)

	res.json({"text": text})
}

let _jsonError = (res, err, status) => { res.json({ message: err.message, status: status }) }
