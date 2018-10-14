const mongoose = require('mongoose');
const User = mongoose.model('userRegistration')

const validateemail = (email) => {
    let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let isValid = re.test(email);
    return isValid;
}

module.exports.register = (req, res, next) => {
    console.log("inside  register function")
    // console.log("Request", req);
    // console.log("Response", res);
    // console.log("next", next);
    if (req.body.email) {
        let isEmailValid = validateemail(req.body.email);
        if (isEmailValid == false) {
            res.send({
                message: "Email must be in Valid Format"
            })
            return;
        }
    }

    let user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.password = req.body.password;
    user.email = req.body.email;
    user.phoneNumber = req.body.phoneNumber;
    user.save((err, data) => {
        if (err) {
            res.send(400,{
                message: err.message
            });
        } else {
            console.log("data successully saved");
            res.send(data)
        }
    });
}