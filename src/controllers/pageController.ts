import { Request, Response } from 'express'

export const home = (req: Request, res: Response) => {
  console.log('teste')
  res.json({ ok: true })
}
