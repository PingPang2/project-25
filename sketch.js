
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,bin2,bin3
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	bin1 = new Dustbin(650,650,150,150);
	bin2 = new Dustbin(580,650,20,300);
	bin3 = new Dustbin(720,650,20,200);

	ground = new Ground(400,670,800,20);

	paper = new Paper(100,600,40,40);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
paper.display();
ground.display();
bin1.display();


  drawSprites();
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

 }
}



