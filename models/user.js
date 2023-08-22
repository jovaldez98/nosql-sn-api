const { Schema, model } = require('mongoose');










const User = model('User', userSchema);

module.exports = User;