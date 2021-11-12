import User, {encrpytPassword, comparePassword} from '../models/user.model'
import jsonWebToken from 'jsonwebtoken'

export const Signup = async (req, res) => {
  const {name, email, password} = req.body

  const user = new User({
    name, 
    email, 
    password: await encrpytPassword(password)
  })

  const savedUser = await user.save()

  const token = jsonWebToken.sign({_id: savedUser._id}, process.env.JWT_SECRET, {
    expiresIn: '1d'
  })

  res.send({token})
}

export const Signin = async (req, res) => {
  const {email, password} = req.body
    
  const user = await User.findOne({email})
    
  if(!user) {
    return res.send({error: 'User not found'})
  }
    
  const isValid = await comparePassword(password, user.password)
    
  if(!isValid) {
    return res.send({
      error: 'Invalid password',
      token: null
    })
  }
    
  const token = jsonWebToken.sign({_id: user._id}, process.env.JWT_SECRET, {
    expiresIn: '1d'
  })
    
  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    message: 'Signin success',
    token,
  })
}
