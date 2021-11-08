const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const token = req?.headers?.authorization?.split(' ')[1];
    // console.log('!!!---!!!---!!!---!!!');
    // console.log(`token: ${token}`);
    const isCustomAuth = token?.length < 500;
    let decodedData;

    // jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, decoded) => {
    //   err ? console.log('unvalid') : console.log('valid');
    // });

    if (token && isCustomAuth) {
      jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, decoded) => {
        err ? (req.userId = null) : (req.userId = decoded?.id);
      });
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

module.exports = { auth };
