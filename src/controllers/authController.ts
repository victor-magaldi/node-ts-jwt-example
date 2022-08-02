import { Request, Response } from 'express'

export const registerUser = (req: Request, res: Response) => {
  const { name, email, password, confirmPassword } = req.body

  if (!name || !email || !password || !confirmPassword) {
    return res
      .status(422)
      .json({ error: 'name, email, password, confirmPassword  required' })
  }

  res.json({ ok: true })
}
