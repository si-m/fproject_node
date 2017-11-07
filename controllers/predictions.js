import config             from 'config'
import Twitter            from 'twitter'
import prediction_client  from  '../grpc_stub/client'

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
		let hashtag = '#' + text
		client.get('search/tweets', {q: hashtag, lang: 'es', count:count, exclude:'retweets'}, (error, tweets, response) => {
			if(error)
				 _jsonError(res, error, 500)

	  	let tweets_list = tweets.statuses.map((raw_tweet) => raw_tweet.text)
	  	prediction_client.predict(tweets_list)
			 .then(predictions => res.json(Object.assign({tweets_list}, predictions)))
			 .catch(err => _jsonError(res, err, 500))
	  })

	}else{
		//send text to prediction api
		prediction_client.predict(text)
			.then(predictions => res.json(predictions))
			.catch(err => _jsonError(res, err, 500))
		}


}
let _jsonError = (res, err, status) => { res.json({ message: err.message, status: status }) }
