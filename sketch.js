
function preload(){
  seaImg=loadImage("sea.png")
  shipImg1=loadImage("ship-1.png")
  shipImg2=loadImage("ship-2.png")
  shipImg3=loadImage("ship-3.png")
  shipImg4=loadImage("ship-4.png")
  ship.loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  seaImg.addImage(seaImg)
  ship1.addImage(ship1Img)
  ship1.addAnimation("ship-1")

}

function draw() {
  background("blue");
  if (sea.x<0){
    sea.x=sea.width/2

  }
}