var xlsx = require('xlsx');
var data = xlsx.readFile('./public/data/data.xlsx').Sheets.Sheet1;
var states = xlsx.readFile('./public/data/states.xlsx').Sheets.Sheet1;


/*
 *
 * Get Rankings home page
 * A user can see top 10 cities with highest eviction rates by hitting /rankings/
 *
 */
module.exports.rankings = function(req,res) {
    var dataJsonArray = xlsx.utils.sheet_to_json(data).slice(0,10);
    var statesJsonArray = xlsx.utils.sheet_to_json(states);
    res.render('../views/rankings', {
        'data':dataJsonArray,
        'states':statesJsonArray,
        'selected':"Select a state"
    });
};


/*
 *
 * Get county rankings by state
 * A user can see top 10 county in a particular with highest eviction rates by hitting /rankings/state
 *
 */
module.exports.countyRankingsByState = function(req,res) {
    const selectedState = req.query.selectedState;
    var dataJsonArray = xlsx.utils.sheet_to_json(data);

    // filter data based on selected state
    const rankingsForState = dataJsonArray.filter(function (data) {
        return data.state == selectedState;
    });

    var statesJsonArray = xlsx.utils.sheet_to_json(states);

    res.render('../views/rankings', {
        'data':rankingsForState.slice(0,10),
        'states':statesJsonArray,
        'selected':selectedState
    });
};

