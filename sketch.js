
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 //var bd=createSprite(20,20,50,40);
	 paper=new Paper(50,50,40);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  paper.display();
  
}



