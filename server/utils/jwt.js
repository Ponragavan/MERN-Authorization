const jwt = require("jsonwebtoken");

exports.generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

exports.setTokenCookie = (res, token, userId) => {
  res.cookie('token', token, {
    path: "/",
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    httpOnly: true,
    domain: process.env.NODE_ENV === 'production' ? '.onrender.com' : 'localhost',
    secure: process.env.NODE_ENV === 'production',
  });
};
