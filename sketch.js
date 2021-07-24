
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var top_Wall;
var left;
var right;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	Engine.run(engine);
  
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
   
	}
ball = Bodies.circle(400,680,20,ball_options);
    World.add(world,ball);


	Matter.Bodies.circle(200,100,50,);
		  
	ground =new Ground(400,700,800,20);
	right =new Ground(700,700,20,200);
	left =new Ground(500,700,20,200);
	top_wall = new Ground(400,50,800,20);
	 

	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ellipse(ball.position.x,ball.position.y,20);


	ground.show();
	top_wall.show();
	left.show();
	right.show();
	Engine.update(engine);

	


  drawSprites();
  keyPressed();
  
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0.,y:0},{x:0.5,y:0});
	}
}

