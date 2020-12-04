var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
var w1, w2, w3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  helicopterIMG = loadImage("helicopter.png");
  packageIMG = loadImage("package.png");
}

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER);

  //   w1 = createSprite(width / 2 - 100, 610, 20, 100);
  //   w1.shapeColor = "red";

  //   w2 = createSprite(width / 2 + 100, 610, 20, 100);
  //   w2.shapeColor = "red";

  //   w3 = createSprite(width / 2, 650, 200, 20);
  //   w3.shapeColor = "red";
  console.log("hello");
  packageSprite = createSprite(width / 2, 80, 10, 10);
  packageSprite.addImage(packageIMG);
  packageSprite.scale = 0.2;

  helicopterSprite = createSprite(width / 2, 200, 10, 10);
  helicopterSprite.addImage(helicopterIMG);
  helicopterSprite.scale = 0.6;

  groundSprite = createSprite(width / 2, height - 35, width, 10);
  groundSprite.shapeColor = color(255);

  engine = Engine.create();
  world = engine.world;

  var packageOptions = { restitution: 0, isStatic: true };
  packageBody = Bodies.circle(width / 2, 200, 25, packageOptions);
  World.add(world, packageBody);

  //Create a Ground
  ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
  World.add(world, ground);

  w1 = new Block(width / 2 - 100, 610, 20, 100);
  w2 = new Block(width / 2 + 100, 610, 20, 100);
  w3 = new Block(width / 2, 650, 200, 20);
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  w3.display();
  w1.display();
  w2.display();

  keyPressed();
  drawSprites();
}

function keyPressed() {
  if (keyDown("DOWN_ARROW")) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}
