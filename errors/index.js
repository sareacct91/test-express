const { StatusCodes } = require('http-status-codes');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  };
};

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  };
};

class UnauthenticatedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  };
};

module.exports = {
  NotFoundError,
  BadRequestError,
  UnauthenticatedError
}