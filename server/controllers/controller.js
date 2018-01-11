var mongoose = require('mongoose');
var User = mongoose.model('User');
var Animal= mongoose.model('Animal');
module.exports = {
  index: function(req, res) {
    User.find({}, function (err, users){
      res.json({"users": users});
    })
  
},

  createuser: function(req, res) {
    console.log("express create method");
    console.log(req.body.fname + req.body.lname);
    var user = new User({
      fname: req.body.fname, 
      lname: req.body.lname, 
      
      email: req.body.email,
      password: req.body.password

    });
    
    user.save(function(err) {
      if(err) {
        console.log('something went wrong');
        let errors = [];
        for(var key in err.errors){
          errors.push(err.errors[key].message);
        }
        res.json({message: "Error", error: errors});
      } else { 
        res.json({message: "Success", user: user});
      }
    })
  },
  createpagaent: function(req, res) {
    console.log("express create method");
    console.log("lol" + req.body);
    var created_at = new Date(); 
    
    var animal = new Note({
      name: req.body.name, 
      image: req.body.image, 
      about: req.body.about, 
   
      
    });
    
    animal.save(function(err) {
      if(err) {
        console.log('something went wrong');
        let errors = [];
        for(var key in err.errors){
          errors.push(err.errors[key].message);
        }
        res.json({message: "Error", error: errors});
      } else { 
        res.json({message: "Success", notes: notes});
      }
    })
  },
  show: function(req, res) {
    User.find({}, function (err, names){
      res.json({"users": users});
    })
   
},

}
