var mov ,fix;
function setup() {
  createCanvas(800,400);
  mov=createSprite(400, 200, 50, 50);
  fix= createSprite(200,200,20,20);
  fix.shapeColor="green";
  mov.shapeColor="green";
}

function draw() {
  background(0);  
  mov.y=World.mouseY;
  mov.x=World.mouseX;
  console.log(mov.x-fix.x)
  console.log(mov.width/2+fix.width/2);
  if(mov.x-fix.x<mov.width/2+fix.width/2&&fix.x-mov.x<mov.width/2+fix.width/2
    &&
    )
  {
    fix.shapeColor="red";
    mov.shapeColor="red";
  }
  else
  {
    fix.shapeColor="green";
    mov.shapeColor="green";
  }

  drawSprites();
}