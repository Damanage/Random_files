var autor ={
  autor: "Great Wizard Joe"
};

var Fire = function(){
  this.discipline   = "Fire";
  this.description  = "Fire is destruction magic";
  this.spells       = {};
}; 
Fire.prototype = autor;

var fireSchool = new Fire();

var Spells = function(name, sD){
  this.spell            = name;
  this.spellDescription = sD;
};
Spells.prototype = fireSchool;

fireSchool.spells.firstSpell  = new Spells("Fireball", "Classic spell of fire magic school");
fireSchool.spells.secondSpell = new Spells("Pyroblast","Giant fire boulder");
fireSchool.spells.thirdSpell  = new Spells("Flash of fire","Instant cast, low damage");

schoolReview = function(){
  console.log("Welcome to the school of  "+(fireSchool.discipline.toLowerCase()) +" magic! "+fireSchool.description );
  for(key in fireSchool.spells){
  console.log(fireSchool.spells[key])
}};
  
schoolReview()
