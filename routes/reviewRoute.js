var express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var router=express.Router();

router.use(bodyParser.urlencoded({extended:true}));

var db= mongoose.createConnection('mongodb://localhost:27017/movies');

db.on('error',console.error.bind(console,'connection error'));
db.once('open',function()
{
  console.log("Connected to DB");
});

var reviewschema=mongoose.Schema({
  moviename:String,
  reviewtitle:String,
  description:String
});

var review=mongoose.model('review',reviewschema,'review');

router.get('/readreview',function(req,res)
{
  review.find({},function(err,docs)
{
  res.json(docs);
});
});


router.post('/leavereview/:mt',function(req,res)
{
  var rv=new review({
    moviename:req.params.mt,
    reviewtitle:req.body.title,
    description:req.body.desc
  });
  rv.save(function(err,docs)
{
  if(err) throw err;
  console.log("Review Posted Successfully")
});
});



module.exports=router
