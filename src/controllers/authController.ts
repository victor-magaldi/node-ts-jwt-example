import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { LocalStorage } from 'node-localstorage'

var localStorage = new LocalStorage('./userBd')

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

    localStorage.setItem(
      'user',
      JSON.stringify({ name, email, password: passwordHash })
    )

    res.json({ message: 'user created' })
  } catch (error) {
    console.log('error ', error)
    res.status(500).json({ error: 'Ocorreu um erro inesperado no servidor' })
  }
}

export const authenticatedUser = async (req: Request, res: Response) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(422).json({
      error: ' email, password are required fields',
    })
  }
}
