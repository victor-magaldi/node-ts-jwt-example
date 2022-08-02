import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { router } from './routes'

dotenv.config()

const app = express()

// config json
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, '../public')))

app.use(router)

// app.use((req, res) => {
//   res.json({error:})
// })

app.listen(process.env.PORT)
