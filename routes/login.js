var express = require('express');
var router = express.Router();
var db=require('../views/database/database');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('../views/pages/login/login.html')
});
router.post('/', function(req, res){
    var email = req.body.email;
    var password = req.body.password;

    var sql='SELECT * FROM users WHERE email =? AND password =?';
    db.query(sql, [email, password], function (err, data, fields) {
        if(err) throw err
        if(data.length>0){
            req.session.loggedinUser= true;
            req.session.email= email;
            res.redirect("/index.html");
        }else{
            res.render('../views/pages/login/login.html',{alertMsg:"Your Email Address or password is wrong"});
        }
    })

})

module.exports = router;

   
