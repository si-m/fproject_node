import express               from 'express'
import predictionsController  from '../controllers/predictions'

const router = express.Router()
module.exports = () => {
  
  router.get('/predict/hashtag', predictionsController.hashtag)

  router.get('/predict/text', predictionsController.text)

  return router
}