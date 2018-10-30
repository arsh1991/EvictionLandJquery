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
    var data = xlsx.readFile('./public/uploads/'+req.file.filename).Sheets.FullExtStats;
    var statesJsonArray = xlsx.utils.sheet_to_json(data);

    if(statesJsonArray.length!=0 && statesJsonArray[0].year && statesJsonArray[0].state
        && statesJsonArray[0].County && statesJsonArray[0].fips && statesJsonArray[0].State_Reported_Cases){
        const cases = db.get('reportedCases');
        cases.drop().then(() =>{
            cases.insert(statesJsonArray).then((dataInserted) => {
                console.log("Data inserted into the database.");

                res.render('../views/landing',{
                    message :"Data Inserted successfully",
                    error:""
                });
            }).catch((err) => {
                console.log("Error occured while inserting data into the database");
                res.render('../views/landing',{
                    message :"",
                    error:"Backend Error: Unable to insert data into database"
                });
            }).then(() => {
                db.close();
            })
        });

    } else {
        res.render('../views/landing',{
            message :"",
            error:"File is not in the required format"
        });
    }


};
