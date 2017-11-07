import express               from 'express'
import predictionsController  from '../controllers/predictions'

const router = express.Router()
module.exports = () => {
  
  router.get('/predict/tweets', predictionsController.tweets)

  router.get('/predict/text', predictionsController.text)

  return router
}