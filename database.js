function MovieAdded(movie, review){
    this.movie = movie;
    this.review = review;
}

movieMaker = function(movie, review){
  films.push(new MovieAdded(movie, review));
};

var films = [];
films[0] = new MovieAdded("Toy story 2", "Great story. Mean prospector");
movieMaker("Family Guy", "Nice");

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
find("family guy")
