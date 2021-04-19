
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,crumpledPaper	;
//var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject = new Ground(width/2,670,width,20);
	dustbinObj = new Dustbin(1200,650);
	crumpledPaper = new Paper(100,100,50)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(230);
 
  keyPressed();

  groundObject.display();
  dustbinObj.display();
  crumpledPaper.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:285,y:-285})
		
	}
}