import config             from 'config'
import Twitter            from 'twitter'
import prediction_client  from  '../grpc_stub/client'

const client = new Twitter(config.get('TWITTER_CONFIG'))

exports.predict = (req, res, next) => {
	const {input, twitter_api, n} = req.query
 	if(!input){
	 	return _jsonError(res, { message: "Bad request, no input query." }, 400)
	}
	if(twitter_api === "true"){
		//first retive tweets and then send it to prediction api
		let count = parseInt(n)
		if(isNaN(count) ||  count > 50)
			count = 10
		let hashtag = input
		if(!input.startsWith('#'))
		  hashtag = '#' + input
		client.get('search/tweets', {q: hashtag, lang: 'es', count: count, exclude:'retweets', result_type:'mixed'})
			.then((tweets, response) => {
					return tweets.statuses.map((raw_tweet) => raw_tweet.text)
				})
			.then(async (tweets_list)=>{
				let predictions = []
				predictions = await prediction_client.predict(tweets_list)
				return Object.assign({tweets_list}, predictions)
			  })
			.then((result)=>{
				res.json(result)
			 })
			.catch((err)=>{
				_jsonError(res, error, 500)
			})

	}else{
		//send text to prediction api
		prediction_client.predict(input)
			.then(predictions => res.json(Object.assign({tweets_list: [input]}, predictions)))
			.catch(err => _jsonError(res, err, 500))
		}
}

let _jsonError = (res, err, status) => { res.json({ message: err.message, status: status }) }
