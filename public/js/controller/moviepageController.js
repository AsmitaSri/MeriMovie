module.exports=function($scope,$http,$rootScope,$location)
{
  var init=function()
  {
    //var tit=$rootScope.var;
    $http.get('/api/theater').success(function(response)
  {
    $scope.mvpgData=response;
  });
  };
  init();

  var init1=function()
  {
    //var title=$rootScope.var;
    $http.get('/mappingapi/getmapdata').success(function(response)
    {
    $scope.mvpgdt=response;
    console.log(response);
  });

  init1();
  };

$scope.storedata=function(ct,th,tm)
{
  $rootScope.city=ct;
  $rootScope.theater=th;
  $rootScope.time=tm;
  $location.path('/seatselect');
}



}
