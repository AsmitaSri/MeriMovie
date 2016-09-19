module.exports=function($scope,$http)
{
  $scope.message="hello world!";

  var init=function()
  {
    //$http.get('http://www.omdbapi.com/?t=Dosti&y=&plot=short&r=json').success(function(response)
    $http.get('/api/theater').success(function(response)
  {
    $scope.movieData=response;
  });
};

init();

$scope.addtheater=function() {
  console.log($scope.theater);
  $http.post('/api/addtheater',$scope.theater).success(function(response){
});
init();
$scope.theater='';
};

$scope.deleteTheater = function(theater){
  var x=confirm("Are you sure you want to delete theater ?");
  if(x){
    $http.delete('/api/deletetheater/'+theater._id).success(function (response) {
  });
}
  init();
};

}
