import config       from 'config'
import Twitter from 'twitter'
const client = new Twitter(config.get('TWITTER_CONFIG'))

exports.predict = (req, res, next) => {
	const {text, twitter_api, n} = req.query
 	if(!text)
	 	_jsonError(res, { message: "Bad request, no text query." }, 400)

	if(twitter_api === "yes"){
		//first retive tweets and then send it to prediction api
		let count = parseInt(n)
		if(isNaN(count) ||  count > 30)
			count = 10

		client.get('search/tweets', {q: text, lang: 'es', count:count}, (error, tweets, response) => {
	  	res.json(tweets.statuses.map((raw_tweet) => raw_tweet.text))
	  })
	}else{
		//send text to prediction api
		res.json({"text": text})	
	}



}
let _jsonError = (res, err, status) => { res.json({ message: err.message, status: status }) }
