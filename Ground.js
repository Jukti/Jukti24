class Ground{
    constructor(x,y){
       var options = 
       {
           isStatic:true
       } 
       this.body = Bodies.rectangle(x,y,width,height,options);
       World.add(world,this.body) ;
       this.width=800;
       this.height = 40;
      
    }

    display(){

        var pos = this.body.position;
        fill("brown");
        rect(pos.x , pos.y , this.width , this.height);
    }
}