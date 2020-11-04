
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new roof(400,150,500,20);
	//Create the Bodies Here.


	Engine.run(engine);

	bob1=new BOB(200,550,50,50)
	bob2=new BOB(300,550,50,50)
	bob3=new BOB(400,550,50,50)
	bob4=new BOB(500,550,50,50)
	bob5=new BOB(600,550,50,50)
	chain=new Rope(BOB.body,roof.body)
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1=new(bobObject1.body,roofObject.body,-bobDiameter*2,0)
  ground.display();
  drawSprites();
 
}



