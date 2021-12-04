var SpaceCraft , SpaceCraftImg ,ex,explosion, missionFail,pluto,txt;
    var shield, shieldImg;
    var space , spaceImg , Earth , EarthImg;
    var Star , StarImg;
    var meteors ,meteorImg;
    var StarGroup , meteorGroup;
    var button,buttonImg;
    var stage1;
    var gameState=1;
    var success; 
    var pluto,note;
    var a,b;
    
    
function preload(){

  spaceImg = loadImage("Images/space.jpg");
  SpaceCraftImg = loadImage("Images/Rocket.png");
  explosion=loadImage("Images/ex.png");
  EarthImg = loadImage("Images/earth.jpg");
  shieldImg = loadImage("Images/shield.png");
  meteorImg = loadImage("Images/Metrorite.png");
  starImg = loadImage("Images/7.png");
  EarthImg = loadImage("Images/earth.jpg");
  buttonImg = loadImage("Images/play.png");
  stage1=loadImage("Images/1.png");
  missionFail=loadImage("Images/fail.jpg");
  plutop = loadImage("Images/plutop.png");
  txt=loadImage("Images/TXT.png")
  success=loadImage("Images/13.png");
  a=loadImage("Images/FINAL.png")
}
function setup(){

  createCanvas(1200,800);
 
 space = createSprite(600, 400);
space.addImage(stage1);
space.scale=0.5;
 
button=createSprite(300,500);
button.addImage(buttonImg);
button.scale=0.5;

shield = createSprite(600,500);



 StarGroup = new Group();
 meteorGroup = new Group();


}
function draw(){
  background(0);
 
    
  
 shield.visible=false;
  if (mousePressedOver(button)){
    text("hii",100,100);
    
    gameState=2;
   
    shield.addImage(shieldImg);
    shield.scale = 0.5;
      }
      spawnStars();
      spawnMeteors();
      spaceShip();
      planetpluto();
      missionAcomplish();
 
  drawSprites();

}

function spaceShip(){
  if (gameState===2){

    console.log("in spaceShip");
    
    space.addImage(spaceImg);
    space.scale=1;
      space.velocityY=4;// this command 
    
     button.visible= false;
     
    
      if(space.y > 600){
  
        space.y = 100;
    
    
      }
    

    
  
     

  SpaceCraft = createSprite(600,600);
  SpaceCraft.addImage("in",SpaceCraftImg);
  SpaceCraft.scale = 0.6;
  SpaceCraft.setCollider("circle",0,0,150);
  SpaceCraft.debug = false;

  
  if(StarGroup.collide(SpaceCraft) ){

   
    ex=createSprite(600,600);
    ex.addImage(explosion);
    gameState=3;
    space.velocityY=0;
    space.addImage(missionFail);
    space.y=100;
    space.scale=0.5;

    } 


  if(meteorGroup.isTouching(shield)){
  
    meteorGroup.bounceOff(shield);
   
    
 }

 if(meteorGroup.isTouching(StarGroup)){

  meteorGroup.bounce(star);


 }

 if(StarGroup.isTouching(meteorGroup)){

  StarGroup.bounce(meteorGroup);

}

if(meteorGroup.isTouching(meteorGroup)){

  meteorGroup.bounce(meteorGroup);

}

if(StarGroup.isTouching(StarGroup)){

  StarGroup.bounce(StarGroup);

}

  shield.x = mouseX;
  shield.y = mouseY;

 

 if(StarGroup.isTouching(shield)){

  
  StarGroup.bounceOff(shield);
 
  


 }

 

 if(shield.isTouching(SpaceCraft)){
  
  shield.x  =600;
  shield.y  =600;
  shield.visible = false;

 }else{

  shield.visible = true;

 }
 
 
  
}
}
function spawnStars(){

  if(frameCount % 20 ===0 && gameState===2 ){

    star = createSprite(50,0);
    star.addImage(starImg);
    star.scale = 0.2;    
    star.setCollider("circle",0,0,50);
    star.debug = false;
    
    star.velocityX = -(6+frameCount/60);
    star.velocityY = (13+frameCount/60);
    star.x = Math.round(random(400,1000));
    StarGroup.add(star);
    star.lifetime=100;
   

  }



}


function spawnMeteors(){

  if(frameCount % 80 === 0 && gameState===2 ){

    meteors = createSprite(0,0);
    meteors.addImage(meteorImg);
    meteors.velocityX = (-5+frameCount/100);
    meteors.velocityY = (6+frameCount/100);
    meteors.scale = 0.9;
    meteors.setCollider("circle",0,0,80);
    meteors.debug = false;
    meteors.x = Math.round(random(0,800));
    meteorGroup.add(meteors);
    meteors.lifetime=750;



  }


}
function planetpluto(){
if(frameCount===300 && gameState===2){
  

  console.log(pluto);
 pluto=createSprite(100,100);
pluto.addImage(plutop);
 note=createSprite(600,300);
note.addImage(txt);
note.scale=0.5;

}

}
function missionAcomplish(){
if(frameCount===500 && gameState===2){
gameState=4;
space.velocityY=0;
space.addImage(success);
space.scale=1.3;
space.y=400;

b=createSprite(600,600);
b.addImage(a)
b.scale=0.6;

note.visible=false;
space.depth=SpaceCraft.depth+1;
pluto.visible=false;
}
}