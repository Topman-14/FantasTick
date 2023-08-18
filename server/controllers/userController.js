const User = require('../models/userModel')

//Login
const loginUser = async (req, res) =>{
    res.json({mssg: 'login user'})
}

//Signup
const signupUser = async (req, res) =>{
    res.json({mssg: 'signup user'})
}

module.exports = { loginUser, signupUser }