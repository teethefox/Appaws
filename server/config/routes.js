var pets = require('../controllers/controller.js');
module.exports = function(app) {

  app.get('/', (req, res, next)=>{
    console.log("express get route is working")
    pets.index(req, res)
  });

  app.post('/dashboard', (req, res, next)=>{
    console.log("node route create");
    // console.log(req.body.name)
    pets.createuser(req, res);
  });
  app.get('/dashboard', (req, res, next)=>{
    console.log("express get route is working")
    pets.index(req, res)
  });
 
  app.post('/create', (req, res, next)=>{
    console.log("express post route is working")
    pets.createnote(req, res)
  });
  app.get('/create', (req, res, next)=>{
    console.log("express get route is working")
    pets.show(req, res)
  });
} 