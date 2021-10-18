const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const isTokenValid = async (req, res) => {
  console.log(req.headers);
  try {
    const token = req?.headers?.authorization?.split(' ')[1];
    const isCustomAuth = token?.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, decoded) => {
        err ? (req.userId = null) : (req.userId = decoded?.id);
      });
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }

    console.log(req?.headers?.authorization);

    req.userId
      ? res.status(200).json({ message: 'Authenticated!' })
      : res.status(404).json({ message: 'Unauthenticated!' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

module.exports = { isTokenValid };
