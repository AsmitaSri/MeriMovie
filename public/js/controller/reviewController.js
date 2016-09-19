module.exports=function($scope,$http)
{
  var init=function()
  {
    $http.get('/reviewapi/readreview').success(function(response)
  {
    $scope.reviewData=response;
  });
  };

  init();

$scope.addreview=function()
{
  $http.post('/reviewapi/leavereview/'+$scope.mtitle , $scope.review).success(function(response){

  });
  init();
};
}
