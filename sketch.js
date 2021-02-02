var gameState = 1;
var wall1,wall2,wall3,wall4;
var ball;
var sound;

function preload(){
    sound = loadSound("music.mp3");
}


function setup(){
    createCanvas(600,600);

    //create box sprite and give velocity
    ball = createSprite(Math.round(random(110,490)),Math.round(random(110,490)),20,20);
    ball.shapeColor = "white";
    ball.velocityX = Math.round(random(2,4));
    ball.velocityY = Math.round(random(2,4));

    wall1 = createSprite(175,90,150,20);
    wall1.shapeColor = "red";

    wall5 = createSprite(425,90,150,20);
    wall5.shapeColor = "red";

    wall6 = createSprite(300,90,100,20);
    wall6.shapeColor = "black";

    wall2 = createSprite(510,300,20,400);
    wall2.shapeColor = "gold";

    wall3 = createSprite(300,510,400,20);
    wall3.shapeColor = "blue";

    wall4 = createSprite(90,300,20,400);
    wall4.shapeColor = "green";
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
 
    if(isTouching2(wall1,ball)){
        ball.shapeColor = "red";
        ball.bounceOff(wall1);
        if(gameState === 1){
            sound.play();
            sound.loop();
            gameState = 1;
        }
    }
    if(isTouching2(wall5,ball)){
        ball.shapeColor = "red";
        ball.bounceOff(wall5);
        if(gameState === 1){
            sound.loop();
            gameState = 1;
        }
    }
    if(isTouching1(wall2,ball)){
        ball.shapeColor = "gold";
        ball.bounceOff(wall2);
        if(gameState === 1){
            sound.loop();
            gameState = 1;
        }
    }
    if(isTouching2(ball,wall3)){
        ball.shapeColor = "blue";
        ball.bounceOff(wall3);
        if(gameState === 1){
            sound.loop();
            gameState = 1;
        }
    }
    if(isTouching1(ball,wall4)){
        ball.shapeColor = "green";
        ball.bounceOff(wall4);
        if(gameState === 1){
            sound.loop();
            gameState = 1;
        }
    }



    if(isTouching2(wall6,ball) && isTouching1(wall6,ball)){
        ball.shapeColor = "black";
        ball.velocityX = 0;
        ball.velocityY = 0;
    }

    drawSprites();
    //add condition to check if box touching surface and make it box
}

function isTouching1(object1,object2){
    if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
      object2.x - object1.x < object1.width/2 + object2.width/2){
      return true;
    }
    else {
      return false;
    }
  }

function isTouching2(object1,object2){
    if(object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y - object1.y < object1.height/2 + object2.height/2){
      return true;
    }
    else {
      return false;
    }
  }

  //Function for Boucing Off
  function bounceOff(object1,object2){
    if(object2.x - object1.x <= object2.width/2 + object1.width/2 &&
      object1.x - object2.x <= object2.width/2 + object1.width/2){
  
        object1.velocityX = object1.velocityX * (-1);
        object2.velocityX = object2.velocityX * (-1);
    }
  
    if(object2.y - object1.y <= object2.height/2 + object1.height/2 &&
      object1.y - object2.y <= object2.height/2 + object1.height/2){
  
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
    }
  }