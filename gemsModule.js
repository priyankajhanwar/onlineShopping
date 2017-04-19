(function(){
	var app = angular.module('store',["ngRoute"]);

	// app.config(function($routeProvider) {
 //    $routeProvider
 //    .when("/", {
 //        templateUrl : "index.html"
 //    })
 //    .when("/cart", {
 //        templateUrl : "cart.html"
    
 //    });
	// });
var gemsCount = 0;
	app.controller("StoreController", function(){
		this.products = gems;
		this.gemsPurchased = function(){
			this.gemsCount = gemsCount+1 ;
		}
	});
	
	var gems = [
	 {	image : 'aquamarine.jpg',
		name : 'Aquamarine' ,
		price : 2.95,
		description : 'Aquamarine is a blue variety of the mineral beryl. It receives its name from its seawater color.',
		
	},
	 {	
	 	image : 'aventurine.jpg',
		name : 'Aventurine' ,
		price : 2,
		description : 'Aventurine is a quartz variety that contains a blizzard of tiny reflective inclusions such as muscovite, hematite, or fuchsite.',
		
	},
	 {	
	 	image : 'chalcedony.jpg',
		name : 'Chalcedony' ,
		price : 8,
		description : 'Chalcedony is a name used for any cryptocrystalline quartz such as agate, jasper, petrified wood, chrysoprase, bloodstone, onyx, sard, and carnelian.',
		
	},
	 {	
	 	image : 'charoite.jpg',
		name : 'Charoite' ,
		price : 90,
		description : 'Charoite is a light lavender to deep purple silicate mineral that has swirling, fibrous, or spotted patterns.',
		
	},
	 {
		image : 'citrine.jpg',
		name : 'Citrine' ,
		price : 19,
		description : 'Citrine is a transparent variety of quartz that ranges from golden yellow to yellowish orange to golden brown in color. ',
		
	},
	 {
		image : 'emerald.jpg',
		name : 'Emerald' ,
		price : 3,
		description : 'Emerald is the gemstone name of the mineral beryl when it has a rich green color.',
		
	},

	 {	image : 'sphene.jpg',
		name : 'Sphene' ,
		price :16,
		description : 'Sphene, also known as titanite, is a gem with a dispersion higher than diamond.',
		
	},
	 {
		image : 'spinel-180.jpg',
		name : 'Spinel' ,
		price : 9.95,
		description : 'A mineral of many colors that has been treasured as a gem for thousands of years.',
		
	},
	 {
		image : 'topaz-180.jpg',
		name : 'Topaz' ,
		price : 9.95,
		description : 'Topaz is a popular gem. It is usually clear to amber in color when mined.',
		
	},
	 {
		image : 'white-opal.jpg',
		name : 'White-opal' ,
		price : 9.95,
		description : 'Light opal" or "white opal" are terms used for an opal material with a white, yellow, or cream-colored body color.',
		
	},
];

})();
