const errorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Mongoose bad object id
  if (err.name === 'CastError') {
    const message = `Resource not found with id of ${err.value}`;
    error = new errorResponse(message, 404);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    err: error.message || 'Server Error',
  });
};

module.exports = errorHandler;
