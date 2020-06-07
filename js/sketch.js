const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper;


function setup(){
    
    var canvas = createCanvas(800,400);
    
    engine = Engine.create();
    world = engine.world;
    trash = new Paper(100,200,50,50)
    ground = new Ground(400,380,900,20)
    dustbinObj1 = new Dustbin(595,300,20,140)
    dustbinObj2 = new Dustbin(655,362,100,18)
    dustbinObj3 = new Dustbin(715,300,20,140)
   // Engine.run(engine)
    //console.log(paper)
}

function draw(){
    background(0);
   Engine.update(engine);
    ground.display();
    trash.display();
    dustbinObj1.display();
    dustbinObj2.display();
    dustbinObj3.display();

}

function keyPressed(){
    if(keyCode === 32){
     //console.log(trash)
        Matter.Body.applyForce(trash.paper,trash.paper.position,{x:80,y:-200})
    }
}