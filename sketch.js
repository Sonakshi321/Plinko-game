const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;

var text1,text10,text9,text8,text7,text6,text5,text4,text3,text2;
function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  // CreateCanvas
  var canvas = createCanvas(800,800);


  //Creating Engine and etc
  engine = Engine.create();

  //Adding World
  world = engine.world;

//Create ground
  ground = new Ground (width/2,height,width,20);


  //For Loops:

//For loop for k
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

//For loop for j
    for (var j = 75; j <=width; j=j+50) 
    {
     plinkos.push(new Plinko(j,75));
    }

//For loop for j2
    for (var j = 50; j <=width-10; j=j+50) 
    {
     plinkos.push(new Plinko(j,175));
    }
//For loop for j3
     for (var j = 75; j <=width; j=j+50) 
    {
    plinkos.push(new Plinko(j,275));
    }

//For loop for j4
     for (var j = 50; j <=width-10; j=j+50) 
    {
    plinkos.push(new Plinko(j,375));
    }

    

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);

 //Update Engine
  Engine.update(engine);

 // score
  textSize(38)
  text("Score : "+score,20,30);

//score 500 #1
textSize(25)
   text1=text(" 500 ",20,520);

//score 500 #2
  text2=text("500",100,520);

  //score 500 #3
  text3=text("500",180,520);

  //score 500 #4
 text4=text("500",260,520);
  
  //score 100 #5
  text5=text("100",340,520);

  //score 100 #6
  text6=text("100",420,520);

  //score 100 #7
  text7=text("100",500,520);

  //score 200 #8
  text8=text("200",580,520);

  //score 200 #9
  text9=text("200",660,520);

  //score 200 #10
  text10=text("200",740,520);

  



 text(mouseX+","+ mouseY,mouseX,mouseY);

  //For Loop with plinko legnth and variable i
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   //Display forloop for j
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

   //Display for loop for k
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   scoreC();
}

function mouseClicked(){

  particles.push(new Particle(mouseX,mouseY));
}

function scoreC(){

  BounceOff(particles,text1);
}