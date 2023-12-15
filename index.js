//FINSIHED JQUERY CODE FOR SIMON GAME...FINALLY COMPLETED YAAYYYY


var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var randomChosenColour= "";
var triggered = 0;
var level = 0;
var userChosenColour = "";


function nextSequence() {
    if(triggered>0){$("h1").text("Level "+ level); level++;  userClickedPattern = []; }
    randomChosenColour = buttonColours[Math.floor(Math.random()*4)];
    gamePattern.push(randomChosenColour);
    animatePress(randomChosenColour);
    playSound(randomChosenColour);
    
}
var currentLevel = 0;
var t=0;

function checkAnswer(currentLevel){
  //for(var i=0; i<=gamePattern.length; i++)
    //{
      if(userClickedPattern[currentLevel]===gamePattern[currentLevel ])
        { t=0;
          if(gamePattern.length===userClickedPattern.length)
          {setTimeout(function(){nextSequence()} , 800);
          
        }
        }
      else
        {
          playSound("wrong"); //Turns the screen red and adds tungdung sound at the end
          $("body").addClass("game-over"); 
          setTimeout(function()  {
          $("body").removeClass("game-over"); 
            }, 200);
          $("h1").text("Game Over, Press any key to restart");
          startOver(); t=1;
        }
     
       
   // }       
}

//First keypress, random colour addition
$(document).on("keypress", function( event ){
  triggered++;
  if(triggered==1){nextSequence();}
  });

//User choosing a colour
$(".btn").click(function(){
  $(userChosenColour).fadeOut(50).fadeIn(50);//animation stuff
  userChosenColour = $(this).attr("id"); // Naming the colour based on the choice
  userClickedPattern.push(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
  if(t==0){
  playSound(userChosenColour);
  animatePress(userChosenColour);
  }


});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function startOver()
{
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  triggered = 0;
}


