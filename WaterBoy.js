/*class WaterBoy
{
    
   

    constructor(x,y,width,height,TBuild,player,speed)
    {
        this.building = createSprite(x,y,width,height);
        this.TBuild = TBuild;
        this.image = image;
        this.player = player;
        this.speed = speed;
        this.image = loadImage("image/waterBottle.png");
        this.powerGoUP = 330;
      
    }
  
    

    display()
    {
        

        if(mousePressedOver(this.building))
        {
          
        this.giveWater();
       // this.powerGoUP = this.powerGoUP - 20;
       // this.powerGoUP = this.powerGoUP - 20;
       // this.powerGoUP = this.powerGoUP - 20;
        console.log(this.speed);

        }





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
    // console.log("Speed is up two percent");
    } 

    powerUp()
    {  
    image(this.image,this.player.x,this.player.y + this.powerGoUP ,50 ,50);
   // console.log(this.player.y + this.powerGoUP +" powerup");
   // console.log(this.player.y +" followcam");
    if(this.player.y +this.powerGoUP < this.player.y)
    {
     this.speed = "faster";
    this.powerGoUP = 0;
    }
  
     
  }
  

}


*/


  