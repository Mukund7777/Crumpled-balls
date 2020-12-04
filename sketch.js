
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(600,200,15,10000000000000000000005);
	box1 = new Box(1200,675,200,20);
	box2 = new Box(1110,625,20,100);
	box3 = new Box(1290,625,20,100);
	ground = new Ground(800,690,1600,25);

	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
 // ellipseMode(CENTER);
  background(0);
  
  Engine.update(engine);

  //drawSprites();
  ball.display();
  box2.display()
  box3.display()
  box1.display()
  ground.display();
}



