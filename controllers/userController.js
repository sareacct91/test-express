const { StatusCodes } = require('http-status-codes');
const { NotFoundError, UnauthenticatedError, BadRequestError } = require('../errors');
const UsersSchema = require('../models/UsersModel');

const userRegister = async (req, res) => {
  const user = await UsersSchema.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED)
    .json({ user: {email: user.email}, token },);
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError('Please provide an email and password');
  }

  const user = await UsersSchema.findOne({email});

  if (!user || !await user.checkPassword(password)) {
    throw new UnauthenticatedError('Invalid Credentials');
  }

  const token = user.createJWT();

  // const user = await UsersSchema.findOne('')
  res.status(StatusCodes.OK).json({ user: {email: user.email}, token },);
};

const userUpdateInfo = (req, res) => {
  res.status(StatusCodes.OK).send('upated');
}

module.exports = {
  userRegister,
  userLogin,
  userUpdateInfo,
}