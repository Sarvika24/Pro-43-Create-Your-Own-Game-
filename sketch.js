var bird ; 
var pipes = [];
var birdImg ;

function preload(){
  birdImg = loadImage("bird.png");
}

function setup(){

createCanvas(500,500);
bird = new Bird();


}

function createPipe(){
    if (frameCount % 100 == 0){
      var pipe = createSprite(480 , 420 , 30 , 150) ; 
      pipe.velocityX = -3 ; 
      pipe.shapeColor = "green" ;
  
  
     }
   }

   function createPipe2(){
    if (frameCount % 100 == 0){
      var pipe2 = createSprite(480 , 80 , 30 , 150) ; 
      pipe2.velocityX = -3 ; 
      pipe2.shapeColor = "green" ;
  
  
     }
   }

function draw(){

    background(135, 206, 250);

    
    bird.show();
    bird.update();
drawSprites();   
createPipe();
createPipe2();


}


  
  
   
  
  
  
  



function keyPressed(){
    if(key === ' '){
        bird.up();
        console.log("SPACE");
    }
}