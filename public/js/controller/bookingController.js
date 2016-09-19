module.exports=function($scope,$http,$rootScope,$location)
{
  $scope.mkpaymnt=function()
  {
    //var noseats=document.getElementById("nseats").innerHTML;
    var noseats=$('#nseats').html();
    var seats=$('#seatbooked').html();
    var totfare=$('#totfare').html();
    //alert(noseats);
    //alert(seats);
    //alert(totfare);
    $rootScope.nseats=noseats;
    $rootScope.tseats=seats;
    $rootScope.tf=totfare;
    $location.path('/payment');
  }
}
