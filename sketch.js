var fixedRect,movingRect
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600,400,50,80)
  fixedRect.shapeColor="yellow"
  movingRect=createSprite(400,200,80,30)
  movingRect.shapeColor="yellow"
}

function draw() {
  background(255,255,255);
  movingRect.y=World.mouseY
  movingRect.x=World.mouseX
  //creatingg a if condition to understand the colliton of movingRect and fixRect
  //when ever the rectangle collide the color should change
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
{
  movingRect.shapeColor="black"
  fixedRect.shapeColor="black"
}
else{
  movingRect.shapeColor="yellow"
  fixedRect.shapeColor="yellow"
}
  drawSprites();
}