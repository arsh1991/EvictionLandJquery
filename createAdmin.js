createAdmin = function() {
    const monk = require('monk');
    const url = 'localhost:27017/cmpe280';
    const db = monk(url);
    // Inserting into the mongodb users collection.
    const collection = db.get('users');

    let userData = {
        userName: "Admin",
        email: "admin@gmail.com",
        password: "Admin123@",
        phone: "1234567891",
        role: "admin"
    };

    // Dont let a user signup if same email id is used.
    collection.find({ "email" : userData.email}).then((data) => {
        if(data.length === 0) {
            collection.insert(userData).then((dataInserted) => {
                console.log("signup successfull");
                console.log("Data inserted into the database.");
            }).catch((err) => {
                console.log("Error occured while inserting data into the database");
            }).then(() => {
                db.close();
            })
        }else {
               console.log("An Account exists with the email provided");
               db.close();
        }
    })
};


module.exports = createAdmin();