class Dustbin {
    constructor(x,y,width,height){
        var options ={
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.dustbin = loadImage('dustbingreen.png')
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
         imageMode(CENTER);
         fill("White");
         image(this.dustbin,0,0,this.width,this.height)

        pop();
    }
}