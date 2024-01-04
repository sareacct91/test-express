const { StatusCodes } = require('http-status-codes');

const errorHandlerMW = (err, req, res, next) => {
  // default error message
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong try again later'
  }

  // Check for duplicate user
  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please choose another value`;
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  // Check for missing data. ie. no email or pw in req.body
  if (err.name === 'ValidationError') {
    customError.msg = Object.values(err.errors)
      .map((prop) => prop.message)
      .join(', ');
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  // Check the provided id to be the correct length
  if (err.name === 'CastError') {
    customError.msg = `No item found with id : ${err.value}`;
    customError.statusCode = StatusCodes.NOT_FOUND;
  }

  // return res.status(customError.statusCode).json({err, msg:err.message});
  return res.status(customError.statusCode).json({msg: customError.msg});
};


module.exports = errorHandlerMW;