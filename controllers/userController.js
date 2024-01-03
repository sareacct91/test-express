const { StatusCodes } = require('http-status-codes');
const UsersSchema = require('../models/UsersModel');

const userRegister = async (req, res) => {
  const user = await UsersSchema.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED)
    .json({ user: {email: user.email}, token },);
};

const userLogin = (req, res) => {
  // const user = await UsersSchema.findOne('')
  res.status(StatusCodes.OK).send('Logged in');
};

const userUpdateInfo = (req, res) => {
  res.status(StatusCodes.OK).send('upated');
}

module.exports = {
  userRegister,
  userLogin,
  userUpdateInfo,
}