/**
 * @description     Log requests to console 
 */
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.headers.host}${req.originalUrl} ${res.statusCode}`);
  next();
};

module.exports = logger;
