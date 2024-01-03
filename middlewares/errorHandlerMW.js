const { StatusCodes } = require('http-status-codes');

const errorHandlerMW = (err, req, res, next) => {
  // default error message
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong try again later'
  }

  return res.status(customError.statusCode).json({err});
};


module.exports = errorHandlerMW;