
var counter = 60;
var followCam;
var randBuildings = 0;
var building1,building2,building3,building4,building5,building6,building7;
var concreate;
var rand;
var theBuilding;
var buildings;

var manWalk;
var movex,movey;
var randPos;
var buildRows;

var arrow,arrowIMG;
var work,workIMG;
var workx ,worky ;

var speed = "normal";
var npc1;
var npc2;
var npc3;
var npc4;
var npc5;
var npc6;
var npc7;
var npc8;
var npc9;
var npc10;

var npc11;
var npc12;
var npc13;
var npc14;
var npc15;
var npc16;
var npc17;
var npc18;
var npc19;
var npc20;

var npc21;
var npc22;
var npc23;
var npc24;
var npc25;

var gameState = "Menu";

var play;
var fadeIMG;


//var home;
//2300,2800

function preload()
{
  building1  = loadImage("image/Building1.PNG");
  building2 = loadImage("image/Building2.PNG");
  building3 = loadImage("image/Building3.PNG");
  building4 = loadImage("image/Building4.PNG");
  building5 = loadImage("image/Building5.PNG");
  building6 = loadImage("image/Building6.PNG");
  building7 = loadImage("image/Building7.PNG");
  workIMG = loadImage("image/Work1.PNG");
  manWalk = loadAnimation("MrMan/MrMan1.PNG","MrMan/MrMan2.PNG","MrMan/MrMan1.PNG");
  fadeIMG = loadImage("image/Faded.PNG");
}



function setup() {
  createCanvas(1600,648);


  

  randPos = Math.round(random(1,6))
  buildingPositions();

  randPos = Math.round(random(1,7)); 
  concreate = loadImage("image/Concrete.PNG");

  rand = Math.round(random(0,6));
  theBuildImages = [building1,building2,building3,building4,building5,building6,building7];
  
  
  work = createSprite(workx,worky,10,10);
  work.addImage(workIMG);
  work.scale= 0.2;
  followCam = createSprite(2300,2800,10,10);
  followCam.addAnimation("followCam",manWalk);
  followCam.scale = 0.03


  // home = createButton("Back");
  // home.mouseClicked(gameover);
  // home.position(700,270)
  // home.size(300,70)
  // home.style('font-size', '30px');
  // home.style('background-color', '#b2b2ff');


 play = createButton("Play");
 play.mouseClicked(playing);
 play.position(700,370)
 play.size(300,70)
 play.style('font-size', '30px');
 play.style('background-color', '#b2b2ff');
 
 startTimer = createButton("Count Down");
 startTimer.mouseClicked(beginTimer); 

function playing()
{
  gameState = "Play"
  interval = setInterval(counting, 1000);
}
function gameover()
{
  gameState = "Menu"
}



 function counting()
 {
   counter = counter - 1;
 }
 function beginTimer()
 {
  interval = setInterval(counting, 1000);

 }
 
buildRows = createGroup();


//water1 = new WaterBoy(2300,2800,50,50,buildRows,followCam,speed);
//map1 = new MapSeller(2300,2800,50,50,buildRows,followCam,work)
npc1 = new npc(2500,2900,50,50,work);
npc2 = new npc(2600,3000,50,50,work);
npc3 = new npc(2700,3100,50,50,work);
npc4 = new npc(2800,4000,50,50,work);
npc5 = new npc(2900,3200,50,50,work);
npc6 = new npc(3100,3900,50,50,work);
npc7 = new npc(4200,3900,50,50,work);
npc8 = new npc(3300,3200,50,50,work);
npc9 = new npc(3400,3700,50,50,work);
npc10 = new npc(3500,3800,50,50,work);

npc11 = new npc(1400,2900,50,50,work);
npc12 = new npc(1300,1900,50,50,work);
npc12 = new npc(1200,1900,50,50,work);
npc13= new npc(1100,5900,50,50,work);
npc14 = new npc(190,1900,50,50,work);
npc15 = new npc(1700,1900,50,50,work);
npc16 = new npc(1200,8900,50,50,work);
npc17 = new npc(1900,5900,50,50,work);
npc18 = new npc(1500,1900,50,50,work);
npc19 = new npc(1800,600,50,50,work);
npc20 = new npc(1200,900,50,50,work);

npc21 = new npc(400,2900,50,50,work);
npc22 = new npc(400,2960,50,50,work);
npc23 = new npc(9400,2200,50,50,work);
npc24 = new npc(400,2100,50,50,work);
npc25 = new npc(9400,100,50,50,work);


rows(); 

}



