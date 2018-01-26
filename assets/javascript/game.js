$(document).ready(function() {

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

  // Add an on click listener to all elements that have the class "chracterImage"
  // $(".characterImage").on("click", function() {

// $("img").click(function() {

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
  for (var k = 0; k < remainingDefenders.length; k++) {
    imgSrc = "assets/images/"+ remainingDefenders[k].name +".jpg";
    var opponentID = "#opponent"+(k+1);
    console.log (imgSrc);
    console.log (opponentID);
    $(opponentID).attr("src", imgSrc);
  }

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
    for (var k = 0; k < remainingDefenders.length; k++) {
      imgSrc = "assets/images/"+ remainingDefenders[k].name +".jpg";
      var opponentID = "#opponent"+(k+1);
      console.log (imgSrc);
      console.log (opponentID);
      $(opponentID).css('display', 'flex');
      $(opponentID).attr("src", imgSrc);
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
