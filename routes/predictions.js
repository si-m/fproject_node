import express               from 'express'
import predictionsController  from '../controllers/predictions'

const router = express.Router()
module.exports = () => {

  router.get('/predict/', predictionsController.predict)

  return router
}