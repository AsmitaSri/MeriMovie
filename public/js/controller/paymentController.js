module.exports=function($scope,$http,$rootScope,$location)
{
  $scope.makepayment=function()
  {
    var tit=$rootScope.map.Title;
    alert(tit);
    var th=$rootScope.map.Theater;
    alert(th);
    var ct=$rootScope.map.City;
    alert(ct);
    var tm=$rootScope.time;
    alert(tm);
    var ts=$rootScope.TotalSeat1;
    alert(ts);
    var ns=$rootScope.coutSeat;
    alert(ns);
    var tf=$rootScope.Amount;
    alert(tf);
    $http.post('/paymentapi/makepayment/'+tit+'/'+th+'/'+ct+'/'+tm+'/'+ns+'/'+ts+'/'+tf).success(function(response){});
    $location.path('/confirm');
  }
  //makepayment();
}
