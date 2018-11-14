const monk = require('monk');
const url = 'localhost:27017/cmpe280';
const db = monk(url);

module.exports.home = function (req, res) {
    res.render('../views/createRecord', {
        message: "",
        error: "",
        errorMsg: ""
    });
};

module.exports.createNew = function(req, res){
    const collection = db.get('USData');
    let doc = {
        "GEOID":parseInt("06",10),
        "year": parseInt(req.body.year, 10),
        "name":req.body.name,
        "population":parseInt(req.body.population,10),
        "evictionRate":parseFloat("2.4"),
        "evictions":parseInt("103050",10),
        "eviction-filings":parseInt("103300",10),
        "evictionFilingRate":parseFloat("2.57"),
        "parent-location": "USA",
        "poverty-rate":parseFloat(req.body.povRate),
        "renter-occupied-households":parseInt("4158366",10),
        "pct-renter-occupied":parseFloat("43.09"),
        "median-gross-rent":parseInt(req.body.MedGrossRent,10),
        "median-household-income":parseInt(req.body.MedHouseInc,10),
        "median-property-value":parseInt(req.body.MedianPropValue,10),
        "rent-burden":parseFloat(req.body.RentBurden),
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
    };

        console.log(doc);
        collection.insert(doc).then((success) => {
            console.log("Data inserted into the database.");
            res.render('../views/createRecord', {
                message : "Successfully inserted new record",
                error:""
            });
        }).catch((err) => {
            console.log("Error occured while inserting data into the database");
        }).then(() => {
            db.close();
        });

};
