import express        from 'express'
import path           from 'path'

const router = express.Router()

module.exports = function() {

	router.get('/', function(req, res) {
  	res.json({ message: "Fproject it's up & running" });
	})
	
	router.use('/api', require('./predictions')());

  return router;
};