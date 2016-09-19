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

var movieschema = mongoose.Schema({
  Title:String,
  Year:String,
  Genre:String,
  Actors:String,
  Language:String,
  Runtime:String,
  Poster:String,
  Status:String
});

var movie=mongoose.model('movie',movieschema,'movie');

router.get('/showmovie',function(req,res)
{
  movie.find({},function(err,docs)
{
  res.json(docs);
  //console.log("found movie");
});
});


router.post('/insertmovie',function(req,res){
var mv=new movie({
    Title:req.body.Title,
    Year: req.body.Year,
    Genre:req.body.Genre,
    Actors:req.body.Actors,
    Language:req.body.Language,
    Runtime:req.body.Runtime,
    Poster:req.body.Poster,
    Status:'false'
  });
  mv.save(function(err, docs){
    if ( err ) throw err;
    console.log("Movie Added Successfully : "+docs);
  });
});

router.delete('/deletemovie/:id',function(req, res){
  movie.remove({_id:req.params.id},function(err, docs){
    console.log('Movie Removed Successfully');
  });
});

router.put('/updateMovie/:moviename/:val',function(req,res){
movie.findOneAndUpdate({ Title: req.params.moviename },
  {
    $set:{Status: req.params.val }
},function (err, data){
  res.json(data);
});
});

module.exports=router
