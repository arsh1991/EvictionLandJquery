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
    const collection = db.get('USData');
    let doc = {
        "GEOID":parseInt("06",10),
        "year": parseInt(req.body.year, 10),
        "name":req.body.name,
        "population":parseInt(req.body.population,10),
        "evictionRate":parseFloat(req.body.evictionRate),
        "evictions":parseInt(req.body.evictions,10),
        "eviction-filings":parseInt(req.body.evictionFilings,10),
        "evictionFilingRate":parseFloat(req.body.evictionFilingRate),
        "parent-location": "USA",
        "poverty-rate":parseFloat("14.22"),
        "renter-occupied-households":parseInt("4158366",10),
        "pct-renter-occupied":parseFloat("43.09"),
        "median-gross-rent":parseInt("1116",10),
        "median-household-income":parseInt("47493",10),
        "median-property-value":parseInt("211500",10),
        "rent-burden":parseFloat("27.7"),
        "white":parseFloat("46.7"),
        "afam":parseFloat("6.44"),
        "hispanic":parseFloat("32.38"),
        "amind":parseFloat("0.53"),
        "asian":parseFloat("10.77"),
        "nhpi":parseFloat("0.31"),
        "multiple":parseFloat("2.67"),
        "other":parseFloat("0.21"),
        "low-flag":parseInt("1",10),
        "imputed":parseInt("0",10),
        "subbed":parseInt("0",10)
    }

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
