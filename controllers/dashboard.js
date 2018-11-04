var xlsx = require('xlsx');
const monk = require('monk');
const url = 'localhost:27017/cmpe280';
const db = monk(url);


module.exports.fetchData = function(req,res) {
    const cases = db.get('USData');

    cases.find({"year":2016}).then((results)=>{
        res.render('../views/dashboard', {
            'data':results
        });
    });
};

module.exports.fetchDataByState = function(req,res) {
    const selectedState = req.query.selectedState;
    const cases = db.get('USData');
    var dataJsonArray = [];
    var data = [ {key: "Cumulative Return",  values :[]} ];

    cases.find({
        $and : [
            { "year":2016 },
            { $or : [ {"name": selectedState}, {"name": "USA"}] }
        ]
    }).then((results)=>{
        for(var i= 0; i < results.length; i++){
            dataJsonArray.push({
                label: results[i].name,
                value: results[i].evictions
            });
        }
        data[0]["values"] = dataJsonArray;
        console.log(data);
        res.send({'data':data});
    });
};