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

var mapperschema = mongoose.Schema({
  Title:String,
  City:String,
  Theater:String,
  ShowDate:String,
  ShowTiming:Array
});

var moviemapper=mongoose.model('moviemapper',mapperschema,'moviemapper');
router.post('/insertmapping',function(req,res)
{
  var mvmp=new moviemapper({
      Title:req.body.moviename,
      City: req.body.city,
      Theater:req.body.theater,
      ShowDate:req.body.ShowDate,
      ShowTiming:req.body.ShowTiming
    });

    mvmp.save(function(err, docs){
      if ( err ) throw err;
      console.log("Movie Mapped Successfully : "+docs);
      console.log(req.body.ShowDate);
    });
});

router.route('/selmovie/:t').get(function(req,res) {
moviemapper.find({Theater:req.params.t},function(err, Data) {
    if (err) {
      return res.send(err);
    }
    res.send(Data);

});
});

router.get('/selmoviename/:m',(function(req, res) {
moviemapper.find({Title:req.params.m},function(err, Data){
    if (err) {
      return res.send(err);
    }
    res.send(Data);
  });
}));

router.delete('/deleteMapping/:id',function(req, res){
  moviemapper.remove({_id:req.params.id},function(err, docs){
    console.log('Mapping Removed Successfully');
  });
});

router.get('/getmapdata',function(req,res)
{

  //db.moviemapper.findOne({'Title':'Rustom'}).ShowTiming.length
  moviemapper.find({},function(err,docs)
{
  res.json(docs);
  //console.log("found movie");
});
});

router.get('/getmapdata1',function(req,res)
{
  //db.moviemapper.findOne({'Title':'Rustom'}).ShowTiming.length
  moviemapper.find({},function(err,docs)
{
  res.json(docs);
  //console.log("found movie");
});
});

// router.get('/getselectmapdata/:t',function(req,res)
// {
//   var title=req.params.t;
//   //db.moviemapper.findOne({'Title':'Rustom'}).ShowTiming.length
//   moviemapper.findOne({'Title':title},function(err,docs)
// {
//   res.json(docs);
//   //console.log("found movie");
// });
// });

module.exports=router;
