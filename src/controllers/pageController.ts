import { Request, Response } from 'express'
//import module
import { LocalStorage } from 'node-localstorage'

// constructor function to create a storage directory inside our project for all our localStorage setItem.
var localStorage = new LocalStorage('./scratch')

//Setting localStorage Item

export const home = (req: Request, res: Response) => {
  async function getData() {
    localStorage.setItem('Name2', 'Manish Mandal')
    console.log(localStorage.getItem('Name'))
  }
  getData()
  res.json({ ok: true })
}
