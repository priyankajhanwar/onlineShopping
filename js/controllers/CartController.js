onlineStore.controller("CartController", function($scope, updateArray){
	this.elements=updateArray.getArray();
	console.log(this.elements);
});