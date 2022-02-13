//Universal variables
let spriteSheet;
let bug = [];
let walk;
let count = 10;

function preload() //Spritesheet it 512x512 pixels... 256x256 per bug
{
  spriteSheet = loadImage("BugSheet");
}

function setup()
{
  createCanvas(600, 600);
  imageMode(CENTER);
}

function draw();
{
  //background(255, 255, 255);
  image(spriteSheet, 0, 0, 200, 200);
}
