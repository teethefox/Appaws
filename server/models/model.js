var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  fname: {type: String, required: true},
  lname: {type: String, required: true},  
  email: {type: String, required: true},
  password: {type: String, required: true},  
  _animals: [{type: Schema.Types.ObjectId, ref: 'Animal'}]
})

var User = mongoose.model('User', UserSchema);


var AnimalSchema = new mongoose.Schema({
  name: {type: String},
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  image: {type: String, required: true},
  about: {type: String},
  votes: {type: Number},
})

var Animal = mongoose.model('Animal', AnimalSchema);
