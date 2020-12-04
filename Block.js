class Block {
  constructor(x, y, width, height) {
    this.body = Bodies.rectangle(x, y, width, height, { isStatic: true });
    World.add(world, this.body);

    this.height = height;
    this.width = width;
  }

  display() {
    push();
    fill("red");
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
