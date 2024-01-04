const { StatusCodes } = require('http-status-codes');
const { NotFoundError, UnauthenticatedError, BadRequestError } = require('../errors');
const UsersSchema = require('../models/UsersModel');

const userRegister = async (req, res) => {
  const user = await UsersSchema.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED)
    .json({ user: {userId: user._id}, token },);
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError('Please provide an email and password');
  }

  const user = await UsersSchema.findOne({ email });
  if (!user || !await user.checkPassword(password)) {
    throw new UnauthenticatedError('Invalid Credentials');
  }

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: {userId: user._id}, token },);
};

const userUpdateInfo = async (req, res) => {
  const { id: userId } = req.params;
  const { email, password } = req.body;

  if (!userId) {
    throw new BadRequestError('Please provide an id');
  }

  const user = await UsersSchema.findOneAndUpdate(
    { _id: userId },
    { email, password },
    { returnDocument: "after" }
  );

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: {userId: user._id}, token },);
}

module.exports = {
  userRegister,
  userLogin,
  userUpdateInfo,
}