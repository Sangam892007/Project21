var bullet,wall;
var speed,weight;
var Damage;
var thickness  

function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83);

  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(100, 200, 40, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = "White";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "Grey";
  
  
}

function draw() {
  background(0);  
  if (hasCollided(bullet,wall)){
    Damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    bullet.velocityX = 0;
    if (Damage < 10  ){
    wall.shapeColor = "Green";
   }
    if (Damage >= 10 ){
    wall.shapeColor = "Red";
   }
  }
  else {
    console.log("Did not Collide");
  }
  drawSprites();
}