import {Schema, model} from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
})

export const encrpytPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

export const comparePassword = async (password, hash) => 
  await bcrypt.compare(password, hash)

export default model('User', UserSchema)