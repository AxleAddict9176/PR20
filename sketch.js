var garden, gardenImg;
var cat;
var mouse;

function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here

}

function draw() {

    background("grey");
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      mouse.addAnimation("mouseHappy", mouseImg1);
      mouse.changeAnimation("mouseHappy");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW) {
    mouse.addAnimation("mouseTeasing", mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;

  }

}
