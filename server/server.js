let express = require('express');
// var cors= require('cors');
let myApp = express();
// myApp.use(cors());
let fs = require('fs');
let path = require('path');

var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './allData/uploads/')
    },
    filename: function (req, file, cb) {
        // console.log(file)
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage })

let BodyParser = require('body-parser');
myApp.use(BodyParser.json());

let config = require('./config');
let jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');

let mongoose = require('mongoose');
let SiteUsers = require('.//db/models/users');
let Dish = require('./db/models/dish');


mongoose.connect('mongodb://localhost:27017/Food', (err, connection) => {
    console.log(err || connection);
});

// myApp.get('/', function(req, res){
//     res.end('Main')
// });

myApp.post('/checksession', async function (req, res) {
    console.log(req.body);
    var decoded = jwt_decode(req.body.token);
    if (decoded.id) {
        SiteUsers.findOne({ _id: decoded.id }, function (err, docs) {
            res.send(docs);
        });
    }
});

myApp.post('/signup', upload.single('image'),async function (req, res) {
    console.log(req.body)
    let user = new SiteUsers();
    user.fname = req.body.Firstname,
    user.lname = req.body.LastName,
    user.username=req.body.userName,
    user.contact=req.body.mobileNumber,
    user.email = req.body.email,
    user.password = req.body.password,
    user.type=req.body.type,
    user.sellerimage=req.file.originalname
    await user.save();
    res.json({
        msg: "Nabiha"
    });
});
myApp.post('/login', async function (req, res) {
    console.log(req.body)
    let user = await SiteUsers.findOne({ email: req.body.email, password: req.body.password })

    if (user) {
        let userToken = { id: user._id }
        jwt.sign(userToken, config.secret, {
            expiresIn: "6d"
        }, (err, token) => {
            res.json({
                token,
                success: true,
                msg: "User Found",
                _id: user._id,
                username: user.username,
                password: user.password,
                email: user.email,
                contact: user.contact,
                type:user.type

            })
        });
    } else {
        res.json({
            msg: 'User Not Found'
        })
    }
});
myApp.post('/postproduct',async function(req,res){
    console.log(req.body)
    res.json({
        msg: "Nabiha"
    });
})
myApp.use(express.static('./server/allData/uploads'))
// myApp.use(express.static('./server/build'))

myApp.listen(5050, function () {
    console.log('Server in Working State')
})