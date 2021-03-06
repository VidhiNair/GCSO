var car,wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  car = createSprite(400, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  speed=random(55,900);
  weight=random(400,1500);
  car.velocityX = speed;
  
  wall.shapeColor = "pink"
  car.shapeColor = "purple"
}

function draw() {
  background("blue");  
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed/22500;
    if(deformation>180){
      car.shapeColor("red");
    }
    if(deformation>180 && deformation<100){
      car.shapeColor=("yellow");
    }
    if(deformation>100){
      car.shapeColor=("green");
    }
  }
  drawSprites();
}
