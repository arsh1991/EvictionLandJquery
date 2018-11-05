module.exports.home = function(req,res) {
    console.log("session data on home : ", req.session.userSession);
    res.render('../views/home');
};

module.exports.index = function(req,res) {
    res.render('../views/index');
};

module.exports.ourteam = function(req,res) {
    res.render('../views/ourteam');
};

module.exports.shashank = function(req,res) {
    res.render('../views/shashank');
};

module.exports.arshdeep = function(req,res) {
    res.render('../views/Arshdeep');
};

module.exports.divya = function(req,res) {
    res.render('../views/divya');
};

module.exports.pavana = function(req,res) {
    res.render('../views/pavana');
};
