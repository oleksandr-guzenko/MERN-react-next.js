import User, {encrpytPassword, comparePassword} from '../models/user.model'
import jsonWebToken from 'jsonwebtoken'

export const Signup = async (req, res) => {
  const {name, email, password} = req.body

  if(!name || !email || !password)
    return res.status(400).send({
      error: 'All fields are required'
    })

  const user = new User({
    name, 
    email, 
    password: await encrpytPassword(password)
  })

  const savedUser = await user.save()

  if(!savedUser)
    return res.status(400).send({
      error: 'User could not be saved'
    })

  const token = jsonWebToken.sign({_id: savedUser._id}, process.env.JWT_SECRET, {
    expiresIn: '1d'
  })

  res.json({
    token,
    user: {
      id: savedUser.id,
      name: savedUser.name,
      email: savedUser.email
    }
  })
}

export const Signin = async (req, res) => {
  const {email, password} = req.body

  if(!email || !password)
    return res.status(400).send({
      error: 'Please provide email and password'
    })
    
  const user = await User.findOne({email})
    
  if(!user)
    return res.status(400).send({
      error: 'User not found'
    })
    
  const isMatch = await comparePassword(password, user.password)
    
  if(!isMatch)
    return res.status(400).send({
      error: 'Invalid password',
      token: null
    })
    
  const token = jsonWebToken.sign({_id: user._id}, process.env.JWT_SECRET, {
    expiresIn: '1d'
  })
    
  res.json({
    token,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email    
    }
  })
}
