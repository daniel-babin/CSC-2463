let character;

function preload() {
  spriteSheet = loadImage("Viking.png");
}

function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);

  character = new CharacterData(spriteSheet, 0, 300);
}

function keyPressed() {
  if(keyCode == RIGHT_ARROW) {
    character.go(1);
  }
  else if(keyCode == LEFT_ARROW) {
    character.go(-1);
  }
}

function keyReleased() {
  character.stop();
}

function draw() {
  background(255);
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

    }
  }
}
