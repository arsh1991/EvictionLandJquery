const monk = require('monk');
const url = 'localhost:27017/cmpe280';
const db = monk(url);
var xlsx = require('xlsx');


module.exports.login = function(req,res) {
    res.render('../views/adminLogin',{
        message :"",
        error:""
    });
};

module.exports.home = function(req,res) {
    res.render('../views/landing',{
        message :"",
        error:""
    });
};

module.exports.handleSignin = function(req,res) {
    console.log("here");
    const email = req.body.email;
    const password = req.body.password;

    const collection = db.get('users');

    collection.find({ "email" : email}).then((data) => {
        console.log(data);
        if(email === data[0].email && password === data[0].password && data[0].role == "admin") {
        res.redirect('/admin/home');
    }
    else {
            res.render('../views/adminLogin',{
                message : "User with this Email Exists.",
                error: "Please enter correct password."
            });
        }
    }).catch((err) => {
            console.log("Some error occured while signing in");
        res.render('../views/adminLogin',{
            message : "",
            error: "Invalid Username/Password"
        });
    })
};

module.exports.handleAddDocument = function(req , res){
    console.log(req.file);
    var data = xlsx.readFile('./public/uploads/'+req.file.filename).Sheets.Sheet1;
    var statesJsonArray = xlsx.utils.sheet_to_json(data);
    console.log(statesJsonArray);
    res.render('../views/landing',{
        message :"",
        error:""
    });
};
