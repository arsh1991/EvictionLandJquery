const monk = require('monk');
const url = 'localhost:27017/cmpe280';
const db = monk(url);

// modules.exports.createEvictionRecord = function (req, res) {
//
// }

module.exports.home = function (req, res) {
    res.render('../views/createRecord', {
        message: "",
        error: "",
        errorMsg: "",
        userdata: []
    });
};

module.exports.createNew = function(req, res){
    const collection = db.get('USData')
    let doc = {
        "year": req.body.year,
        "name":req.body.name,
        "population":req.body.population,
        "evictionRate":req.body.evictionRate,
        "evictions":req.body.evictions,
        "evictionFilingRate":req.body.evictionFilingRate    }

        console.log(doc);
        collection.insert(doc).then((success) => {
            console.log("signup successfull");
            console.log("Data inserted into the database.");
            res.render('../views/createRecord', {
                message : "Successfully inserted new record",
                error:""
            });
        }).catch((err) => {
            console.log("Error occured while inserting data into the database");
            // res.render('../views/signup');
        }).then(() => {
            db.close();
        })

}
