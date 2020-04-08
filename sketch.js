const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,box;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
 box = new Box(random(10,80),300,50,50);
  box2 = new Box(random(100,240),100,50,100)  

  box3 = new Box(random(10,15),300,50,50);
  box4 = new Box(random(100,200),100,50,100)

  box5 = new Box(random(10,40),300,50,50);
  box6 = new Box(random(100,20),100,50,100)

  box7 = new Box(random(150,80),300,50,50);
  box8 = new Box(random(100,340),100,50,100)

  box9 = new Box(random(105,50),300,50,50);
  box10 = new Box(random(100,40),100,50,100)









ground =new Ground(200,height,400,20)
}

function draw(){

    background(0);
    
    Engine.update(engine);
    


      box.disrect();
      box2.disrect();
      box3.disrect();
      box4.disrect();
      box5.disrect();
      box6.disrect();
      box7.disrect();
      box8.disrect();
      box9.disrect();
      box10.disrect();
    for(var i = 0;i<50;i++)
    //Engine.update(engine);
    
    ground.disrect();
}

