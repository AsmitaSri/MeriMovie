module.exports=function($scope,$http,$rootScope,$location)
{
  $(document).ready(function(){
      $('#datepicker').datepicker({ dateFormat: 'dd, M yy' });
      $('#addtime').click(function(){
          var data = ($('#hours').val())+" : "+($('#minutes').val())+" "+($('#ampm').val());
          $('#restime').append("<option value='"+data+"'>"+data+"</option>");
      });
  });

  var init=function()
{
  $http.get('/movieapi/showmovie').success(function(response)
  {
  $scope.movieData=response;
});
};
init();

  var fetchtheater=function()
{
  $http.get('/api/theater').success(function(response)
  {
  $scope.theaterData=response;
});
};
fetchtheater();

$scope.addMapping = function()
{
  var arr = [];
  var length=$('#restime').children('option').length;
  console.log(length);
  for (var i = 0; i <length; i++)
  {
    arr[i]=$('#restime option').eq(i).val();
  }
  $scope.mapping.ShowTiming=arr;
  $scope.mapping.ShowDate=$('#datepicker').val();
  $http.post('/mappingapi/insertmapping',$scope.mapping).success(function(response){
});
var val='true';
$http.put('/movieapi/updateMovie/'+$scope.mapping.moviename+'/'+val).success(function(response){
});
getmapping();
};

// $scope.showMapping=function()
//   {
//     $http.get('/mappingapi/selmovie/'+$scope.mapping1.Theater).success(function(response) {
//       $scope.searchmovieData=response;
//     });
//   };

  $scope.deleteMapping = function(map){
    var x=confirm("Are you sure you want to delete ?");
    if(x){
      $http.delete('/mappingapi/deleteMapping/'+map._id).success(function (response) {
    });

    $http.get('/mappingapi/selmoviename/'+map.Title).success(function (response) {
      len=response.length;
      alert("len "+len);
      if(len==0)
      {
        var val='false';
   $http.put('/movieapi/updateMovie/'+map.Title+'/'+val).success(function (response) {   });
      }
    });
  }
  };

  var getmapping=function()
  {
    $http.get('/mappingapi/getmapdata').success(function(response)
    {
    $scope.mappingData=response;
    console.log($scope.mappingData);
  });
  };
  getmapping();

  $scope.storedata=function(tm,map)
  {
    $rootScope.time=tm;
    $rootScope.map=map;
    $location.path('/seatselect');
  };

  $scope.movDates=[];
  var showDates=function() {
  for(i=0;i<6;i++)
  {
    var date=new Date();
    date.setDate(date.getDate()+i);
    $scope.movDates[i]=date;
    // $scope.movDates[i].toString();
  }
  };
  showDates();

};
