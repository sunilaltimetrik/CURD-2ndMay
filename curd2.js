var app=angular.module('myCar', []);

app.controller('carController',function($scope){
$scope.viewdisplay= false;
   	$scope.carDetail=[];
	$scope.addCar= function(){
		$scope.carDetail.push({name:$scope.cName, type:$scope.cType, model:$scope.cModel});
        $scope.cName = '';
        $scope.cType = '';
		$scope.cModel = '';
	}
    $scope.view= function(index){
		$scope.data=$scope.carDetail[index];
		$scope.viewdisplay= true;
	}
$scope.deletes = function(index) {
$scope.carDetail.splice(index,1);
}
$scope.edit = function(rowdata,upindex) {
                $scope.cName = rowdata.name;
                $scope.cType = rowdata.type;
                $scope.cModel=rowdata.model;
                $scope.carDetail[upindex] = {name:$scope.cName, type:$scope.cType, model:$scope.cModel};

}
});