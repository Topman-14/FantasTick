const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id, username) => {
    return jwt.sign({_id, username}, process.env.SECRET, { expiresIn: '3d'})
}

//Login
const loginUser = async (req, res) =>{
   const {email, password} = req.body
   try{
    const user = await User.login(email, password)

    const username = user.username

    const token = createToken(user._id, username)

    res.status(200).json({email, username, token})
    } 
    catch(error){
        res.status(400).json({error: error.message})
    }
}

//Signup
const signupUser = async (req, res) =>{
    const { username, email, password } = req.body

    try{
        const user = await User.signup(username, email, password)

        const token = createToken(user._id, user.username)

        res.status(200).json({email, username, token})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = { loginUser, signupUser }