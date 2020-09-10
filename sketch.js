
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

	
	
	//Create the Bodies Here.
	
	Roof1= new Roof(200,100,1200,30)
	Bobobject1 = new Bob(210,200,30)
	Bobobject2 = new Bob(230,200,30)
	Bobobject3 = new Bob(250,200,30)
	Bobobject4 = new Bob(270,200,30)
	Bobobject5 = new Bob(290,200,30)
	//rope1=new Rope(Bobobject1.body,Roof1.body,bobDiameter*2,0)
	//rope2=new Rope(Bobobject2.body,Roof1.body,bobDiameter*2,0)
	//rope3=new Rope(Bobobject3.body,Roof1.body,bobDiameter*2,0)
	//rope4=new Rope(Bobobject4.body,Roof1.body,bobDiameter*2,0)
//	rope5=new Rope(Bobobject5.body,Roof1.body,bobDiameter*2,0)

	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 
Roof1.display();
Bobobject1.display();
Bobobject2.display();
Bobobject3.display();
Bobobject4.display();
Bobobject5.display();

}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85});
		
	}
}



