const fullPrice = {

	items: [],
	totalCount: 0,
	counter: function(){
		this.items.forEach(function(x){
			fullPrice.totalCount += x.gamePrice
		}
	)},
	total: function(){
		fullPrice.counter();
		console.log(fullPrice.items)
		console.log(
			"Итого: " + fullPrice.items.length +" игр на сумму " + fullPrice.totalCount + " рублей"
			)
	},

};

function Item(name, price){
	this.gameName	= name;
	this.gamePrice	= price;
};

fullPrice.items.push(
	itemOne		= new Item("Cities Skylines", 124), 
	itemSecond	= new Item("Mass Transit", 231),
	itemThird	= new Item("Hight Tech Buildings", 64),
	itemFourth	= new Item("After Dark", 174),
	itemFifth	= new Item("Green Cities", 289)
	)

fullPrice.total();






