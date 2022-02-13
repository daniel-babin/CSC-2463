//Universal variables
let spriteSheet;
let bug = [];
let walk;
let count = 10;

function preload() //Spritesheet it 512x512 pixels... 256x256 per bug
{
  spriteSheet = loadImage("BugSheet.png");
}

function setup()
{
  createCanvas(600, 600);
  imageMode(CENTER);
}

function draw()
{
  //background(255, 255, 255);
  image(spriteSheet, 300, 300, 300, 300, 0, 0, 256, 256);
}
