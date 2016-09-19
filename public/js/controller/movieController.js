module.exports=function($scope,$http,$rootScope,$location)
{
  var init=function()
{
  $http.get('/movieapi/showmovie').success(function(response)
  {
  $scope.movieData=response;
});
};
init();

$scope.searchmovie=function()
{
  $http.get('http://www.omdbapi.com/?t='+$scope.moviename+'&y='+$scope.year+'&plot=short&r=json').success(function(response)
{
  $scope.movieDetails=response;
});
};

$scope.addmovie=function()
{
  $http.post('/movieapi/insertmovie',$scope.movieDetails).success(function(response){
});
init();
};

$scope.deleteMovie = function(movie){
  var x=confirm("Are you sure you want to delete this movie ?");
  if(x){
    $http.delete('/movieapi/deletemovie/'+movie._id).success(function (response) {
  });
}
  init();
};

$scope.readreview=function(title,poster)
{
  $rootScope.mtitle=title;
  $rootScope.mpos=poster;
  $location.path('/review');
}

$scope.bookmovie=function(m,p,g)
{
  $rootScope.var=m;
  $rootScope.pos=p;
  $rootScope.genre=g;
  $location.path('/bookingproceed');
}

// $scope.adminpage=function()
// {
//   $location.path('/admin');
// }

}
