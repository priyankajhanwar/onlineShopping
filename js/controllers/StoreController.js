onlineStore.controller("StoreController", function($scope, updateArray){

	this.products = gems;

	$scope.addToCart = function(name,price){	
		var arr2 = updateArray.myFunc(name,price);
		console.log(arr2);
	}

	$scope.gemsCount = function(){
		return updateArray.getGemsCount();
	}

	$scope.bill = function(){
		return updateArray.getTotalPrice();
	}

});