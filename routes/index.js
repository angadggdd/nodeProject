var express = require('express');
var router = express.Router();
const userModal = require("./users")
const postModal = require("./posts");
const passport = require('passport');
const localStrategy = require('passport-local');
passport.use (new localStrategy(userModal.authenticate()));



// by  this code we will able to connect modal user and post
// router.get('/', function (req, res, next) {
//   res.render('index');
// });
// router.get('/alluserposts', async function (req, res, next) {
//   let user = await userModal
//   .findOne({_id:"65641cc2a82e72527839b5ca"})
//   .populate("posts")
//   res.send(user);
// });
// router.get('/createuser', async function (req, res, next) {
//   let createduser = await userModal.create({
//     username: "angad",
//     password: "angad",
//     posts: [],
//     email: "angad@gmail.com",
//     fullName: "angad radhika",
//   })
//   res.send(createduser)
// });

// router.get('/createpost', async function (req, res, next) {
//   let createdpost = await postModal.create({
//     postText: "hallo everyone how are you",
//     user: "65641cc2a82e72527839b5ca"
//   })
//   let user = await userModal.findOne({ _id: "65641cc2a82e72527839b5ca" })
//   user.posts.push(createdpost._id)
//   await user.save();
//   res.send("done")
// });
// by  this code we will able to connect modal user and post



router.get('/', function (req, res, next) {
  res.render("index");
});
router.get('/login', function (req, res, next) {
  res.render("login");
});
router.get('/profile', isLoggedIn, function (req, res, next) {
  res.render("profile");
});
router.get('/resume', function (req, res, next) {
  res.render("resume");
});
router.post('/register', function (req, res) {
  // const userdata = new userModal(
  //  { username: req.body.username,
  //   email:req.body.email ,
  //   fullName:req.body.fullName,}
  // )
  const{ username,email,phone } = req.body;
  const userdata = new userModal({username,email,phone})
  userModal.register(userdata,req.body.password)
  .then(function(){
    passport.authenticate("local")(req,res,function(){
      res.redirect("/profile");
    })
  })
});
router.post('/login',passport.authenticate("local",{
  successRedirect:"/profile",
  failureRedirect:"/"}), function (req, res) {
});
router.get("/logout", function(req,res){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
})
function isLoggedIn(req,res, next){
if(req.isAuthenticated()) return next();
res.redirect("/");
} 
module.exports = router;
