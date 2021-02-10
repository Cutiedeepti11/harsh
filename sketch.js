var mov ,fix;
var car , van;
function setup() {
  createCanvas(800,400);
  mov=createSprite(400, 200, 50, 50);
  fix= createSprite(200,200,20,20);
  fix.shapeColor="green";
  mov.shapeColor="green";
  car =createSprite(100,150,20,50);
  van =createSprite(600,150,30 ,60);
  car.velocityX=2;
}

function draw() {
  background(0);  
  mov.y=World.mouseY;
  mov.x=World.mouseX;
  console.log(mov.x-fix.x)
  console.log(mov.width/2+fix.width/2);
  
  if(isTouching(mov,fix))
  {
    fix.shapeColor="red";
    mov.shapeColor="red";
  }
  else
  {
    fix.shapeColor="green";
    mov.shapeColor="green";
  }
  BounceOff(car,van);
  drawSprites();
}

function isTouching(ob1,ob2)
{
  if(ob1.x-ob2.x<ob1.width/2+ob2.width/2&&ob2.x-ob1.x<ob1.width/2+ob2.width/2
    &&ob1.y-ob2.y<ob1.height/2+ob2.height/2&&ob2.y-ob1.y<ob1.height/2+ob2.height/2)
  {
    return true;
  }
  else{
      return false;
  }
}

function BounceOff(ob1,ob2)
{
    if(ob1.x-ob2.x<ob1.width/2+ob2.width/2&&ob2.x-ob1.x<ob1.width/2+ob2.width/2)
    {
        ob1.velocityX=ob1.velocityX*(-1);
        ob2.velocityX=ob2.velocityX*(-1);
    }
}