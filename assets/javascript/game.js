$(document).ready(function() {

var characterArray = [{
    "name": "obiWanKenobi",
    "healthPoints": 0,
    "attackPower": 0,
    "counterAttackPower": 0,
    "inTheGame": true
  },{
      "name": "darthMaul",
      "healthPoints": 0,
      "attackPower": 0,
      "counterAttackPower": 0,
      "inTheGame": true
  },{
      "name": "darthSidious",
      "healthPoints": 0,
      "attackPower": 0,
      "counterAttackPower": 0,
      "inTheGame": true
  },{
      "name": "lukeSkywalker",
      "healthPoints": 0,
      "attackPower": 0,
      "counterAttackPower": 0,
      "inTheGame": true
    }
];

//assign initial points to each characters
for (var i = 0; i < characterArray.length; i++) {
  characterArray[i].healthPoints = Math.floor(Math.random() * 100) + 1;
  characterArray[i].attackPower = Math.floor(Math.random() * 100) + 1;
  characterArray[i].counterAttackPower = Math.floor(Math.random() * 100) + 1;
}

console.log(characterArray);

var myCharacter, currentDefender = {"name": "",
                   "healthPoints": 0,
                  "attackPower": 0,
                  "counterAttackPower": 0};

var remainingDefenders=[];

  // Add an on click listener to all elements that have the class "chracterImage"
  // $(".characterImage").on("click", function() {

$("img").click(function() {

  // myCharacter.name= this.id;
  for (var i = 0; i < characterArray.length; i++) {
    if (this.id === characterArray[i].name) {
      myCharacter = characterArray[i];
    }
    else{
      remainingDefenders.push(characterArray[i]);
    }
  }

  console.log(myCharacter);
  console.log(remainingDefenders);

  //clear out the characters at the top of the screen
  $('.characterImage').each(function(){
    $(this).css('display: none');

  // $('.characterImage').each(function(){
  //   $(this).removeAttr('width');
  //   $(this).removeAttr('height');
  //   $(this).removeAttr('src');
  //   $(this).removeAttr('border');
  //   $(this).removeAttr('margin');
  //   $(this).show();
  // });
  // $(".characterImage").removeAttr("src");
  // $(".characterImage").removeAttr("width");
  // $(".characterImage").removeAttr("height");
  // $(".characterImage").removeAttr("border");
  // $(".characterImage").removeAttr("margin");
  // $(".characterImage").show();

  //show myCharacter on top
    // $('#yourCharacter').attr('src="assets/images/"+myCharacter.name+".jpg"');
  //and the remainingDefenders at the bottom



  });

});
