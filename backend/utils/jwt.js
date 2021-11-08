const jwt = require('jsonwebtoken');

//! GENERATE TOKEN
const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { email: user.email, id: user.id },
    process.env.JWT_TOKEN_SECRET,
    { expiresIn: '12h' }
  );

  const refreshToken = jwt.sign(
    { email: user.email, id: user.id },
    process.env.JWT_TOKEN_SECRET,
    { expiresIn: '7d' }
  );
  return { accessToken, refreshToken };
};

module.exports = { generateTokens };
