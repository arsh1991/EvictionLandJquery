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
    const selectedState = req.session.userSession[0].state;
    console.log(selectedState);
    const cases = db.get('USData');
    var dataJsonArray = [];
    var dataAllYearsOfState = [];

    cases.find(
            { "year":2016 }

    ).then((results)=>{
        for(var i= 0; i < results.length; i++){
            dataJsonArray.push({
                state: results[i].name,
                value: results[i].evictions
            });
        }


        cases.find({"name": selectedState}).then((results1)=>{
                for(var i= 0; i < results1.length; i++){
            dataAllYearsOfState.push({
                    year: results1[i].year,
                    value: results1[i].evictions
                });
            }
            res.render('../views/dashboard', {'mapData':dataJsonArray, 'yearData':dataAllYearsOfState, 'state': selectedState});

        });


    });
};