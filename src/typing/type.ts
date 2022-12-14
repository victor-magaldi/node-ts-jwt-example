export type PetType = 'dog' | 'cat' | 'fish'
export type PetSex = 'macho' | 'fêmea'

export type Pet = {
  type: PetType
  image: string
  name: string
  color: string
  sex: PetSex
}

export type UserDb = {
  name: string
  email: string
  password: string
}
