var express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var router=express.Router();

router.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27017/movies');
var db=mongoose.connection;

db.on('error',console.error.bind(console,'connection error'));
db.once('open',function()
{
  console.log("Connected to DB");
});

var paymentschema = mongoose.Schema({
  UserName:String,
  Email:String,
  Phone:String,
  Title:String,
  Theater:String,
  City:String,
  Time:String,
  No_of_Seats:String,
  Seat_No:[],
  TotalFare:String
});
var booking=mongoose.model('booking',paymentschema,'booking');

router.post('/makepayment/:t/:th/:ct/:tm/:ns/:ts/:tf',function(req,res){
var bk=new booking({
  UserName:req.body.username,
  Email:req.body.emailid,
  Phone:req.body.phone,
  Title:req.params.t,
  Theater: req.params.th,
  City:req.params.ct,
  Time:req.params.tm,
  No_of_Seats:req.params.ns,
  Seat_No:JSON.parse(req.params.ts),
  TotalFare:req.params.tf
  });
  bk.save(function(err, docs){
    if ( err ) throw err;
    console.log("Tickets Booked Successfully : "+docs);
  });
});

router.get('/bookedseats/:t/:th/:s', function (req, res) {
  booking.find({Title:req.params.t,Theatre:req.params.th,Show:req.params.s}, function (err, docs) {
    res.json(docs);
    });
});
module.exports=router;
