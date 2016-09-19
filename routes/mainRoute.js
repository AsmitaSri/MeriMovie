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

var theaterschema = mongoose.Schema({
  name:String,
  city:String,
  location:String
});

var theater=mongoose.model('theater',theaterschema,'theater');

router.get('/theater',function(req,res)
{
  theater.find({},function(err,docs)
{
  res.json(docs);
});
});

router.post('/addtheater',function(req,res){
var th=new theater({
    name:req.body.theatername,
    city:req.body.theatercity,
    location:req.body.theaterloc
  });
  th.save(function(err, docs){
    if ( err ) throw err;
    console.log("Theater Saved Successfully");
  });
});

router.delete('/deletetheater/:id',function(req, res){
  theater.remove({_id:req.params.id},function(err, docs){
    console.log('Theater Removed Successfully');
  });
});




module.exports=router
