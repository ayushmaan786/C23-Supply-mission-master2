class Box{
    constructor(x,y,widht,height){
        this.widht=widht
        this.height=height
        var ball_options ={
            isStatic:true
        }
        
        this.body = Bodies.rectangle(x,y,widht,height,ball_options);
        World.add(world,this.body);
       
    
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle);
        rectMode(CENTER);
        fill("white")
    rect(0,0,this.widht,this.height);
pop()
    }
}