function draw() {

  background(0,0,26);
  frameRate(60);
  //scale(1.9)
 
  //,camera.x -800,camera.y-1200
  //counter = 60;


if (counter <= 0)
{
  gameState = "EndLost"
}
  

if(gameState === "EndLost")
{
push();
textSize(80); 
text(" You Lost :( ",camera.x - 170,camera.y +80);
pop();
}



  if(gameState === "Menu")
  {
    //home.hide();
    play.show();
    
    
  }
// doing menu and endwon

console.log(gameState);

  if(followCam.isTouching(work))
  {
    gameState = "EndWon";
    followCam.y = followCam.y - 20;
    followCam.x = followCam.x - 20;
    push(); 
    pop();
  } 


if(gameState === "EndWon")
{
  counter = "YAY!";
  play.hide();
  //home.show();
  textSize(80); 
  text(" You Won (: ",camera.x - 170,camera.y +80);
}







  if(gameState === "Play")
  {
    play.hide();
   // home.hide();
   // buildRows.collide(followCam);
    followCam.collide(buildRows)
    push();

  
    //followCam.x = 300;
    //followCam.y =2800;
    strokeWeight(4);
    stroke(0,45,250)
    
    pop();
     drawSprites();
     followingCam();
   // water1.display();
   npc1.display();
   npc2.display();
   npc3.display();
   npc4.display();
   npc5.display();
   npc6.display();
   npc7.display();
   npc8.display();
   npc9.display();
   npc10.display();
   
   npc11.display();
   npc12.display();
   npc13.display();
   npc14.display();
   npc15.display();
   npc16.display();
   npc17.display();
   npc18.display();
   npc19.display();
   npc20.display();
   
   npc21.display();
   npc22.display();
   npc23.display();
   npc24.display();
   npc25.display();
  }


  buildRows.collide(followCam);

  if(counter <1)
  {
    counter = 0;
    clearInterval(interval);
    

  }

  
  push();
  textSize(50)
  text(counter,camera.x-750,camera.y -250,10);
  //counter,50,-10,10
  pop();

  text("Press Arrow Keys",-90,-80,10);
  strokeWeight(90);









  camera.position.x=followCam.x;
  camera.position.y=followCam.y; 


  buildings.debug = true;
  followCam.debug = true;
  //map1.display();
}




function rows()
{
  

  for (v = 10; v<7000; v= v+ 450)
  {
      for(i = 90; i < 7000; i = i + 900)
      {
        
        // stroke(14,76,35)
        // strokeWeight(4);
        // noFill();
       
        buildings = createSprite(i,v,50,50);
        buildings.scale = 3;
        
        switchBuildings();
        buildRows.add(buildings);
      
  }

  
  }

}
function followingCam()
{
  if (keyIsDown(UP_ARROW))
  {
    if(speed === "normal"){
    followCam.y = followCam.y- 15;
  } 

  if(speed === "faster")
  {
    followCam.y = followCam.y- 40;
  }

  }
  if (keyIsDown(DOWN_ARROW))
  {
    if(speed === "normal")
    {
    followCam.y = followCam.y+ 15; 
    } 

  if(speed === "faster")
  {
    followCam.y = followCam.y- 40;
  }

  }

  if (keyIsDown(LEFT_ARROW))
  {
    if(speed === "normal"){
    followCam.x = followCam.x- 15; 
   }
   if(speed === "faster")
   {
    followCam.y = followCam.y- 40;
   }

  }

  if (keyIsDown(RIGHT_ARROW))
  {
    if(speed === "normal"){
    followCam.x = followCam.x + 15; 
  }
  if(speed === "faster")
  {
    followCam.y = followCam.y- 40;
  }

  }
   
}
function switchBuildings()
{


 randBuildings = Math.round(random(1,6));

 switch(randBuildings)
 {
   case 1:
     buildings.addImage(building1);
     break;
   case 2:
     buildings.addImage(building2);
     break;
     case 3:
      buildings.addImage(building3);
      break;
       case 4:
      buildings.addImage(building4);
      break;
       case 5:
      buildings.addImage(building5);
      break;
       case 6:
      buildings.addImage(building6);
      break; 
  





     
 }
 console.log(buildings);


}
function buildingPositions()
{
//2300,2800
//2400,100
//1450,700
//450,900
//5100,1800
//5900,800

switch(randPos)
{

case 1:
workx = 2400;worky =100;
break;

case 2:
  workx = 1450;worky =700;
break;

case 3:
  workx =450 ;worky =900;
break;

case 4:
  workx =5100;worky =1800;
break;

case 5:
  workx =5900 ;worky =800;
break;

case 6:
  workx = 2300;worky =2800;
break;


}



}
//function mouseClicked()
// {
//   console.log("working");

//    line(followCam.x,followCam.y,work.x,work.y);
// }



