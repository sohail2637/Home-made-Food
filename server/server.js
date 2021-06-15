let express = require("express");
var cors = require("cors");
let myApp = express();
myApp.use(cors());
let fs = require("fs");
let path = require("path");
// const Cryptr = require('cryptr');
// const cryptr = new Cryptr('maano');
// var bcrypt = require('bcryptjs');
// var salt = bcrypt.genSaltSync(10);

var multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./server/allData/uploads/");
  },
  filename: function (req, file, cb) {
    // console.log(file)
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });
var nodemailer = require('nodemailer');


let BodyParser = require("body-parser");
myApp.use(BodyParser.json());

let config = require("./config");
let jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");


var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
    port: 465,
    secure: true, 
  // service: 'gmail',
  auth: {
    user: 'nabiha3802izhar@gmail.com',
    pass: '137287nabiha'
  }
});

var mailOptions = {
  from: 'nabiha3802izhar@gmail.com',
  to: 'sohail25816@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

let mongoose = require("mongoose");
let SiteUsers = require(".//db/models/users");
let Dish = require("./db/models/dish");
const { decode } = require("punycode");

mongoose.connect(
  "mongodb+srv://123456sohail:123456sohail@cluster0.chxyr.mongodb.net/Food?retryWrites=true&w=majority",
  (err, connection) => {
    console.log(err || connection);
  }
);

// myApp.get('/', function(req, res){
//     res.end('Main')
// });

myApp.post("/checksession", async function (req, res) {
  console.log(req.body);
  var decoded = jwt_decode(req.body.token);
  if (decoded.id) {
    SiteUsers.findOne({ _id: decoded.id }, function (err, docs) {
      res.send(docs);
    });
  }
});

myApp.post("/signup", upload.single("image"), async function (req, res) {
  console.log(req.body);
  let user1 = await SiteUsers.findOne({
    email: req.body.email,
  });
  if (user1) {
    res.json({
      msg: "Email Already in Use"
    })
  } else {
    let userToken = { password: req.body.password };
    let token = jwt.sign(userToken, config.secret)
    console.log(token);
    let user = new SiteUsers();
    (user.fname = req.body.FirstName),
      (user.lname = req.body.LastName),
      (user.username = req.body.UserName),
      (user.contact = req.body.MobileNumber),
      (user.email = req.body.email),
      (user.password = token),
      (user.type = req.body.Type),
      req.file
        ? (user.sellerimage = req.file.originalname)
        : (user.sellerimage = ""),
      user.deliverycontact = req.body.deliverycontact,
      user.address = req.body.address,
      user.postalcode = req.body.postalcode;
    await user.save();
    res.json({
      msg: "Nabiha",
    });
  }

  // const encryptedString = cryptr.encrypt(req.body.password);
  // const decryptedString = cryptr.decrypt(encryptedString);
  // console.log(encryptedString);
  // console.log(decryptedString);

  // var hash = bcrypt.hashSync(req.body.password, salt);
  // console.log(hash)

});
myApp.post("/login", async function (req, res) {
  console.log(req.body);
  let user = await SiteUsers.findOne({
    email: req.body.email,
  }, function (err, docs) {
    console.log(docs._doc.password)
    var decoded = jwt_decode(docs._doc.password);
    console.log(decoded)
    if (decoded.password == req.body.password) {
      console.log('Password')

      let userToken = { id: docs._doc._id };
      jwt.sign(
        userToken,
        config.secret,
        {
          expiresIn: "6d",
        },
        (err, token) => {
          res.json({
            token,
            success: true,
            msg: "User Found",
            _id: docs._doc._id,
            username: docs._doc.username,
            password: docs._doc.password,
            email: docs._doc.email,
            contact: docs._doc.contact,
            type: docs._doc.type,
            Image: docs._doc.sellerimage,
          });
        }
      );
    } else {
      res.json({
        msg: "User Not Found",
      });
    }
  });




});
myApp.post("/postproduct", upload.single("dishImage"), async function (req, res) {
  console.log(req.body);
  let dish = new Dish();
  (dish.referenceId = req.body.id),
    (dish.dishName = req.body.dishName),
    (dish.dishCategory = req.body.dishCategory),
    (dish.dishPrize = req.body.dishPrize),
    (dish.dishQuantity = req.body.dishQuantity),
    (dish.dishImage = req.file.originalname);
  await dish.save();
  res.json({
    msg: "Dish Saved",
  });
}
);
myApp.post('/dishes', async function (req, res) {
  Dish.find({}, function (err, dishes) {
      res.send(dishes);
  });
})
myApp.post('/showsellers', async function (req, res) {
  SiteUsers.find({type: 'seller'}, function (err, sellers) {
      res.send(sellers);
  });
})
myApp.post('/showdeliveryboys', async function (req, res) {
  SiteUsers.find({type: 'delivery boy'}, function (err, deliveryboys) {
      res.send(deliveryboys);
  });
})
myApp.post('/sellerpost', async function (req, res) {
  Dish.find({referenceId: req.body.id}, function (err, sellerpost) {
      res.send(sellerpost);
  });
})
myApp.use(express.static("./server/allData/uploads"));
// myApp.use(express.static('./server/build'))

myApp.listen(5050, function () {
  console.log("Server in Working State");
});
