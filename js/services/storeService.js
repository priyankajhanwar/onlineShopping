onlineStore.service('updateArray', function(){
	var arr=[];
	var newArray=[];
	var gemsCount=0;
	var totalPrice;
	this.myFunc=function(name,price){
		gemsCount ++;
		arr.push({
			gemsName : name,
			gemsPrice : price

		});
		newArray=arr;
		return arr;
	};
	this.getArray=function(){
		return newArray;
	}
	this.getGemsCount=function(){
		return gemsCount;
	}
	this.getTotalPrice = function () {
		// console.log(newArray)
		totalPrice =0;
		// console.log("totalPrice outside loop" + totalPrice);
		for(var count=0;count<newArray.length; count++){
			// console.log("price"+ newArray[count].gemsPrice);
			// console.log("totalPrice inside loop" + totalPrice);
			totalPrice += newArray[count].gemsPrice;
			// console.log("updated" + totalPrice);
		}
		return totalPrice;
	};
});
