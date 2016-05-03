var app=angular.module('myCar', []);

app.controller('carController',function($scope){
$scope.viewdisplay= false;
   	$scope.carDetail=[];
	$scope.addCar= function(){
        if (!$scope.cName)
                {
                    alert("Enter Car Name");
                }
                else if (!$scope.cType)
                {
                    alert("Enter Type");
                }
                else if (!$scope.cModel) {
                    alert("Enter Model");
                }
                else {
		              $scope.carDetail.push({name:$scope.cName, type:$scope.cType, model:$scope.cModel});
                      $scope.cName = '';
                      $scope.cType = '';
		              $scope.cModel = '';
                }
	}
    $scope.view= function(index){
		$scope.data=$scope.carDetail[index];
		$scope.viewdisplay= true;
	}
    $scope.deletes = function(index) {
    $scope.carDetail.splice(index,1);
    $scope.data= false;
    }
    $scope.edit = function(updateData,upindex) {
                $scope.cName = updateData.name;
                $scope.cType = updateData.type;
                $scope.cModel=updateData.model;

                $scope.carDetail[upindex] = {name:$scope.cName, type:$scope.cType, model:$scope.cModel};
//$scope.carDetail.splice(upindex, 1, $scope.cName,)
//$scope.deletes(upindex);

  }
});


