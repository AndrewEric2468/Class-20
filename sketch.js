var moving, fixed;

function setup() {
  createCanvas(1200,800);
  moving = createSprite(400, 200, 50, 80);
  moving.shapeColor = "green";
  moving.debug = true;

  fixed = createSprite(400,100,50,80);
  fixed.shapeColor = "green";
  fixed.debug = true;

}

function draw() {
  background("black");
  
  moving.x = World.mouseX;
  moving.y = World.mouseY;

  if( moving.x - fixed.x < fixed.width/2 + moving.width/2 &&
    fixed.x - moving.x < fixed.width/2 + moving.width/2 &&
    moving.y - fixed.y < fixed.height/2 + moving.height/2 &&
    fixed.y - moving.y < fixed.height/2 + moving.height/2){
    moving.shapeColor = "red";
   fixed.shapeColor = "red";
  }
 else{
   moving.shapeColor = "green";
   fixed.shapeColor = "green";
 }

  drawSprites();
}