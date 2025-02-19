import express from 'express'
import onHealthCheck from '../../libs/onHealthCheck'
import contextMiddleware from '../middlewares/context.middleware'
import apiRouter from './api'

const router = express.Router()

router.use('/api', contextMiddleware(false), apiRouter)
router.get('/health-check', async (_, res) => {
  try {
    const response = await onHealthCheck()
    res.json(response)
  } catch (error) {
    res.status(503)
    res.send()
  }
})

export default router
