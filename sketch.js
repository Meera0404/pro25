
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var p,pImg;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	p            =new paper(500,500);
	groundObject =new ground(width/2,670,width,20);
	dustbinObj   =new dustbin(1200,650);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  p.display();
  groundObject.display();
  dustbinObj.display();

}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		Body.applyForce(p.body, p.body.position, { x: 100, y: -130 });
	}
}


