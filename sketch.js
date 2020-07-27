
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,dustbl,dustbr,dustbb ;


 function preload(){

 }


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.

	paper = new Paper(100,550,70,{isStatic:false});
	World.add(world,paper);

   ground = new Ground(600,650,1200,30);
   World.add(world,ground);


	dustbb= new Dustbin(800, 650);
	dustbb.shapeColor=color("red");
	World.add(world,dustbb);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  paper.display();
  ground.display();
  dustbb.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-125});
	}
	

}
