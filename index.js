buttonColor=["red", "green", "blue","yellow"];
randomColor=[];
userChoosenColor=[];

started= false;
level=0;

$("body").keypress(function(event){
 if(!started){
  $("#level-title").text("Level" + " " +level);
  gameOn();
  started= true;
 }
});

$(".btn").click(function(){
  var userSelectedColor=this.id;
  userChoosenColor.push(userSelectedColor)
  //console.log(userChoosenColor);
  playSound(userSelectedColor);
  animation(userSelectedColor);
  checkCondition(userChoosenColor.length-1);

})

function checkCondition(currentLevel){

if(randomColor[currentLevel]===userChoosenColor[currentLevel]){
  if(userChoosenColor.length===randomColor.length){
    setTimeout(function() {
      gameOn();
    }, 1000);
  }

}else{
  playSound("wrong");
  $("body").addClass("gameOver");
  $("#level-title").text("Game Over! Press any key to restart");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);

  startOver();
}

  
}

function gameOn(){
  userChoosenColor =[];
 level++;
 $("#level-title").text("Level " + level);
 var randomNumber= Math.floor(Math.random()*4)+1;
 var color= buttonColor[randomNumber];
 
 randomColor.push(color);
 playSound(color);
 animation(color);

}

function playSound(name){
  var audio = new Audio("./sounds/"+name+".mp3");
  audio.play();
}

function startOver(){
  level=0;
  started=false;
  randomColor=[];
}

function animation(currentColor){
$("#"+currentColor).addClass("pressed");
setTimeout(function(){
  $("#"+currentColor).removeClass("pressed");
},500);
}