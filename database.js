function MovieAdded(movie, review){
		this.movie = movie;
  	this.review = review;
}

moviemaker = function(movie, review){
  films.push(new MovieAdded(movie, review));
};

var films = [];
films[0] = new MovieAdded("Toy story 2", "Great story. Mean prospector");
films[1] = new MovieAdded("Finding Nemo", "Cool animation and funny turtles");
films[2] = new MovieAdded("The Lion King", "Great songs");
films.push(new MovieAdded("Family Guy", "Nice"),
					 new MovieAdded("The Simpsons", "Just a legend!"));

function printFilm(i){
    console.log(films[i].movie+": "+films[i].review);
}

var find = function(name){
    var contactsLength = films;
    for(var i= 0; i<films.length;i++){
    	if((films[i].movie).toLowerCase() === (name).toLowerCase()){
        printFilm(i);
    }
    }};
