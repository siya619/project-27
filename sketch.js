
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var log;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	log = new Log(810,260,300, PI/2);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  drawSprites();
 
}



