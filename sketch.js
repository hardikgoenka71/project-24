const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
var engine, world, object;
var box1,box2,box3,paper;
function setup() {
  createCanvas(1350, 400);
  engine=Engine.create(); // create engine
  world=engine.world;     // create world in the engine
  /* */// adding body to the world
  ground=new Ground(800,height,1600,10)
 box1=new Box(1050,385,150,15);
 box2= new Box(1130,342,15,100);
 box3= new Box(980,342,15,100);
 paper=new Paper(100,10,80);
 
}

function draw() {
  background("black");
  //fill("lime");
  Engine.update(engine);// update the engine
  
  ground.display();
  box1.display();
  box2.display();
  
  box3.display();
  paper.display();
  
  
  if (keyDown(UP_ARROW)) {

  Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-10});

  }
    
}