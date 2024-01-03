const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { userLogin } = require('../controllers/userController');

const UsersSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please provide valid email'],
      trim: true,
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minLength: 8,
    },
  },
  { timestamps: true },
);

UsersSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UsersSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, email: this.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE }
  );
};


module.exports = mongoose.model('Users', UsersSchema);