module.exports = function($scope, $http, $rootScope,$location){

// var init=function()
// {
//   //var tit=$rootScope.var;
//   $http.get('/conapi/bookedseats/'+m+'/'+t+'/'+s).success(function(response)
// {
//   for(i=0;i<response.length;i++)
//   {
//     for(j=0;i<response[i].Seat_No.length;j++)
//     {
//       $('#'+response[i].Seat_No[j]).addClass('red');
//     }
//   }
// });
// };
// init();

var s_seat,no_of_seat,fare,sel,basefare=0;
  var seatOnload = function(){
  $(document).ready(function(){
    $('#Seatclass').change(function(){
      sel=$('#Seatclass').find(':selected').text();
      if(sel=='GOLD')
      {
        $('.silver').addClass('blocked');
  			$('.gold').removeClass('blocked');
        basefare=document.getElementById('gfare').innerHTML=280;
      }
      else if (sel=='SILVER')
      {
        $('.gold').addClass('blocked');
        $('.silver').removeClass('blocked');
        basefare=document.getElementById('gfare').innerHTML=200;
      }
    });

      var countdiv=[];
      $('.seat').click(function()
    {
      if(!$(this).hasClass('blocked'))
      {
        $(this).toggleClass('selected');
        var id=$(this).attr('id');
        var colnm=$(this).hasClass('selected');
        if(colnm)
        {
          countdiv.push(id);
          no_of_seat=document.getElementById('seatbooked').innerHTML=countdiv;
          $rootScope.TotalSeat=JSON.stringify(countdiv);
          s_seat=document.getElementById('nseats').innerHTML=countdiv.length;
          //alert(countdiv);

        }
        else
        {
          var ind=countdiv.indexOf(id);
						countdiv.splice(ind,1);
						$rootScope.TotalSeat=JSON.stringify(countdiv);
        }
      }

  if(sel== 'SILVER')
  {
    fare=((countdiv.length)*200)+50;
    document.getElementById('totfare').innerHTML=(countdiv.length)*200;
    document.getElementById('netfare').innerHTML=fare;
  }
  else
  {
    fare=((countdiv.length)*280)+50;
    document.getElementById('totfare').innerHTML=(countdiv.length)*280;
    document.getElementById('netfare').innerHTML=fare;
  }
  });
});
};
seatOnload();


$scope.nextPage=function(){
 $rootScope.totfare=document.getElementById('totfare').innerHTML;
 $rootScope.seats= no_of_seat;
 $rootScope.noseats=s_seat;
//alert(no_of_seat);
// $rootScope.seatType=
$location.path('/payment');
};



};
