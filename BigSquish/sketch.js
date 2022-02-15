let character = [];
let spriteSheet;
let count = 10;
let sx = 0;
let startTime, score;
let gameState = 'wait';

//Spritesheet it 1024x512 pixels... 256x256 per bug
function preload() {
  spriteSheet = loadImage("BugSheet3.png");
}

function setup() {
  createCanvas(800, 800);
  imageMode(CENTER);
  score = 0;
  for(i = 0; i < count; i++){
    character[i] = new Character(spriteSheet, random(50, 550), 
    random(50, 550), random(1, 5), random([-1, 1]));
  }
}

function timer() {
  return int((millis() - startTime) / 1000);
}

function mousePressed() {
  for (i = 0; i < count; i++) {
    character[i].grab();
  }
}

function draw() {
  background(245);
  textSize(30);
  if (gameState == 'wait') {
    text("CLICK ANYWHERE TO START", 180, height / 2);
    if (mouseIsPressed) {
      startTime = millis();
      gameState = 'playing';
    }
  }
  else if (gameState == 'playing') {
    for(i = 0; i < count; i++){
      character[i].draw();
    }
    let time = timer();
    let totalTime = 10;
    text("TIME: " + (totalTime - time), 10, 30);
    text("SCORE: " + score, 10, 60);
    //Spawn more bugs
    if(score == 10 || score == 20) {
      for(i = 0; i < count; i++){
        character[i].draw();
      }
    }
    if (time >= 10) {
      gameState = 'end';
    }
  }
  else if (gameState == 'end') {
    text("GAME OVER", 260, 300);
    text("CLICK ANYWHERE TO RESTART", 150, 400);
    if (mouseIsPressed){
      startTime = millis();
      gameState = 'playing';
      setup();
    }
  }
}

class Character {
  constructor(spriteSheet, x, y, speed, move) {
    this.spriteSheet = spriteSheet;
    this.sx = 0;
    this.x = x;
    this.y = y;
    this.move = 0;
    this.facing = move;
    this.speed = speed;
    this.move = move;
    this.grabbed = false;
  }

  draw() {
    push();
    translate(this.x, this.y);
    scale(this.facing, 1);
    rotate(PI / 2);

    if(this.move == 0) {
      image(this.spriteSheet, 0, 0, 150, 150, 0, 256, 256, 256);
    }
    else {
      image(this.spriteSheet, 0, 0, 150, 150, 256 * (this.sx + 1), 0, 256, 256);
    }

    if (frameCount % 12 == 0) {
      this.sx = (this.sx + 1) % 3;
    }
    this.x += this.speed * this.move;

    if(this.x < 30) {
      this.move = 1;
      this.facing = 1;
    }
    else if(this.x > width - 30) {
      this.move = -1;
      this.facing = -1;
    }
    pop();
  }

  go(direction) {
    this.move = direction;
    this.facing = direction;
    this.sx = 2;
  }

  stop() {
    this.move = 0
  }

  // Squishes bug
  grab() {
    if (mouseX > this.x - 40 && mouseX < this.x + 40 && mouseY > this.y - 40 && mouseY < this.y + 40){
      this.stop();
      this.grabbed = true;
      score++;
    }
  }
}
