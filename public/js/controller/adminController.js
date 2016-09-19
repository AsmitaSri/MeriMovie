module.exports = function($scope, $http,$rootScope, $location)
{
  $scope.addMovie =function(){
  $location.path('/moviemanage');
  };

  $scope.addTheater =function(){
  //$rootScope.amount=$scope.data.seatAmt;
  $location.path('/theater');
  };

  $scope.addMapping =function(){
  //$rootScope.amount=$scope.data.seatAmt;
  $location.path('/moviemapping');
  };

}

//   $(document).ready(function() {
//     $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
//         e.preventDefault();
//         $(this).siblings('a.active').removeClass("active");
//         $(this).addClass("active");
//         var index = $(this).index();
//         $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
//         $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
//     });
//
// // Theater management Start
//   var init=function()
//   {
//     $http.get('/api/theater').success(function(response)
//   {
//     $scope.movieData=response;
//   });
// };
//
// init();
//
// $scope.addtheater=function() {
//   console.log($scope.theater);
//   $http.post('/api/addtheater',$scope.theater).success(function(response){
// });
// init();
// $scope.theater='';
// };
//
// $scope.deleteTheater = function(theater){
//   var x=confirm("Are you sure you want to delete theater ?");
//   if(x){
//     $http.delete('/api/deletetheater/'+theater._id).success(function (response) {
//   });
// }
// init();
// };
// // Theater management end
//
// // Movie management start
// var movieinit=function()
// {
// $http.get('/movieapi/showmovie').success(function(response)
// {
// $scope.movieData=response;
// });
// };
// movieinit();
//
// $scope.searchmovie=function()
// {
// $http.get('http://www.omdbapi.com/?t='+$scope.moviename+'&y='+$scope.year+'&plot=short&r=json').success(function(response)
// {
// $scope.movieDetails=response;
// });
// };
//
// $scope.addmovie=function()
// {
// $http.post('/movieapi/insertmovie',$scope.movieDetails).success(function(response){
// });
// movieinit();
// };
//
// $scope.deleteMovie = function(movie){
// var x=confirm("Are you sure you want to delete this movie ?");
// if(x){
//   $http.delete('/movieapi/deletemovie/'+movie._id).success(function (response) {
// });
// }
// movieinit();
// };
//
// $scope.readreview=function(title,poster)
// {
// $rootScope.mtitle=title;
// $rootScope.mpos=poster;
// $location.path('/review');
// }
//
// $scope.bookmovie=function(m,p,g)
// {
// $rootScope.var=m;
// $rootScope.pos=p;
// $rootScope.genre=g;
// $location.path('/bookingproceed');
// }
//
// // Movie management end
//
// });
