import { Request, Response } from 'express'
import { createClient } from 'redis'

export const home = (req: Request, res: Response) => {
  const client = createClient()
  client.on('error', (err) => console.log('Redis Client Error', err))
  async function getData() {
    await client.connect()

    await client.set('victor', 'teste')
    const value = await client.get('victor')

    console.log(value)
  }
  getData()
  res.json({ ok: true })
}
