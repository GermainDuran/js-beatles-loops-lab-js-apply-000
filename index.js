// add solution here

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (ArrayMusicians,ArrayInstruments){
<<<<<<< HEAD
   var Array = [];
   var MLenght= ArrayMusicians.length;
  
   for (var i=0; i < MLenght; i++){
     Array.push(ArrayMusicians[i] + " plays "+ ArrayInstruments[i]);
   }
   
  return Array;
=======
   let Array=[];
   var MLenght= ArrayMusicians.lenght;
  
   for (var i=0; i < MLenght; i++){
     Array.push(ArrayMusicians[i] +'plays'+ ArrayInstruments[i]);
   }
   
   return Array;
>>>>>>> 7f2e954b7ed91e57975a244d948d4edcd4fb960c
}
const facts = ["He was the last Beatle to learn to drive","He was never a vegetarian","He was a choir boy and boy scout","He hated the sound of his own voice"];

function johnLennonFacts (ArrayFacts){
  var i=0;
  var Array=[];
<<<<<<< HEAD
  while (i < ArrayFacts.length){
=======
  while (i < ArrayFacts.lenght){
>>>>>>> 7f2e954b7ed91e57975a244d948d4edcd4fb960c
    Array.push(ArrayFacts[i] + "!!!"); 
    i++;  
  }
  
  return Array;
}

function iLoveTheBeatles (n){
  var Array=[];
  
  do{
<<<<<<< HEAD
    Array.push('I love the Beatles!');
=======
    Array.push("I love the Beatles!");
>>>>>>> 7f2e954b7ed91e57975a244d948d4edcd4fb960c
    n++;
  }
  while (n<15);
  
return Array;
}

theBeatlesPlay(musicians, instruments); 
johnLennonFacts(facts); 
iLoveTheBeatles(8);