import express from 'express'
import DemoController from '../../../controllers/demo.controller'
import requestValidationMiddleware from '../../../middlewares/requestValidation.middleware'
import responseValidationMiddleware from '../../../middlewares/responseValidation.middleware'

const demoRoutes = express.Router()

demoRoutes.route('/hello').get(requestValidationMiddleware({
  querySchema: {
    $ref: '/demo.json'
  }
}), DemoController.helloWorld,

responseValidationMiddleware({
  responseSchema: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' }
      },
      required: ['message']
    }
  }
}))

export default demoRoutes
