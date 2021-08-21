var bg;
var bgimg;
var snowimg;
var snow,snow2,snow3,snow4,snow5;

function preload(){
bgimg = loadImage("snow2.jpg");
snowimg = loadAnimation("Snow7.png","snow25.png")
}

function setup() {
  createCanvas(800,400);

  bg = createSprite(385, 200, 50, 50);
  bg.addImage("hello",bgimg);
  bg.scale =0.6

 
  snow = createSprite(200,100,10,10)
  snow.addAnimation("snow",snowimg)
  snow.scale=0.2;
  snow.velocityY=4;
 
  snow2 = createSprite(600,200,10,10)
  snow2.addAnimation("snow",snowimg)
  snow2.scale=0.2;
  snow2.velocityY=4;

  snow3 = createSprite(700,400,10,10)
  snow3.addAnimation("snow",snowimg)
  snow3.scale=0.2;
  snow3.velocityY=4;

  snow4 = createSprite(100,400,10,10)
  snow4.addAnimation("snow",snowimg)
  snow4.scale=0.2;
  snow4.velocityY=4;
 
  snow5 = createSprite(100,200,10,10)
  snow5.addAnimation("snow",snowimg)
  snow5.scale=0.2;
  snow5.velocityY=4;


}

function draw() {
  background(255,255,255);  
 
  drawSprites();
}