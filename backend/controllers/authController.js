const User = require("../models/User");
const jwt = require("jsonwebtoken")
const register = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const user = new User({ userName, email, password });
    await user.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

     const token = jwt.sign(
       { id: user._id, email: user.email },
       process.env.JWT_SECRET, 
       { expiresIn: "1h" }
     );

    // res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });
    res.status(200).json({ message: "Login successful", token});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const signout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Signout successful" });
};

module.exports = {
  register,
  login,
  signout,
};
