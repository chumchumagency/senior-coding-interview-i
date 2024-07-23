// authController.js content
const router = require('express').Router;
const bcrypt = require("bcrypt");
const User = require('../models/User');

const login =async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email: email },
    })
    console.log('user',user)
        const isMatch = await bcrypt.compare(password, user.password);
        console.log('isMatch',isMatch);
        if (user.email === email && isMatch) {
          // Generate JWT Token
          const token = jwt.sign(
            {
              userID: user.id,
              email: email,
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1d" }
          );

          await user.save();
          res.status(200).send({
            status: "success",
            message: "Login Successfull",
            token: token,
          });
        } else {
          res.status(400).send({
            status: "failed",
            message: "Password is not correct",
          });
        }
      
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Unable to login: " + error.message,
    });
  }
};

module.exports = {
  login,
};
