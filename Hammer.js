class Hammer{
    constructor(x,y,width,height)
    {
        var options = {
            density:2,
            friction:1.0,
            restitution:0.5
        }

       this.body = Bodies.rectangle(x,y,width,height,options);
       World.add(world,this.body) ;
       this.width=width;
       this.height = height;
      
       //console.log(this.body);

    }

    display()
    {
          this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        
         rectMode(CENTER);
         fill("lavender");
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}