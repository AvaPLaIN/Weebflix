const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { generateTokens } = require('../utils/jwt');

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    //! GET USER
    const existingUser = await User.findOne({ email });

    //! CHECK USER IS NULL
    if (!existingUser)
      return res.status(404).json({ message: 'User doesn´t exist!' });

    //! bcrypt password and compare
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    //! CHECK PASSWORD COMPARISON
    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Invalid credentials' });

    //! CREATE OBJECTS USER AND PROGRESS
    const user = {
      id: existingUser?._id,
      email: existingUser?.email,
      username: existingUser?.name,
    };

    //! GENERATE TOKEN
    const { accessToken, refreshToken } = generateTokens(user);

    res.status(200).json({
      user,
      progress: existingUser?.progress,
      refreshToken,
      accessToken,
    });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

const signup = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  try {
    //return res.status(404).json({ message: "Can't create new Users!" });
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: 'User already exists!' });

    if (password !== confirmPassword)
      return res.status(400).json({ message: 'Passwords don´t match!' });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({ email, name, password: hashedPassword });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.JWT_TOKEN_SECRET,
      {
        expiresIn: '1h',
      }
    );

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

const refreshTokens = async (req, res) => {
  const { accessToken, refreshToken } = generateTokens(req?.body?.user?.user);
  res.status(200).json({ accessToken, refreshToken });
};

const updateUserProgress = async (req, res) => {
  if (!req.userId) return res.status(401).json({ message: 'Unauthenticated' });

  const progress = req?.body;
  const userId = req?.userId;

  try {
    const user = await User.updateOne(
      {
        _id: userId,
      },
      {
        $set: {
          progress: progress,
        },
      }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const checkUserAuth = async (req, res) => {
  let jwt_userId = null;
  let jwt_email = null;

  try {
    jwt.verify(
      req?.body?.accessToken,
      process.env.JWT_TOKEN_SECRET,
      (err, decoded) => {
        if (!err) {
          jwt_userId = decoded?.id;
          jwt_email = decoded?.email;
        }
      }
    );

    if (jwt_userId && jwt_email) {
      if (
        req?.body?.user?.email === jwt_email &&
        req?.body?.user?.id === jwt_userId
      ) {
        const existingUser = await User.findOne({ email: req.body.user.email });

        const user = {
          id: existingUser?._id,
          email: existingUser?.email,
          username: existingUser?.name,
        };

        res.status(200).json({
          user,
          progress: existingUser?.progress,
          refreshToken: req?.body?.refreshToken,
          accessToken: req?.body?.accessToken,
        });
      }
    }
    res.status(401);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  signin,
  signup,
  refreshTokens,
  updateUserProgress,
  checkUserAuth,
};
