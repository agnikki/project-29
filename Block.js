  
class Block {
    constructor(x, y, width, height,color) {
        var options = {
            'restitution':0.2,
            'friction':0.6,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color = color;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill(this.color)
        rect( 0,0, this.width, this.height);
        pop();
      }
    }