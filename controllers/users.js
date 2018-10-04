/*
 * Get Login Page
 * A user can login to the EvictionLand by hitting /users/login
 */
module.exports.login = function(req,res) {
    res.render('../views/login',{
        message :"",
        error:""
    });
};

/*
 * Get Signup Page
 */
module.exports.signup = function(req,res) {
    res.render('../views/signup');
};

/*
 * Handle Signup
 */
module.exports.handleSignup = function(req,res) {
    console.log(req.body);
    console.log("signup successfull");
    res.render('../views/login', {
        message : "Sign up successful",
        error:""
    });
};

/*
 * Handle Signin
 */
module.exports.handleSignin = function(req,res) {
    const email = req.body.email;
    const password = req.body.password;

    if(email == 'cmpe280@gmail.com' && password == 'Password1@') {
        res.redirect('/home');
    } else {
        res.render('../views/login',{
            message : "",
            error: "Invalid Username/Password"
        });
    }
};

module.exports.logout = function(req,res) {
    res.render('../views/login',{
        message :"",
        error:""
    });
};