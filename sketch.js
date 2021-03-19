
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
  Engine.run(engine);
  
  hammer = new Hammer(400,350,100,20);
  ground = new Ground(400,460);
  stone = new Stone(400,420,80,80);
  rubber = new Rubber(250,450,100);
  sand = new Sand(100,450,2);
  iron = new Iron(300,400,50,40);
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
  sand.display();
  iron.display();
  
  drawSprites();
 
}



