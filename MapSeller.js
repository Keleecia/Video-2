/*class MapSeller
{
    
    constructor(x,y,width,height,TBuild,player,work,refreshLine)
    {
        this.building = createSprite(x,y,width,height);
        this.TBuild = TBuild;
        this.image = image;
        this.player = player;
        this.work = work;
        this.image = loadImage("image/waterBottle.png");
        this.powerGoUP = 330;
        this.refreshLine = null;
       this.refreshLine = 0;

    }

    TestFunction(){
      stroke(0,250,250)
      strokeWeight(5)
     
      console.log(this.speed);
    }
  
   
    display()
    {

      //if refreshLine
     // this.building.addEventListener("click",this.TestFunction);
     
        //     console.log(this.powerGoUP)
         

         
    if(mousePressedOver(this.building))
    {
      strokeWeight(15);
      var refreshLine = 1;
       line(this.player.x,this.player.y,work.x,work.y);  
      this.TestFunction();
    }
    if(refreshLine != 0)
    {
      console.log(refreshLine)
      line(this.player.x,this.player.y,work.x,work.y);  
    }
   
        //  //
        // if (onmouseLeave ){

        // console.log("I'm in mouse leave");












         //this.TestFunction();
          //     this.TestFunction();
          //    stroke(0,250,250)
          //    strokeWeight(5);
          //    line(this.player.x,this.player.y,work.x,work.y);
         // this.powerGoUP = this.powerGoUP - 20;
         // this.powerGoUP = this.powerGoUP - 20;
         // this.powerGoUP = this.powerGoUP - 20;
          //onsole.log(this.speed);
         
         

        




        this.powerUp(this.image);

         if(frameCount%100 ===0){
           var randomMove = Math.round(random(1,5));
         }

         this.building.collide(this.TBuild);
         switch(randomMove)
         {
         case 1:
           this.building.velocity.x = 1;
           this.building.velocity.y = 0;
         break;
    
         case 2: 
         this.building.velocity.x = -1;
         this.building.velocity.y = 0;
         break;
       
         case 3:
            this.building.velocity.y = 1;
            this.building.velocity.x = 0;
           break;
       
           case 4:
            this.building.velocity.y = -1
            this.building.velocity.x = 0;
         break;
         }
        
         
      
    }
     

    giveWater()
    {
    } 

    powerUp()
    {  

    image(this.image,this.player.x,this.player.y + this.powerGoUP ,50 ,50);

   // console.log(this.player.y + this.powerGoUP +" powerup");
   // console.log(this.player.y +" followcam");
    
 
    if(this.player.y +this.powerGoUP < this.player.y)
    {
    this.powerGoUP = 0;
    }

  
  }
    
    
  

}
// function mouseClicked()
// {
  
//     if(mouseClicked(this.building))
//     {
//       push();
//       scale(1.5);
//       text("Press Space", this.player.x -790,this.player.y -950);
//       pop();

//        stroke(0,309,500);
//        strokeWeight(5);
//        line(this.player.x,this.player.y, this.work.x,this.work.y);
//     }


*/
   
