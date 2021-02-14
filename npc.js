class npc
{
    
   

    constructor(x,y,width,height,TBuild)
    {
        this.building = createSprite(x,y,width,height);
        this.TBuild = TBuild;
    }
  
    

    display()
    {
        

       

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

   

   

}





  