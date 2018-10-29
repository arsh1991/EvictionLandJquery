const monk = require('monk');
const url = 'localhost:27017/cmpe280';
const db = monk(url);
var Converter = require("csvtojson").Converter;
var converter = new Converter({});
var csv = require("csvtojson");

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
   /* converter.fromFile(req.file.path+".csv",function(err,result){
        if(err){
            console.log("Error");
            console.log(err);
        }
        var data = result;
        console.log("here");
        console.log(result);
        res.json({'msg': 'File uploaded successfully!', 'file': data});
    });*/

    console.log(req.file);
    var json = "";
    converter.fromFile("./public/uploads/"+req.file.filename+".csv",function(err,result){
        if(err){
            console.log("An Error Has Occured");
            console.log(err);
        }
        json = result;
        console.log(json);
        res.json({'msg': 'File uploaded successfully!', 'file': json});
    });
    res.json({'msg': 'File uploaded successfully!', 'file': json});

};
