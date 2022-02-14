//Universal variables
let character;
let spriteSheet;
let count = 10;
let sx = 0;

function preload() //Spritesheet it 1024x512 pixels... 256x256 per bug
{
  spriteSheet = loadImage("BugSheet3.png");
}

function setup()
{
  createCanvas(600, 600);
  imageMode(CENTER);
  character = new Character(spriteSheet, random(50, 550), random(50, 550));
}

function keyPressed(){
  if (keyCode == RIGHT_ARROW){
    character.go(1);
  }
  else if (keyCode = LEFT_ARROW){
    character.go(-1);
  }
}

function keyReleased() {
  character.stop();
}

function draw()
{
  background(245);
  character.draw();
}

class Character {
  constructor(spriteSheet, x, y) {
    this.spriteSheet = spriteSheet;
    this.sx = 0;
    this.x = x;
    this.y = y;
    this.move = 0;
    this.facing = 1;
  }

  draw() {
    push();
    translate(this.x, this.y);
    scale(this.facing, 1);

    if(this.move == 0) {
      image(this.spriteSheet, 0, 0, 200, 200, 0, 0, 256, 256);
    }
    else {
      image(this.spriteSheet, 0, 0, 200, 200, 256 * (this.sx + 1), 0, 256, 256);
    }

    if (frameCount % 12 == 0) {
      this.sx = (this.sx + 1) % 3;
    }
    this.x += 2 * this.move;
    pop();
  }

  go(direction){
    this.move = direction;
    this.facing = direction;
    this.sx = 2;
  }

  stop() {
    this.move = 0
  }
}

