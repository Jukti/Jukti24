class Iron {

    constructor(x,y,width,height){
        var options = {
            density :2,
            mass:2,
            friction:1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
    }

    display(){

        var pos = this.body.position;
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);

    }
}