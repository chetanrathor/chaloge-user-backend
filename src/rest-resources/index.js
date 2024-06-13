import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import i18n from '../libs/i18n'
import routes from '../rest-resources/routes'
import errorHandlerMiddleware from './middlewares/errorHandler.middleware'

const app = express()

app.use(helmet())

app.use(bodyParser.json())

app.use(morgan('tiny'))

app.use(i18n.init)

// CORS Configuration
const corsOptions = {
  credentials: true,
  origin: '*',
  methods: ['GET, POST, PUT, PATCH, DELETE']
}

app.use(cors(corsOptions))

app.use(routes)

app.use(async (req, res) => {
  res.status(404).json({ status: 'Not Found' })
})

app.use(errorHandlerMiddleware)

export default app
