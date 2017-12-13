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
    console.log(req.body.name);
    var user = new User({
      name: req.body.name, 
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
  createnote: function(req, res) {
    console.log("express create method");
    console.log("lol" + req.body);
    var created_at = new Date(); 
    
    var notes = new Note({
      question: req.body.question, 
      content1: req.body.content1, 
      content2: req.body.content2, 
      content3: req.body.content3, 
      content4: req.body.content4, 
      
    });
    
    notes.save(function(err) {
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
    Name.find({}, function (err, names){
      res.json({"names": names});
    })
   
},

}
