import { Request, Response } from 'express'
import bcrypt from 'bcrypt'

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, confirmPassword } = req.body
  if (!name || !email || !password || !confirmPassword) {
    return res.status(422).json({
      error: 'name, email, password, confirmPassword are required fields',
    })
  }

  // MOCK
  const userExists = false
  if (userExists) {
    return res.status(422).json({
      error: 'E-mail já cadasttrado',
    })
  }
  //created password
  try {
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    console.log({ name, email, password })
    console.log(passwordHash)
    res.json({ ok: true })
  } catch (error) {
    console.log('error ', error)
    res.status(500).json({ error })
  }
}
