$(document).ready(function() {

function displayScore(myCharacter, currentDefender){
  $("#myCharName").html("My Character: "+myCharacter.name);
  $("#myCharHP").html("Health Points:"+myCharacter.healthPoints);
  $("#myCharAP").html("Attack Power:"+myCharacter.attackPower);
  $("#myCharCAP").html("Counter Attack Power:"+myCharacter.counterAttackPower);
  $("#oppName").html("Defending Character: "+currentDefender.name);
  $("#oppHP").html("Health Points:"+currentDefender.healthPoints);
  $("#oppAP").html("Attack Power:"+currentDefender.attackPower);
  $("#oppCAP").html("Counter Attack Power:"+currentDefender.counterAttackPower);
}

var gameIsReadyForBattle = false;
var baseAttackPower;

var characterArray = [{
    "name": "obiWanKenobi",
    "identity": "char1",
    "healthPoints": 0,
    "attackPower": 0,
    "counterAttackPower": 0,
    "inTheGame": true
  },{
      "name": "lukeSkywalker",
      "identity": "char2",
      "healthPoints": 0,
      "attackPower": 0,
      "counterAttackPower": 0,
      "inTheGame": true
  },{
      "name": "darthSidious",
      "identity": "char3",
      "healthPoints": 0,
      "attackPower": 0,
      "counterAttackPower": 0,
      "inTheGame": true
  },{
      "name": "darthMaul" ,
      "identity": "char4",
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
                  "identity": "",
                   "healthPoints": 0,
                  "attackPower": 0,
                  "counterAttackPower": 0};

var remainingDefenders=[];

//The display is in the "Pick an enemy to attack portion of the page"
function displayAllDefenders(remainingDefenders){
  for (var l = 0; l < remainingDefenders.length; l++) {
    imgSrc = "assets/images/"+ remainingDefenders[l].name +".jpg";
    var opponentIDx = "#opponent"+(l+1);
    console.log (imgSrc);
    console.log (opponentIDx);
    $(opponentIDx).css('display', 'flex');
    $(opponentIDx).attr("src", imgSrc);
  }

}

  // Add an on click listener to all elements that have the class "chracterImage"
  // $(".characterImage").on("click", function() {

// $("img").click(function() {

// FOLLOWING CODE DESCRIBES HOW MAIN CHARACTER IS PICKED

$(".characterImage1").on("click", function() {

  console.log(this.id);

  for (var i = 0; i < characterArray.length; i++) {
    if (this.id === characterArray[i].identity) {
      myCharacter = characterArray[i];
    }
    else{
      remainingDefenders.push(characterArray[i]);
    }
  }

  console.log(myCharacter);
  console.log(remainingDefenders);

  //clear out my selected character at the top of the screen and only
  //retain the defenders.

  //if I define as function, it is synctactically right but never gets invoked.
  // var clearOutTopScreen = function(){
  //   // $("#yourID").css('display', 'none');
  //   $(".characterImage").css('display', 'none');
  // };

  //Clear images in top row
  for (var j = 0; j < characterArray.length; j++) {
    var charID = "#char"+(j+1);
    // $(charID).attr("src","");
      $(charID).css('display', 'none');
    }

  //Move myCharacter image to the yourCharacter id

  var imgSrc = "assets/images/"+ myCharacter.name +".jpg";
  console.log(imgSrc);
  $("#yourCharacter").attr("src",imgSrc);

  // $('#yourCharacter').attr('src',imgSrc);

  // $('#"myCharacterIdName"').css('display', 'none');

  //Display the Defender images below
  displayAllDefenders(remainingDefenders);
  // for (var k = 0; k < remainingDefenders.length; k++) {
  //   imgSrc = "assets/images/"+ remainingDefenders[k].name +".jpg";
  //   var opponentID = "#opponent"+(k+1);
  //   console.log (imgSrc);
  //   console.log (opponentID);
  //   $(opponentID).attr("src", imgSrc);
  // }

// FOLLOWING CODE DESCRIBES HOW OPPONENT IS PICKED

  $(".characterImage3").on("click", function() {

    console.log(this.id);

    //Remove opponent image pick from "Pick an Enemy" area
    $('#'+this.id).css('display', 'none');

    //Determine who was picked for opponent and update currentDefender and remainingDefenders
    var remDefendersIndex = (this.id[this.id.length -1] - 1);
    console.log(remDefendersIndex);
    currentDefender = remainingDefenders[remDefendersIndex];
    console.log(currentDefender);
    //Clear the "Pick an Enemy" area
    for (var k = 0; k < remainingDefenders.length; k++) {
      var opponentID = "#opponent"+(k+1);
      $(opponentID).css('display', 'none');
    }


    // Update remainingDefenders
    remainingDefenders.splice(remDefendersIndex, 1);
    console.log(remainingDefenders);

    //Display opponent pick in Defender area.
    imgSrc = "assets/images/"+ currentDefender.name +".jpg";
    $('.defender').attr("src", imgSrc);

    //Redisplay the "Pick an Enemy" area
    displayAllDefenders(remainingDefenders);
    // for (var l = 0; l < remainingDefenders.length; l++) {
    //   imgSrc = "assets/images/"+ remainingDefenders[l].name +".jpg";
    //   var opponentIDx = "#opponent"+(l+1);
    //   console.log (imgSrc);
    //   console.log (opponentIDx);
    //   $(opponentIDx).css('display', 'flex');
    //   $(opponentIDx).attr("src", imgSrc);
    // }

    //Set the arena ready for BATTLE
    gameIsReadyForBattle = true;
    displayScore(myCharacter, currentDefender);

    //Assign the base attack power for later use
    baseAttackPower = myCharacter.attackPower;

  });

  // FOLLOWING CODE DESCRIBES HOW THE BATTLE IS FOUGHT
  // WHEN ATTACK BUTTON IS PRESSED

  $(".btn-primary").on("click", function() {

    if (gameIsReadyForBattle) {

      //Each time the player attacks, their character's Attack
      //Power increases by its base Attack Power. For example,
      //if the base Attack Power is 6, each attack will
      //increase the Attack Power by 6 (12, 18, 24, 30 and so on).

      myCharacter.attackPower=myCharacter.attackPower + baseAttackPower;
      myCharacter.counterAttack=0;
      //The enemy character only has Counter Attack Power.
      //Unlike the player's Attack Power, Counter Attack Power never changes.
      currentDefender.attackPower=0;
      myCharacter.healthPoints=myCharacter.healthPoints - currentDefender.counterAttackPower;
      currentDefender.healthPoints=currentDefender.healthPoints - myCharacter.attackPower;

      console.log(myCharacter);
      console.log(currentDefender);

      displayScore(myCharacter, currentDefender);

      //Condition of when one loses
      if (myCharacter.healthPoints <= 0){
        //I lose
        alert("YOUR CHARACTER LOSES!");

      }
      else if (currentDefender.healthPoints <= 0){
        //Opponent loses; Load the next opponent
        gameIsReadyForBattle = false;
        displayAllDefenders;


      }

    }



  });





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
