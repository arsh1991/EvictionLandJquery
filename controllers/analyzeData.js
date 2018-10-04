var xlsx = require('xlsx');
var data = xlsx.readFile('./public/data/data.xlsx').Sheets.Sheet1;
var states = xlsx.readFile('./public/data/states.xlsx').Sheets.Sheet1;



module.exports.analyzedata = function(req,res) {
    var dataJsonArray = xlsx.utils.sheet_to_json(data).slice(0,10);
    var statesJsonArray = xlsx.utils.sheet_to_json(states);
    res.render('../views/analyzeData', {
        'data':dataJsonArray,
        'states':statesJsonArray
    });
};