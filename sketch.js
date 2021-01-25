var polarBear,polarBearImg;
var bg;
var boy;
var p1, p1Img, p2, p2Img, p3, p3Img, p4, p4Img, p5, p5Img;
var level;
var game, player, form;
var gameState = 0;
var point 

function preload(){
polarBearImg = loadImage("images/PolarBear.png");

p1Img = loadImage("images/p1.png");
p2Img = loadImage("images/p2.png");
p3Img = loadImage("images/p3.png");
p4Img = loadImage("images/p4.png");
p5Img = loadImage("images/p5.png");
}

function setup(){
    createCanvas(displayWidth-15,displayHeight-120);
   
    point = createSprite(200, 200, 10 , 10);
    point.visible = false ;
    gameState = 0;

    if(gameState === 0){
        game = new Game();
        game.start();
    }
}

function draw(){
    point.x = mouseX;
    point.y = mouseY;

    if(gameState === 1){
        game.play();
    }
    drawSprites();
}

