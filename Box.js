class Box
{
    constructor(x,y, width, height )
    {
        var options = {'isStatic': false ,'restitution': 1.0, 'friction' : 1.0};

        this.bodyX = x;
        this.bodyY = y;
        this.bodyW = width;
        this.bodyH = height;
        
        this.body = Bodies.rectangle(this.bodyX,this.bodyY,this.bodyW, this.bodyH , options);
        World.add(world, this.body);
    }
    
   display()
    {
        if(this.body.speed < 3.9)
        { 
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x,this.body.position.y,this.bodyW,this.bodyH);
        }
        else{
            World.remove(world,this.body);
        }
    
    }
   
    
  
}

