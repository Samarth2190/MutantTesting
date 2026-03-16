import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { apiRouter } from './routes/api.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function createApp () {
  const app = express()

  app.use(express.json())

  app.use('/api', apiRouter)

  app.use(express.static(path.join(__dirname, '../public')))

  return app
}

function startServer () {
  const app = createApp()
  const port = Number.parseInt(process.env.PORT ?? '8080', 10)
  app.listen(port, () => {
    console.log(`Web server running at http://localhost:${port}`)
  })
}

export { createApp, startServer }
