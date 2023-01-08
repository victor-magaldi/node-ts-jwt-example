import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { router } from './routes'

dotenv.config()

const app = express()

// config json response
app.use(express.json())

app.use(express.static(path.join(__dirname, '../public')))

app.use(router)

// app.use((req, res) => {
//   res.json({error:})
// })

app.listen(process.env.PORT)
