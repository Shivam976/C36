var canvas, backgroundImage;

var gameState=0;
var playerCount;

var database;

var form, game, player


function setup(){
  db = firebase.database();
  
  createCanvas(500,500);
game=new Game ()
game.getState()
game.start()
  // hypnoticBall = createSprite(250,250,10,10);
  // hypnoticBall.shapeColor = "red";


  // var hypnoticBallPosition = db.ref('ball/position');
  // hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
  background("white");
  

}