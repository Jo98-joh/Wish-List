var express = require('express');
var router = express.Router();
var db=require('../views/database/database');


// to display registration form 
router.get('/register/register.html',(req,res,next) => {
  res.render('../views/pages/register/register.html')
});

// to store user input detail on post request
router.post('/register/register.html', function(req, res, next) {
    
    inputData ={
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        middleName:req.body.middleName,
        email: req.body.email,
        password: req.body.password,
        // retype_password: req.body.retype_password,
        city:req.body.city,
        country:req.body.country,
        dateOfBirth:req.body.dateOfBirth,
        phone:req.body.phone,
        postalAddress:req.body.postalAddress
        
    }

    // check unique email address
var sql='SELECT * FROM users WHERE email =?';
db.query(sql, [inputData.email] ,function (err, data, fields) {
 if(err) throw err
 if(data.length>1){
     var msg = inputData.email+ "was already exist";
//  }else if(inputData.retype_password != inputData.password){
//     var msg ="Password & Confirm Password is not Matched";
    
 }else{
    
    // save users data into database
    var sql = 'INSERT INTO users SET ?';
   db.query(sql, inputData, function (err, data) {
      if (err) throw err;
           });
  var msg ="Your are successfully registered";
 }
 res.render('../views/pages/login/login.html',{alertMsg:msg});
})
     
});
module.exports = router;