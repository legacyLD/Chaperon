var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcryptjs');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/chaperon');

var userSchema = new Schema({
  created: { type: Date },
  updated: { type: Date },
  username: String,
  first_name: String,
  last_name: String,
  email: { type: String, unique: true, lowercase: true },
  phone: String,
  password: { type: String, select: false },
  // posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
  contacts: [{type: Schema.ObjectId, ref: 'User'}]
});

userSchema.pre('save', function (next) {
  // set created and updated
  now = new Date();
  this.updated = now;
  if (!this.created) {
    this.created = now;
  }

  // encrypt password
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(user.password, salt, function (err, hash) {
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (password, done) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    done(err, isMatch);
  });
};

var User = mongoose.model('User', userSchema);
module.exports = User;
