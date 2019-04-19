var mysql = require('mysql');
var jsonfile = require('jsonfile');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'collegeusers',
    insecureAuth: false
  });

  connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn",err);
    }
    });

    exports.cart = function(req,res){
        // console.log("req",req.body);
        var today = new Date();
        // bcrypt.hash(req.body.password, 5, function( err, bcryptedPassword) {
        //  save to db
         var users={
            "id":req.body.id,
            "name_product":req.body.name_product,
            "quantity":req.body.quantity,
            "sub_total":req.body.sub_total
           }

          //  axios.post(apiBaseUrl+'cart', payload)
          //  .then(function (response) {
          //    console.log(response);

         connection.query('INSERT INTO purchase_cart SET ?',users, function (error, results, fields) {
         if (error) {
           console.log("error ocurred",error);
           res.send({
             "code":400,
             "failed":"error ocurred"
           })
         }else{
          //  console.log('The solution is: ', results);
           res.send({
             "code":200,
             "success":"user registered sucessfully"
               });
         }
        });
      }