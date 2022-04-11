class Throw {
    constructor(x, y, width, height, boyAngle) {
      var options = {
        isStatic: false,
        restitution:0,
        friction:1, 
        density: 1.2
      };
      
      this.body = Bodies.circle(x, y, diameter, options);
      this.image = loadImage("./assets/stone.png");
      this.boyAngle = boyAngle;
      this.velocity = p5.Vector.fromAngle(boyAngle);
      World.add(world, this.body);
    }
  
     remove(index) {
      this.isRemoved = true;
      Matter.World.remove(world, this.body);
      delete boy[index];
    } 
  
   
  
    shoot(boyAngle) {
      this.velocity = p5.Vector.fromAngle(boyAngle + PI / 2);
      this.velocity.mult(55);
  
      Matter.Body.setVelocity(this.body, {
        x: this.velocity.x,
        y: this.velocity.y
      });
  
      Matter.Body.setStatic(this.body, false);
    }
  
    display() {
      var tmpAngle;
      if (this.body.velocity.y === 0) {
        tmpAngle = this.archerAngle + PI / 2;
      } else {
        tmpAngle = Math.atan(this.body.velocity.y / this.body.velocity.x);
      }
  
      Matter.Body.setAngle(this.body, tmpAngle);
  
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  