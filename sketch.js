var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxBottom,boxLeft,boxRight;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	 boxBottom=createSprite(width/2,height-50,200,20);
	boxBottom.shapeColor=color("red");

	 boxLeft=createSprite(width/2-95,height-95,20,100);
	boxLeft.shapeColor=color("red");

	 boxRight=createSprite(width/2+95,height-95,20,100);
	boxRight.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:-1, isStatic:true});
	World.add(world, packageBody);
	World.add(world, helicopterSprite);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 
	 boxBottom= Bodies.rectangle(width/2, height-50, 200, 20 , {isStatic:true} );
	 World.add(world,boxBottom);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



