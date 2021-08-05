var ironman ,ironmanImage;
var bg, bgImg;
var stoneImage,stoneGroup;

function preload() {
  bgImg = loadImage("images/bg.jpg");
  ironmanImage= loadImage("images/iron.png");
  stoneImage = loadImage("images/stone.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(bgImg);
  bg.scale = 2;
  bg.velocityX = -6;

  ironman=createSprite(200,505,20,50);
  ironman.addImage(ironmanImage);
  ironman.scale =0.3;

ironman.debug = true;
ironman.setCollider("rectangle",100,0,200,400);

  ground =createSprite(200,585,400,10);
ground.visible = false; 

stoneGroup = new Group();
}

function draw() {

  if (bg.x < 100) {
    bg.x = bg.width / 4;
}

if(ironman.x < 200){
    ironman.x = 200;
}
if (ironman.y < 50){
    ironman.y = 50;
}

  if(keyDown("up")){
  ironman.velocityY =-10;
  }

  // if (keyDown("left")){
  //   ironman.x = velocity.x =-5;
  // }
  
  // if (keyDown("right")){
  //   ironman.x = velocity.x = +5;
  // }

  ironman.velocityY =ironman.velocityY +  0.5;
  ironman.collide(ground);

  generateStone();

  for( var i =0; i< (stoneGroup).length; i++){
      var temp = (stoneGroup).get(i);
      if (temp.isTouching(ironman)){
          ironman.collide(temp);
      }
  }

  function generateStone(){

    if(frameCount % 70 === 0){
        var stone = createSprite(1200,120,40,10);
        stone.y = random(50,450)
       stone.addImage(stoneImage)
        stone.scale = 0.5;
       stone.velocityX = -5;
        stone.lifetime =250;
        stoneGroup.add(stone);
    }


}
    drawSprites();
   
}

